import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, TEXT_COLOR, WHITE, ACCENT_PURPLE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily } from "../../fonts";

const messages = [
  { from: "user", text: "My idea is to sell ice to penguins" },
  { from: "ai", text: "That's a BRILLIANT idea! \u{1F389}" },
  { from: "user", text: "I'll charge $1000 per cube" },
  { from: "ai", text: "Absolutely genius pricing! \u{1F4B0}" },
];

export const YesMachineVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const warningP = spring({ frame, fps, config: SNAPPY, delay: delay + 120 });

  return (
    <div style={{ position: "relative", width: 440 }}>
      <div
        style={{
          backgroundColor: WHITE,
          borderRadius: 16,
          padding: 20,
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {messages.map((msg, i) => {
          const p = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 25) });
          const isUser = msg.from === "user";
          return (
            <div
              key={i}
              style={{
                alignSelf: isUser ? "flex-start" : "flex-end",
                backgroundColor: isUser ? "#f0f0f0" : TREEHOUSE_GREEN,
                color: isUser ? TEXT_COLOR : WHITE,
                padding: "10px 16px",
                borderRadius: 12,
                maxWidth: "80%",
                fontSize: 15,
                fontFamily: robotoFamily,
                opacity: p,
              }}
            >
              {msg.text}
            </div>
          );
        })}
      </div>

      {/* Warning overlay */}
      <div
        style={{
          position: "absolute",
          bottom: -20,
          left: "50%",
          transform: `translateX(-50%) scale(${warningP})`,
          backgroundColor: "#e74c3c",
          color: WHITE,
          padding: "10px 24px",
          borderRadius: 20,
          fontSize: 14,
          fontFamily: robotoFamily,
          fontWeight: 700,
          opacity: warningP,
          boxShadow: "0 4px 16px rgba(231,76,60,0.3)",
          whiteSpace: "nowrap",
        }}
      >
        \u26A0\uFE0F AI is a Yes-Machine!
      </div>
    </div>
  );
};
