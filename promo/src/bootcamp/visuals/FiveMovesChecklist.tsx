import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, ACCENT_BLUE, ACCENT_PURPLE, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

const moves = [
  { text: "Add specific context", color: TREEHOUSE_GREEN },
  { text: "Define the format you want", color: ACCENT_BLUE },
  { text: "Give it a role", color: ACCENT_PURPLE },
  { text: "Include examples", color: TREEHOUSE_GREEN },
  { text: "Set constraints", color: ACCENT_BLUE },
];

export const FiveMovesChecklist: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, width: 420 }}>
      {moves.map((move, i) => {
        const p = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 18) });
        const tx = interpolate(p, [0, 1], [30, 0]);
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              opacity: p,
              transform: `translateX(${tx}px)`,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: move.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                fontFamily: quicksandFamily,
                fontWeight: 700,
                color: WHITE,
                flexShrink: 0,
              }}
            >
              {i + 1}
            </div>
            <span style={{ fontSize: 18, fontFamily: robotoFamily, fontWeight: 500, color: TEXT_COLOR }}>
              {move.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};
