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
import { quicksandFamily, robotoFamily } from "../fonts";
import {
  TEXT_COLOR,
  TREEHOUSE_GREEN,
  BG_LIGHT,
  WHITE,
} from "../lib/brand";
import { SNAPPY, SMOOTH, staggerDelay } from "../lib/animations";

export const SplitVisualScene: React.FC<{
  title: string;
  bullets: { icon: string; text: string }[];
  visual: React.ReactNode;
  visualSide?: "left" | "right";
  accentColor?: string;
  bgTint?: string;
}> = ({
  title,
  bullets,
  visual,
  visualSide = "right",
  accentColor = TREEHOUSE_GREEN,
  bgTint = BG_LIGHT,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const visualProgress = spring({
    frame,
    fps,
    config: SMOOTH,
    delay: 20,
  });
  const visualTranslateX = interpolate(
    visualProgress,
    [0, 1],
    [visualSide === "right" ? 60 : -60, 0]
  );

  const textContent = (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <AnimatedText
        text={title}
        fontSize={56}
        fontFamily={quicksandFamily}
        fontWeight={700}
        color={TEXT_COLOR}
        delay={10}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          marginTop: 12,
        }}
      >
        {bullets.map((bullet, i) => {
          const progress = spring({
            frame,
            fps,
            config: SNAPPY,
            delay: 45 + staggerDelay(i, 12),
          });
          const translateX = interpolate(progress, [0, 1], [30, 0]);

          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                opacity: progress,
                transform: `translateX(${translateX}px)`,
                backgroundColor: WHITE,
                padding: "14px 22px",
                borderRadius: 12,
                borderLeft: `4px solid ${accentColor}`,
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
              }}
            >
              <span style={{ fontSize: 32 }}>{bullet.icon}</span>
              <span
                style={{
                  fontSize: 30,
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
    </div>
  );

  const visualContent = (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: visualProgress,
        transform: `translateX(${visualTranslateX}px)`,
      }}
    >
      {visual}
    </div>
  );

  return (
    <AbsoluteFill>
      <DotGridBg color={bgTint} />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 100px",
          gap: 60,
        }}
      >
        {visualSide === "left" ? (
          <>
            {visualContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {visualContent}
          </>
        )}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
