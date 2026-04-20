import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, ACCENT_BLUE, ACCENT_PURPLE, TEXT_COLOR, WHITE, BG_LIGHT } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { quicksandFamily, robotoFamily } from "../../fonts";
import { DotGridBg } from "../../components/DotGridBg";
import { AnimatedText } from "../../components/AnimatedText";

const defaultColors = [TREEHOUSE_GREEN, ACCENT_BLUE, ACCENT_PURPLE];

export const ExerciseCards: React.FC<{
  title?: string;
  exercises: { icon: string; title: string; description: string }[];
  bgTint?: string;
  accentColor?: string;
}> = ({
  title = "Your Exercises",
  exercises,
  bgTint = BG_LIGHT,
  accentColor = TREEHOUSE_GREEN,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

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
          gap: 40,
        }}
      >
        <AnimatedText
          text={title}
          fontSize={48}
          fontFamily={quicksandFamily}
          fontWeight={700}
          color={TEXT_COLOR}
          delay={5}
          style={{ textAlign: "center" }}
        />
        <div style={{ display: "flex", gap: 24, width: "100%", maxWidth: 1100 }}>
          {exercises.map((ex, i) => {
            const p = spring({ frame, fps, config: SNAPPY, delay: 30 + staggerDelay(i, 20) });
            const ty = interpolate(p, [0, 1], [40, 0]);
            const cardColor = defaultColors[i % defaultColors.length];
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  backgroundColor: WHITE,
                  borderRadius: 16,
                  padding: "28px 24px",
                  borderTop: `4px solid ${cardColor}`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  opacity: p,
                  transform: `translateY(${ty}px)`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 14,
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: 40 }}>{ex.icon}</span>
                <span style={{ fontSize: 20, fontFamily: quicksandFamily, fontWeight: 700, color: TEXT_COLOR }}>
                  {ex.title}
                </span>
                <span style={{ fontSize: 16, fontFamily: robotoFamily, fontWeight: 400, color: TEXT_COLOR, lineHeight: 1.5 }}>
                  {ex.description}
                </span>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
