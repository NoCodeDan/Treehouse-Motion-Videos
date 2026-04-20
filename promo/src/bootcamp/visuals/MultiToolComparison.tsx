// MultiToolComparison.tsx
import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TEXT_COLOR, TEXT_LIGHT, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

const tools = [
  { name: "ChatGPT", color: "#10a37f", response: "Here are 5 strategies for growth..." },
  { name: "Claude", color: "#7c3aed", response: "Let me break this down into phases..." },
  { name: "Gemini", color: "#4285f4", response: "Based on current trends, consider..." },
];

export const MultiToolComparison: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", gap: 14, width: 520 }}>
      {tools.map((tool, i) => {
        const p = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: delay + staggerDelay(i, 18),
        });
        const ty = interpolate(p, [0, 1], [40, 0]);
        const responseP = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: delay + 50 + staggerDelay(i, 12),
        });
        return (
          <div
            key={i}
            style={{
              flex: 1,
              backgroundColor: WHITE,
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 3px 16px rgba(0,0,0,0.06)",
              opacity: p,
              transform: `translateY(${ty}px)`,
            }}
          >
            {/* Header */}
            <div
              style={{
                backgroundColor: tool.color,
                padding: "10px 14px",
                fontSize: 14,
                fontFamily: quicksandFamily,
                fontWeight: 700,
                color: WHITE,
              }}
            >
              {tool.name}
            </div>
            {/* Prompt */}
            <div style={{ padding: "10px 12px", borderBottom: "1px solid #eee" }}>
              <div
                style={{
                  fontSize: 11,
                  fontFamily: robotoFamily,
                  color: TEXT_LIGHT,
                  padding: "6px 10px",
                  backgroundColor: "#f7f7f7",
                  borderRadius: 8,
                }}
              >
                "Help me grow my SaaS"
              </div>
            </div>
            {/* Response */}
            <div style={{ padding: "10px 12px", opacity: responseP }}>
              <div style={{ fontSize: 12, fontFamily: robotoFamily, color: TEXT_COLOR, lineHeight: 1.5 }}>
                {tool.response}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
