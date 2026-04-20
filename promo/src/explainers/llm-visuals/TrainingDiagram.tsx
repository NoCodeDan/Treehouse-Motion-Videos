import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { robotoFamily } from "../../fonts";
import { TREEHOUSE_GREEN, TEXT_COLOR, WHITE } from "../../lib/brand";
import { SNAPPY, SMOOTH } from "../../lib/animations";

const STEPS = [
  { icon: "📚", label: "Internet & Books", sublabel: "Trillions of words" },
  { icon: "⚙️", label: "Training", sublabel: "Pattern recognition" },
  { icon: "🧠", label: "LLM", sublabel: "Ready to generate" },
];

export const TrainingDiagram: React.FC<{ delay?: number }> = ({
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
      }}
    >
      {STEPS.map((step, i) => {
        const stepProgress = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: delay + i * 30,
        });
        const translateY = interpolate(stepProgress, [0, 1], [20, 0]);

        const arrowProgress =
          i < STEPS.length - 1
            ? spring({
                frame,
                fps,
                config: SMOOTH,
                delay: delay + i * 30 + 18,
              })
            : 0;

        return (
          <React.Fragment key={i}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                opacity: stepProgress,
                transform: `translateY(${translateY}px)`,
              }}
            >
              <div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 20,
                  backgroundColor: WHITE,
                  border: `3px solid ${TREEHOUSE_GREEN}`,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 44,
                }}
              >
                {step.icon}
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontFamily: robotoFamily,
                  fontWeight: 600,
                  color: TEXT_COLOR,
                  textAlign: "center",
                }}
              >
                {step.label}
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontFamily: robotoFamily,
                  fontWeight: 400,
                  color: "#8a9aa5",
                  textAlign: "center",
                }}
              >
                {step.sublabel}
              </div>
            </div>

            {i < STEPS.length - 1 && (
              <div
                style={{
                  margin: "0 20px",
                  marginBottom: 44,
                  opacity: arrowProgress,
                }}
              >
                <svg width="50" height="20" viewBox="0 0 50 20">
                  <line
                    x1="0"
                    y1="10"
                    x2={interpolate(arrowProgress, [0, 1], [0, 38])}
                    y2="10"
                    stroke={TREEHOUSE_GREEN}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <polygon
                    points="38,4 50,10 38,16"
                    fill={TREEHOUSE_GREEN}
                    opacity={arrowProgress}
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
