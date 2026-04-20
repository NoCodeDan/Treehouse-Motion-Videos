import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TEXT_LIGHT, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

export const MisleadingChartVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const MiniChart: React.FC<{
    label: string;
    axisStart: number;
    barHeights: number[];
    borderColor: string;
    tagColor: string;
    tagBg: string;
    chartDelay: number;
  }> = ({ label, axisStart, barHeights, borderColor, tagColor, tagBg, chartDelay }) => {
    const cardProgress = spring({ frame, fps, config: SNAPPY, delay: chartDelay });
    return (
      <div
        style={{
          flex: 1,
          backgroundColor: WHITE,
          borderRadius: 12,
          padding: 14,
          border: `2px solid ${borderColor}`,
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          opacity: cardProgress,
          transform: `scale(${interpolate(cardProgress, [0, 1], [0.85, 1])})`,
        }}
      >
        {/* Tag */}
        <div
          style={{
            display: "inline-block",
            padding: "3px 10px",
            borderRadius: 20,
            backgroundColor: tagBg,
            marginBottom: 10,
          }}
        >
          <span style={{ fontSize: 11, fontFamily: robotoFamily, fontWeight: 700, color: tagColor }}>
            {label}
          </span>
        </div>

        {/* Chart area */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 80, position: "relative" }}>
          {/* Y-axis label */}
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              fontSize: 9,
              fontFamily: robotoFamily,
              fontWeight: 400,
              color: TEXT_LIGHT,
            }}
          >
            {axisStart}
          </div>
          <div style={{ width: 20 }} />
          {barHeights.map((h, i) => {
            const barProgress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: chartDelay + staggerDelay(i, 8),
            });
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: interpolate(barProgress, [0, 1], [0, h]),
                  backgroundColor: borderColor,
                  borderRadius: "4px 4px 0 0",
                  opacity: 0.8,
                }}
              />
            );
          })}
        </div>

        {/* Values label */}
        <div
          style={{
            fontSize: 10,
            fontFamily: robotoFamily,
            fontWeight: 400,
            color: TEXT_LIGHT,
            marginTop: 6,
            textAlign: "center",
          }}
        >
          Values: 52, 54, 53, 55
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: "flex", gap: 14, maxWidth: 380 }}>
      <MiniChart
        label="Misleading"
        axisStart={50}
        barHeights={[16, 32, 24, 40]}
        borderColor="#e74c3c"
        tagColor="#e74c3c"
        tagBg="#fdecea"
        chartDelay={delay}
      />
      <MiniChart
        label="Accurate"
        axisStart={0}
        barHeights={[42, 44, 43, 45]}
        borderColor={TREEHOUSE_GREEN}
        tagColor={TREEHOUSE_GREEN}
        tagBg="#f0faf1"
        chartDelay={delay + 20}
      />
    </div>
  );
};
