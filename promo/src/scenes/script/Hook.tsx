import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { DotGridBg } from "../../components/DotGridBg";
import { TreehouseLogo } from "../../components/TreehouseLogo";
import { GreenLine } from "../../components/GreenLine";
import { quicksandFamily, robotoFamily } from "../../fonts";
import { SMOOTH } from "../../lib/animations";
import { TEXT_COLOR, TEXT_LIGHT } from "../../lib/brand";

export const Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Line 1: "AI is moving fast."
  const line1 = spring({ frame, fps, config: SMOOTH, delay: 15 });
  const line1Y = interpolate(line1, [0, 1], [30, 0]);

  // Line 2: "Most people feel behind."
  const line2 = spring({ frame, fps, config: SMOOTH, delay: 60 });
  const line2Y = interpolate(line2, [0, 1], [30, 0]);

  // Line 3: solution
  const line3 = spring({ frame, fps, config: SMOOTH, delay: 120 });
  const line3Y = interpolate(line3, [0, 1], [20, 0]);

  return (
    <AbsoluteFill>
      <DotGridBg />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          padding: "60px 120px",
        }}
      >
        <TreehouseLogo size={80} delay={5} />

        <div
          style={{
            fontFamily: quicksandFamily,
            fontSize: 72,
            fontWeight: 700,
            color: TEXT_COLOR,
            textAlign: "center",
            opacity: line1,
            transform: `translateY(${line1Y}px)`,
            lineHeight: 1.2,
          }}
        >
          AI is moving fast.
        </div>

        <div
          style={{
            fontFamily: quicksandFamily,
            fontSize: 52,
            fontWeight: 600,
            color: TEXT_LIGHT,
            textAlign: "center",
            opacity: line2,
            transform: `translateY(${line2Y}px)`,
            lineHeight: 1.2,
          }}
        >
          Most people feel behind.
        </div>

        <div
          style={{
            fontFamily: robotoFamily,
            fontSize: 28,
            fontWeight: 400,
            color: TEXT_LIGHT,
            textAlign: "center",
            opacity: line3,
            transform: `translateY(${line3Y}px)`,
            maxWidth: 750,
            lineHeight: 1.5,
            marginTop: 12,
          }}
        >
          This program fixes that. In 30 days, you go from confused to building
          real things.
        </div>
      </AbsoluteFill>

      <GreenLine width={400} height={4} delay={160} bottom={120} />
    </AbsoluteFill>
  );
};
