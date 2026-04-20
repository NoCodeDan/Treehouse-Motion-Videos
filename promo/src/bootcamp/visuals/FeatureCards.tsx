import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, ACCENT_BLUE, ACCENT_PURPLE, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

const features = [
  { title: "Core Feature #1", description: "The main thing your app does", color: TREEHOUSE_GREEN },
  { title: "Core Feature #2", description: "Supporting functionality", color: ACCENT_BLUE },
  { title: "Core Feature #3", description: "Essential user flow", color: ACCENT_PURPLE },
];

export const FeatureCards: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", gap: 16, width: 500 }}>
      {features.map((feat, i) => {
        const p = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 22) });
        const ty = interpolate(p, [0, 1], [30, 0]);
        return (
          <div
            key={i}
            style={{
              flex: 1,
              backgroundColor: WHITE,
              borderRadius: 16,
              padding: "24px 18px",
              borderTop: `4px solid ${feat.color}`,
              boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              opacity: p,
              transform: `translateY(${ty}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: feat.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                fontFamily: quicksandFamily,
                fontWeight: 700,
                color: WHITE,
              }}
            >
              {i + 1}
            </div>
            <span style={{ fontSize: 16, fontFamily: quicksandFamily, fontWeight: 700, color: TEXT_COLOR }}>
              {feat.title}
            </span>
            <span style={{ fontSize: 13, fontFamily: robotoFamily, fontWeight: 400, color: TEXT_COLOR }}>
              {feat.description}
            </span>
          </div>
        );
      })}
    </div>
  );
};
