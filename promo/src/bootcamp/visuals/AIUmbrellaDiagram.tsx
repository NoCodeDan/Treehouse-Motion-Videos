// AIUmbrellaDiagram.tsx
import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, ACCENT_PURPLE, ACCENT_BLUE, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SMOOTH, SNAPPY, staggerDelay } from "../../lib/animations";
import { quicksandFamily, robotoFamily } from "../../fonts";

const branches = [
  { label: "Computer\nVision", icon: "👁️", color: ACCENT_BLUE },
  { label: "Machine\nLearning", icon: "📊", color: ACCENT_PURPLE },
  { label: "Large Language\nModels", icon: "💬", color: TREEHOUSE_GREEN },
];

export const AIUmbrellaDiagram: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const umbrellaProgress = spring({ frame, fps, config: SMOOTH, delay: delay + 5 });
  const labelProgress = spring({ frame, fps, config: SNAPPY, delay: delay + 20 });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 500 }}>
      {/* AI label at top */}
      <div
        style={{
          fontSize: 28,
          fontFamily: quicksandFamily,
          fontWeight: 700,
          color: TEXT_COLOR,
          marginBottom: 8,
          opacity: labelProgress,
          transform: `scale(${labelProgress})`,
        }}
      >
        🤖 Artificial Intelligence
      </div>

      {/* Umbrella arc SVG */}
      <svg width="440" height="80" viewBox="0 0 440 80" style={{ opacity: umbrellaProgress }}>
        <path
          d="M 40 70 Q 220 0 400 70"
          fill="none"
          stroke={TREEHOUSE_GREEN}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="600"
          strokeDashoffset={interpolate(umbrellaProgress, [0, 1], [600, 0])}
        />
        {/* Vertical lines down to branches */}
        {[110, 220, 330].map((x, i) => {
          const lp = spring({ frame, fps, config: SMOOTH, delay: delay + 25 + i * 10 });
          return (
            <line
              key={i}
              x1={x}
              y1={interpolate(lp, [0, 1], [40, 40])}
              x2={x}
              y2={interpolate(lp, [0, 1], [40, 75])}
              stroke={branches[i].color}
              strokeWidth="2"
              opacity={lp}
            />
          );
        })}
      </svg>

      {/* Branch nodes */}
      <div style={{ display: "flex", gap: 24, marginTop: 4 }}>
        {branches.map((branch, i) => {
          const bp = spring({
            frame,
            fps,
            config: SNAPPY,
            delay: delay + 35 + staggerDelay(i, 15),
          });
          const ty = interpolate(bp, [0, 1], [20, 0]);
          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                opacity: bp,
                transform: `translateY(${ty}px)`,
              }}
            >
              <div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 20,
                  backgroundColor: WHITE,
                  border: `3px solid ${branch.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 36,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                }}
              >
                {branch.icon}
              </div>
              <span
                style={{
                  fontSize: 13,
                  fontFamily: robotoFamily,
                  fontWeight: 600,
                  color: TEXT_COLOR,
                  textAlign: "center",
                  whiteSpace: "pre-line",
                  lineHeight: 1.3,
                }}
              >
                {branch.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
