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
  ACCENT_PURPLE,
  ACCENT_BLUE,
} from "../../lib/brand";
import { SMOOTH, SNAPPY, staggerDelay } from "../../lib/animations";

const LEVELS = [
  {
    label: "Copilot",
    description: "Suggests, you decide",
    color: "#8a9aa5",
    highlighted: false,
  },
  {
    label: "Assistant",
    description: "Completes tasks on demand",
    color: ACCENT_BLUE,
    highlighted: false,
  },
  {
    label: "Agent",
    description: "Multi-step workflows",
    color: TREEHOUSE_GREEN,
    highlighted: true,
  },
  {
    label: "Autonomous",
    description: "Runs without being asked",
    color: ACCENT_PURPLE,
    highlighted: false,
  },
];

export const AutonomySpectrum: React.FC<{ delay?: number }> = ({
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Indicator slides down to "Agent" (index 2)
  const indicatorProgress = spring({
    frame,
    fps,
    config: SMOOTH,
    delay: delay + LEVELS.length * 18 + 10,
  });
  const indicatorY = interpolate(indicatorProgress, [0, 1], [0, 2]);
  const indicatorIndex = Math.round(indicatorY);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          position: "relative",
        }}
      >
        {LEVELS.map((level, i) => {
          const itemDelay = delay + staggerDelay(i, 18);
          const progress = spring({
            frame,
            fps,
            config: SNAPPY,
            delay: itemDelay,
          });

          const fillProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: itemDelay + 10,
          });

          const barWidth = level.highlighted ? 380 : 340;
          const barHeight = level.highlighted ? 64 : 52;
          const translateX = interpolate(progress, [0, 1], [-30, 0]);
          const scale = interpolate(progress, [0, 1], [0.9, 1]);

          const isActive =
            indicatorProgress > 0.5 && indicatorIndex === i;

          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                opacity: progress,
                transform: `translateX(${translateX}px) scale(${scale})`,
              }}
            >
              {/* Indicator arrow */}
              <div
                style={{
                  width: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isActive && (
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "8px solid transparent",
                      borderBottom: "8px solid transparent",
                      borderLeft: `12px solid ${level.color}`,
                      opacity: indicatorProgress,
                      transform: `scale(${indicatorProgress})`,
                    }}
                  />
                )}
              </div>

              {/* Bar */}
              <div
                style={{
                  width: barWidth,
                  height: barHeight,
                  borderRadius: 12,
                  backgroundColor: WHITE,
                  border: `2px solid ${level.highlighted ? level.color : "#e0e6ea"}`,
                  boxShadow: level.highlighted
                    ? `0 4px 20px ${level.color}33, 0 0 30px ${level.color}22`
                    : "0 2px 8px rgba(0,0,0,0.04)",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 20px",
                }}
              >
                {/* Fill bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: `${interpolate(fillProgress, [0, 1], [0, 100])}%`,
                    backgroundColor: `${level.color}15`,
                    borderRight: `3px solid ${level.color}`,
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span
                    style={{
                      fontSize: level.highlighted ? 20 : 17,
                      fontFamily: quicksandFamily,
                      fontWeight: level.highlighted ? 700 : 600,
                      color: level.highlighted ? level.color : TEXT_COLOR,
                    }}
                  >
                    {level.label}
                  </span>
                  <span
                    style={{
                      fontSize: level.highlighted ? 15 : 13,
                      fontFamily: robotoFamily,
                      fontWeight: 400,
                      color: TEXT_LIGHT,
                    }}
                  >
                    {level.description}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
