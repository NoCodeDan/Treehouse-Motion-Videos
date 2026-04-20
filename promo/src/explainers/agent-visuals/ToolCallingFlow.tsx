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
  ACCENT_BLUE,
  ACCENT_PURPLE,
} from "../../lib/brand";
import { SMOOTH, SNAPPY, staggerDelay } from "../../lib/animations";

const TOOLS = [
  { label: "Search API", color: ACCENT_BLUE },
  { label: "Gmail API", color: ACCENT_PURPLE },
  { label: "Database", color: TREEHOUSE_GREEN },
];

export const ToolCallingFlow: React.FC<{ delay?: number }> = ({
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // LLM box
  const llmProgress = spring({
    frame,
    fps,
    config: SNAPPY,
    delay: delay,
  });

  // MCP box
  const mcpProgress = spring({
    frame,
    fps,
    config: SNAPPY,
    delay: delay + 18,
  });

  // Arrow LLM → MCP
  const arrow1Progress = spring({
    frame,
    fps,
    config: SMOOTH,
    delay: delay + 30,
  });

  // Arrow MCP → Tools
  const arrow2Progress = spring({
    frame,
    fps,
    config: SMOOTH,
    delay: delay + 48,
  });

  // Function call badge
  const callBadgeProgress = spring({
    frame,
    fps,
    config: SMOOTH,
    delay: delay + 60,
  });
  const callBadgeX = interpolate(callBadgeProgress, [0, 1], [0, 1]);

  // Result badge flowing back
  const resultBadgeProgress = spring({
    frame,
    fps,
    config: SMOOTH,
    delay: delay + 85,
  });
  const resultBadgeX = interpolate(resultBadgeProgress, [0, 1], [1, 0]);

  const llmScale = interpolate(llmProgress, [0, 1], [0.8, 1]);
  const mcpScale = interpolate(mcpProgress, [0, 1], [0.8, 1]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      {/* Main flow row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* LLM Box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            opacity: llmProgress,
            transform: `scale(${llmScale})`,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 20,
              backgroundColor: WHITE,
              border: "2px solid #e0e6ea",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 40 }}>🧠</span>
            <span
              style={{
                fontSize: 18,
                fontFamily: quicksandFamily,
                fontWeight: 700,
                color: TEXT_COLOR,
              }}
            >
              LLM
            </span>
          </div>
          <span
            style={{
              fontSize: 12,
              fontFamily: robotoFamily,
              fontWeight: 400,
              color: TEXT_LIGHT,
              textAlign: "center",
              maxWidth: 120,
            }}
          >
            Decides what tool to call
          </span>
        </div>

        {/* Arrow 1: LLM → MCP */}
        <div
          style={{
            width: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            marginBottom: 28,
            position: "relative",
          }}
        >
          <svg width="80" height="20" viewBox="0 0 80 20">
            <line
              x1="0"
              y1="10"
              x2={interpolate(arrow1Progress, [0, 1], [0, 62])}
              y2="10"
              stroke={TREEHOUSE_GREEN}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <polygon
              points="62,4 76,10 62,16"
              fill={TREEHOUSE_GREEN}
              opacity={arrow1Progress}
            />
          </svg>

          {/* Function call badge */}
          <div
            style={{
              position: "absolute",
              top: -20,
              left: interpolate(callBadgeX, [0, 1], [0, 20]),
              opacity: callBadgeProgress,
              transform: `scale(${callBadgeProgress})`,
            }}
          >
            <div
              style={{
                fontSize: 9,
                fontFamily: robotoFamily,
                fontWeight: 600,
                color: WHITE,
                backgroundColor: ACCENT_BLUE,
                padding: "3px 8px",
                borderRadius: 6,
                whiteSpace: "nowrap",
              }}
            >
              function call
            </div>
          </div>

          {/* Result badge */}
          <div
            style={{
              position: "absolute",
              top: 22,
              left: interpolate(resultBadgeX, [0, 1], [0, 20]),
              opacity: resultBadgeProgress,
              transform: `scale(${resultBadgeProgress})`,
            }}
          >
            <div
              style={{
                fontSize: 9,
                fontFamily: robotoFamily,
                fontWeight: 600,
                color: WHITE,
                backgroundColor: TREEHOUSE_GREEN,
                padding: "3px 8px",
                borderRadius: 6,
                whiteSpace: "nowrap",
              }}
            >
              ← result
            </div>
          </div>
        </div>

        {/* MCP Box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            opacity: mcpProgress,
            transform: `scale(${mcpScale})`,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 20,
              backgroundColor: WHITE,
              border: `3px solid ${TREEHOUSE_GREEN}`,
              boxShadow: `0 4px 20px ${TREEHOUSE_GREEN}22`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 40 }}>🔌</span>
            <span
              style={{
                fontSize: 18,
                fontFamily: quicksandFamily,
                fontWeight: 700,
                color: TREEHOUSE_GREEN,
              }}
            >
              MCP
            </span>
          </div>
          <span
            style={{
              fontSize: 12,
              fontFamily: robotoFamily,
              fontWeight: 400,
              color: TEXT_LIGHT,
              textAlign: "center",
              maxWidth: 120,
            }}
          >
            Universal connector
          </span>
        </div>

        {/* Arrow 2: MCP → Tools */}
        <div
          style={{
            width: 60,
            display: "flex",
            alignItems: "center",
            marginBottom: 28,
          }}
        >
          <svg width="60" height="20" viewBox="0 0 60 20">
            <line
              x1="0"
              y1="10"
              x2={interpolate(arrow2Progress, [0, 1], [0, 42])}
              y2="10"
              stroke={TREEHOUSE_GREEN}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <polygon
              points="42,4 56,10 42,16"
              fill={TREEHOUSE_GREEN}
              opacity={arrow2Progress}
            />
          </svg>
        </div>

        {/* Tool boxes */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {TOOLS.map((tool, i) => {
            const toolDelay = delay + staggerDelay(i, 14) + 36;
            const toolProgress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: toolDelay,
            });

            const translateX = interpolate(toolProgress, [0, 1], [20, 0]);

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  opacity: toolProgress,
                  transform: `translateX(${translateX}px)`,
                }}
              >
                <div
                  style={{
                    width: 130,
                    height: 38,
                    borderRadius: 10,
                    backgroundColor: WHITE,
                    border: `2px solid ${tool.color}`,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontFamily: robotoFamily,
                      fontWeight: 600,
                      color: tool.color,
                    }}
                  >
                    {tool.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
