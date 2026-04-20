/**
 * Minimal zero-dependency static file server using Node built-ins.
 * Uses port 0 so the OS picks a free port.
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
};

/**
 * Start a static file server.
 * @param {string} rootDir - Directory to serve files from
 * @returns {Promise<{url: string, port: number, close: () => Promise<void>}>}
 */
export function startServer(rootDir) {
  return new Promise((resolve, reject) => {
    const root = path.resolve(rootDir);

    const server = http.createServer((req, res) => {
      const url = new URL(req.url, `http://${req.headers.host}`);
      let filePath = path.join(root, decodeURIComponent(url.pathname));

      // Default to index.html for directory requests
      if (filePath.endsWith('/') || !path.extname(filePath)) {
        const asDir = path.join(filePath, 'index.html');
        if (fs.existsSync(asDir)) {
          filePath = asDir;
        }
      }

      // Security: prevent path traversal
      if (!filePath.startsWith(root)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }

      fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
          res.writeHead(404);
          res.end('Not Found');
          return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(filePath).pipe(res);
      });
    });

    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolve({
        url: `http://127.0.0.1:${port}`,
        port,
        close: () => new Promise((res) => server.close(res)),
      });
    });

    server.on('error', reject);
  });
}
