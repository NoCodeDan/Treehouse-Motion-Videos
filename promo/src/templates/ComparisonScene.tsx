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

export const ComparisonScene: React.FC<{
  title: string;
  leftCard: {
    title: string;
    items: { icon: string; text: string }[];
    accentColor?: string;
  };
  rightCard: {
    title: string;
    items: { icon: string; text: string }[];
    accentColor?: string;
  };
  accentColor?: string;
  bgTint?: string;
}> = ({
  title,
  leftCard,
  rightCard,
  accentColor = TREEHOUSE_GREEN,
  bgTint = BG_LIGHT,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const leftColor = leftCard.accentColor || TEXT_LIGHT;
  const rightColor = rightCard.accentColor || accentColor;

  const leftCardProgress = spring({
    frame,
    fps,
    config: SNAPPY,
    delay: 35,
  });
  const rightCardProgress = spring({
    frame,
    fps,
    config: SNAPPY,
    delay: 50,
  });

  const leftTranslateX = interpolate(leftCardProgress, [0, 1], [-50, 0]);
  const rightTranslateX = interpolate(rightCardProgress, [0, 1], [50, 0]);

  const vsProgress = spring({
    frame,
    fps,
    config: SNAPPY,
    delay: 65,
  });

  const renderCard = (
    card: { title: string; items: { icon: string; text: string }[] },
    color: string,
    progress: number,
    translateX: number,
    itemBaseDelay: number
  ) => (
    <div
      style={{
        flex: 1,
        backgroundColor: WHITE,
        borderRadius: 20,
        padding: "36px 32px",
        borderTop: `5px solid ${color}`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        opacity: progress,
        transform: `translateX(${translateX}px)`,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div
        style={{
          fontSize: 36,
          fontFamily: quicksandFamily,
          fontWeight: 700,
          color: color,
        }}
      >
        {card.title}
      </div>
      {card.items.map((item, i) => {
        const itemProgress = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: itemBaseDelay + staggerDelay(i, 10),
        });
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              opacity: itemProgress,
              fontSize: 30,
              fontFamily: robotoFamily,
              fontWeight: 400,
              color: TEXT_COLOR,
            }}
          >
            <span style={{ fontSize: 30 }}>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        );
      })}
    </div>
  );

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
          fontSize={68}
          fontFamily={quicksandFamily}
          fontWeight={700}
          color={TEXT_COLOR}
          delay={5}
          style={{ textAlign: "center" }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 40,
            width: "100%",
            maxWidth: 1200,
            alignItems: "stretch",
          }}
        >
          {renderCard(leftCard, leftColor, leftCardProgress, leftTranslateX, 55)}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: vsProgress,
              transform: `scale(${vsProgress})`,
            }}
          >
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: accentColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontFamily: quicksandFamily,
                fontWeight: 700,
                color: WHITE,
              }}
            >
              vs
            </div>
          </div>

          {renderCard(rightCard, rightColor, rightCardProgress, rightTranslateX, 70)}
        </div>
      </AbsoluteFill>
      <GreenLine width={300} height={4} delay={100} bottom={60} color={accentColor} />
    </AbsoluteFill>
  );
};
