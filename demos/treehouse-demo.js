/**
 * Example demo recording script for treehouse-components.html.
 *
 * Showcases the DemoRecorder API: mouse movements, clicks,
 * typing in the search bar, zooming into components, and scrolling.
 *
 * Run: npm run demo
 */

import { DemoRecorder } from '../recorder/DemoRecorder.js';

const recorder = new DemoRecorder({
  servePath: './',
  serveFile: 'treehouse-components.html',
  width: 1920,
  height: 1080,
  outputPath: 'recordings/treehouse-walkthrough.mp4',
  cursorColor: '#69c773',
});

await recorder.start();

// --- Scene 1: Nav bar interaction ---
await recorder.wait(800);
await recorder.moveToSelector('.th-nav-links a:nth-child(1)', { duration: 500 });
await recorder.wait(300);
await recorder.moveToSelector('.th-nav-links a.active', { duration: 400 });
await recorder.wait(500);

// --- Scene 2: Search bar ---
await recorder.type('.th-search-input', 'JavaScript basics', { minDelay: 50, maxDelay: 100 });
await recorder.wait(800);

// Click a dropdown
await recorder.click('.th-search-dropdown');
await recorder.wait(500);

// --- Scene 3: Browse topics ---
await recorder.scrollTo('.topics-grid');
await recorder.wait(500);

// Hover over a few topic pills
await recorder.moveToSelector('.topic-pill:nth-child(1)', { duration: 500 });
await recorder.wait(300);
await recorder.moveToSelector('.topic-pill:nth-child(3)', { duration: 400 });
await recorder.wait(300);
await recorder.moveToSelector('.topic-pill:nth-child(6)', { duration: 400 });
await recorder.wait(500);

// Click on Python topic
await recorder.click('.topic-pill:nth-child(4)');
await recorder.wait(600);

// --- Scene 4: Zoom into a course card ---
await recorder.scrollTo('.cards-grid');
await recorder.wait(500);

await recorder.moveToSelector('.course-card:nth-child(1)', { duration: 600 });
await recorder.wait(400);

await recorder.zoomTo('.course-card:nth-child(1)', { scale: 2.2, duration: 1000 });
await recorder.wait(1500);
await recorder.zoomOut({ duration: 800 });
await recorder.wait(600);

// --- Scene 5: Hover across course cards ---
await recorder.moveToSelector('.course-card:nth-child(2)', { duration: 500 });
await recorder.wait(400);
await recorder.moveToSelector('.course-card:nth-child(3)', { duration: 500 });
await recorder.wait(400);

// Click the Python card
await recorder.click('.course-card:nth-child(3)');
await recorder.wait(800);

// --- Scene 6: Scroll to workshops ---
await recorder.scrollTo('.cards-grid:nth-of-type(2)');
await recorder.wait(600);

// --- Scene 7: College credit section ---
await recorder.scrollTo('.college-section');
await recorder.wait(600);

await recorder.zoomTo('.college-section', { scale: 1.6, duration: 800 });
await recorder.wait(1500);
await recorder.zoomOut({ duration: 600 });
await recorder.wait(500);

// --- Scene 8: Badge variants ---
await recorder.scrollTo('.tag-outline');
await recorder.wait(600);

await recorder.zoomTo('.tag-outline', { scale: 2.5, duration: 800 });
await recorder.wait(1200);
await recorder.zoomOut({ duration: 600 });

// --- Scene 9: Scroll to footer ---
await recorder.scrollTo('.th-footer');
await recorder.wait(800);

// --- Fin ---
await recorder.wait(1000);

const mp4Path = await recorder.stop();
console.log(`\nDemo video saved to: ${mp4Path}`);
