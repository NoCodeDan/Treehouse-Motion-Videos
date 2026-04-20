import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, ACCENT_BLUE, ACCENT_PURPLE, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SMOOTH, SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

const stages = [
  { label: "All Ideas", width: 400, color: "#ddd" },
  { label: "Market Filter", width: 300, color: ACCENT_BLUE },
  { label: "Skills Filter", width: 200, color: ACCENT_PURPLE },
  { label: "Your Idea \u2728", width: 120, color: TREEHOUSE_GREEN },
];

export const ResearchFunnel: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, width: 460 }}>
      {stages.map((stage, i) => {
        const p = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 25) });
        const ty = interpolate(p, [0, 1], [20, 0]);
        return (
          <div
            key={i}
            style={{
              width: stage.width,
              padding: "14px 0",
              backgroundColor: i === stages.length - 1 ? stage.color : WHITE,
              border: `2px solid ${stage.color}`,
              borderRadius: 12,
              textAlign: "center",
              fontSize: 16,
              fontFamily: robotoFamily,
              fontWeight: 600,
              color: i === stages.length - 1 ? WHITE : TEXT_COLOR,
              opacity: p,
              transform: `translateY(${ty}px)`,
              boxShadow: i === stages.length - 1 ? `0 4px 16px ${stage.color}40` : "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            {stage.label}
          </div>
        );
      })}
    </div>
  );
};
