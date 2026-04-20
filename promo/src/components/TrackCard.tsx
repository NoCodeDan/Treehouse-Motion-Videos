import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SNAPPY, staggerDelay } from "../lib/animations";
import { TREEHOUSE_GREEN, TEXT_COLOR, TEXT_LIGHT } from "../lib/brand";
import { quicksandFamily, robotoFamily } from "../fonts";

export const TrackCard: React.FC<{
  number: string;
  title: string;
  bullets: string[];
  accentColor?: string;
  delay?: number;
  compact?: boolean;
  bulletDelays?: number[];
}> = ({
  number,
  title,
  bullets,
  accentColor = TREEHOUSE_GREEN,
  delay = 0,
  compact = false,
  bulletDelays,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardProgress = spring({
    frame,
    fps,
    config: SNAPPY,
    delay,
  });

  const cardTranslateX = interpolate(cardProgress, [0, 1], [-60, 0]);
  const cardOpacity = cardProgress;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: compact ? 12 : 20,
        padding: compact ? 20 : 40,
        backgroundColor: "rgba(255,255,255,0.95)",
        borderRadius: compact ? 12 : 20,
        borderLeft: `${compact ? 4 : 6}px solid ${accentColor}`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        transform: `translateX(${cardTranslateX}px)`,
        opacity: cardOpacity,
        maxWidth: compact ? 300 : 520,
      }}
    >
      {/* Number badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: compact ? 10 : 16,
        }}
      >
        <div
          style={{
            width: compact ? 36 : 56,
            height: compact ? 36 : 56,
            borderRadius: compact ? 8 : 14,
            backgroundColor: accentColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: quicksandFamily,
            fontWeight: 700,
            fontSize: compact ? 16 : 24,
            color: "white",
          }}
        >
          {number}
        </div>
        <div
          style={{
            fontFamily: quicksandFamily,
            fontWeight: 700,
            fontSize: compact ? 18 : 32,
            color: TEXT_COLOR,
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
      </div>

      {/* Bullets */}
      {!compact && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {bullets.map((bullet, i) => {
            const bulletDelay = bulletDelays
              ? bulletDelays[i]
              : delay + 20 + staggerDelay(i, 20);
            const bulletProgress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: bulletDelay,
            });
            const bulletOpacity = bulletProgress;
            const bulletTranslateX = interpolate(
              bulletProgress,
              [0, 1],
              [30, 0]
            );

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  opacity: bulletOpacity,
                  transform: `translateX(${bulletTranslateX}px)`,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: accentColor,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: robotoFamily,
                    fontSize: 22,
                    color: TEXT_LIGHT,
                    fontWeight: 400,
                  }}
                >
                  {bullet}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
