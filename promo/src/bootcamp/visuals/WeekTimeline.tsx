// WeekTimeline.tsx
import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, ACCENT_PURPLE, ACCENT_BLUE, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { quicksandFamily, robotoFamily } from "../../fonts";

const weeks = [
  { num: 1, label: "Foundations", color: TREEHOUSE_GREEN },
  { num: 2, label: "Planning", color: ACCENT_BLUE },
  { num: 3, label: "Building", color: ACCENT_PURPLE },
  { num: 4, label: "Ship It!", color: TREEHOUSE_GREEN },
];

export const WeekTimeline: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0, width: 520 }}>
      {weeks.map((week, i) => {
        const progress = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: delay + staggerDelay(i, 20),
        });
        const translateY = interpolate(progress, [0, 1], [30, 0]);
        const lineProgress = i < weeks.length - 1
          ? spring({ frame, fps, config: { damping: 200 }, delay: delay + staggerDelay(i, 20) + 15 })
          : 0;

        return (
          <React.Fragment key={i}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                opacity: progress,
                transform: `translateY(${translateY}px)`,
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 16,
                  backgroundColor: WHITE,
                  border: `3px solid ${week.color}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                }}
              >
                <span style={{ fontSize: 14, fontFamily: robotoFamily, fontWeight: 500, color: week.color }}>
                  Week
                </span>
                <span style={{ fontSize: 28, fontFamily: quicksandFamily, fontWeight: 700, color: week.color }}>
                  {week.num}
                </span>
              </div>
              <span style={{ fontSize: 15, fontFamily: robotoFamily, fontWeight: 600, color: TEXT_COLOR, textAlign: "center", maxWidth: 90 }}>
                {week.label}
              </span>
            </div>
            {i < weeks.length - 1 && (
              <div style={{ width: 40, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="40" height="12" viewBox="0 0 40 12">
                  <line x1="0" y1="6" x2={interpolate(lineProgress, [0, 1], [0, 30])} y2="6" stroke={week.color} strokeWidth="2" strokeLinecap="round" />
                  <polygon points="30,2 40,6 30,10" fill={week.color} opacity={lineProgress} />
                </svg>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
