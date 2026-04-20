import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TEXT_COLOR, TEXT_LIGHT, TREEHOUSE_GREEN, WHITE } from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";
import { robotoFamily, quicksandFamily } from "../../fonts";

export const DataJourneyVisual: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = [
    { icon: "\u2753", label: "Question" },
    { icon: "\uD83D\uDDC2\uFE0F", label: "Data" },
    { icon: "\uD83D\uDCCA", label: "Chart" },
    { icon: "\uD83D\uDCA1", label: "Insight" },
    { icon: "\u2705", label: "Decision" },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 0,
        maxWidth: 420,
      }}
    >
      {steps.map((step, i) => {
        const progress = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: delay + staggerDelay(i, 14),
        });

        return (
          <React.Fragment key={i}>
            {/* Step node */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: progress,
                transform: `scale(${interpolate(progress, [0, 1], [0.7, 1])})`,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: WHITE,
                  border: `2px solid ${TREEHOUSE_GREEN}`,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                }}
              >
                {step.icon}
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontFamily: robotoFamily,
                  fontWeight: 600,
                  color: TEXT_COLOR,
                  marginTop: 6,
                  textAlign: "center",
                }}
              >
                {step.label}
              </div>
            </div>

            {/* Arrow between steps */}
            {i < steps.length - 1 && (() => {
              const arrowProgress = spring({
                frame,
                fps,
                config: SNAPPY,
                delay: delay + staggerDelay(i, 14) + 7,
              });
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 18,
                    opacity: arrowProgress,
                    transform: `scaleX(${interpolate(arrowProgress, [0, 1], [0, 1])})`,
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 2,
                      backgroundColor: TREEHOUSE_GREEN,
                    }}
                  />
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "5px solid transparent",
                      borderBottom: "5px solid transparent",
                      borderLeft: `6px solid ${TREEHOUSE_GREEN}`,
                    }}
                  />
                </div>
              );
            })()}
          </React.Fragment>
        );
      })}
    </div>
  );
};
