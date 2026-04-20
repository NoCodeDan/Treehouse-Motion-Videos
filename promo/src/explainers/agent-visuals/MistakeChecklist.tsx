import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { DotGridBg } from "../../components/DotGridBg";
import { AnimatedText } from "../../components/AnimatedText";
import { GreenLine } from "../../components/GreenLine";
import { quicksandFamily, robotoFamily } from "../../fonts";
import {
  TREEHOUSE_GREEN,
  TEXT_COLOR,
  TEXT_LIGHT,
  WHITE,
  BG_LIGHT,
} from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";

const MISTAKES = [
  "Giving agents vague goals",
  "Skipping the manual walkthrough",
  "Infinite loops & cost blowouts",
  "Trusting too much, too fast",
  "Ignoring failure modes",
  "Prompt injection risks",
  "Skipping observability",
];

const RED_WARNING = "#e74c3c";

export const MistakeChecklist: React.FC<{ bgTint?: string }> = ({
  bgTint = BG_LIGHT,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleDelay = 10;
  const listStartDelay = 40;

  return (
    <AbsoluteFill>
      <DotGridBg color={bgTint} />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 120px",
          gap: 20,
        }}
      >
        <AnimatedText
          text="Common Mistakes"
          fontSize={52}
          fontFamily={quicksandFamily}
          fontWeight={700}
          color={TEXT_COLOR}
          delay={titleDelay}
          style={{ textAlign: "center" }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            marginTop: 24,
            width: "100%",
            maxWidth: 800,
          }}
        >
          {MISTAKES.map((mistake, i) => {
            const itemDelay = listStartDelay + staggerDelay(i, 10);
            const progress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: itemDelay,
            });
            const translateX = interpolate(progress, [0, 1], [40, 0]);

            // X mark animates slightly after the row
            const xProgress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: itemDelay + 6,
            });
            const xScale = interpolate(xProgress, [0, 1], [0, 1]);

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  opacity: progress,
                  transform: `translateX(${translateX}px)`,
                  backgroundColor: WHITE,
                  padding: "14px 24px",
                  borderRadius: 12,
                  borderLeft: `4px solid ${RED_WARNING}`,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                {/* Red X mark */}
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: `${RED_WARNING}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transform: `scale(${xScale})`,
                  }}
                >
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M4 4L14 14M14 4L4 14"
                      stroke={RED_WARNING}
                      strokeWidth={2.5}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <span
                  style={{
                    fontSize: 24,
                    fontFamily: robotoFamily,
                    fontWeight: 500,
                    color: TEXT_COLOR,
                  }}
                >
                  {mistake}
                </span>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
      <GreenLine
        width={300}
        height={4}
        delay={listStartDelay + MISTAKES.length * 10 + 15}
        bottom={60}
        color={RED_WARNING}
      />
    </AbsoluteFill>
  );
};
