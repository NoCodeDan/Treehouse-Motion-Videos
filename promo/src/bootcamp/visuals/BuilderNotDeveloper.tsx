// BuilderNotDeveloper.tsx
import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, ACCENT_PURPLE, ACCENT_BLUE, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SNAPPY, SMOOTH, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

export const BuilderNotDeveloper: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const terminalProgress = spring({ frame, fps, config: SMOOTH, delay: delay + 5 });
  const morphProgress = spring({ frame, fps, config: SMOOTH, delay: delay + 40 });
  const builderProgress = spring({ frame, fps, config: SNAPPY, delay: delay + 50 });

  const terminalOpacity = interpolate(morphProgress, [0, 1], [1, 0.3]);
  const strikethrough = interpolate(morphProgress, [0, 1], [0, 100]);

  const blocks = [
    { color: TREEHOUSE_GREEN, width: 180, label: "Design" },
    { color: ACCENT_BLUE, width: 150, label: "Connect" },
    { color: ACCENT_PURPLE, width: 200, label: "Launch" },
  ];

  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center", width: 500 }}>
      {/* Terminal side */}
      <div
        style={{
          width: 200,
          padding: 16,
          backgroundColor: "#1e1e2e",
          borderRadius: 12,
          opacity: terminalProgress * terminalOpacity,
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          position: "relative",
        }}
      >
        {["const app = new...", "function build() {", "  return code;", "}"].map((line, i) => (
          <div
            key={i}
            style={{
              fontSize: 13,
              fontFamily: "monospace",
              color: "#a6adc8",
              padding: "3px 0",
              textDecoration: morphProgress > 0.5 ? "line-through" : "none",
            }}
          >
            {line}
          </div>
        ))}
        {/* Red X overlay */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${morphProgress})`,
            fontSize: 48,
            opacity: morphProgress,
          }}
        >
          ❌
        </div>
      </div>

      {/* Arrow */}
      <div style={{ opacity: morphProgress, transform: `scale(${morphProgress})` }}>
        <span style={{ fontSize: 32 }}>→</span>
      </div>

      {/* Builder blocks side */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {blocks.map((block, i) => {
          const bp = spring({
            frame,
            fps,
            config: SNAPPY,
            delay: delay + 55 + staggerDelay(i, 15),
          });
          const tx = interpolate(bp, [0, 1], [40, 0]);
          return (
            <div
              key={i}
              style={{
                width: block.width,
                height: 50,
                backgroundColor: block.color,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: bp,
                transform: `translateX(${tx}px)`,
                boxShadow: "0 3px 12px rgba(0,0,0,0.1)",
              }}
            >
              <span style={{ fontSize: 16, fontFamily: quicksandFamily, fontWeight: 700, color: WHITE }}>
                {block.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
