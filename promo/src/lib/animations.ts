import type { SpringConfig } from "remotion";

// Smooth, no bounce — reveals, text
export const SMOOTH: SpringConfig = { damping: 200 };

// Snappy, minimal bounce — UI card entrances
export const SNAPPY: SpringConfig = { damping: 20, stiffness: 200 };

// Bouncy — confetti, celebratory moments
export const BOUNCY: SpringConfig = { damping: 8 };

/**
 * Calculate a stagger delay for list items.
 * @param index Item index (0-based)
 * @param gap Frames between each item entrance
 */
export const staggerDelay = (index: number, gap: number): number => index * gap;
