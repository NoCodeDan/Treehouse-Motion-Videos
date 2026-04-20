/**
 * Converts a WebM video to high-quality H.264 MP4 using ffmpeg.
 */

import { execFile } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Convert WebM → MP4.
 * @param {string} inputPath - Path to .webm file
 * @param {string} outputPath - Desired .mp4 output path
 * @returns {Promise<string>} - Resolved output path
 */
export function convertToMp4(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    // Ensure output directory exists
    const outDir = path.dirname(outputPath);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    const args = [
      '-y',               // Overwrite without asking
      '-i', inputPath,
      '-c:v', 'libx264',
      '-crf', '18',
      '-preset', 'slow',
      '-pix_fmt', 'yuv420p',
      '-movflags', '+faststart',
      outputPath,
    ];

    console.log(`[post-process] ffmpeg ${args.join(' ')}`);

    const proc = execFile('ffmpeg', args, { timeout: 120_000 }, (err, stdout, stderr) => {
      if (err) {
        console.error('[post-process] ffmpeg stderr:', stderr);
        reject(new Error(`ffmpeg failed: ${err.message}`));
        return;
      }
      console.log(`[post-process] Saved MP4: ${outputPath}`);
      resolve(outputPath);
    });
  });
}
