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
import { SNAPPY, staggerDelay } from "../lib/animations";

export const TextAndBulletsScene: React.FC<{
  badge?: string;
  title: string;
  subtitle?: string;
  bullets: { icon: string; text: string }[];
  accentColor?: string;
  bgTint?: string;
}> = ({
  badge,
  title,
  subtitle,
  bullets,
  accentColor = TREEHOUSE_GREEN,
  bgTint = BG_LIGHT,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeDelay = 5;
  const titleDelay = badge ? 25 : 10;
  const subtitleDelay = titleDelay + 20;
  const bulletStartDelay = subtitleDelay + (subtitle ? 25 : 15);

  const badgeProgress = spring({
    frame,
    fps,
    config: SNAPPY,
    delay: badgeDelay,
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
          padding: "60px 120px",
          gap: 20,
        }}
      >
        {badge && (
          <div
            style={{
              fontSize: 24,
              fontFamily: robotoFamily,
              fontWeight: 700,
              color: WHITE,
              backgroundColor: accentColor,
              padding: "8px 24px",
              borderRadius: 20,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              opacity: badgeProgress,
              transform: `scale(${badgeProgress})`,
            }}
          >
            {badge}
          </div>
        )}
        <AnimatedText
          text={title}
          fontSize={68}
          fontFamily={quicksandFamily}
          fontWeight={700}
          color={TEXT_COLOR}
          delay={titleDelay}
          style={{ textAlign: "center" }}
        />
        {subtitle && (
          <AnimatedText
            text={subtitle}
            fontSize={34}
            fontFamily={robotoFamily}
            fontWeight={400}
            color={TEXT_LIGHT}
            delay={subtitleDelay}
            style={{ textAlign: "center", maxWidth: 1000 }}
          />
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            marginTop: 24,
            width: "100%",
            maxWidth: 1000,
          }}
        >
          {bullets.map((bullet, i) => {
            const progress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: bulletStartDelay + staggerDelay(i, 12),
            });
            const translateX = interpolate(progress, [0, 1], [40, 0]);

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  opacity: progress,
                  transform: `translateX(${translateX}px)`,
                  backgroundColor: WHITE,
                  padding: "18px 28px",
                  borderRadius: 14,
                  borderLeft: `4px solid ${accentColor}`,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <span style={{ fontSize: 36 }}>{bullet.icon}</span>
                <span
                  style={{
                    fontSize: 34,
                    fontFamily: robotoFamily,
                    fontWeight: 500,
                    color: TEXT_COLOR,
                  }}
                >
                  {bullet.text}
                </span>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
      <GreenLine
        width={300}
        height={4}
        delay={bulletStartDelay + bullets.length * 12 + 15}
        bottom={60}
        color={accentColor}
      />
    </AbsoluteFill>
  );
};
