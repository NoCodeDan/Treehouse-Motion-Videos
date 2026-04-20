/**
 * Generates a smooth, human-like mouse path between two points
 * using cubic bezier curves with randomized control points.
 */

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Generate a smooth path from (x1,y1) to (x2,y2).
 * Returns an array of {x, y, delay} objects.
 *
 * @param {number} x1 - Start X
 * @param {number} y1 - Start Y
 * @param {number} x2 - End X
 * @param {number} y2 - End Y
 * @param {object} opts
 * @param {number} opts.duration - Total duration in ms (default 600)
 * @param {number} opts.steps - Number of intermediate points (default 30)
 */
export function generatePath(x1, y1, x2, y2, opts = {}) {
  const { duration = 600, steps = 30 } = opts;

  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Perpendicular direction for control point offset
  const perpX = -dy / (dist || 1);
  const perpY = dx / (dist || 1);

  // Randomized offset magnitude (10–30% of distance)
  const offset1 = dist * (0.1 + Math.random() * 0.2) * (Math.random() < 0.5 ? 1 : -1);
  const offset2 = dist * (0.1 + Math.random() * 0.2) * (Math.random() < 0.5 ? 1 : -1);

  // Control points at ~1/3 and ~2/3 along the path
  const cp1x = x1 + dx * 0.33 + perpX * offset1;
  const cp1y = y1 + dy * 0.33 + perpY * offset1;
  const cp2x = x1 + dx * 0.66 + perpX * offset2;
  const cp2y = y1 + dy * 0.66 + perpY * offset2;

  const points = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const eased = easeOutCubic(t);

    // Cubic bezier formula
    const mt = 1 - eased;
    const x = mt * mt * mt * x1
      + 3 * mt * mt * eased * cp1x
      + 3 * mt * eased * eased * cp2x
      + eased * eased * eased * x2;
    const y = mt * mt * mt * y1
      + 3 * mt * mt * eased * cp1y
      + 3 * mt * eased * eased * cp2y
      + eased * eased * eased * y2;

    // Time delay between this point and the next
    let delay = 0;
    if (i < steps) {
      const tNext = (i + 1) / steps;
      const easedNext = easeOutCubic(tNext);
      delay = (easedNext - eased) * duration;
      // Clamp to avoid zero delays
      delay = Math.max(delay, 2);
    }

    points.push({ x: Math.round(x), y: Math.round(y), delay });
  }

  return points;
}
