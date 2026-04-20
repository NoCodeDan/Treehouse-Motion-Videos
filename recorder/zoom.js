/**
 * Returns JS strings to inject zoom functionality into the page.
 * Uses CSS transform: scale() on document.body with transform-origin
 * set to the target element's center.
 */

export function getZoomScript() {
  return `
(function() {
  if (window.__demoZoom) return;

  // Apply transition style to body
  document.body.style.transformOrigin = '0 0';
  document.body.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), transform-origin 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';

  let currentScale = 1;

  window.__demoZoom = {
    /**
     * Zoom to center on a CSS selector at a given scale.
     * @param {string} selector
     * @param {number} scale
     * @param {number} duration - transition duration in ms
     */
    zoomTo(selector, scale, duration) {
      const el = document.querySelector(selector);
      if (!el) { console.warn('zoomTo: element not found:', selector); return; }

      const rect = el.getBoundingClientRect();
      const viewW = window.innerWidth;
      const viewH = window.innerHeight;

      // Center of the element in page coordinates (accounting for current transform)
      const elCenterX = (rect.left + rect.width / 2) / currentScale + window.scrollX;
      const elCenterY = (rect.top + rect.height / 2) / currentScale + window.scrollY;

      // Compute transform-origin so the element ends up centered in viewport
      const originX = elCenterX;
      const originY = elCenterY;

      document.body.style.transition = 'transform ' + duration + 'ms cubic-bezier(0.25, 0.1, 0.25, 1), transform-origin ' + duration + 'ms cubic-bezier(0.25, 0.1, 0.25, 1)';
      document.body.style.transformOrigin = originX + 'px ' + originY + 'px';
      document.body.style.transform = 'scale(' + scale + ')';
      currentScale = scale;
    },

    /**
     * Zoom back to 1x.
     * @param {number} duration - transition duration in ms
     */
    zoomOut(duration) {
      document.body.style.transition = 'transform ' + duration + 'ms cubic-bezier(0.25, 0.1, 0.25, 1), transform-origin ' + duration + 'ms cubic-bezier(0.25, 0.1, 0.25, 1)';
      document.body.style.transform = 'scale(1)';
      currentScale = 1;
    },

    getScale() {
      return currentScale;
    }
  };
})();
`;
}
