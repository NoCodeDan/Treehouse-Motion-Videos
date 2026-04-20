import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, ACCENT_BLUE, ACCENT_PURPLE, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

const weeks = [
  { num: 1, label: "Foundations", status: "done" as const },
  { num: 2, label: "Planning", status: "done" as const },
  { num: 3, label: "Building", status: "current" as const },
  { num: 4, label: "Ship It!", status: "future" as const },
];

const statusColors = {
  done: TREEHOUSE_GREEN,
  current: ACCENT_BLUE,
  future: "#ccc",
};

export const ProgressTimeline: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 440 }}>
      {/* Progress bar */}
      <div style={{ position: "relative", height: 8, backgroundColor: "#eee", borderRadius: 4, overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: `${interpolate(
              spring({ frame, fps, config: { damping: 200 }, delay: delay + 10 }),
              [0, 1],
              [0, 62.5],
            )}%`,
            backgroundColor: TREEHOUSE_GREEN,
            borderRadius: 4,
          }}
        />
      </div>

      {/* Week nodes */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {weeks.map((week, i) => {
          const p = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 16) });
          const color = statusColors[week.status];
          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                opacity: p,
                transform: `translateY(${interpolate(p, [0, 1], [15, 0])}px)`,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  backgroundColor: week.status === "done" ? color : WHITE,
                  border: `3px solid ${color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: week.status === "done" ? 18 : 16,
                  fontFamily: quicksandFamily,
                  fontWeight: 700,
                  color: week.status === "done" ? WHITE : color,
                }}
              >
                {week.status === "done" ? "✓" : week.num}
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 14, fontFamily: robotoFamily, fontWeight: 600, color: TEXT_COLOR }}>
                  Week {week.num}
                </div>
                <div style={{ fontSize: 12, fontFamily: robotoFamily, fontWeight: 400, color: "#888" }}>
                  {week.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
