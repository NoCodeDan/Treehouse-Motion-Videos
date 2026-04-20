import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, SMOOTH, staggerDelay } from "../../lib/animations";
import { robotoFamily } from "../../fonts";

export const DeployPipelineVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = [
    { icon: "💻", label: "Editor" },
    { icon: "🐙", label: "GitHub" },
    { icon: "🚀", label: "Live URL" },
  ];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
      {steps.map((step, i) => {
        const progress = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 20) });
        const translateY = interpolate(progress, [0, 1], [20, 0]);
        const arrowProgress = i < steps.length - 1
          ? spring({ frame, fps, config: SMOOTH, delay: delay + staggerDelay(i, 20) + 12 })
          : 0;
        return (
          <React.Fragment key={i}>
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
              opacity: progress, transform: `translateY(${translateY}px)`,
            }}>
              <div style={{
                width: 100, height: 100, borderRadius: 20, backgroundColor: WHITE,
                border: `3px solid ${TREEHOUSE_GREEN}`, boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40,
              }}>{step.icon}</div>
              <div style={{ fontSize: 14, fontFamily: robotoFamily, fontWeight: 600, color: TEXT_COLOR, textAlign: "center" }}>{step.label}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ margin: "0 14px", marginBottom: 28, opacity: arrowProgress }}>
                <svg width="44" height="20" viewBox="0 0 44 20">
                  <line x1="0" y1="10" x2={interpolate(arrowProgress, [0, 1], [0, 32])} y2="10" stroke={TREEHOUSE_GREEN} strokeWidth="3" strokeLinecap="round" />
                  <polygon points="32,4 44,10 32,16" fill={TREEHOUSE_GREEN} opacity={arrowProgress} />
                </svg>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
