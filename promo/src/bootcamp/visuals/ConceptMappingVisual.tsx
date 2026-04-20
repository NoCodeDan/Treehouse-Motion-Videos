import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, ACCENT_BLUE, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

const pairs = [
  { abstract: "Frontend", concrete: "Your app's screens" },
  { abstract: "Database", concrete: "Where users' data lives" },
  { abstract: "API", concrete: "How parts talk to each other" },
  { abstract: "Auth", concrete: "Login & user accounts" },
];

export const ConceptMappingVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 40, width: 500 }}>
      {/* Abstract column */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        <div style={{ fontSize: 14, fontFamily: quicksandFamily, fontWeight: 700, color: ACCENT_BLUE, textAlign: "center", marginBottom: 4 }}>
          Abstract
        </div>
        {pairs.map((pair, i) => {
          const p = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 18) });
          return (
            <div
              key={i}
              style={{
                backgroundColor: WHITE,
                padding: "10px 16px",
                borderRadius: 10,
                border: `2px solid ${ACCENT_BLUE}`,
                fontSize: 15,
                fontFamily: robotoFamily,
                fontWeight: 500,
                color: TEXT_COLOR,
                textAlign: "center",
                opacity: p,
              }}
            >
              {pair.abstract}
            </div>
          );
        })}
      </div>

      {/* Connecting arrows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 32 }}>
        {pairs.map((_, i) => {
          const lp = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 18) + 25 });
          return (
            <div key={i} style={{ height: 38, display: "flex", alignItems: "center", opacity: lp }}>
              <span style={{ fontSize: 20, color: TREEHOUSE_GREEN }}>→</span>
            </div>
          );
        })}
      </div>

      {/* Concrete column */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        <div style={{ fontSize: 14, fontFamily: quicksandFamily, fontWeight: 700, color: TREEHOUSE_GREEN, textAlign: "center", marginBottom: 4 }}>
          Your App
        </div>
        {pairs.map((pair, i) => {
          const p = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 18) + 15 });
          return (
            <div
              key={i}
              style={{
                backgroundColor: WHITE,
                padding: "10px 16px",
                borderRadius: 10,
                border: `2px solid ${TREEHOUSE_GREEN}`,
                fontSize: 15,
                fontFamily: robotoFamily,
                fontWeight: 500,
                color: TEXT_COLOR,
                textAlign: "center",
                opacity: p,
              }}
            >
              {pair.concrete}
            </div>
          );
        })}
      </div>
    </div>
  );
};
