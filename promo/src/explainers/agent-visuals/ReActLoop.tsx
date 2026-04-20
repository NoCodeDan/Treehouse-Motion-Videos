import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { robotoFamily, quicksandFamily } from "../../fonts";
import {
  TREEHOUSE_GREEN,
  TEXT_COLOR,
  WHITE,
  ACCENT_BLUE,
  ACCENT_PURPLE,
} from "../../lib/brand";
import { SMOOTH, SNAPPY, staggerDelay } from "../../lib/animations";

const NODES = [
  { icon: "👁", label: "Perceive", color: ACCENT_BLUE },
  { icon: "🧠", label: "Reason", color: ACCENT_PURPLE },
  { icon: "⚡", label: "Act", color: TREEHOUSE_GREEN },
  { icon: "🔍", label: "Observe", color: ACCENT_BLUE },
  { icon: "💾", label: "Remember", color: ACCENT_PURPLE },
  { icon: "🔄", label: "Repeat", color: TREEHOUSE_GREEN },
];

const RADIUS = 150;
const CENTER_X = 200;
const CENTER_Y = 200;

export const ReActLoop: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const nodePositions = NODES.map((_, i) => {
    const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: CENTER_X + Math.cos(angle) * RADIUS,
      y: CENTER_Y + Math.sin(angle) * RADIUS,
    };
  });

  // Cycling highlight
  const cycleProgress = spring({
    frame,
    fps,
    config: SMOOTH,
    delay: delay + NODES.length * 20 + 30,
  });
  const cycleFrame = Math.max(0, frame - (delay + NODES.length * 20 + 50));
  const activeNode = Math.floor(cycleFrame / 12) % NODES.length;

  return (
    <div
      style={{
        width: 400,
        height: 400,
        position: "relative",
      }}
    >
      {/* Connection lines */}
      <svg
        width={400}
        height={400}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {NODES.map((_, i) => {
          const next = (i + 1) % NODES.length;
          const lineDelay = delay + staggerDelay(i, 20) + 12;
          const lineProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: lineDelay,
          });

          const from = nodePositions[i];
          const to = nodePositions[next];

          // Curved path via center offset
          const midX = (from.x + to.x) / 2 + (CENTER_X - (from.x + to.x) / 2) * 0.3;
          const midY = (from.y + to.y) / 2 + (CENTER_Y - (from.y + to.y) / 2) * 0.3;

          const pathLength = interpolate(lineProgress, [0, 1], [0, 1]);

          return (
            <path
              key={`line-${i}`}
              d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
              stroke={TREEHOUSE_GREEN}
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeDasharray="200"
              strokeDashoffset={interpolate(pathLength, [0, 1], [200, 0])}
              opacity={lineProgress * 0.5}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {NODES.map((node, i) => {
        const itemDelay = delay + staggerDelay(i, 20);
        const progress = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: itemDelay,
        });

        const scale = interpolate(progress, [0, 1], [0.3, 1]);
        const pos = nodePositions[i];

        const isActive = cycleProgress > 0.5 && activeNode === i;
        const glowOpacity = isActive ? 0.4 : 0;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: pos.x - 44,
              top: pos.y - 44,
              width: 88,
              height: 88,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              backgroundColor: WHITE,
              borderRadius: 16,
              border: `2px solid ${isActive ? node.color : "#e0e6ea"}`,
              boxShadow: isActive
                ? `0 4px 20px ${node.color}44`
                : "0 2px 10px rgba(0,0,0,0.06)",
              opacity: progress,
              transform: `scale(${scale})`,
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: -4,
                borderRadius: 20,
                backgroundColor: node.color,
                opacity: glowOpacity,
                filter: "blur(12px)",
                zIndex: -1,
              }}
            />
            <span style={{ fontSize: 28 }}>{node.icon}</span>
            <span
              style={{
                fontSize: 11,
                fontFamily: robotoFamily,
                fontWeight: 600,
                color: TEXT_COLOR,
                textAlign: "center",
              }}
            >
              {node.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};
