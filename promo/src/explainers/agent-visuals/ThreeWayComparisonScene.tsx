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
  TREEHOUSE_GREEN,
  TEXT_COLOR,
  TEXT_LIGHT,
  BG_LIGHT,
  WHITE,
  ACCENT_BLUE,
} from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";

const COLUMNS = [
  {
    title: "Static Automation",
    accentColor: "#8a9aa5",
    emphasized: false,
    items: [
      { icon: "\uD83D\uDD00", text: "If-then logic" },
      { icon: "\uD83D\uDCE5", text: "Predictable inputs" },
      { icon: "\u274C", text: "No judgment" },
    ],
  },
  {
    title: "Chatbot",
    accentColor: ACCENT_BLUE,
    emphasized: false,
    items: [
      { icon: "\uD83D\uDCAC", text: "Scripted conversation" },
      { icon: "\u2753", text: "FAQ answers" },
      { icon: "\uD83D\uDEAB", text: "No memory" },
    ],
  },
  {
    title: "AI Agent",
    accentColor: TREEHOUSE_GREEN,
    emphasized: true,
    items: [
      { icon: "\uD83C\uDFAF", text: "Goal-oriented" },
      { icon: "\uD83D\uDD27", text: "Uses tools" },
      { icon: "\uD83E\uDDE0", text: "Has memory" },
      { icon: "\uD83D\uDD04", text: "Adapts" },
    ],
  },
];

export const ThreeWayComparisonScene: React.FC<{
  title: string;
  bgTint?: string;
  accentColor?: string;
}> = ({
  title,
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
          padding: "60px 80px",
          gap: 40,
        }}
      >
        <AnimatedText
          text={title}
          fontSize={52}
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
            gap: 28,
            width: "100%",
            maxWidth: 1200,
            alignItems: "stretch",
          }}
        >
          {COLUMNS.map((column, colIndex) => {
            const cardDelay = 30 + staggerDelay(colIndex, 20);
            const cardProgress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: cardDelay,
            });
            const translateY = interpolate(cardProgress, [0, 1], [40, 0]);

            return (
              <div
                key={colIndex}
                style={{
                  flex: column.emphasized ? 1.15 : 1,
                  backgroundColor: WHITE,
                  borderRadius: 20,
                  padding: column.emphasized ? "36px 28px" : "32px 24px",
                  borderTop: `5px solid ${column.accentColor}`,
                  boxShadow: column.emphasized
                    ? `0 6px 32px ${column.accentColor}33, 0 0 40px ${column.accentColor}18`
                    : "0 4px 24px rgba(0,0,0,0.06)",
                  border: column.emphasized
                    ? `2px solid ${column.accentColor}44`
                    : undefined,
                  borderTopWidth: 5,
                  borderTopStyle: "solid",
                  borderTopColor: column.accentColor,
                  opacity: cardProgress,
                  transform: `translateY(${translateY}px) scale(${column.emphasized ? interpolate(cardProgress, [0, 1], [0.95, 1.02]) : 1})`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                <div
                  style={{
                    fontSize: column.emphasized ? 28 : 24,
                    fontFamily: quicksandFamily,
                    fontWeight: 700,
                    color: column.accentColor,
                    textAlign: "center",
                    marginBottom: 8,
                  }}
                >
                  {column.title}
                </div>

                {column.items.map((item, i) => {
                  const itemDelay = cardDelay + 15 + staggerDelay(i, 10);
                  const itemProgress = spring({
                    frame,
                    fps,
                    config: SNAPPY,
                    delay: itemDelay,
                  });

                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        opacity: itemProgress,
                        fontSize: column.emphasized ? 21 : 19,
                        fontFamily: robotoFamily,
                        fontWeight: 400,
                        color: TEXT_COLOR,
                      }}
                    >
                      <span style={{ fontSize: 20 }}>{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
      <GreenLine width={300} height={4} delay={120} bottom={60} color={accentColor} />
    </AbsoluteFill>
  );
};
