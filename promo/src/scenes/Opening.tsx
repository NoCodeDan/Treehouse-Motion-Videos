import React from "react";
import { AbsoluteFill } from "remotion";
import { DotGridBg } from "../components/DotGridBg";
import { TreehouseLogo } from "../components/TreehouseLogo";
import { AnimatedText } from "../components/AnimatedText";
import { GreenLine } from "../components/GreenLine";
import { quicksandFamily, robotoFamily } from "../fonts";
import { TEXT_COLOR, TEXT_LIGHT } from "../lib/brand";

export const Opening: React.FC = () => {
  return (
    <AbsoluteFill>
      <DotGridBg />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <TreehouseLogo size={100} delay={10} />

        <AnimatedText
          text={"Learn AI in 30 Days\nwith Treehouse"}
          fontSize={80}
          fontFamily={quicksandFamily}
          fontWeight={700}
          color={TEXT_COLOR}
          delay={35}
          style={{ textAlign: "center", whiteSpace: "pre-line" }}
        />

        <AnimatedText
          text="Choose your path. Build something real."
          fontSize={32}
          fontFamily={robotoFamily}
          fontWeight={400}
          color={TEXT_LIGHT}
          delay={65}
          style={{ textAlign: "center" }}
        />
      </AbsoluteFill>

      <GreenLine width={400} height={4} delay={85} bottom={140} />
    </AbsoluteFill>
  );
};
