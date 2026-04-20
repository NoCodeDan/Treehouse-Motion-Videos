import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TEXT_LIGHT, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

export const DashboardMockupVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardProgress = spring({ frame, fps, config: SNAPPY, delay });

  const bars = [
    { label: "Q1", height: 60, color: TREEHOUSE_GREEN },
    { label: "Q2", height: 90, color: "#5ab564" },
    { label: "Q3", height: 45, color: TREEHOUSE_GREEN },
    { label: "Q4", height: 110, color: "#5ab564" },
  ];

  return (
    <div
      style={{
        width: 360,
        backgroundColor: WHITE,
        borderRadius: 14,
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
          marginBottom: 16,
        }}
      >
        Revenue by Quarter
      </div>

      {/* Bar Chart */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 20,
          height: 120,
          marginBottom: 16,
          borderBottom: `2px solid #eee`,
          paddingBottom: 8,
        }}
      >
        {bars.map((bar, i) => {
          const barProgress = spring({
            frame,
            fps,
            config: SNAPPY,
            delay: delay + staggerDelay(i, 10),
          });
          const barHeight = interpolate(barProgress, [0, 1], [0, bar.height]);
          return (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div
                style={{
                  width: 40,
                  height: barHeight,
                  backgroundColor: bar.color,
                  borderRadius: "6px 6px 0 0",
                }}
              />
              <div
                style={{
                  fontSize: 11,
                  fontFamily: robotoFamily,
                  fontWeight: 500,
                  color: TEXT_LIGHT,
                }}
              >
                {bar.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Insight Section */}
      {(() => {
        const textProgress = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: delay + 50,
        });
        return (
          <div
            style={{
              backgroundColor: "#f0faf1",
              borderRadius: 8,
              padding: "10px 14px",
              opacity: textProgress,
              transform: `translateY(${interpolate(textProgress, [0, 1], [8, 0])}px)`,
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontFamily: quicksandFamily,
                fontWeight: 700,
                color: TREEHOUSE_GREEN,
                marginBottom: 4,
              }}
            >
              What this means
            </div>
            <div
              style={{
                fontSize: 12,
                fontFamily: robotoFamily,
                fontWeight: 400,
                color: TEXT_COLOR,
                lineHeight: "1.4",
              }}
            >
              Q4 outperformed all quarters by 22%. Marketing spend in Q3 correlated with the Q4 spike.
            </div>
          </div>
        );
      })()}
    </div>
  );
};
