import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

const levels = [
  { label: "Bad", color: "#e74c3c", prompt: '"Make me a website"', tag: "Vague" },
  { label: "Better", color: "#f39c12", prompt: '"Make me a SaaS landing page with pricing"', tag: "Clearer" },
  { label: "Strong", color: TREEHOUSE_GREEN, prompt: '"Build a SaaS landing page for a project management tool with 3 pricing tiers, testimonials, and a dark theme"', tag: "Specific" },
];

export const PromptTransformation: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 480 }}>
      {levels.map((level, i) => {
        const p = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 30) });
        const tx = interpolate(p, [0, 1], [40, 0]);
        return (
          <div
            key={i}
            style={{
              backgroundColor: WHITE,
              borderRadius: 14,
              padding: "16px 20px",
              borderLeft: `5px solid ${level.color}`,
              boxShadow: "0 3px 14px rgba(0,0,0,0.06)",
              opacity: p,
              transform: `translateX(${tx}px)`,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 16, fontFamily: quicksandFamily, fontWeight: 700, color: level.color }}>
                {level.label}
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontFamily: robotoFamily,
                  fontWeight: 600,
                  color: WHITE,
                  backgroundColor: level.color,
                  padding: "3px 10px",
                  borderRadius: 10,
                }}
              >
                {level.tag}
              </span>
            </div>
            <span style={{ fontSize: 14, fontFamily: robotoFamily, fontWeight: 400, color: TEXT_COLOR, fontStyle: "italic" }}>
              {level.prompt}
            </span>
          </div>
        );
      })}
    </div>
  );
};
