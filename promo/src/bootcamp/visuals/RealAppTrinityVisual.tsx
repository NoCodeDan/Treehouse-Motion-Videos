import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily } from "../../fonts";

export const RealAppTrinityVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const items = [
    { icon: "📦", label: "Packages", desc: "Auth, payments", color: "#5a9fd4" },
    { icon: "🔗", label: "APIs", desc: "AI models, services", color: "#9b6fc7" },
    { icon: "🗄️", label: "Database", desc: "Memory, persistence", color: TREEHOUSE_GREEN },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {(() => {
          const progress = spring({ frame, fps, config: SNAPPY, delay });
          return (
            <div style={{
              width: 130, backgroundColor: WHITE, borderRadius: 16, padding: "14px 16px",
              borderTop: `4px solid ${items[0].color}`, boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              textAlign: "center", opacity: progress, transform: `translateY(${interpolate(progress, [0, 1], [15, 0])}px)`,
            }}>
              <div style={{ fontSize: 28 }}>{items[0].icon}</div>
              <div style={{ fontSize: 14, fontFamily: robotoFamily, fontWeight: 700, color: TEXT_COLOR }}>{items[0].label}</div>
              <div style={{ fontSize: 11, fontFamily: robotoFamily, color: TEXT_COLOR }}>{items[0].desc}</div>
            </div>
          );
        })()}
      </div>
      <div style={{ display: "flex", gap: 24 }}>
        {items.slice(1).map((item, i) => {
          const progress = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i + 1, 16) });
          return (
            <div key={i} style={{
              width: 130, backgroundColor: WHITE, borderRadius: 16, padding: "14px 16px",
              borderTop: `4px solid ${item.color}`, boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              textAlign: "center", opacity: progress, transform: `translateY(${interpolate(progress, [0, 1], [15, 0])}px)`,
            }}>
              <div style={{ fontSize: 28 }}>{item.icon}</div>
              <div style={{ fontSize: 14, fontFamily: robotoFamily, fontWeight: 700, color: TEXT_COLOR }}>{item.label}</div>
              <div style={{ fontSize: 11, fontFamily: robotoFamily, color: TEXT_COLOR }}>{item.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
