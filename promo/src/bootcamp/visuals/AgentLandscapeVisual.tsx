import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TEXT_LIGHT, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

export const AgentLandscapeVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const categories = [
    { icon: "🔗", label: "No-Code\nAutomation", examples: "Zapier, Make, n8n", color: "#5a9fd4" },
    { icon: "🤖", label: "Agent\nPlatforms", examples: "Relevance, Voiceflow", color: "#9b6fc7" },
    { icon: "💻", label: "Code\nFrameworks", examples: "LangChain, CrewAI", color: "#e67e22" },
    { icon: "✨", label: "Vibe\nCoding", examples: "Lovable, Bolt, Cursor", color: "#e74c3c" },
    { icon: "🟢", label: "Claude\nCode", examples: "You are here", color: TREEHOUSE_GREEN },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", maxWidth: 420 }}>
      {categories.map((cat, i) => {
        const progress = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 12) });
        const isHighlighted = i === 4;
        return (
          <div key={i} style={{
            width: isHighlighted ? 190 : 120, backgroundColor: WHITE, borderRadius: 14,
            padding: "14px 12px", borderTop: `4px solid ${cat.color}`,
            boxShadow: isHighlighted ? `0 4px 20px ${cat.color}40` : "0 2px 12px rgba(0,0,0,0.04)",
            opacity: progress, transform: `scale(${interpolate(progress, [0, 1], [0.8, 1])})`,
            textAlign: "center",
          }}>
            <div style={{ fontSize: 24 }}>{cat.icon}</div>
            <div style={{ fontSize: 12, fontFamily: robotoFamily, fontWeight: 700, color: TEXT_COLOR, whiteSpace: "pre-line", marginTop: 4 }}>
              {cat.label}
            </div>
            <div style={{ fontSize: 10, fontFamily: robotoFamily, fontWeight: 400, color: TEXT_LIGHT, marginTop: 2 }}>
              {cat.examples}
            </div>
          </div>
        );
      })}
    </div>
  );
};
