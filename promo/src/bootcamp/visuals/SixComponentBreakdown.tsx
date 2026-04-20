import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, ACCENT_BLUE, ACCENT_PURPLE, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

const components = [
  { icon: "🎯", title: "Problem Statement", color: TREEHOUSE_GREEN },
  { icon: "👤", title: "User Stories", color: ACCENT_BLUE },
  { icon: "⚡", title: "Core Features", color: ACCENT_PURPLE },
  { icon: "🏗️", title: "Tech Stack", color: TREEHOUSE_GREEN },
  { icon: "📊", title: "Data Model", color: ACCENT_BLUE },
  { icon: "🎨", title: "UI/UX Plan", color: ACCENT_PURPLE },
];

export const SixComponentBreakdown: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 14,
        width: 460,
      }}
    >
      {components.map((comp, i) => {
        const p = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 14) });
        const ty = interpolate(p, [0, 1], [20, 0]);
        return (
          <div
            key={i}
            style={{
              backgroundColor: WHITE,
              borderRadius: 14,
              padding: "20px 14px",
              borderTop: `4px solid ${comp.color}`,
              boxShadow: "0 3px 14px rgba(0,0,0,0.06)",
              opacity: p,
              transform: `translateY(${ty}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: 28 }}>{comp.icon}</span>
            <span style={{ fontSize: 13, fontFamily: robotoFamily, fontWeight: 600, color: TEXT_COLOR }}>
              {comp.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};
