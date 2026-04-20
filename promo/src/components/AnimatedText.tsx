import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SMOOTH } from "../lib/animations";
import type { SpringConfig } from "remotion";

export const AnimatedText: React.FC<{
  text: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string | number;
  color?: string;
  delay?: number;
  springConfig?: SpringConfig;
  style?: React.CSSProperties;
}> = ({
  text,
  fontSize = 48,
  fontFamily,
  fontWeight = 700,
  color = "#47535b",
  delay = 0,
  springConfig = SMOOTH,
  style = {},
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    config: springConfig,
    delay,
  });

  const translateY = interpolate(progress, [0, 1], [40, 0]);
  const opacity = progress;

  return (
    <div
      style={{
        fontSize,
        fontFamily,
        fontWeight,
        color,
        transform: `translateY(${translateY}px)`,
        opacity,
        lineHeight: 1.3,
        ...style,
      }}
    >
      {text}
    </div>
  );
};
