// LLMToolShowcase.tsx
import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TEXT_COLOR, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { quicksandFamily, robotoFamily } from "../../fonts";

const tools = [
  { name: "ChatGPT", icon: "🟢", tagline: "Most popular, by OpenAI", color: "#10a37f" },
  { name: "Claude", icon: "🟣", tagline: "Best for writing & analysis", color: "#7c3aed" },
  { name: "Gemini", icon: "🔵", tagline: "Google's multimodal AI", color: "#4285f4" },
];

export const LLMToolShowcase: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, width: 420 }}>
      {tools.map((tool, i) => {
        const p = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: delay + staggerDelay(i, 20),
        });
        const tx = interpolate(p, [0, 1], [50, 0]);
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              backgroundColor: WHITE,
              padding: "18px 24px",
              borderRadius: 16,
              borderLeft: `5px solid ${tool.color}`,
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              opacity: p,
              transform: `translateX(${tx}px)`,
              marginLeft: i * 20,
            }}
          >
            <span style={{ fontSize: 32 }}>{tool.icon}</span>
            <div>
              <div style={{ fontSize: 20, fontFamily: quicksandFamily, fontWeight: 700, color: TEXT_COLOR }}>
                {tool.name}
              </div>
              <div style={{ fontSize: 14, fontFamily: robotoFamily, fontWeight: 400, color: "#888" }}>
                {tool.tagline}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
