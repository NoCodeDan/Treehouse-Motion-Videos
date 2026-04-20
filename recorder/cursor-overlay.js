/**
 * Returns a JS string to be injected into the page that creates
 * a custom SVG cursor overlay with click ripple animation.
 * Appended to documentElement so body-level transforms don't affect it.
 */

export function getCursorOverlayScript(cursorColor = '#69c773') {
  return `
(function() {
  if (window.__demoCursor) return;

  const CURSOR_COLOR = '${cursorColor}';

  // --- Styles ---
  const style = document.createElement('style');
  style.textContent = \`
    #__demo-cursor {
      position: fixed;
      top: 0; left: 0;
      width: 24px; height: 24px;
      pointer-events: none;
      z-index: 2147483647;
      transition: none;
      will-change: transform;
    }
    #__demo-cursor svg {
      width: 24px;
      height: 24px;
      filter: drop-shadow(1px 2px 2px rgba(0,0,0,0.3));
    }
    .demo-click-ripple {
      position: fixed;
      pointer-events: none;
      z-index: 2147483646;
      width: 40px; height: 40px;
      border-radius: 50%;
      background: \${CURSOR_COLOR};
      opacity: 0.5;
      transform: scale(0);
      animation: __demo-ripple 0.5s ease-out forwards;
    }
    @keyframes __demo-ripple {
      0%   { transform: scale(0); opacity: 0.5; }
      100% { transform: scale(2.5); opacity: 0; }
    }
  \`;
  document.documentElement.appendChild(style);

  // --- Cursor element ---
  const cursor = document.createElement('div');
  cursor.id = '__demo-cursor';
  cursor.innerHTML = \`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3l14 8.5L12.5 14l-2 7L5 3z" fill="\${CURSOR_COLOR}" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>\`;
  document.documentElement.appendChild(cursor);

  let curX = -50, curY = -50;

  function updatePos() {
    cursor.style.transform = 'translate(' + curX + 'px, ' + curY + 'px)';
  }

  window.__demoCursor = {
    moveTo(x, y) {
      curX = x;
      curY = y;
      updatePos();
    },

    triggerClick() {
      const ripple = document.createElement('div');
      ripple.className = 'demo-click-ripple';
      ripple.style.left = (curX - 20 + 5) + 'px';
      ripple.style.top = (curY - 20 + 3) + 'px';
      document.documentElement.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    },

    hide() {
      cursor.style.display = 'none';
    },

    show() {
      cursor.style.display = '';
    }
  };

  updatePos();
})();
`;
}
