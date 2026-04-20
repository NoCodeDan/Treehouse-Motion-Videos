import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SMOOTH, SNAPPY, staggerDelay } from "../lib/animations";
import { TREEHOUSE_GREEN, ACCENT_BLUE, ACCENT_PURPLE, TEXT_COLOR } from "../lib/brand";
import { robotoFamily } from "../fonts";

export const DashboardViz: React.FC<{
  delay?: number;
  sectionDelays?: [number, number, number];
}> = ({ delay = 0, sectionDelays }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Container fades in first
  const containerProgress = spring({
    frame,
    fps,
    config: SMOOTH,
    delay: sectionDelays ? sectionDelays[0] : delay,
  });

  // Child base delays: use sectionDelays if provided, else original behavior
  const childBase = sectionDelays ? sectionDelays[0] : delay + 25;
  const statsBase = sectionDelays ? sectionDelays[1] : delay + 25;
  const barsBase = sectionDelays ? sectionDelays[2] : delay + 25;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        opacity: containerProgress,
      }}
    >
      {/* Top row: Progress ring + Stat counters */}
      <div style={{ display: "flex", gap: 20, flex: 1 }}>
        {/* Progress ring */}
        <div
          style={{
            flex: 1,
            backgroundColor: "white",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            position: "relative",
          }}
        >
          <svg width={140} height={140} viewBox="0 0 140 140">
            {/* Background circle */}
            <circle
              cx={70}
              cy={70}
              r={56}
              fill="none"
              stroke="#ececec"
              strokeWidth={12}
            />
            {/* Progress arc */}
            {(() => {
              const ringProgress = spring({
                frame,
                fps,
                config: SMOOTH,
                delay: childBase + 15,
              });
              const circumference = 2 * Math.PI * 56;
              const percent = 0.78;
              const dashLength = interpolate(
                ringProgress,
                [0, 1],
                [0, circumference * percent]
              );

              return (
                <circle
                  cx={70}
                  cy={70}
                  r={56}
                  fill="none"
                  stroke={ACCENT_BLUE}
                  strokeWidth={12}
                  strokeDasharray={`${dashLength} ${circumference}`}
                  strokeLinecap="round"
                  transform="rotate(-90 70 70)"
                />
              );
            })()}
            {/* Center text */}
            {(() => {
              const numProgress = spring({
                frame,
                fps,
                config: SMOOTH,
                delay: childBase + 30,
              });
              const value = Math.round(interpolate(numProgress, [0, 1], [0, 78]));
              return (
                <text
                  x={70}
                  y={75}
                  textAnchor="middle"
                  fontFamily={robotoFamily}
                  fontSize={28}
                  fontWeight={700}
                  fill={TEXT_COLOR}
                >
                  {value}%
                </text>
              );
            })()}
          </svg>
        </div>

        {/* Stat counters */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {[
            { label: "Data Points", value: 12847, color: ACCENT_BLUE },
            { label: "Accuracy", value: 94, suffix: "%", color: TREEHOUSE_GREEN },
            { label: "Models", value: 6, color: ACCENT_PURPLE },
          ].map((stat, i) => {
            const statProgress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: statsBase + 10 + staggerDelay(i, 20),
            });
            const animValue = Math.round(
              interpolate(statProgress, [0, 1], [0, stat.value])
            );

            return (
              <div
                key={i}
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  padding: "10px 14px",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                  opacity: statProgress,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: robotoFamily,
                    fontSize: 13,
                    color: "#888",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </span>
                <span
                  style={{
                    fontFamily: robotoFamily,
                    fontSize: 20,
                    fontWeight: 700,
                    color: stat.color,
                  }}
                >
                  {animValue.toLocaleString()}
                  {stat.suffix || ""}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom row: Bar chart */}
      {(() => {
        const barChartProgress = spring({
          frame,
          fps,
          config: SMOOTH,
          delay: barsBase,
        });
        return (
      <div
        style={{
          height: 140,
          backgroundColor: "white",
          borderRadius: 16,
          padding: "16px 20px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
          display: "flex",
          alignItems: "flex-end",
          gap: 10,
          opacity: barChartProgress,
        }}
      >
        {[0.4, 0.65, 0.5, 0.85, 0.7, 0.55, 0.9, 0.6].map((h, i) => {
          const barProgress = spring({
            frame,
            fps,
            config: SNAPPY,
            delay: barsBase + 10 + staggerDelay(i, 8),
          });
          const barHeight = interpolate(barProgress, [0, 1], [0, h * 90]);
          const colors = [ACCENT_BLUE, TREEHOUSE_GREEN, ACCENT_PURPLE];

          return (
            <div
              key={i}
              style={{
                flex: 1,
                height: barHeight,
                backgroundColor: colors[i % 3],
                borderRadius: 4,
                opacity: 0.85,
              }}
            />
          );
        })}
      </div>
        );
      })()}
    </div>
  );
};
