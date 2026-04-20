import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SMOOTH, SNAPPY, staggerDelay } from "../lib/animations";
import { TREEHOUSE_GREEN, TEXT_COLOR } from "../lib/brand";
import { robotoFamily } from "../fonts";

export const ChatAgent: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerProgress = spring({
    frame,
    fps,
    config: SMOOTH,
    delay,
  });

  // Chat bubbles
  const chatMessages = [
    { text: "What's on my calendar tomorrow?", isUser: true },
    { text: "You have 3 meetings. 2pm is free.", isUser: false },
    { text: "Book a focus block at 2pm", isUser: true },
    { text: "Done! Focus block added.", isUser: false },
  ];

  // Code lines appearing on right
  const codeLines = [
    "def check_calendar(date):",
    "  events = cal_api.get(date)",
    "  return find_free_slots(events)",
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        gap: 30,
        opacity: containerProgress,
        alignItems: "center",
      }}
    >
      {/* Chat bubbles */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          padding: 20,
        }}
      >
        {chatMessages.map((msg, i) => {
          const msgProgress = spring({
            frame,
            fps,
            config: SNAPPY,
            delay: delay + 15 + staggerDelay(i, 30),
          });
          const translateY = interpolate(msgProgress, [0, 1], [20, 0]);

          return (
            <div
              key={i}
              style={{
                alignSelf: msg.isUser ? "flex-end" : "flex-start",
                backgroundColor: msg.isUser ? TREEHOUSE_GREEN : "#f0f0f0",
                color: msg.isUser ? "white" : TEXT_COLOR,
                padding: "10px 16px",
                borderRadius: 14,
                fontFamily: robotoFamily,
                fontSize: 16,
                fontWeight: 500,
                maxWidth: 240,
                opacity: msgProgress,
                transform: `translateY(${translateY}px)`,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              {msg.text}
            </div>
          );
        })}
      </div>

      {/* Code panel */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#1e1e2e",
          borderRadius: 14,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
        }}
      >
        {/* Title bar dots */}
        <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#ff5f56",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#ffbd2e",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#27c93f",
            }}
          />
        </div>
        {codeLines.map((line, i) => {
          const codeProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: delay + 60 + staggerDelay(i, 25),
          });

          return (
            <div
              key={i}
              style={{
                fontFamily: "monospace",
                fontSize: 15,
                color: TREEHOUSE_GREEN,
                opacity: codeProgress,
                whiteSpace: "pre",
              }}
            >
              {line}
            </div>
          );
        })}

        {/* Sparkle */}
        {(() => {
          const sparkleProgress = spring({
            frame,
            fps,
            config: { damping: 8 },
            delay: delay + 140,
          });
          return (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) scale(${sparkleProgress}) rotate(${sparkleProgress * 45}deg)`,
                opacity: interpolate(sparkleProgress, [0, 0.5, 1], [0, 1, 0.7]),
                fontSize: 28,
                color: TREEHOUSE_GREEN,
              }}
            >
              ✦
            </div>
          );
        })()}
      </div>
    </div>
  );
};
