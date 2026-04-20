// AIInternVisual.tsx
import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, TEXT_COLOR, WHITE, ACCENT_BLUE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily } from "../../fonts";

const messages = [
  { from: "you", text: "Research competitor pricing" },
  { from: "ai", text: "Found 5 competitors. Here's a summary..." },
  { from: "you", text: "Draft a landing page" },
  { from: "ai", text: "Here's a first draft with 3 sections..." },
];

export const AIInternVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        width: 460,
        backgroundColor: WHITE,
        borderRadius: 16,
        padding: 20,
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          paddingBottom: 10,
          borderBottom: "1px solid #eee",
          opacity: spring({ frame, fps, config: SNAPPY, delay }),
        }}
      >
        <span style={{ fontSize: 20 }}>👤</span>
        <span style={{ fontSize: 15, fontFamily: robotoFamily, fontWeight: 600, color: TEXT_COLOR }}>
          You (Manager)
        </span>
        <span style={{ margin: "0 4px", color: "#ccc" }}>↔</span>
        <span style={{ fontSize: 20 }}>🤖</span>
        <span style={{ fontSize: 15, fontFamily: robotoFamily, fontWeight: 600, color: TEXT_COLOR }}>
          AI (Intern)
        </span>
      </div>
      {/* Messages */}
      {messages.map((msg, i) => {
        const p = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: delay + 15 + staggerDelay(i, 25),
        });
        const tx = interpolate(p, [0, 1], [msg.from === "you" ? -20 : 20, 0]);
        const isUser = msg.from === "you";
        return (
          <div
            key={i}
            style={{
              alignSelf: isUser ? "flex-start" : "flex-end",
              backgroundColor: isUser ? TREEHOUSE_GREEN : "#f0f0f0",
              color: isUser ? WHITE : TEXT_COLOR,
              padding: "10px 16px",
              borderRadius: 12,
              maxWidth: "80%",
              fontSize: 15,
              fontFamily: robotoFamily,
              fontWeight: 400,
              opacity: p,
              transform: `translateX(${tx}px)`,
            }}
          >
            {msg.text}
          </div>
        );
      })}
    </div>
  );
};
