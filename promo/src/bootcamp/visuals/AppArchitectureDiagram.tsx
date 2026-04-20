import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { TREEHOUSE_GREEN, ACCENT_BLUE, ACCENT_PURPLE, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

const floors = [
  { label: "Frontend", icon: "🖥️", subtitle: "What users see", color: ACCENT_BLUE },
  { label: "Backend", icon: "⚙️", subtitle: "Logic & processing", color: ACCENT_PURPLE },
  { label: "APIs", icon: "🔌", subtitle: "Communication layer", color: TREEHOUSE_GREEN },
  { label: "Database", icon: "🗄️", subtitle: "Stores everything", color: "#e67e22" },
];

export const AppArchitectureDiagram: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, width: 380 }}>
      {floors.map((floor, i) => {
        const fp = spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 22) });
        const ty = interpolate(fp, [0, 1], [20, 0]);
        const arrowP = i < floors.length - 1
          ? spring({ frame, fps, config: SNAPPY, delay: delay + staggerDelay(i, 22) + 15 })
          : 0;
        return (
          <React.Fragment key={i}>
            <div
              style={{
                width: "100%",
                backgroundColor: WHITE,
                borderRadius: 14,
                padding: "18px 24px",
                border: `2px solid ${floor.color}`,
                boxShadow: "0 3px 14px rgba(0,0,0,0.06)",
                opacity: fp,
                transform: `translateY(${ty}px)`,
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span style={{ fontSize: 28 }}>{floor.icon}</span>
              <div>
                <div style={{ fontSize: 18, fontFamily: quicksandFamily, fontWeight: 700, color: TEXT_COLOR }}>
                  {floor.label}
                </div>
                <div style={{ fontSize: 13, fontFamily: robotoFamily, fontWeight: 400, color: "#888" }}>
                  {floor.subtitle}
                </div>
              </div>
            </div>
            {i < floors.length - 1 && (
              <div style={{ height: 20, display: "flex", alignItems: "center", justifyContent: "center", opacity: arrowP }}>
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <line x1="10" y1="0" x2="10" y2="14" stroke={floor.color} strokeWidth="2" />
                  <polygon points="5,12 10,20 15,12" fill={floor.color} />
                </svg>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
