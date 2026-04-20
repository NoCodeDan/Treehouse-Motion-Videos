// EvaluationChecklist.tsx
import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily } from "../../fonts";

const items = [
  "Is the response accurate?",
  "Does it understand context?",
  "How specific is the output?",
  "Would you trust this answer?",
];

export const EvaluationChecklist: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, width: 420 }}>
      {items.map((item, i) => {
        const itemP = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: delay + staggerDelay(i, 20),
        });
        const checkP = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: delay + staggerDelay(i, 20) + 30,
        });
        const tx = interpolate(itemP, [0, 1], [30, 0]);

        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              backgroundColor: WHITE,
              padding: "14px 20px",
              borderRadius: 12,
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              opacity: itemP,
              transform: `translateX(${tx}px)`,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: `2px solid ${interpolate(checkP, [0, 1], [0, 1]) > 0.5 ? TREEHOUSE_GREEN : "#ddd"}`,
                backgroundColor: checkP > 0.5 ? TREEHOUSE_GREEN : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "none",
              }}
            >
              {checkP > 0.5 && (
                <span style={{ color: WHITE, fontSize: 18, opacity: checkP }}>✓</span>
              )}
            </div>
            <span style={{ fontSize: 17, fontFamily: robotoFamily, fontWeight: 500, color: TEXT_COLOR }}>
              {item}
            </span>
          </div>
        );
      })}
    </div>
  );
};
