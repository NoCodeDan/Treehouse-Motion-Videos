// PredictionVisual.tsx
import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, ACCENT_BLUE, ACCENT_PURPLE, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SMOOTH, SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

const words = ["The", "cat", "sat", "on", "the"];
const predictions = [
  { word: "mat", probability: 0.42, color: TREEHOUSE_GREEN },
  { word: "floor", probability: 0.28, color: ACCENT_BLUE },
  { word: "chair", probability: 0.18, color: ACCENT_PURPLE },
];

export const PredictionVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, width: 440 }}>
      {/* Sentence area */}
      <div
        style={{
          backgroundColor: WHITE,
          borderRadius: 12,
          padding: "16px 20px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          alignItems: "center",
        }}
      >
        {words.map((word, i) => {
          const wp = spring({ frame, fps, config: SMOOTH, delay: delay + staggerDelay(i, 12) });
          return (
            <span
              key={i}
              style={{
                fontSize: 24,
                fontFamily: robotoFamily,
                fontWeight: 500,
                color: TEXT_COLOR,
                opacity: wp,
              }}
            >
              {word}
            </span>
          );
        })}
        {/* Blinking cursor */}
        <span
          style={{
            fontSize: 24,
            color: TREEHOUSE_GREEN,
            opacity: Math.sin(frame * 0.15) > 0 ? 1 : 0,
          }}
        >
          |
        </span>
      </div>

      {/* Prediction bars */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {predictions.map((pred, i) => {
          const pp = spring({
            frame,
            fps,
            config: SNAPPY,
            delay: delay + 70 + staggerDelay(i, 15),
          });
          const barWidth = interpolate(pp, [0, 1], [0, pred.probability * 300]);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, opacity: pp }}>
              <span style={{ fontSize: 18, fontFamily: robotoFamily, fontWeight: 600, color: TEXT_COLOR, width: 60 }}>
                {pred.word}
              </span>
              <div style={{ flex: 1, height: 28, backgroundColor: "#f0f0f0", borderRadius: 8, overflow: "hidden" }}>
                <div
                  style={{
                    width: barWidth,
                    height: "100%",
                    backgroundColor: pred.color,
                    borderRadius: 8,
                  }}
                />
              </div>
              <span style={{ fontSize: 16, fontFamily: robotoFamily, fontWeight: 700, color: pred.color, width: 50 }}>
                {Math.round(pred.probability * 100)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
