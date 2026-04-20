import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

const questions = [
  "Does this solve a real problem?",
  "Will people pay for it?",
  "Can I build a simple version?",
  "Does it fit my skills?",
];

export const ValidationFlow: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, width: 420 }}>
      {questions.map((q, i) => {
        const p = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 22) });
        const checkP = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 22) + 35 });
        const tx = interpolate(p, [0, 1], [30, 0]);
        return (
          <React.Fragment key={i}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                backgroundColor: WHITE,
                padding: "14px 20px",
                borderRadius: 12,
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                width: "100%",
                opacity: p,
                transform: `translateX(${tx}px)`,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 14,
                  backgroundColor: checkP > 0.5 ? TREEHOUSE_GREEN : "#eee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {checkP > 0.5 && <span style={{ color: WHITE, fontSize: 14 }}>{"\u2713"}</span>}
              </div>
              <span style={{ fontSize: 16, fontFamily: robotoFamily, fontWeight: 500, color: TEXT_COLOR }}>
                {q}
              </span>
            </div>
            {i < questions.length - 1 && (
              <div
                style={{
                  width: 2,
                  height: 16,
                  backgroundColor: TREEHOUSE_GREEN,
                  opacity: spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 22) + 20 }),
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
