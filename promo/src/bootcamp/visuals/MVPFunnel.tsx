import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, ACCENT_BLUE, ACCENT_PURPLE, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SNAPPY, SMOOTH, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

const allFeatures = [
  { label: "User Auth", passes: true },
  { label: "Dashboard", passes: true },
  { label: "Analytics", passes: false },
  { label: "Core Feature", passes: true },
  { label: "Social Login", passes: false },
  { label: "Admin Panel", passes: false },
];

export const MVPFunnel: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const filterP = spring({ frame, fps, config: SMOOTH, delay: delay + 40 });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, width: 480 }}>
      {/* All features */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
        {allFeatures.map((f, i) => {
          const p = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 10) });
          const fadeOut = f.passes ? 1 : interpolate(filterP, [0, 0.5, 1], [1, 1, 0.3]);
          return (
            <div
              key={i}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                backgroundColor: f.passes ? TREEHOUSE_GREEN + "20" : "#f5f5f5",
                border: `2px solid ${f.passes ? TREEHOUSE_GREEN : "#ddd"}`,
                fontSize: 13,
                fontFamily: robotoFamily,
                fontWeight: 500,
                color: TEXT_COLOR,
                opacity: p * fadeOut,
                transform: `scale(${p})`,
                textDecoration: !f.passes && filterP > 0.7 ? "line-through" : "none",
              }}
            >
              {f.label}
            </div>
          );
        })}
      </div>

      {/* MVP Filter bar */}
      <div
        style={{
          width: "100%",
          padding: "10px 0",
          backgroundColor: TREEHOUSE_GREEN,
          borderRadius: 8,
          textAlign: "center",
          fontSize: 16,
          fontFamily: quicksandFamily,
          fontWeight: 700,
          color: WHITE,
          opacity: filterP,
          transform: `scaleX(${filterP})`,
        }}
      >
        🔽 MVP Filter — Only essentials pass
      </div>

      {/* Surviving features */}
      <div style={{ display: "flex", gap: 12 }}>
        {allFeatures.filter(f => f.passes).map((f, i) => {
          const p = spring({ frame, fps, config: SNAPPY, delay: delay + 80 + staggerDelay(i, 15) });
          return (
            <div
              key={i}
              style={{
                padding: "10px 20px",
                borderRadius: 12,
                backgroundColor: TREEHOUSE_GREEN,
                color: WHITE,
                fontSize: 14,
                fontFamily: robotoFamily,
                fontWeight: 600,
                opacity: p,
                transform: `translateY(${interpolate(p, [0, 1], [20, 0])}px)`,
                boxShadow: `0 4px 12px ${TREEHOUSE_GREEN}40`,
              }}
            >
              ✅ {f.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
