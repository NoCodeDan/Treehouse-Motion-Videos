import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TEXT_LIGHT, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

export const InsightCardVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardProgress = spring({ frame, fps, config: SNAPPY, delay });

  const insights = [
    "Customer churn dropped 18% after onboarding changes",
    "Email open rates peak on Tuesdays at 10am",
    "Free-tier users convert 3x more after day 7",
  ];

  return (
    <div
      style={{
        width: 360,
        backgroundColor: WHITE,
        borderRadius: 14,
        borderTop: `4px solid ${TREEHOUSE_GREEN}`,
        padding: 20,
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        opacity: cardProgress,
        transform: `scale(${interpolate(cardProgress, [0, 1], [0.9, 1])})`,
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: 15,
          fontFamily: quicksandFamily,
          fontWeight: 700,
          color: TEXT_COLOR,
          marginBottom: 14,
        }}
      >
        Key Insights
      </div>

      {/* Bullet Insights */}
      {insights.map((text, i) => {
        const progress = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: delay + staggerDelay(i, 14),
        });
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              marginBottom: 10,
              opacity: progress,
              transform: `translateX(${interpolate(progress, [0, 1], [16, 0])}px)`,
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                backgroundColor: TREEHOUSE_GREEN,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 1,
              }}
            >
              <span style={{ color: WHITE, fontSize: 13, fontWeight: 700, lineHeight: 1 }}>
                &#10003;
              </span>
            </div>
            <div
              style={{
                fontSize: 13,
                fontFamily: robotoFamily,
                fontWeight: 400,
                color: TEXT_COLOR,
                lineHeight: "1.4",
              }}
            >
              {text}
            </div>
          </div>
        );
      })}

      {/* Recommendation */}
      {(() => {
        const recProgress = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: delay + 56,
        });
        return (
          <div
            style={{
              marginTop: 12,
              padding: "10px 14px",
              backgroundColor: "#f0faf1",
              borderRadius: 8,
              borderLeft: `3px solid ${TREEHOUSE_GREEN}`,
              opacity: recProgress,
              transform: `translateY(${interpolate(recProgress, [0, 1], [8, 0])}px)`,
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontFamily: robotoFamily,
                fontWeight: 500,
                color: TEXT_COLOR,
                lineHeight: "1.4",
              }}
            >
              <span style={{ fontWeight: 700, color: TREEHOUSE_GREEN }}>Recommendation: </span>
              Double down on onboarding improvements and Tuesday email sends.
            </div>
          </div>
        );
      })()}
    </div>
  );
};
