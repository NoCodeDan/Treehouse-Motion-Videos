import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily } from "../../fonts";

export const ThreeFixesVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pillars = [
    { icon: "📐", label: "Output\nFormat", color: "#5a9fd4" },
    { icon: "🛡️", label: "Guard-\nrails", color: TREEHOUSE_GREEN },
    { icon: "📋", label: "Input\nTemplate", color: "#9b6fc7" },
  ];

  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 24 }}>
      {pillars.map((p, i) => {
        const progress = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 18) });
        const height = interpolate(progress, [0, 1], [0, 180]);
        return (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, opacity: progress }}>
            <div style={{ fontSize: 36 }}>{p.icon}</div>
            <div style={{
              width: 90, height, borderRadius: 14, backgroundColor: WHITE,
              border: `3px solid ${p.color}`, boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{ fontSize: 13, fontFamily: robotoFamily, fontWeight: 600, color: TEXT_COLOR, textAlign: "center", whiteSpace: "pre-line" }}>
                {p.label}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
