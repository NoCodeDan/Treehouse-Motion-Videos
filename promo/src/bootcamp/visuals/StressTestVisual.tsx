import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SNAPPY, BOUNCY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

const blocks = [
  { label: "Feature A", result: "crack", color: "#e74c3c", icon: "💥", status: "Needs work" },
  { label: "Feature B", result: "wobble", color: "#f39c12", icon: "😰", status: "Shaky" },
  { label: "Feature C", result: "hold", color: TREEHOUSE_GREEN, icon: "💪", status: "Solid!" },
];

export const StressTestVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Hammer comes down
  const hammerP = spring({ frame, fps, config: BOUNCY, delay: delay + 30 });
  const hammerY = interpolate(hammerP, [0, 1], [-60, 0]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, width: 460 }}>
      {/* Hammer */}
      <div style={{ fontSize: 48, transform: `translateY(${hammerY}px)`, opacity: hammerP }}>
        🔨
      </div>

      {/* Blocks */}
      <div style={{ display: "flex", gap: 16, width: "100%" }}>
        {blocks.map((block, i) => {
          const bp = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 20) });
          const impactP = spring({ frame, fps, config: BOUNCY, delay: delay + 60 + staggerDelay(i, 20) });

          const wobble = block.result === "wobble"
            ? Math.sin(frame * 0.3) * interpolate(impactP, [0, 1], [0, 3])
            : 0;

          const crackOpacity = block.result === "crack" ? impactP : 0;

          return (
            <div
              key={i}
              style={{
                flex: 1,
                backgroundColor: WHITE,
                borderRadius: 14,
                padding: "20px 16px",
                border: `3px solid ${block.color}`,
                boxShadow: "0 3px 14px rgba(0,0,0,0.06)",
                opacity: bp,
                transform: `rotate(${wobble}deg)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                textAlign: "center",
                position: "relative",
              }}
            >
              <span style={{ fontSize: 32 }}>{block.icon}</span>
              <span style={{ fontSize: 15, fontFamily: quicksandFamily, fontWeight: 700, color: TEXT_COLOR }}>
                {block.label}
              </span>
              <span
                style={{
                  fontSize: 13,
                  fontFamily: robotoFamily,
                  fontWeight: 600,
                  color: block.color,
                  opacity: impactP,
                }}
              >
                {block.status}
              </span>
              {/* Crack overlay for Feature A */}
              {block.result === "crack" && (
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    fontSize: 20,
                    opacity: crackOpacity,
                  }}
                >
                  ⚡
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
