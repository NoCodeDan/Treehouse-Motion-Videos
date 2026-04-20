import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, SMOOTH, staggerDelay } from "../../lib/animations";
import { robotoFamily } from "../../fonts";

export const AgentFlowVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = [
    { icon: "📥", label: "Task / Input" },
    { icon: "⚙️", label: "AI Agent" },
    { icon: "📤", label: "Consistent Output" },
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
              display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
              opacity: progress, transform: `translateY(${translateY}px)`,
            }}>
              <div style={{
                width: 110, height: 110, borderRadius: 20, backgroundColor: WHITE,
                border: `3px solid ${TREEHOUSE_GREEN}`, boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44,
              }}>
                {step.icon}
              </div>
              <div style={{
                fontSize: 16, fontFamily: robotoFamily, fontWeight: 600,
                color: TEXT_COLOR, textAlign: "center", maxWidth: 120,
              }}>
                {step.label}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ margin: "0 16px", marginBottom: 30, opacity: arrowProgress }}>
                <svg width="50" height="20" viewBox="0 0 50 20">
                  <line x1="0" y1="10" x2={interpolate(arrowProgress, [0, 1], [0, 38])} y2="10"
                    stroke={TREEHOUSE_GREEN} strokeWidth="3" strokeLinecap="round" />
                  <polygon points="38,4 50,10 38,16" fill={TREEHOUSE_GREEN} opacity={arrowProgress} />
                </svg>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
