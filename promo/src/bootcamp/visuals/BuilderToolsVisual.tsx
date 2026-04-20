import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TEXT_LIGHT, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

export const BuilderToolsVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const tools = [
    { icon: "💜", label: "Lovable", desc: "Visual-first" },
    { icon: "▲", label: "v0", desc: "UI components" },
    { icon: "⚡", label: "Bolt.new", desc: "Full-stack" },
    { icon: "🔧", label: "Replit", desc: "Full IDE" },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", maxWidth: 360 }}>
      {tools.map((tool, i) => {
        const progress = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 14) });
        return (
          <div key={i} style={{
            width: 160, backgroundColor: WHITE, borderRadius: 14,
            padding: "16px 14px", borderTop: `4px solid ${TREEHOUSE_GREEN}`,
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)", textAlign: "center",
            opacity: progress, transform: `scale(${interpolate(progress, [0, 1], [0.8, 1])})`,
          }}>
            <div style={{ fontSize: 32 }}>{tool.icon}</div>
            <div style={{ fontSize: 15, fontFamily: robotoFamily, fontWeight: 700, color: TEXT_COLOR, marginTop: 4 }}>{tool.label}</div>
            <div style={{ fontSize: 11, fontFamily: robotoFamily, fontWeight: 400, color: TEXT_LIGHT, marginTop: 2 }}>{tool.desc}</div>
          </div>
        );
      })}
    </div>
  );
};
