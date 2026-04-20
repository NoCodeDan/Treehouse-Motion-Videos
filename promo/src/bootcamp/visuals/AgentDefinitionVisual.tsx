import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TEXT_LIGHT, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

export const AgentDefinitionVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardProgress = spring({ frame, fps, config: SNAPPY, delay });
  const fields = [
    { label: "Agent Name", value: "[your agent's name]" },
    { label: "Job", value: "Does [what] for [who]" },
    { label: "Input", value: "When I give it [this]..." },
    { label: "Output", value: "...it produces [this format]" },
    { label: "Guardrails", value: "It should NEVER [list]" },
  ];

  return (
    <div style={{
      backgroundColor: WHITE, borderRadius: 20, padding: "28px 32px",
      borderTop: `5px solid ${TREEHOUSE_GREEN}`, boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
      opacity: cardProgress, transform: `scale(${interpolate(cardProgress, [0, 1], [0.9, 1])})`,
      width: 380,
    }}>
      <div style={{
        fontSize: 20, fontFamily: quicksandFamily, fontWeight: 700,
        color: TREEHOUSE_GREEN, marginBottom: 16,
      }}>
        Agent Definition Sheet
      </div>
      {fields.map((field, i) => {
        const progress = spring({ frame, fps, config: SNAPPY, delay: delay + 15 + staggerDelay(i, 10) });
        return (
          <div key={i} style={{
            opacity: progress, marginBottom: 10,
            transform: `translateX(${interpolate(progress, [0, 1], [20, 0])}px)`,
          }}>
            <div style={{ fontSize: 12, fontFamily: robotoFamily, fontWeight: 700, color: TREEHOUSE_GREEN, textTransform: "uppercase", letterSpacing: 1 }}>
              {field.label}
            </div>
            <div style={{ fontSize: 15, fontFamily: robotoFamily, fontWeight: 400, color: TEXT_LIGHT }}>
              {field.value}
            </div>
          </div>
        );
      })}
    </div>
  );
};
