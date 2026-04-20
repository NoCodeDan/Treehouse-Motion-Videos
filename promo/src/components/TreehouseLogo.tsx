import React from "react";
import { Img, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { SMOOTH } from "../lib/animations";

export const TreehouseLogo: React.FC<{
  size?: number;
  delay?: number;
}> = ({ size = 80, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: SMOOTH,
    delay,
  });

  const opacity = spring({
    frame,
    fps,
    config: SMOOTH,
    delay,
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Img
        src={staticFile("treehouse-logo.svg")}
        style={{
          width: size,
          height: size,
          transform: `scale(${scale})`,
          opacity,
        }}
      />
    </div>
  );
};
