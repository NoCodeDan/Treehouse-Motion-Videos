import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TEXT_LIGHT, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

export const DataTableVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const rows = [
    { date: "Mar 1", category: "Marketing", amount: "$2,400" },
    { date: "Mar 3", category: "Operations", amount: "$1,850" },
    { date: "Mar 5", category: "Sales", amount: "$3,200" },
    { date: "Mar 7", category: "Support", amount: "$980" },
  ];

  const headerProgress = spring({ frame, fps, config: SNAPPY, delay });

  return (
    <div
      style={{
        width: 360,
        backgroundColor: WHITE,
        borderRadius: 14,
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        overflow: "hidden",
        opacity: headerProgress,
        transform: `scale(${interpolate(headerProgress, [0, 1], [0.9, 1])})`,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          padding: "12px 16px",
          backgroundColor: TREEHOUSE_GREEN,
          gap: 8,
        }}
      >
        {["Date", "Category", "Amount"].map((col) => (
          <div
            key={col}
            style={{
              flex: col === "Category" ? 2 : 1,
              fontSize: 12,
              fontFamily: quicksandFamily,
              fontWeight: 700,
              color: WHITE,
              textAlign: col === "Amount" ? "right" : "left",
            }}
          >
            {col}
          </div>
        ))}
      </div>

      {/* Rows */}
      {rows.map((row, i) => {
        const progress = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: delay + staggerDelay(i, 12),
        });
        return (
          <div
            key={i}
            style={{
              display: "flex",
              padding: "10px 16px",
              borderLeft: `4px solid ${TREEHOUSE_GREEN}`,
              borderBottom: i < rows.length - 1 ? "1px solid #f0f0f0" : "none",
              opacity: progress,
              transform: `translateX(${interpolate(progress, [0, 1], [20, 0])}px)`,
            }}
          >
            <div
              style={{
                flex: 1,
                fontSize: 13,
                fontFamily: robotoFamily,
                fontWeight: 400,
                color: TEXT_LIGHT,
              }}
            >
              {row.date}
            </div>
            <div
              style={{
                flex: 2,
                fontSize: 13,
                fontFamily: robotoFamily,
                fontWeight: 500,
                color: TEXT_COLOR,
              }}
            >
              {row.category}
            </div>
            <div
              style={{
                flex: 1,
                fontSize: 13,
                fontFamily: robotoFamily,
                fontWeight: 700,
                color: TEXT_COLOR,
                textAlign: "right",
              }}
            >
              {row.amount}
            </div>
          </div>
        );
      })}
    </div>
  );
};
