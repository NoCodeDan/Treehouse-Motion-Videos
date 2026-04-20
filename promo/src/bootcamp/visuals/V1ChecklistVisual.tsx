import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily } from "../../fonts";

export const V1ChecklistVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const items = [
    "GitHub pushed",
    "Vercel connected",
    "URL works",
    "Core loop complete",
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, width: 300 }}>
      {items.map((item, i) => {
        const progress = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 14) });
        const checkProgress = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 14) + 10 });
        return (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 12,
            backgroundColor: WHITE, padding: "10px 16px", borderRadius: 10,
            borderLeft: `4px solid ${TREEHOUSE_GREEN}`, boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            opacity: progress, transform: `translateX(${interpolate(progress, [0, 1], [30, 0])}px)`,
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: 12, backgroundColor: TREEHOUSE_GREEN,
              display: "flex", alignItems: "center", justifyContent: "center",
              transform: `scale(${checkProgress})`,
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14">
                <polyline points="3,7 6,10 11,4" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span style={{ fontSize: 15, fontFamily: robotoFamily, fontWeight: 500, color: TEXT_COLOR }}>{item}</span>
          </div>
        );
      })}
    </div>
  );
};
