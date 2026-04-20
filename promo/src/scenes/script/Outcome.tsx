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
import { TREEHOUSE_GREEN, TEXT_COLOR, TEXT_LIGHT, BG_LIGHT } from "../../lib/brand";

export const Outcome: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const negations = [
    "You don't just watch videos.",
    "You don't just learn theory.",
  ];

  const punchline = "You build something real. And you ship it.";

  const outcomes = [
    "A working app, agent, or dashboard",
    "Skills you can reuse immediately",
    "Confidence to keep building with AI",
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
          gap: 24,
        }}
      >
        {/* Negation lines */}
        {negations.map((text, i) => {
          const prog = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: 20 + staggerDelay(i, 45),
          });
          const y = interpolate(prog, [0, 1], [20, 0]);
          return (
            <div
              key={i}
              style={{
                fontFamily: quicksandFamily,
                fontSize: 40,
                fontWeight: 600,
                color: TEXT_LIGHT,
                textAlign: "center",
                opacity: prog,
                transform: `translateY(${y}px)`,
                lineHeight: 1.3,
              }}
            >
              {text}
            </div>
          );
        })}

        {/* Punchline */}
        {(() => {
          const prog = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: 120,
          });
          const y = interpolate(prog, [0, 1], [30, 0]);
          const scale = interpolate(prog, [0, 1], [0.95, 1]);
          return (
            <div
              style={{
                fontFamily: quicksandFamily,
                fontSize: 56,
                fontWeight: 700,
                color: TEXT_COLOR,
                textAlign: "center",
                opacity: prog,
                transform: `translateY(${y}px) scale(${scale})`,
                lineHeight: 1.2,
                marginTop: 16,
                marginBottom: 16,
              }}
            >
              {punchline}
            </div>
          );
        })()}

        {/* Outcome cards */}
        <div style={{ display: "flex", gap: 24, marginTop: 12 }}>
          {outcomes.map((item, i) => {
            const prog = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: 180 + staggerDelay(i, 30),
            });
            const y = interpolate(prog, [0, 1], [30, 0]);
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "18px 24px",
                  backgroundColor: "white",
                  borderRadius: 14,
                  boxShadow: "0 3px 16px rgba(0,0,0,0.06)",
                  opacity: prog,
                  transform: `translateY(${y}px)`,
                  borderLeft: `4px solid ${TREEHOUSE_GREEN}`,
                }}
              >
                <div
                  style={{
                    fontFamily: robotoFamily,
                    fontSize: 18,
                    fontWeight: 500,
                    color: TEXT_COLOR,
                    lineHeight: 1.4,
                  }}
                >
                  {item}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
