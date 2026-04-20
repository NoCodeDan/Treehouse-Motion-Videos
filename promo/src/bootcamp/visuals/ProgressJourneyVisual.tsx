import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TEXT_LIGHT, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, SMOOTH, staggerDelay } from "../../lib/animations";
import { robotoFamily } from "../../fonts";

export const ProgressJourneyVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const milestones = [
    { day: "15", label: "First Agent" },
    { day: "19", label: "Reliable" },
    { day: "22", label: "Tools" },
    { day: "26", label: "Ship!" },
    { day: "28", label: "Real Tool" },
  ];

  const lineProgress = spring({ frame, fps, config: SMOOTH, delay: delay + 10 });

  return (
    <div style={{ position: "relative", width: 400, height: 140 }}>
      <svg width="400" height="4" style={{ position: "absolute", top: 50, left: 0 }}>
        <line x1="20" y1="2" x2={interpolate(lineProgress, [0, 1], [20, 380])} y2="2"
          stroke={TREEHOUSE_GREEN} strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
        {milestones.map((m, i) => {
          const progress = spring({ frame, fps, config: SNAPPY, delay: delay + 20 + staggerDelay(i, 16) });
          return (
            <div key={i} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
              opacity: progress, transform: `translateY(${interpolate(progress, [0, 1], [15, 0])}px)`,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 20, backgroundColor: WHITE,
                border: `3px solid ${TREEHOUSE_GREEN}`, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontFamily: robotoFamily, fontWeight: 700, color: TREEHOUSE_GREEN,
              }}>
                {m.day}
              </div>
              <div style={{ fontSize: 11, fontFamily: robotoFamily, fontWeight: 600, color: TEXT_COLOR, textAlign: "center" }}>
                {m.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
