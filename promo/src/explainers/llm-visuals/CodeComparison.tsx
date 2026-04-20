import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { robotoFamily } from "../../fonts";
import {
  TREEHOUSE_GREEN,
  TEXT_COLOR,
  TEXT_LIGHT,
  WHITE,
} from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";

const CODE_LINES = [
  'if (input === "hello") {',
  '  return "Hi there!";',
  '} else if (input === "bye") {',
  '  return "Goodbye!";',
  "} else {",
  '  return "I don\'t understand";',
  "}",
];

const NATURAL_LINES = [
  '"Write a friendly chatbot',
  "that greets users, says goodbye,",
  'and handles any conversation"',
];

export const CodeComparison: React.FC<{ delay?: number }> = ({
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const leftProgress = spring({
    frame,
    fps,
    config: SNAPPY,
    delay: delay + 5,
  });
  const rightProgress = spring({
    frame,
    fps,
    config: SNAPPY,
    delay: delay + 20,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 32,
        width: "100%",
        maxWidth: 1000,
      }}
    >
      {/* Traditional code */}
      <div
        style={{
          flex: 1,
          opacity: leftProgress,
          transform: `translateX(${interpolate(leftProgress, [0, 1], [-30, 0])}px)`,
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontFamily: robotoFamily,
            fontWeight: 700,
            color: TEXT_LIGHT,
            textTransform: "uppercase",
            letterSpacing: 1.2,
            marginBottom: 12,
          }}
        >
          Traditional Code
        </div>
        <div
          style={{
            backgroundColor: "#1e1e2e",
            borderRadius: 14,
            padding: "24px 28px",
            fontFamily: "monospace",
            fontSize: 17,
            lineHeight: 1.7,
            color: "#cdd6f4",
          }}
        >
          {CODE_LINES.map((line, i) => {
            const lineProgress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: delay + 25 + staggerDelay(i, 8),
            });
            return (
              <div
                key={i}
                style={{
                  opacity: lineProgress,
                  whiteSpace: "pre",
                }}
              >
                {line}
              </div>
            );
          })}
        </div>
      </div>

      {/* LLM prompt */}
      <div
        style={{
          flex: 1,
          opacity: rightProgress,
          transform: `translateX(${interpolate(rightProgress, [0, 1], [30, 0])}px)`,
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontFamily: robotoFamily,
            fontWeight: 700,
            color: TREEHOUSE_GREEN,
            textTransform: "uppercase",
            letterSpacing: 1.2,
            marginBottom: 12,
          }}
        >
          With an LLM
        </div>
        <div
          style={{
            backgroundColor: WHITE,
            borderRadius: 14,
            border: `2px solid ${TREEHOUSE_GREEN}`,
            padding: "24px 28px",
            fontFamily: robotoFamily,
            fontSize: 22,
            lineHeight: 1.8,
            color: TEXT_COLOR,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {NATURAL_LINES.map((line, i) => {
            const lineProgress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: delay + 50 + staggerDelay(i, 12),
            });
            return (
              <div
                key={i}
                style={{
                  opacity: lineProgress,
                }}
              >
                {line}
              </div>
            );
          })}
        </div>
        <div
          style={{
            marginTop: 12,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {(() => {
            const checkProgress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: delay + 95,
            });
            return (
              <>
                <span
                  style={{
                    fontSize: 20,
                    opacity: checkProgress,
                    transform: `scale(${checkProgress})`,
                    display: "inline-block",
                  }}
                >
                  ✨
                </span>
                <span
                  style={{
                    fontSize: 16,
                    fontFamily: robotoFamily,
                    fontWeight: 500,
                    color: TREEHOUSE_GREEN,
                    opacity: checkProgress,
                  }}
                >
                  Handles infinite variations
                </span>
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
};
