/**
 * Demo recording: Full walkthrough of the Xenon AI Hackathon project
 * https://xenon-ai-hackathon-2026-project.vercel.app/
 *
 * Flow:
 *   1. Dashboard — show full page, scroll down and back up
 *   2. Content — scroll to bottom, back to top, click a row, show detail,
 *      click "View on Treehouse", come back, search in search bar
 *   3. Market Intel — scroll to bottom, show each section, come back to top
 *   4. Chat — zoom in on chat history, click New Chat, type prompt, submit, wait for response
 */

import { DemoRecorder } from '../recorder/DemoRecorder.js';

const SITE = 'https://xenon-ai-hackathon-2026-project.vercel.app';

const recorder = new DemoRecorder({
  url: `${SITE}/dashboard`,
  width: 1920,
  height: 1080,
  outputPath: 'recordings/xenon-full-walkthrough.mp4',
  cursorColor: '#69c773',
});

await recorder.start();
const page = recorder._page;

// Helper: smooth-scroll an internal container
async function scrollContainer(selector, targetY, steps = 30) {
  for (let i = 1; i <= steps; i++) {
    const y = Math.round((targetY * i) / steps);
    await page.evaluate(({ sel, scrollY }) => {
      const el = document.querySelector(sel);
      if (el) el.scrollTop = scrollY;
    }, { sel: selector, scrollY: y });
    await recorder.wait(40);
  }
}

async function scrollContainerSmooth(selector, targetY, duration = 1200) {
  const startY = await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    return el ? el.scrollTop : 0;
  }, selector);
  const steps = Math.max(Math.round(duration / 35), 10);
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
    const y = Math.round(startY + (targetY - startY) * eased);
    await page.evaluate(({ sel, scrollY }) => {
      const el = document.querySelector(sel);
      if (el) el.scrollTop = scrollY;
    }, { sel: selector, scrollY: y });
    await recorder.wait(35);
  }
}

// ═══════════════════════════════════════════════════════════
// PAGE 1: DASHBOARD — Show the whole page
// ═══════════════════════════════════════════════════════════

await recorder.wait(3500);

const DASH_SCROLL = 'div.overflow-y-auto.p-4';

// Pause to show top of dashboard (Library totals, charts)
await recorder.moveTo(960, 400, { duration: 500 });
await recorder.wait(1200);

// Scroll down slowly to reveal everything
await scrollContainerSmooth(DASH_SCROLL, 500, 1500);
await recorder.wait(1000);

// Keep scrolling to the very bottom
await scrollContainerSmooth(DASH_SCROLL, 1500, 2000);
await recorder.wait(1200);

// Scroll back to top
await scrollContainerSmooth(DASH_SCROLL, 0, 1500);
await recorder.wait(1000);


// ═══════════════════════════════════════════════════════════
// PAGE 2: CONTENT — Scroll, click row, View on Treehouse, search
// ═══════════════════════════════════════════════════════════

await recorder.click('nav a[href="/content"]');
await recorder.wait(3500);

const CONTENT_SCROLL = 'div.overflow-y-auto.p-4';

// Show top of content (stats bar, filters, table header)
await recorder.moveTo(800, 400, { duration: 500 });
await recorder.wait(1000);

// Scroll to the bottom of the table
await scrollContainerSmooth(CONTENT_SCROLL, 2600, 3000);
await recorder.wait(1200);

// Scroll back to the top
await scrollContainerSmooth(CONTENT_SCROLL, 0, 2500);
await recorder.wait(1000);

// Click on the first table row to expand it
const firstRow = await page.$('tbody tr.cursor-pointer:first-child');
if (firstRow) {
  const box = await firstRow.boundingBox();
  if (box) {
    await recorder.moveTo(Math.round(box.x + box.width / 2), Math.round(box.y + box.height / 2), { duration: 500 });
    await recorder.wait(300);
    await page.evaluate(() => window.__demoCursor.triggerClick());
    await firstRow.click();
    await recorder.wait(2000);

    // Show off the expanded row detail — score breakdown, missing topics, etc.
    // Move cursor across the detail panel
    await recorder.moveTo(700, 350, { duration: 400 });
    await recorder.wait(600);
    await recorder.moveTo(950, 380, { duration: 400 });
    await recorder.wait(600);

    // Zoom into the expanded row to show detail
    await recorder.zoomTo('tbody tr:first-child', { scale: 1.6, duration: 800 });
    await recorder.wait(2000);
    await recorder.zoomOut({ duration: 600 });
    await recorder.wait(800);

    // Click "View on Treehouse" — opens in new tab
    const viewLink = await page.$('a[href*="teamtreehouse.com"]');
    if (viewLink) {
      const linkBox = await viewLink.boundingBox();
      if (linkBox) {
        await recorder.moveTo(
          Math.round(linkBox.x + linkBox.width / 2),
          Math.round(linkBox.y + linkBox.height / 2),
          { duration: 500 }
        );
        await recorder.wait(300);

        // Catch the new tab
        const [newPage] = await Promise.all([
          recorder._context.waitForEvent('page'),
          (async () => {
            await page.evaluate(() => window.__demoCursor.triggerClick());
            await viewLink.click();
          })(),
        ]);

        // Wait for the Treehouse library page to load
        await newPage.waitForLoadState('domcontentloaded').catch(() => {});
        await recorder.wait(4000);

        // Close the new tab and return to our app
        await newPage.close();
        await recorder.wait(1000);

        // Bring focus back — page is already the active one
        await page.bringToFront();
        await recorder.wait(1000);
      }
    }

    // Collapse the row by clicking it again
    const rowAgain = await page.$('tbody tr.cursor-pointer:first-child');
    if (rowAgain) {
      const rowBox = await rowAgain.boundingBox();
      if (rowBox) {
        await recorder.moveTo(Math.round(rowBox.x + rowBox.width / 2), Math.round(rowBox.y + rowBox.height / 2), { duration: 400 });
        await recorder.wait(200);
        await page.evaluate(() => window.__demoCursor.triggerClick());
        await rowAgain.click();
        await recorder.wait(800);
      }
    }
  }
}

// Search in the search bar
const searchInput = await page.$('input[placeholder="Search content..."]');
if (searchInput) {
  const sBox = await searchInput.boundingBox();
  if (sBox) {
    await recorder.moveTo(Math.round(sBox.x + sBox.width / 2), Math.round(sBox.y + sBox.height / 2), { duration: 500 });
    await recorder.wait(200);
    await page.evaluate(() => window.__demoCursor.triggerClick());
    await searchInput.click();
    await recorder.wait(300);

    // Type a search query character by character
    const query = 'JavaScript';
    for (const char of query) {
      await page.keyboard.type(char, { delay: 0 });
      let d = 50 + Math.random() * 80;
      if (Math.random() < 0.1) d *= 2.5;
      await recorder.wait(Math.round(d));
    }
    await recorder.wait(2000);

    // Clear the search
    await page.keyboard.down('Meta');
    await page.keyboard.press('a');
    await page.keyboard.up('Meta');
    await page.keyboard.press('Backspace');
    await recorder.wait(1000);
  }
}


// ═══════════════════════════════════════════════════════════
// PAGE 3: MARKET INTEL — Scroll to bottom, show each section
// ═══════════════════════════════════════════════════════════

await recorder.click('nav a[href="/market-intel"]');
await recorder.wait(3500);

const MI_SCROLL = 'main.overflow-y-auto';

// Show top: heading + stats cards
await recorder.moveTo(730, 170, { duration: 400 });
await recorder.wait(800);

// Hover over stats: Market Alignment, Trend Gaps, Competitor Gaps, Job Alignment
await recorder.moveTo(397, 170, { duration: 400 });
await recorder.wait(500);
await recorder.moveTo(617, 170, { duration: 350 });
await recorder.wait(500);
await recorder.moveTo(837, 170, { duration: 350 });
await recorder.wait(500);
await recorder.moveTo(1060, 170, { duration: 350 });
await recorder.wait(800);

// Scroll down to Priority Recommendations + Trending Topics
await scrollContainerSmooth(MI_SCROLL, 300, 1000);
await recorder.wait(800);

// Hover over Priority Recommendations items
await recorder.moveTo(400, 400, { duration: 400 });
await recorder.wait(600);

// Hover over Trending Topics chart
await recorder.moveTo(950, 450, { duration: 500 });
await recorder.wait(800);

// Click "GitHub" tab in Trending Topics
const githubTab = await page.locator('button:has-text("GitHub")').first();
if (await githubTab.isVisible()) {
  const gBox = await githubTab.boundingBox();
  if (gBox) {
    await recorder.moveTo(Math.round(gBox.x + gBox.width / 2), Math.round(gBox.y + gBox.height / 2), { duration: 400 });
    await recorder.wait(200);
    await page.evaluate(() => window.__demoCursor.triggerClick());
    await githubTab.click();
    await recorder.wait(1200);
  }
}

// Scroll down to Market Analysis section
await scrollContainerSmooth(MI_SCROLL, 1100, 1500);
await recorder.wait(1000);

// Show the Market Analysis table
await recorder.moveTo(730, 500, { duration: 400 });
await recorder.wait(800);

// Scroll to Competitor Coverage
await scrollContainerSmooth(MI_SCROLL, 1700, 1200);
await recorder.wait(1000);

// Scroll to Job Market Alignment
await scrollContainerSmooth(MI_SCROLL, 2800, 1500);
await recorder.wait(1200);

// Scroll to the very bottom
await scrollContainerSmooth(MI_SCROLL, 3400, 1000);
await recorder.wait(800);

// Scroll back to top
await scrollContainerSmooth(MI_SCROLL, 0, 2000);
await recorder.wait(1000);


// ═══════════════════════════════════════════════════════════
// PAGE 4: CHAT — zoom into history, new chat, type, submit, wait
// ═══════════════════════════════════════════════════════════

await recorder.click('nav a[href="/chat"]');
await recorder.wait(3500);

// Zoom into the Chat History sidebar
await recorder.zoomTo('h2.text-sm', { scale: 2.2, duration: 800 });
await recorder.wait(2000);

// Move cursor over some chat history items while zoomed
await recorder.moveTo(200, 450, { duration: 400 });
await recorder.wait(400);
await recorder.moveTo(200, 520, { duration: 300 });
await recorder.wait(400);
await recorder.moveTo(200, 590, { duration: 300 });
await recorder.wait(600);

await recorder.zoomOut({ duration: 600 });
await recorder.wait(800);

// Click "+ New Chat" button
const newChatBtn = await page.locator('button:has-text("New Chat")').first();
if (await newChatBtn.isVisible()) {
  const ncBox = await newChatBtn.boundingBox();
  if (ncBox) {
    await recorder.moveTo(Math.round(ncBox.x + ncBox.width / 2), Math.round(ncBox.y + ncBox.height / 2), { duration: 500 });
    await recorder.wait(200);
    await page.evaluate(() => window.__demoCursor.triggerClick());
    await newChatBtn.click();
    await recorder.wait(2500);
  }
}

// Wait for the input to appear, then type a prompt
await page.waitForSelector('input[placeholder*="Ask about Treehouse"]', { timeout: 5000 }).catch(() => {});
const chatInput = await page.$('input[placeholder*="Ask about Treehouse"]');
if (chatInput) {
  const ciBox = await chatInput.boundingBox();
  if (ciBox) {
    await recorder.moveTo(Math.round(ciBox.x + ciBox.width / 2), Math.round(ciBox.y + ciBox.height / 2), { duration: 500 });
    await recorder.wait(200);
    await page.evaluate(() => window.__demoCursor.triggerClick());
    await chatInput.click();
    await recorder.wait(400);

    // Type a prompt character by character
    const prompt = 'What Python courses have the lowest freshness scores?';
    for (const char of prompt) {
      await page.keyboard.type(char, { delay: 0 });
      let d = 45 + Math.random() * 75;
      if (Math.random() < 0.1) d *= 2.5;
      await recorder.wait(Math.round(d));
    }
    await recorder.wait(800);

    // Submit by pressing Enter
    await page.evaluate(() => window.__demoCursor.triggerClick());
    await recorder.pressKey('Enter');
    await recorder.wait(1000);

    // Wait for bot response to stream in (watch for new elements appearing)
    // Give the chatbot time to respond — up to 15s
    for (let i = 0; i < 30; i++) {
      await recorder.wait(500);
      const hasResponse = await page.evaluate(() => {
        const msgs = document.querySelectorAll('[class*="message"], [class*="chat"], [class*="prose"], [class*="markdown"]');
        return msgs.length > 0;
      });
      if (hasResponse && i > 5) break; // Wait at least 3s after response starts
    }

    // Extra time to let the full response render
    await recorder.wait(3000);

    // Scroll to see the full response if needed
    const chatScrollable = await page.$('[class*="overflow-y-auto"][class*="flex-1"], main [class*="overflow"]');
    if (chatScrollable) {
      await page.evaluate((el) => el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' }), chatScrollable);
      await recorder.wait(2000);
    }
  }
}

// Final pause
await recorder.wait(1500);

const mp4Path = await recorder.stop();
console.log(`\nDemo video saved to: ${mp4Path}`);
