/**
 * DemoRecorder — programmatically records browser demos as MP4 videos.
 *
 * Orchestrates Playwright (browser control + video recording), a custom
 * cursor overlay, smooth bezier mouse paths, CSS zoom, and ffmpeg post-processing.
 */

import { chromium } from 'playwright';
import path from 'node:path';
import fs from 'node:fs';
import { generatePath } from './smooth-mouse.js';
import { getCursorOverlayScript } from './cursor-overlay.js';
import { getZoomScript } from './zoom.js';
import { startServer } from './dev-server.js';
import { convertToMp4 } from './post-process.js';

export class DemoRecorder {
  /**
   * @param {object} opts
   * @param {string} [opts.servePath] - Local directory to serve (mutually exclusive with url)
   * @param {string} [opts.serveFile] - File to open (relative to servePath)
   * @param {string} [opts.url] - External URL to navigate to
   * @param {number} [opts.width=1920]
   * @param {number} [opts.height=1080]
   * @param {string} [opts.outputPath='recordings/demo.mp4']
   * @param {string} [opts.cursorColor='#69c773']
   */
  constructor(opts = {}) {
    this.servePath = opts.servePath;
    this.serveFile = opts.serveFile || 'index.html';
    this.externalUrl = opts.url;
    this.width = opts.width || 1920;
    this.height = opts.height || 1080;
    this.outputPath = opts.outputPath || 'recordings/demo.mp4';
    this.cursorColor = opts.cursorColor || '#69c773';

    this._browser = null;
    this._context = null;
    this._page = null;
    this._server = null;
    this._cursorX = this.width / 2;
    this._cursorY = this.height / 2;
  }

  /**
   * Launch browser, start recording, navigate to page, inject overlays.
   */
  async start() {
    console.log('[DemoRecorder] Starting...');

    // Start local server if serving local files
    let navigateUrl = this.externalUrl;
    if (this.servePath) {
      this._server = await startServer(this.servePath);
      navigateUrl = `${this._server.url}/${this.serveFile}`;
      console.log(`[DemoRecorder] Serving at ${this._server.url}`);
    }

    // Ensure output directory
    const outDir = path.dirname(path.resolve(this.outputPath));
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    // Launch browser
    this._browser = await chromium.launch({ headless: true });

    // Create context with video recording
    this._context = await this._browser.newContext({
      viewport: { width: this.width, height: this.height },
      recordVideo: {
        dir: outDir,
        size: { width: this.width, height: this.height },
      },
    });

    this._page = await this._context.newPage();

    // Navigate
    console.log(`[DemoRecorder] Navigating to ${navigateUrl}`);
    await this._page.goto(navigateUrl, { waitUntil: 'networkidle' });

    // Inject cursor overlay
    await this._page.evaluate(getCursorOverlayScript(this.cursorColor));
    // Inject zoom system
    await this._page.evaluate(getZoomScript());

    // Position cursor at center
    await this._page.evaluate(
      ({ x, y }) => window.__demoCursor.moveTo(x, y),
      { x: this._cursorX, y: this._cursorY }
    );

    // Initial pause so the first frame is clean
    await this.wait(500);
    console.log('[DemoRecorder] Recording started.');
  }

  /**
   * Move cursor to absolute coordinates with smooth bezier path.
   * @param {number} x
   * @param {number} y
   * @param {object} [opts]
   * @param {number} [opts.duration=600]
   */
  async moveTo(x, y, opts = {}) {
    const { duration = 600 } = opts;
    const points = generatePath(this._cursorX, this._cursorY, x, y, { duration });

    for (const pt of points) {
      await this._page.evaluate(
        ({ px, py }) => window.__demoCursor.moveTo(px, py),
        { px: pt.x, py: pt.y }
      );
      if (pt.delay > 0) {
        await this._page.waitForTimeout(pt.delay);
      }
    }

    this._cursorX = x;
    this._cursorY = y;
  }

  /**
   * Move cursor to the center of an element matched by selector.
   * @param {string} selector
   * @param {object} [opts]
   * @param {number} [opts.duration=600]
   */
  async moveToSelector(selector, opts = {}) {
    const box = await this._page.locator(selector).first().boundingBox();
    if (!box) throw new Error(`Element not found: ${selector}`);
    const cx = Math.round(box.x + box.width / 2);
    const cy = Math.round(box.y + box.height / 2);
    await this.moveTo(cx, cy, opts);
  }

  /**
   * Move to an element and click it.
   * @param {string} selector
   * @param {object} [opts]
   * @param {number} [opts.duration=400] - Mouse travel duration
   */
  async click(selector, opts = {}) {
    const { duration = 400 } = opts;
    await this.moveToSelector(selector, { duration });
    await this.wait(80);

    // Trigger visual ripple
    await this._page.evaluate(() => window.__demoCursor.triggerClick());

    // Perform actual click at cursor position
    await this._page.mouse.click(this._cursorX, this._cursorY);
    await this.wait(150);
  }

  /**
   * Type text into a focused element character-by-character with human-like timing.
   * @param {string} selector - Element to click/focus first
   * @param {string} text - Text to type
   * @param {object} [opts]
   * @param {number} [opts.minDelay=40]
   * @param {number} [opts.maxDelay=120]
   */
  async type(selector, text, opts = {}) {
    const { minDelay = 40, maxDelay = 120 } = opts;

    // Click to focus
    await this.click(selector);
    await this.wait(200);

    for (const char of text) {
      await this._page.keyboard.type(char, { delay: 0 });

      // Random delay between keystrokes
      let delay = minDelay + Math.random() * (maxDelay - minDelay);

      // 10% chance of a "thinking pause"
      if (Math.random() < 0.1) {
        delay *= 2 + Math.random();
      }

      await this.wait(Math.round(delay));
    }
  }

  /**
   * Press a key (Enter, Tab, Escape, etc).
   * @param {string} key
   */
  async pressKey(key) {
    await this._page.keyboard.press(key);
    await this.wait(100);
  }

  /**
   * Zoom to center on an element.
   * @param {string} selector
   * @param {object} [opts]
   * @param {number} [opts.scale=2.5]
   * @param {number} [opts.duration=800]
   */
  async zoomTo(selector, opts = {}) {
    const { scale = 2.5, duration = 800 } = opts;
    await this._page.evaluate(
      ({ sel, s, d }) => window.__demoZoom.zoomTo(sel, s, d),
      { sel: selector, s: scale, d: duration }
    );
    // Wait for the CSS transition to complete
    await this.wait(duration + 100);
  }

  /**
   * Zoom back to 1x.
   * @param {object} [opts]
   * @param {number} [opts.duration=600]
   */
  async zoomOut(opts = {}) {
    const { duration = 600 } = opts;
    await this._page.evaluate(
      (d) => window.__demoZoom.zoomOut(d),
      duration
    );
    await this.wait(duration + 100);
  }

  /**
   * Smooth scroll to bring an element into view.
   * @param {string} selector
   */
  async scrollTo(selector) {
    await this._page.evaluate(
      (sel) => {
        const el = document.querySelector(sel);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
      selector
    );
    await this.wait(600);
  }

  /**
   * Pause recording for a given number of milliseconds.
   * @param {number} ms
   */
  async wait(ms) {
    await this._page.waitForTimeout(ms);
  }

  /**
   * Stop recording, close browser, convert to MP4, clean up.
   * @returns {Promise<string>} Path to the final MP4 file
   */
  async stop() {
    console.log('[DemoRecorder] Stopping...');

    // Close page to finalize video
    await this._page.close();

    // Get the video path from the page's video
    const video = this._page.video();
    const webmPath = await video.path();
    console.log(`[DemoRecorder] WebM saved: ${webmPath}`);

    // Close browser context and browser
    await this._context.close();
    await this._browser.close();

    // Close dev server if we started one
    if (this._server) {
      await this._server.close();
    }

    // Convert WebM → MP4
    const mp4Path = path.resolve(this.outputPath);
    await convertToMp4(webmPath, mp4Path);

    // Clean up the WebM file
    try { fs.unlinkSync(webmPath); } catch {}

    console.log(`[DemoRecorder] Done! Output: ${mp4Path}`);
    return mp4Path;
  }
}
