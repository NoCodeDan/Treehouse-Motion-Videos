import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { quicksandFamily, robotoFamily } from "../../fonts";
import {
  TREEHOUSE_GREEN,
  TEXT_COLOR,
  TEXT_LIGHT,
  WHITE,
} from "../../lib/brand";
import { SMOOTH, SNAPPY, staggerDelay } from "../../lib/animations";

const POINTS = [
  { icon: "🔌", title: "MCP Standard", subtitle: "Universal tool layer" },
  { icon: "🏗️", title: "Agent-First Software", subtitle: "Default paradigm" },
  { icon: "🐝", title: "Agent Swarms", subtitle: "Parallel specialists" },
  { icon: "👤", title: "Personal AI", subtitle: "For everyone" },
  { icon: "🛡️", title: "Guardian Agents", subtitle: "Safety monitors" },
];

const LINE_Y = 120; // vertical position of the horizontal line
const POINT_GAP = 120; // horizontal spacing between points
const TOTAL_WIDTH = (POINTS.length - 1) * POINT_GAP;
const CARD_OFFSET = 16; // gap between dot and card

export const FutureTimeline: React.FC<{ delay?: number }> = ({
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Horizontal line draws across
  const lineProgress = spring({
    frame,
    fps,
    config: SMOOTH,
    delay: delay + 5,
  });

  const lineWidth = interpolate(lineProgress, [0, 1], [0, TOTAL_WIDTH + 40]);

  return (
    <div
      style={{
        position: "relative",
        width: TOTAL_WIDTH + 80,
        height: 280,
      }}
    >
      {/* Horizontal line */}
      <div
        style={{
          position: "absolute",
          top: LINE_Y,
          left: 20,
          width: lineWidth,
          height: 3,
          backgroundColor: TREEHOUSE_GREEN,
          borderRadius: 2,
        }}
      />

      {/* Points */}
      {POINTS.map((point, i) => {
        const pointDelay = delay + 15 + staggerDelay(i, 14);
        const x = 40 + i * POINT_GAP;
        const isAbove = i % 2 === 0;

        // Dot appears
        const dotProgress = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: pointDelay,
        });

        // Card pops up after dot
        const cardProgress = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: pointDelay + 8,
        });

        const cardTranslateY = interpolate(
          cardProgress,
          [0, 1],
          [isAbove ? 12 : -12, 0]
        );

        return (
          <React.Fragment key={i}>
            {/* Dot on line */}
            <div
              style={{
                position: "absolute",
                top: LINE_Y - 5,
                left: x - 5,
                width: 13,
                height: 13,
                borderRadius: 7,
                backgroundColor: TREEHOUSE_GREEN,
                border: `3px solid ${WHITE}`,
                boxShadow: `0 0 0 2px ${TREEHOUSE_GREEN}`,
                transform: `scale(${dotProgress})`,
                opacity: dotProgress,
              }}
            />

            {/* Vertical stem */}
            <div
              style={{
                position: "absolute",
                left: x,
                top: isAbove ? LINE_Y - CARD_OFFSET - 40 : LINE_Y + CARD_OFFSET + 4,
                width: 2,
                height: 40 * cardProgress,
                backgroundColor: `${TREEHOUSE_GREEN}55`,
                borderRadius: 1,
                opacity: cardProgress,
              }}
            />

            {/* Card */}
            <div
              style={{
                position: "absolute",
                left: x - 52,
                top: isAbove ? 0 : LINE_Y + CARD_OFFSET + 48,
                width: 108,
                opacity: cardProgress,
                transform: `translateY(${cardTranslateY}px)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                backgroundColor: WHITE,
                borderRadius: 10,
                padding: "10px 8px",
                border: `1.5px solid ${TREEHOUSE_GREEN}33`,
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <span style={{ fontSize: 24 }}>{point.icon}</span>
              <span
                style={{
                  fontSize: 12,
                  fontFamily: quicksandFamily,
                  fontWeight: 700,
                  color: TEXT_COLOR,
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                {point.title}
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontFamily: robotoFamily,
                  fontWeight: 400,
                  color: TEXT_LIGHT,
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                {point.subtitle}
              </span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
