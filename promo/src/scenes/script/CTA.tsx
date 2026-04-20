import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { DotGridBg } from "../../components/DotGridBg";
import { ConfettiBurst } from "../../components/ConfettiBurst";
import { quicksandFamily, robotoFamily } from "../../fonts";
import { SMOOTH, SNAPPY, BOUNCY } from "../../lib/animations";
import { TREEHOUSE_GREEN, TEXT_COLOR, TEXT_LIGHT, WHITE } from "../../lib/brand";

export const ScriptCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Closing quote
  const quote = spring({ frame, fps, config: SMOOTH, delay: 15 });
  const quoteY = interpolate(quote, [0, 1], [30, 0]);

  // CTA text
  const cta = spring({ frame, fps, config: SMOOTH, delay: 80 });
  const ctaScale = interpolate(cta, [0, 1], [0.85, 1]);

  // Shimmer
  const shimmer = interpolate(frame, [120, 200], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Button
  const button = spring({ frame, fps, config: BOUNCY, delay: 110 });

  // Logo
  const logo = spring({ frame, fps, config: SMOOTH, delay: 140 });

  return (
    <AbsoluteFill>
      <DotGridBg />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          padding: "60px 120px",
        }}
      >
        {/* Closing quote */}
        <div
          style={{
            fontFamily: robotoFamily,
            fontSize: 24,
            fontStyle: "italic",
            color: TEXT_LIGHT,
            textAlign: "center",
            opacity: quote,
            transform: `translateY(${quoteY}px)`,
            maxWidth: 750,
            lineHeight: 1.5,
          }}
        >
          "This isn't just a course. It's learning how to use AI for the rest
          of your career."
        </div>

        {/* CTA headline */}
        <div
          style={{
            fontFamily: quicksandFamily,
            fontSize: 68,
            fontWeight: 700,
            color: TEXT_COLOR,
            textAlign: "center",
            opacity: cta,
            transform: `scale(${ctaScale})`,
            lineHeight: 1.2,
            marginTop: 16,
            textShadow:
              shimmer > 0
                ? `0 0 ${interpolate(shimmer, [0, 1], [0, 20])}px rgba(105,199,115,${interpolate(shimmer, [0, 1], [0, 0.3])})`
                : "none",
          }}
        >
          Start Your 30-Day Journey
        </div>

        {/* CTA button */}
        <div
          style={{
            opacity: button,
            transform: `scale(${button})`,
            backgroundColor: TREEHOUSE_GREEN,
            padding: "16px 40px",
            borderRadius: 50,
            boxShadow: "0 4px 20px rgba(105,199,115,0.3)",
            marginTop: 8,
          }}
        >
          <span
            style={{
              fontFamily: robotoFamily,
              fontSize: 24,
              fontWeight: 700,
              color: WHITE,
              letterSpacing: 0.5,
            }}
          >
            teamtreehouse.com/ai-bootcamp
          </span>
        </div>
      </AbsoluteFill>

      {/* Logo bottom center */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: logo,
          transform: `scale(${logo})`,
        }}
      >
        <Img
          src={staticFile("treehouse-logo.svg")}
          style={{ width: 56, height: 56 }}
        />
      </div>

      {/* Confetti */}
      <ConfettiBurst delay={130} count={50} />
    </AbsoluteFill>
  );
};
