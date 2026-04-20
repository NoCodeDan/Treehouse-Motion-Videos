import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, TEXT_COLOR, TEXT_LIGHT, WHITE } from "../../lib/brand";
import { SMOOTH, SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

const checklist = [
  "Settled on your idea",
  "Defined the problem it solves",
  "Described it in one sentence",
  "AI-assisted refinement complete",
];

export const ProjectMilestone: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardP = spring({ frame, fps, config: SMOOTH, delay: delay + 5 });
  const scaleP = interpolate(cardP, [0, 1], [0.9, 1]);

  return (
    <div
      style={{
        width: 420,
        backgroundColor: WHITE,
        borderRadius: 20,
        padding: "32px 28px",
        boxShadow: "0 6px 30px rgba(0,0,0,0.1)",
        border: `3px solid ${TREEHOUSE_GREEN}`,
        opacity: cardP,
        transform: `scale(${scaleP})`,
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: 36 }}>{"\u{1F3C6}"}</span>
        <div style={{ fontSize: 22, fontFamily: quicksandFamily, fontWeight: 700, color: TEXT_COLOR, marginTop: 8 }}>
          Milestone: Idea Defined
        </div>
        <div style={{ fontSize: 14, fontFamily: robotoFamily, color: TEXT_LIGHT, marginTop: 4 }}>
          Your first real deliverable
        </div>
      </div>

      {/* Checklist */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {checklist.map((item, i) => {
          const ip = spring({ frame, fps, config: SNAPPY, delay: delay + 30 + staggerDelay(i, 18) });
          const cp = spring({ frame, fps, config: SNAPPY, delay: delay + 30 + staggerDelay(i, 18) + 25 });
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                opacity: ip,
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  border: `2px solid ${cp > 0.5 ? TREEHOUSE_GREEN : "#ddd"}`,
                  backgroundColor: cp > 0.5 ? TREEHOUSE_GREEN : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {cp > 0.5 && <span style={{ color: WHITE, fontSize: 13 }}>{"\u2713"}</span>}
              </div>
              <span style={{ fontSize: 15, fontFamily: robotoFamily, fontWeight: 400, color: TEXT_COLOR }}>
                {item}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
