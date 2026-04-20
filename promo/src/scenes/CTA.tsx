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
import { DotGridBg } from "../components/DotGridBg";
import { TrackCard } from "../components/TrackCard";
import { AnimatedText } from "../components/AnimatedText";
import { ConfettiBurst } from "../components/ConfettiBurst";
import { quicksandFamily, robotoFamily } from "../fonts";
import { SNAPPY, SMOOTH, BOUNCY } from "../lib/animations";
import {
  TREEHOUSE_GREEN,
  ACCENT_PURPLE,
  ACCENT_BLUE,
  TEXT_COLOR,
  TEXT_LIGHT,
  WHITE,
} from "../lib/brand";

export const CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Track cards shrink and arrange as trio at top
  const cardsProgress = spring({
    frame,
    fps,
    config: SNAPPY,
    delay: 10,
  });
  const cardsTranslateY = interpolate(cardsProgress, [0, 1], [-80, 0]);

  // CTA text
  const ctaProgress = spring({
    frame,
    fps,
    config: SMOOTH,
    delay: 50,
  });
  const ctaScale = interpolate(ctaProgress, [0, 1], [0.8, 1]);

  // Shimmer glow on CTA
  const shimmer = interpolate(frame, [80, 160], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Logo reappear
  const logoProgress = spring({
    frame,
    fps,
    config: SMOOTH,
    delay: 100,
  });

  // CTA button pulse
  const buttonProgress = spring({
    frame,
    fps,
    config: BOUNCY,
    delay: 75,
  });

  return (
    <AbsoluteFill>
      <DotGridBg />

      {/* Three track cards at top */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 24,
          opacity: cardsProgress,
          transform: `translateY(${cardsTranslateY}px)`,
        }}
      >
        <TrackCard
          number="01"
          title="Agent"
          bullets={[]}
          accentColor={TREEHOUSE_GREEN}
          delay={10}
          compact
        />
        <TrackCard
          number="02"
          title="App"
          bullets={[]}
          accentColor={ACCENT_PURPLE}
          delay={20}
          compact
        />
        <TrackCard
          number="03"
          title="Dashboard"
          bullets={[]}
          accentColor={ACCENT_BLUE}
          delay={30}
          compact
        />
      </div>

      {/* CTA center */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          paddingTop: 40,
        }}
      >
        <div
          style={{
            opacity: ctaProgress,
            transform: `scale(${ctaScale})`,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: quicksandFamily,
              fontSize: 72,
              fontWeight: 700,
              color: TEXT_COLOR,
              lineHeight: 1.2,
              textShadow:
                shimmer > 0
                  ? `0 0 ${interpolate(shimmer, [0, 1], [0, 20])}px rgba(105,199,115,${interpolate(shimmer, [0, 1], [0, 0.3])})`
                  : "none",
            }}
          >
            Don't Just Learn AI. Build With It.
          </div>
        </div>

        {/* Free trial text */}
        {(() => {
          const trialProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: 65,
          });
          return (
            <div
              style={{
                fontFamily: robotoFamily,
                fontSize: 24,
                color: TEXT_LIGHT,
                textAlign: "center",
                opacity: trialProgress,
                lineHeight: 1.5,
              }}
            >
              Try the first 7 days free. No commitment.
            </div>
          );
        })()}

        {/* URL / CTA button */}
        <div
          style={{
            opacity: buttonProgress,
            transform: `scale(${buttonProgress})`,
            backgroundColor: TREEHOUSE_GREEN,
            padding: "16px 40px",
            borderRadius: 50,
            boxShadow: "0 4px 20px rgba(105,199,115,0.3)",
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

      {/* Treehouse logo bottom center */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: logoProgress,
          transform: `scale(${logoProgress})`,
        }}
      >
        <Img
          src={staticFile("treehouse-logo.svg")}
          style={{ width: 56, height: 56 }}
        />
      </div>

      {/* Confetti burst */}
      <ConfettiBurst delay={90} count={50} />
    </AbsoluteFill>
  );
};
