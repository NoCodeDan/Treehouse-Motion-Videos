import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, SMOOTH, staggerDelay } from "../../lib/animations";
import { robotoFamily } from "../../fonts";

export const BootcampJourneyVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const milestones = [
    { label: "Idea" },
    { label: "Spec" },
    { label: "Build" },
    { label: "Test" },
    { label: "Ship" },
  ];

  const lineProgress = spring({ frame, fps, config: SMOOTH, delay: delay + 10 });

  return (
    <div style={{ position: "relative", width: 400, height: 100 }}>
      <svg width="400" height="4" style={{ position: "absolute", top: 36, left: 0 }}>
        <line x1="20" y1="2" x2={interpolate(lineProgress, [0, 1], [20, 380])} y2="2" stroke={TREEHOUSE_GREEN} strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
        {milestones.map((m, i) => {
          const progress = spring({ frame, fps, config: SNAPPY, delay: delay + 18 + staggerDelay(i, 14) });
          return (
            <div key={i} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
              opacity: progress, transform: `translateY(${interpolate(progress, [0, 1], [12, 0])}px)`,
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: 16, backgroundColor: TREEHOUSE_GREEN,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontFamily: robotoFamily, fontWeight: 700, color: WHITE,
              }}>{i + 1}</div>
              <div style={{ fontSize: 12, fontFamily: robotoFamily, fontWeight: 600, color: TEXT_COLOR }}>{m.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
