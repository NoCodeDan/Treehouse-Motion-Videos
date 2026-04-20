import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TEXT_LIGHT, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

export const BugReportVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardProgress = spring({ frame, fps, config: SNAPPY, delay });
  const fields = [
    { label: "What I was doing", value: "[describe the action]" },
    { label: "What happened", value: "[the actual result]" },
    { label: "What I expected", value: "[the desired result]" },
  ];

  return (
    <div style={{
      backgroundColor: WHITE, borderRadius: 20, padding: "24px 28px",
      borderTop: `5px solid #e74c3c`, boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
      opacity: cardProgress, transform: `scale(${interpolate(cardProgress, [0, 1], [0.9, 1])})`,
      width: 340,
    }}>
      <div style={{ fontSize: 18, fontFamily: quicksandFamily, fontWeight: 700, color: "#e74c3c", marginBottom: 14 }}>
        Bug Report
      </div>
      {fields.map((field, i) => {
        const progress = spring({ frame, fps, config: SNAPPY, delay: delay + 12 + staggerDelay(i, 10) });
        return (
          <div key={i} style={{
            opacity: progress, marginBottom: 10,
            transform: `translateX(${interpolate(progress, [0, 1], [20, 0])}px)`,
          }}>
            <div style={{ fontSize: 11, fontFamily: robotoFamily, fontWeight: 700, color: "#e74c3c", textTransform: "uppercase", letterSpacing: 1 }}>{field.label}</div>
            <div style={{ fontSize: 14, fontFamily: robotoFamily, fontWeight: 400, color: TEXT_LIGHT }}>{field.value}</div>
          </div>
        );
      })}
    </div>
  );
};
