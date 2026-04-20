import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { quicksandFamily, robotoFamily } from "../../fonts";
import {
  TREEHOUSE_GREEN,
  TEXT_COLOR,
  TEXT_LIGHT,
  WHITE,
} from "../../lib/brand";
import { SMOOTH, SNAPPY, staggerDelay } from "../../lib/animations";

const SPECIALISTS = [
  {
    icon: "\uD83D\uDD0D",
    title: "Research Agent",
    description: "Gathers data & context",
  },
  {
    icon: "\u270D\uFE0F",
    title: "Writer Agent",
    description: "Drafts content & copy",
  },
  {
    icon: "\u2705",
    title: "QA Agent",
    description: "Reviews & validates",
  },
];

export const MultiAgentOrchestrator: React.FC<{ delay?: number }> = ({
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Orchestrator node appears first
  const orchestratorProgress = spring({
    frame,
    fps,
    config: SNAPPY,
    delay,
  });
  const orchestratorY = interpolate(orchestratorProgress, [0, 1], [20, 0]);

  // Lines grow down after orchestrator
  const lineDelay = delay + 20;
  const lineProgress = spring({
    frame,
    fps,
    config: SMOOTH,
    delay: lineDelay,
  });

  // Specialist nodes stagger in
  const specialistBaseDelay = delay + 40;

  const nodeWidth = 180;
  const nodeGap = 32;
  const totalWidth = SPECIALISTS.length * nodeWidth + (SPECIALISTS.length - 1) * nodeGap;
  const startX = -totalWidth / 2 + nodeWidth / 2;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        position: "relative",
      }}
    >
      {/* Orchestrator Node */}
      <div
        style={{
          opacity: orchestratorProgress,
          transform: `translateY(${orchestratorY}px) scale(${interpolate(orchestratorProgress, [0, 1], [0.9, 1])})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          backgroundColor: WHITE,
          borderRadius: 20,
          padding: "24px 40px",
          border: `3px solid ${TREEHOUSE_GREEN}`,
          boxShadow: `0 4px 24px ${TREEHOUSE_GREEN}33, 0 0 40px ${TREEHOUSE_GREEN}22`,
          zIndex: 2,
        }}
      >
        <span style={{ fontSize: 36 }}>{"\uD83D\uDC51"}</span>
        <span
          style={{
            fontSize: 22,
            fontFamily: quicksandFamily,
            fontWeight: 700,
            color: TREEHOUSE_GREEN,
          }}
        >
          Orchestrator
        </span>
        <span
          style={{
            fontSize: 14,
            fontFamily: robotoFamily,
            fontWeight: 400,
            color: TEXT_LIGHT,
          }}
        >
          Coordinates all agents
        </span>
      </div>

      {/* Connecting Lines (SVG) */}
      <div
        style={{
          position: "relative",
          width: totalWidth,
          height: 80,
          opacity: lineProgress,
        }}
      >
        <svg
          width={totalWidth}
          height={80}
          viewBox={`0 0 ${totalWidth} 80`}
          style={{ overflow: "visible" }}
        >
          {SPECIALISTS.map((_, i) => {
            const targetX = startX + i * (nodeWidth + nodeGap) + totalWidth / 2;
            const centerX = totalWidth / 2;
            const lineLen = interpolate(lineProgress, [0, 1], [0, 1]);

            return (
              <line
                key={i}
                x1={centerX}
                y1={0}
                x2={interpolate(lineLen, [0, 1], [centerX, targetX])}
                y2={interpolate(lineLen, [0, 1], [0, 70])}
                stroke={TREEHOUSE_GREEN}
                strokeWidth={3}
                strokeLinecap="round"
                opacity={lineProgress}
              />
            );
          })}
        </svg>
      </div>

      {/* Specialist Nodes */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: nodeGap,
        }}
      >
        {SPECIALISTS.map((specialist, i) => {
          const itemDelay = specialistBaseDelay + staggerDelay(i, 15);
          const progress = spring({
            frame,
            fps,
            config: SNAPPY,
            delay: itemDelay,
          });
          const translateY = interpolate(progress, [0, 1], [20, 0]);

          return (
            <div
              key={i}
              style={{
                width: nodeWidth,
                opacity: progress,
                transform: `translateY(${translateY}px)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                backgroundColor: WHITE,
                borderRadius: 16,
                padding: "20px 16px",
                border: "2px solid #e0e6ea",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <span style={{ fontSize: 28 }}>{specialist.icon}</span>
              <span
                style={{
                  fontSize: 16,
                  fontFamily: quicksandFamily,
                  fontWeight: 700,
                  color: TEXT_COLOR,
                  textAlign: "center",
                }}
              >
                {specialist.title}
              </span>
              <span
                style={{
                  fontSize: 13,
                  fontFamily: robotoFamily,
                  fontWeight: 400,
                  color: TEXT_LIGHT,
                  textAlign: "center",
                }}
              >
                {specialist.description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
