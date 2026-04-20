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
import {
  TREEHOUSE_GREEN,
  ACCENT_PURPLE,
  ACCENT_BLUE,
  TEXT_COLOR,
  TEXT_LIGHT,
  BG_LIGHT,
} from "../lib/brand";

export const ChooseTrack: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const tracks = [
    {
      number: "01",
      title: "Build Your Own Agent",
      color: TREEHOUSE_GREEN,
      icon: "🤖",
    },
    {
      number: "02",
      title: "Build Your Own App",
      color: ACCENT_PURPLE,
      icon: "💻",
    },
    {
      number: "03",
      title: "Build Your Own Data Dashboard",
      color: ACCENT_BLUE,
      icon: "📊",
    },
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
                background: "linear-gradient(135deg, #69c773, #9b6fc7, #5a9fd4)",
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
                Weeks 3 & 4
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
              Choose Your Specialization
            </div>
          );
        })()}

        {/* Subtext */}
        {(() => {
          const subProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: 75,
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
              Pick the track that excites you and build something real.
            </div>
          );
        })()}

        {/* Three track preview cards */}
        <div
          style={{
            display: "flex",
            gap: 28,
            marginTop: 12,
          }}
        >
          {tracks.map((track, i) => {
            const cardProgress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: 90 + staggerDelay(i, 45),
            });
            const translateY = interpolate(cardProgress, [0, 1], [50, 0]);
            const scale = interpolate(cardProgress, [0, 1], [0.9, 1]);

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 20,
                  padding: "40px 36px",
                  backgroundColor: "white",
                  borderRadius: 22,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  width: 340,
                  opacity: cardProgress,
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  borderTop: `4px solid ${track.color}`,
                }}
              >
                {/* Icon */}
                <div style={{ fontSize: 52 }}>{track.icon}</div>

                {/* Track letter */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    backgroundColor: track.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: quicksandFamily,
                    fontWeight: 700,
                    fontSize: 24,
                    color: "white",
                  }}
                >
                  {track.number}
                </div>

                {/* Title */}
                <div
                  style={{
                    fontFamily: quicksandFamily,
                    fontSize: 24,
                    fontWeight: 700,
                    color: TEXT_COLOR,
                    textAlign: "center",
                    lineHeight: 1.3,
                  }}
                >
                  {track.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrow / "Let's dive in" hint */}
        {(() => {
          const hintProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: 220,
          });
          return (
            <div
              style={{
                fontFamily: robotoFamily,
                fontSize: 26,
                color: TREEHOUSE_GREEN,
                fontWeight: 600,
                opacity: hintProgress,
                marginTop: 8,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Let's look at each track →
            </div>
          );
        })()}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
