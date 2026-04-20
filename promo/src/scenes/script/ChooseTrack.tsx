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
import {
  TREEHOUSE_GREEN,
  ACCENT_PURPLE,
  ACCENT_BLUE,
  TEXT_COLOR,
  TEXT_LIGHT,
  BG_LIGHT,
} from "../../lib/brand";

export const ChooseTrack: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const tracks = [
    {
      number: "A",
      title: "AI Agents",
      tagline: "Build AI that works for you",
      color: TREEHOUSE_GREEN,
    },
    {
      number: "B",
      title: "Web Apps",
      tagline: "Turn your idea into a real product",
      color: ACCENT_PURPLE,
    },
    {
      number: "C",
      title: "Data Dashboards",
      tagline: "Turn your data into decisions",
      color: ACCENT_BLUE,
    },
  ];

  // Badge
  const badge = spring({ frame, fps, config: SNAPPY, delay: 15 });

  // Headline
  const head = spring({ frame, fps, config: SMOOTH, delay: 45 });
  const headY = interpolate(head, [0, 1], [30, 0]);

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
        {/* Badge */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #69c773, #9b6fc7, #5a9fd4)",
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
            Weeks 3 & 4: Specialization
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontFamily: quicksandFamily,
            fontSize: 56,
            fontWeight: 700,
            color: TEXT_COLOR,
            textAlign: "center",
            opacity: head,
            transform: `translateY(${headY}px)`,
            lineHeight: 1.2,
          }}
        >
          Choose Your Track
        </div>

        {/* Three track cards */}
        <div style={{ display: "flex", gap: 28, marginTop: 12 }}>
          {tracks.map((track, i) => {
            const prog = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: 100 + staggerDelay(i, 35),
            });
            const y = interpolate(prog, [0, 1], [50, 0]);
            const scale = interpolate(prog, [0, 1], [0.9, 1]);
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 14,
                  padding: "32px 28px",
                  backgroundColor: "white",
                  borderRadius: 20,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  width: 300,
                  opacity: prog,
                  transform: `translateY(${y}px) scale(${scale})`,
                  borderTop: `4px solid ${track.color}`,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: track.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: quicksandFamily,
                    fontWeight: 700,
                    fontSize: 20,
                    color: "white",
                  }}
                >
                  {track.number}
                </div>
                <div
                  style={{
                    fontFamily: quicksandFamily,
                    fontSize: 24,
                    fontWeight: 700,
                    color: TEXT_COLOR,
                    textAlign: "center",
                  }}
                >
                  {track.title}
                </div>
                <div
                  style={{
                    fontFamily: robotoFamily,
                    fontSize: 16,
                    color: TEXT_LIGHT,
                    textAlign: "center",
                    fontStyle: "italic",
                    lineHeight: 1.4,
                  }}
                >
                  "{track.tagline}"
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
