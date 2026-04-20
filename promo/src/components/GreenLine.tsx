import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SMOOTH } from "../lib/animations";
import { TREEHOUSE_GREEN } from "../lib/brand";

export const GreenLine: React.FC<{
  width?: number | string;
  height?: number;
  delay?: number;
  bottom?: number;
  color?: string;
}> = ({
  width = "100%",
  height = 4,
  delay = 0,
  bottom = 0,
  color = TREEHOUSE_GREEN,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    config: SMOOTH,
    delay,
  });

  const scaleX = interpolate(progress, [0, 1], [0, 1]);

  return (
    <div
      style={{
        position: "absolute",
        bottom,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width,
          height,
          backgroundColor: color,
          borderRadius: height / 2,
          transform: `scaleX(${scaleX})`,
          transformOrigin: "center",
        }}
      />
    </div>
  );
};
