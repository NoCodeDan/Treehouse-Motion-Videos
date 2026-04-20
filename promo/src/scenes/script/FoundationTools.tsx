import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { DotGridBg } from "../../components/DotGridBg";
import { quicksandFamily, robotoFamily } from "../../fonts";
import { SMOOTH, SNAPPY, staggerDelay } from "../../lib/animations";
import { TREEHOUSE_GREEN, TEXT_COLOR, TEXT_LIGHT, TINT_GREEN } from "../../lib/brand";

export const FoundationTools: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bullets = [
    "ChatGPT, Claude, Gemini: when to use what",
    "How to evaluate responses (not blindly trust them)",
    "How to improve outputs through iteration",
  ];

  // Badge
  const badge = spring({ frame, fps, config: SNAPPY, delay: 15 });

  // Section number
  const num = spring({ frame, fps, config: SNAPPY, delay: 35 });

  // Headline
  const head = spring({ frame, fps, config: SMOOTH, delay: 55 });
  const headY = interpolate(head, [0, 1], [30, 0]);

  return (
    <AbsoluteFill>
      <DotGridBg color={TINT_GREEN} dotColor="rgba(105,199,115,0.05)" />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 120px",
          gap: 32,
        }}
      >
        {/* Week badge */}
        <div
          style={{
            backgroundColor: TREEHOUSE_GREEN,
            borderRadius: 50,
            padding: "8px 24px",
            opacity: badge,
            transform: `scale(${badge})`,
          }}
        >
          <span
            style={{
              fontFamily: robotoFamily,
              fontSize: 16,
              fontWeight: 700,
              color: "white",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Weeks 1 & 2: Foundation
          </span>
        </div>

        {/* Section number */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            backgroundColor: TREEHOUSE_GREEN,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: quicksandFamily,
            fontWeight: 700,
            fontSize: 24,
            color: "white",
            opacity: num,
            transform: `scale(${num})`,
          }}
        >
          2
        </div>

        {/* Headline */}
        <div
          style={{
            fontFamily: quicksandFamily,
            fontSize: 52,
            fontWeight: 700,
            color: TEXT_COLOR,
            textAlign: "center",
            opacity: head,
            transform: `translateY(${headY}px)`,
            lineHeight: 1.2,
          }}
        >
          How to Use AI Tools the Right Way
        </div>

        {/* Bullets */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            marginTop: 12,
            maxWidth: 700,
          }}
        >
          {bullets.map((bullet, i) => {
            const prog = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: 110 + staggerDelay(i, 35),
            });
            const x = interpolate(prog, [0, 1], [40, 0]);
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "18px 24px",
                  backgroundColor: "white",
                  borderRadius: 14,
                  boxShadow: "0 3px 14px rgba(0,0,0,0.05)",
                  opacity: prog,
                  transform: `translateX(${x}px)`,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: TREEHOUSE_GREEN,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: robotoFamily,
                    fontSize: 22,
                    color: TEXT_COLOR,
                    fontWeight: 400,
                    lineHeight: 1.4,
                  }}
                >
                  {bullet}
                </span>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
