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
import { TREEHOUSE_GREEN, TEXT_COLOR, TEXT_LIGHT, TINT_GREEN } from "../lib/brand";

export const Foundations: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const topics = [
    {
      icon: "💬",
      title: "Think + Prompt Effectively",
      desc: "Turn vague ideas into clear instructions for AI",
    },
    {
      icon: "🤖",
      title: "Use AI Tools the Right Way",
      desc: "ChatGPT, Claude, Gemini: when to use what",
    },
    {
      icon: "🧠",
      title: "Think Like a Builder",
      desc: "Turn ideas into real, solvable problems",
    },
    {
      icon: "🛠️",
      title: "Get Ready to Build",
      desc: "A clear idea, a real spec, ready to ship",
    },
  ];

  return (
    <AbsoluteFill>
      <DotGridBg color={TINT_GREEN} dotColor="rgba(105,199,115,0.05)" />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 100px",
          gap: 36,
        }}
      >
        {/* Week badge */}
        {(() => {
          const badgeProgress = spring({
            frame,
            fps,
            config: SNAPPY,
            delay: 15,
          });
          return (
            <div
              style={{
                backgroundColor: TREEHOUSE_GREEN,
                borderRadius: 50,
                padding: "8px 24px",
                opacity: badgeProgress,
                transform: `scale(${badgeProgress})`,
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
                Weeks 1 & 2
              </span>
            </div>
          );
        })()}

        {/* Headline */}
        {(() => {
          const headProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: 45,
          });
          const translateY = interpolate(headProgress, [0, 1], [30, 0]);
          return (
            <div
              style={{
                fontFamily: quicksandFamily,
                fontSize: 56,
                fontWeight: 700,
                color: TEXT_COLOR,
                textAlign: "center",
                opacity: headProgress,
                transform: `translateY(${translateY}px)`,
                lineHeight: 1.2,
              }}
            >
              AI Foundations for Everyone
            </div>
          );
        })()}

        {/* Subtext */}
        {(() => {
          const subProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: 80,
          });
          return (
            <div
              style={{
                fontFamily: robotoFamily,
                fontSize: 22,
                color: TEXT_LIGHT,
                textAlign: "center",
                opacity: subProgress,
                maxWidth: 600,
              }}
            >
              Everyone learns the same foundation, then you choose your path.
            </div>
          );
        })()}

        {/* Topic grid (2x2) */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 28,
            justifyContent: "center",
            maxWidth: 1200,
            marginTop: 8,
          }}
        >
          {topics.map((topic, i) => {
            const cardProgress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: 115 + staggerDelay(i, 40),
            });
            const translateY = interpolate(cardProgress, [0, 1], [30, 0]);

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  padding: "28px 32px",
                  backgroundColor: "white",
                  borderRadius: 18,
                  boxShadow: "0 3px 16px rgba(0,0,0,0.05)",
                  width: 550,
                  opacity: cardProgress,
                  transform: `translateY(${translateY}px)`,
                }}
              >
                <div
                  style={{
                    fontSize: 44,
                    width: 64,
                    height: 64,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: TINT_GREEN,
                    borderRadius: 12,
                    flexShrink: 0,
                  }}
                >
                  {topic.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: quicksandFamily,
                      fontSize: 24,
                      fontWeight: 700,
                      color: TEXT_COLOR,
                    }}
                  >
                    {topic.title}
                  </div>
                  <div
                    style={{
                      fontFamily: robotoFamily,
                      fontSize: 18,
                      color: TEXT_LIGHT,
                      marginTop: 5,
                    }}
                  >
                    {topic.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
