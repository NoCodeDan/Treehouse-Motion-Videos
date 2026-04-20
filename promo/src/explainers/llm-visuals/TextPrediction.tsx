import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { robotoFamily } from "../../fonts";
import { TREEHOUSE_GREEN, TEXT_COLOR, WHITE, BG_OFF_WHITE } from "../../lib/brand";
import { SMOOTH } from "../../lib/animations";

const WORDS = ["The", "cat", "sat", "on", "the", "warm", "sunny", "windowsill"];

export const TextPrediction: React.FC<{ delay?: number }> = ({
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cursorBlink = Math.floor((frame - delay) / 15) % 2 === 0;

  return (
    <div
      style={{
        backgroundColor: WHITE,
        borderRadius: 16,
        padding: "32px 36px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        width: 420,
        minHeight: 220,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontFamily: robotoFamily,
          fontWeight: 600,
          color: TREEHOUSE_GREEN,
          textTransform: "uppercase",
          letterSpacing: 1.2,
        }}
      >
        Next word prediction
      </div>

      <div
        style={{
          backgroundColor: BG_OFF_WHITE,
          borderRadius: 10,
          padding: "20px 24px",
          minHeight: 80,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 8,
        }}
      >
        {WORDS.map((word, i) => {
          const wordProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: delay + 20 + i * 18,
          });

          return (
            <span
              key={i}
              style={{
                fontSize: 26,
                fontFamily: robotoFamily,
                fontWeight: 500,
                color: TEXT_COLOR,
                opacity: wordProgress,
                transform: `translateY(${interpolate(wordProgress, [0, 1], [8, 0])}px)`,
                display: "inline-block",
              }}
            >
              {word}
            </span>
          );
        })}
        <span
          style={{
            width: 3,
            height: 28,
            backgroundColor: TREEHOUSE_GREEN,
            borderRadius: 2,
            opacity: frame > delay + 20 ? (cursorBlink ? 1 : 0) : 0,
            display: "inline-block",
            marginLeft: 2,
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        {["windowsill", "mat", "roof"].map((suggestion, i) => {
          const suggestProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: delay + 20 + WORDS.length * 18 + 10 + i * 8,
          });

          return (
            <div
              key={i}
              style={{
                fontSize: 16,
                fontFamily: robotoFamily,
                fontWeight: 500,
                color: i === 0 ? WHITE : TEXT_COLOR,
                backgroundColor: i === 0 ? TREEHOUSE_GREEN : BG_OFF_WHITE,
                padding: "6px 16px",
                borderRadius: 8,
                opacity: suggestProgress,
                transform: `scale(${suggestProgress})`,
              }}
            >
              {suggestion}
              <span
                style={{
                  marginLeft: 6,
                  fontSize: 13,
                  opacity: 0.7,
                }}
              >
                {i === 0 ? "92%" : i === 1 ? "5%" : "3%"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
