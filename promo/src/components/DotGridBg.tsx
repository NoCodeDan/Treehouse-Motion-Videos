import React from "react";
import { AbsoluteFill } from "remotion";
import { BG_LIGHT } from "../lib/brand";

export const DotGridBg: React.FC<{
  color?: string;
  dotColor?: string;
  dotSize?: number;
  gap?: number;
}> = ({
  color = BG_LIGHT,
  dotColor = "rgba(0,0,0,0.04)",
  dotSize = 2,
  gap = 28,
}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: color,
        backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${gap}px ${gap}px`,
      }}
    />
  );
};
