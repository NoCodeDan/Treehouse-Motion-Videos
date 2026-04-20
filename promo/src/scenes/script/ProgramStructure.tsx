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
import { SMOOTH, SNAPPY } from "../../lib/animations";
import {
  TREEHOUSE_GREEN,
  TEXT_COLOR,
  TEXT_LIGHT,
  BG_LIGHT,
  TINT_GREEN,
} from "../../lib/brand";

export const ProgramStructure: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Badge
  const badge = spring({ frame, fps, config: SNAPPY, delay: 15 });

  // Headline
  const head = spring({ frame, fps, config: SMOOTH, delay: 45 });
  const headY = interpolate(head, [0, 1], [30, 0]);

  // Three pillars
  const pillars = [
    { label: "Hands-On", sub: "30-day bootcamp" },
    { label: "Weeks 1–2", sub: "Everyone learns the same foundation" },
    { label: "Weeks 3–4", sub: "You choose your path and build" },
  ];

  // Timeline bar
  const barProgress = spring({ frame, fps, config: SMOOTH, delay: 80 });

  // Quote
  const quote = spring({ frame, fps, config: SMOOTH, delay: 200 });
  const quoteY = interpolate(quote, [0, 1], [20, 0]);

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
          gap: 36,
        }}
      >
        {/* Badge */}
        <div
          style={{
            backgroundColor: TINT_GREEN,
            border: `2px solid ${TREEHOUSE_GREEN}`,
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
              fontWeight: 600,
              color: TREEHOUSE_GREEN,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            The Program
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontFamily: quicksandFamily,
            fontSize: 58,
            fontWeight: 700,
            color: TEXT_COLOR,
            textAlign: "center",
            opacity: head,
            transform: `translateY(${headY}px)`,
            lineHeight: 1.2,
          }}
        >
          30-Day, Hands-On Bootcamp
        </div>

        {/* Three pillar cards */}
        <div style={{ display: "flex", gap: 24, marginTop: 8 }}>
          {pillars.map((p, i) => {
            const prog = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: 100 + i * 30,
            });
            const y = interpolate(prog, [0, 1], [40, 0]);
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  padding: "24px 28px",
                  backgroundColor: "white",
                  borderRadius: 16,
                  boxShadow: "0 3px 16px rgba(0,0,0,0.06)",
                  width: 260,
                  opacity: prog,
                  transform: `translateY(${y}px)`,
                  borderTop: `4px solid ${TREEHOUSE_GREEN}`,
                }}
              >
                <div
                  style={{
                    fontFamily: quicksandFamily,
                    fontSize: 22,
                    fontWeight: 700,
                    color: TEXT_COLOR,
                    textAlign: "center",
                  }}
                >
                  {p.label}
                </div>
                <div
                  style={{
                    fontFamily: robotoFamily,
                    fontSize: 16,
                    color: TEXT_LIGHT,
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  {p.sub}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div
          style={{
            fontFamily: robotoFamily,
            fontSize: 22,
            fontStyle: "italic",
            color: TEXT_COLOR,
            textAlign: "center",
            opacity: quote,
            transform: `translateY(${quoteY}px)`,
            maxWidth: 700,
            lineHeight: 1.5,
            marginTop: 16,
          }}
        >
          "By the end, you don't just understand AI. You've shipped something
          with it."
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
