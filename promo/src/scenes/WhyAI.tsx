import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { DotGridBg } from "../components/DotGridBg";
import { quicksandFamily, robotoFamily } from "../fonts";
import { SMOOTH, SNAPPY, staggerDelay } from "../lib/animations";
import { TREEHOUSE_GREEN, TEXT_COLOR, TEXT_LIGHT, BG_LIGHT } from "../lib/brand";

export const WhyAI: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const statements = [
    { icon: "⚡", text: "AI agents are transforming every industry" },
    { icon: "🏢", text: "Companies need AI-native talent now" },
    { icon: "🚀", text: "The builders who start now will lead" },
  ];

  return (
    <AbsoluteFill>
      <DotGridBg color={BG_LIGHT} />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 120px",
          gap: 48,
        }}
      >
        {/* Headline */}
        {(() => {
          const headProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: 20,
          });
          const translateY = interpolate(headProgress, [0, 1], [30, 0]);
          return (
            <div
              style={{
                fontFamily: quicksandFamily,
                fontSize: 64,
                fontWeight: 700,
                color: TEXT_COLOR,
                textAlign: "center",
                opacity: headProgress,
                transform: `translateY(${translateY}px)`,
                lineHeight: 1.2,
              }}
            >
              AI Is Moving Fast
            </div>
          );
        })()}

        {/* Subheading */}
        {(() => {
          const subProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: 60,
          });
          return (
            <div
              style={{
                fontFamily: robotoFamily,
                fontSize: 26,
                fontWeight: 400,
                color: TEXT_LIGHT,
                textAlign: "center",
                opacity: subProgress,
                maxWidth: 700,
                lineHeight: 1.5,
              }}
            >
              Most people feel behind. This program fixes that.
              <br />
              In 30 days, you go from curious to building real things.
            </div>
          );
        })()}

        {/* Statement cards */}
        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 12,
          }}
        >
          {statements.map((stmt, i) => {
            const cardProgress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: 200 + staggerDelay(i, 60),
            });
            const translateY = interpolate(cardProgress, [0, 1], [40, 0]);

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 18,
                  padding: "36px 32px",
                  backgroundColor: "white",
                  borderRadius: 18,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  width: 360,
                  opacity: cardProgress,
                  transform: `translateY(${translateY}px)`,
                  borderBottom: `3px solid ${TREEHOUSE_GREEN}`,
                }}
              >
                <div style={{ fontSize: 44 }}>{stmt.icon}</div>
                <div
                  style={{
                    fontFamily: robotoFamily,
                    fontSize: 22,
                    fontWeight: 500,
                    color: TEXT_COLOR,
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  {stmt.text}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
