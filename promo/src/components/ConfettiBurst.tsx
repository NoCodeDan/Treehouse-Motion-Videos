import React, { useMemo } from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TREEHOUSE_GREEN, ACCENT_PURPLE, ACCENT_BLUE } from "../lib/brand";
import { BOUNCY } from "../lib/animations";

interface Particle {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  speedX: number;
  speedY: number;
  shape: "circle" | "square" | "triangle";
}

export const ConfettiBurst: React.FC<{
  delay?: number;
  count?: number;
}> = ({ delay = 0, count = 40 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const particles = useMemo<Particle[]>(() => {
    const colors = [
      TREEHOUSE_GREEN,
      ACCENT_PURPLE,
      ACCENT_BLUE,
      "#ffd700",
      "#ff6b6b",
      "#69c773",
    ];
    const shapes: Particle["shape"][] = ["circle", "square", "triangle"];

    // Seeded random for deterministic rendering
    let seed = 42;
    const rand = () => {
      seed = (seed * 16807 + 0) % 2147483647;
      return seed / 2147483647;
    };

    return Array.from({ length: count }, () => ({
      x: rand() * 1920,
      y: 540 + (rand() - 0.5) * 200,
      rotation: rand() * 360,
      scale: 0.5 + rand() * 1,
      color: colors[Math.floor(rand() * colors.length)],
      speedX: (rand() - 0.5) * 12,
      speedY: -4 - rand() * 8,
      shape: shapes[Math.floor(rand() * shapes.length)],
    }));
  }, [count]);

  const burstProgress = spring({
    frame,
    fps,
    config: BOUNCY,
    delay,
  });

  if (burstProgress < 0.01) return null;

  const elapsedFrames = Math.max(0, frame - delay);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {particles.map((p, i) => {
        const gravity = 0.15;
        const t = elapsedFrames;
        const px = p.x + p.speedX * t;
        const py = p.y + p.speedY * t + gravity * t * t * 0.5;
        const rot = p.rotation + t * 4;
        const fadeOut = interpolate(t, [40, 90], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: px,
              top: py,
              width: 10 * p.scale,
              height: 10 * p.scale,
              backgroundColor:
                p.shape === "triangle" ? "transparent" : p.color,
              borderRadius: p.shape === "circle" ? "50%" : 2,
              borderLeft:
                p.shape === "triangle"
                  ? `${5 * p.scale}px solid transparent`
                  : undefined,
              borderRight:
                p.shape === "triangle"
                  ? `${5 * p.scale}px solid transparent`
                  : undefined,
              borderBottom:
                p.shape === "triangle"
                  ? `${10 * p.scale}px solid ${p.color}`
                  : undefined,
              transform: `rotate(${rot}deg) scale(${burstProgress})`,
              opacity: fadeOut * burstProgress,
            }}
          />
        );
      })}
    </div>
  );
};
