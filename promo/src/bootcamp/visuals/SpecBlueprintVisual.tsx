import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SMOOTH, SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

const sections = [
  "Project Overview",
  "User Stories",
  "Feature List",
  "Tech Stack",
  "Data Model",
  "UI Wireframes",
];

export const SpecBlueprintVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const paperP = spring({ frame, fps, config: SMOOTH, delay: delay + 5 });

  return (
    <div
      style={{
        width: 400,
        backgroundColor: "#1a2744",
        borderRadius: 16,
        padding: "28px 24px",
        boxShadow: "0 6px 30px rgba(0,0,0,0.2)",
        opacity: paperP,
        transform: `scale(${interpolate(paperP, [0, 1], [0.95, 1])})`,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <span style={{ fontSize: 20 }}>📋</span>
        <div style={{ fontSize: 20, fontFamily: quicksandFamily, fontWeight: 700, color: WHITE, marginTop: 6 }}>
          App Spec
        </div>
        <div style={{ width: 60, height: 2, backgroundColor: TREEHOUSE_GREEN, margin: "8px auto 0", borderRadius: 1 }} />
      </div>

      {/* Sections */}
      {sections.map((section, i) => {
        const sp = spring({ frame, fps, config: SNAPPY, delay: delay + 25 + staggerDelay(i, 16) });
        const tx = interpolate(sp, [0, 1], [20, 0]);
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              opacity: sp,
              transform: `translateX(${tx}px)`,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: TREEHOUSE_GREEN,
              }}
            />
            <div
              style={{
                flex: 1,
                borderBottom: "1px dashed rgba(255,255,255,0.2)",
                paddingBottom: 6,
              }}
            >
              <span style={{ fontSize: 15, fontFamily: robotoFamily, fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>
                {section}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
