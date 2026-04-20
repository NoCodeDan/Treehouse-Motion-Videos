import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { DotGridBg } from "../components/DotGridBg";
import { GreenLine } from "../components/GreenLine";
import { quicksandFamily, robotoFamily } from "../fonts";
import { SMOOTH, SNAPPY } from "../lib/animations";
import {
  TREEHOUSE_GREEN,
  TEXT_COLOR,
  TEXT_LIGHT,
  BG_LIGHT,
  TINT_GREEN,
} from "../lib/brand";

export const ProgramOverview: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Timeline bar progress
  const barProgress = spring({
    frame,
    fps,
    config: SMOOTH,
    delay: 100,
  });

  return (
    <AbsoluteFill>
      <DotGridBg color={BG_LIGHT} />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 120px",
          gap: 40,
        }}
      >
        {/* Badge */}
        {(() => {
          const badgeProgress = spring({
            frame,
            fps,
            config: SNAPPY,
            delay: 15,
          });
          return (
            <div
              style={{
                backgroundColor: TINT_GREEN,
                border: `2px solid ${TREEHOUSE_GREEN}`,
                borderRadius: 50,
                padding: "8px 24px",
                opacity: badgeProgress,
                transform: `scale(${badgeProgress})`,
              }}
            >
              <span
                style={{
                  fontFamily: robotoFamily,
                  fontSize: 16,
                  fontWeight: 600,
                  color: TREEHOUSE_GREEN,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                30-Day Program
              </span>
            </div>
          );
        })()}

        {/* Headline */}
        {(() => {
          const headProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: 45,
          });
          const translateY = interpolate(headProgress, [0, 1], [30, 0]);
          return (
            <div
              style={{
                fontFamily: quicksandFamily,
                fontSize: 60,
                fontWeight: 700,
                color: TEXT_COLOR,
                textAlign: "center",
                opacity: headProgress,
                transform: `translateY(${translateY}px)`,
                lineHeight: 1.2,
              }}
            >
              4 Weeks to Become AI-Native
            </div>
          );
        })()}

        {/* Visual timeline */}
        <div
          style={{
            width: 900,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 16,
          }}
        >
          {/* Timeline bar */}
          <div
            style={{
              height: 12,
              backgroundColor: "#e8e8e8",
              borderRadius: 6,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Left half: foundations */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: `${interpolate(barProgress, [0, 1], [0, 50])}%`,
                height: "100%",
                backgroundColor: TREEHOUSE_GREEN,
                borderRadius: 6,
              }}
            />
            {/* Right half: tracks (delayed to match "weeks 3 and 4" narration) */}
            {(() => {
              const rightProgress = spring({
                frame,
                fps,
                config: SMOOTH,
                delay: 190,
              });
              return (
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 0,
                    width: `${interpolate(rightProgress, [0, 1], [0, 50])}%`,
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #69c773, #9b6fc7, #5a9fd4)",
                    borderRadius: "0 6px 6px 0",
                  }}
                />
              );
            })()}
          </div>

          {/* Labels under the bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* Weeks 1-2 label */}
            {(() => {
              const labelProgress = spring({
                frame,
                fps,
                config: SMOOTH,
            delay: 90,
              });
              return (
                <div
                  style={{
                    width: "48%",
                    textAlign: "center",
                    opacity: labelProgress,
                  }}
                >
                  <div
                    style={{
                      fontFamily: quicksandFamily,
                      fontSize: 20,
                      fontWeight: 700,
                      color: TREEHOUSE_GREEN,
                    }}
                  >
                    Weeks 1–2
                  </div>
                  <div
                    style={{
                      fontFamily: robotoFamily,
                      fontSize: 15,
                      color: TEXT_LIGHT,
                      marginTop: 4,
                    }}
                  >
                    AI Foundations
                  </div>
                </div>
              );
            })()}

            {/* Weeks 3-4 label */}
            {(() => {
              const labelProgress = spring({
                frame,
                fps,
                config: SMOOTH,
            delay: 195,
              });
              return (
                <div
                  style={{
                    width: "48%",
                    textAlign: "center",
                    opacity: labelProgress,
                  }}
                >
                  <div
                    style={{
                      fontFamily: quicksandFamily,
                      fontSize: 20,
                      fontWeight: 700,
                      color: TEXT_COLOR,
                    }}
                  >
                    Weeks 3–4
                  </div>
                  <div
                    style={{
                      fontFamily: robotoFamily,
                      fontSize: 15,
                      color: TEXT_LIGHT,
                      marginTop: 4,
                    }}
                  >
                    Choose Your Track
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Bottom context */}
        {(() => {
          const ctxProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: 150,
          });
          return (
            <div
              style={{
                fontFamily: robotoFamily,
                fontSize: 22,
                color: TEXT_LIGHT,
                textAlign: "center",
                opacity: ctxProgress,
                maxWidth: 650,
                lineHeight: 1.5,
                marginTop: 8,
              }}
            >
              By the end, you don't just understand AI. You've shipped
              something with it.
            </div>
          );
        })()}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
