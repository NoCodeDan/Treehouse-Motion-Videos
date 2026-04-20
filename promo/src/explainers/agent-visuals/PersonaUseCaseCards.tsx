import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { DotGridBg } from "../../components/DotGridBg";
import { AnimatedText } from "../../components/AnimatedText";
import { GreenLine } from "../../components/GreenLine";
import { quicksandFamily, robotoFamily } from "../../fonts";
import {
  TEXT_COLOR,
  TREEHOUSE_GREEN,
  BG_LIGHT,
  WHITE,
} from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";

export const PersonaUseCaseCards: React.FC<{
  persona: string;
  personaIcon: string;
  accentColor?: string;
  bgTint?: string;
  useCases: {
    title: string;
    description: string;
    icon: string;
  }[];
}> = ({
  persona,
  personaIcon,
  accentColor = TREEHOUSE_GREEN,
  bgTint = BG_LIGHT,
  useCases,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeProgress = spring({
    frame,
    fps,
    config: SNAPPY,
    delay: 5,
  });

  return (
    <AbsoluteFill>
      <DotGridBg color={bgTint} />
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
        {/* Persona badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            opacity: badgeProgress,
            transform: `scale(${badgeProgress})`,
          }}
        >
          <span style={{ fontSize: 40 }}>{personaIcon}</span>
          <AnimatedText
            text={persona}
            fontSize={44}
            fontFamily={quicksandFamily}
            fontWeight={700}
            color={TEXT_COLOR}
            delay={15}
            style={{ textAlign: "center" }}
          />
        </div>

        {/* Use case cards */}
        <div
          style={{
            display: "flex",
            gap: 28,
            width: "100%",
            maxWidth: 1300,
          }}
        >
          {useCases.map((uc, i) => {
            const cardProgress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: 40 + staggerDelay(i, 18),
            });
            const translateY = interpolate(cardProgress, [0, 1], [40, 0]);

            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  backgroundColor: WHITE,
                  borderRadius: 18,
                  padding: "32px 28px",
                  borderTop: `5px solid ${accentColor}`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  opacity: cardProgress,
                  transform: `translateY(${translateY}px)`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <span style={{ fontSize: 36 }}>{uc.icon}</span>
                <div
                  style={{
                    fontFamily: quicksandFamily,
                    fontWeight: 700,
                    fontSize: 24,
                    color: TEXT_COLOR,
                  }}
                >
                  {uc.title}
                </div>
                <div
                  style={{
                    fontFamily: robotoFamily,
                    fontWeight: 400,
                    fontSize: 18,
                    color: "#6b7b86",
                    lineHeight: 1.5,
                  }}
                >
                  {uc.description}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
      <GreenLine width={300} height={4} delay={100} bottom={60} color={accentColor} />
    </AbsoluteFill>
  );
};
