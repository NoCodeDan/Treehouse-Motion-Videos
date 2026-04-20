import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TEXT_LIGHT, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

export const ShipFormatsVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const formats = [
    { icon: "\uD83D\uDCC4", label: "PDF", desc: "Polished reports" },
    { icon: "\uD83D\uDCD3", label: "Notion", desc: "Living docs" },
    { icon: "\uD83D\uDCCA", label: "Google Sheet", desc: "Shared data" },
    { icon: "\uD83D\uDCBC", label: "LinkedIn", desc: "Public insights" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 14,
        justifyContent: "center",
        maxWidth: 360,
      }}
    >
      {formats.map((fmt, i) => {
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
              width: 160,
              backgroundColor: WHITE,
              borderRadius: 14,
              padding: "16px 14px",
              borderTop: `4px solid ${TREEHOUSE_GREEN}`,
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              textAlign: "center",
              opacity: progress,
              transform: `scale(${interpolate(progress, [0, 1], [0.8, 1])})`,
            }}
          >
            <div style={{ fontSize: 32 }}>{fmt.icon}</div>
            <div
              style={{
                fontSize: 15,
                fontFamily: robotoFamily,
                fontWeight: 700,
                color: TEXT_COLOR,
                marginTop: 4,
              }}
            >
              {fmt.label}
            </div>
            <div
              style={{
                fontSize: 11,
                fontFamily: robotoFamily,
                fontWeight: 400,
                color: TEXT_LIGHT,
                marginTop: 2,
              }}
            >
              {fmt.desc}
            </div>
          </div>
        );
      })}
    </div>
  );
};
