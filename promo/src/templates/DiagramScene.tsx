import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { DotGridBg } from "../components/DotGridBg";
import { AnimatedText } from "../components/AnimatedText";
import { GreenLine } from "../components/GreenLine";
import { quicksandFamily, robotoFamily } from "../fonts";
import {
  TEXT_COLOR,
  TEXT_LIGHT,
  TREEHOUSE_GREEN,
  BG_LIGHT,
  WHITE,
} from "../lib/brand";
import { SNAPPY, SMOOTH, staggerDelay } from "../lib/animations";

export const DiagramScene: React.FC<{
  title: string;
  subtitle?: string;
  steps: { icon: string; label: string }[];
  accentColor?: string;
  bgTint?: string;
}> = ({
  title,
  subtitle,
  steps,
  accentColor = TREEHOUSE_GREEN,
  bgTint = BG_LIGHT,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stepBaseDelay = subtitle ? 60 : 45;

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
          gap: 28,
        }}
      >
        <AnimatedText
          text={title}
          fontSize={68}
          fontFamily={quicksandFamily}
          fontWeight={700}
          color={TEXT_COLOR}
          delay={5}
          style={{ textAlign: "center" }}
        />
        {subtitle && (
          <AnimatedText
            text={subtitle}
            fontSize={34}
            fontFamily={robotoFamily}
            fontWeight={400}
            color={TEXT_LIGHT}
            delay={25}
            style={{ textAlign: "center", maxWidth: 900 }}
          />
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 0,
            marginTop: 40,
          }}
        >
          {steps.map((step, i) => {
            const stepProgress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: stepBaseDelay + staggerDelay(i, 25),
            });
            const translateY = interpolate(stepProgress, [0, 1], [30, 0]);

            const arrowProgress =
              i < steps.length - 1
                ? spring({
                    frame,
                    fps,
                    config: SMOOTH,
                    delay: stepBaseDelay + staggerDelay(i, 25) + 15,
                  })
                : 0;

            return (
              <React.Fragment key={i}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                    opacity: stepProgress,
                    transform: `translateY(${translateY}px)`,
                  }}
                >
                  <div
                    style={{
                      width: 140,
                      height: 140,
                      borderRadius: 28,
                      backgroundColor: WHITE,
                      border: `3px solid ${accentColor}`,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 64,
                    }}
                  >
                    {step.icon}
                  </div>
                  <div
                    style={{
                      fontSize: 30,
                      fontFamily: robotoFamily,
                      fontWeight: 600,
                      color: TEXT_COLOR,
                      textAlign: "center",
                      maxWidth: 160,
                    }}
                  >
                    {step.label}
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 24px",
                      marginBottom: 38,
                      opacity: arrowProgress,
                    }}
                  >
                    <svg width="60" height="24" viewBox="0 0 60 24">
                      <line
                        x1="0"
                        y1="12"
                        x2={interpolate(arrowProgress, [0, 1], [0, 48])}
                        y2="12"
                        stroke={accentColor}
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <polygon
                        points="48,6 60,12 48,18"
                        fill={accentColor}
                        opacity={arrowProgress}
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </AbsoluteFill>
      <GreenLine
        width={300}
        height={4}
        delay={stepBaseDelay + steps.length * 25 + 20}
        bottom={60}
        color={accentColor}
      />
    </AbsoluteFill>
  );
};
