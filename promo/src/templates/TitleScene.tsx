import React from "react";
import { AbsoluteFill } from "remotion";
import { DotGridBg } from "../components/DotGridBg";
import { TreehouseLogo } from "../components/TreehouseLogo";
import { AnimatedText } from "../components/AnimatedText";
import { GreenLine } from "../components/GreenLine";
import { quicksandFamily, robotoFamily } from "../fonts";
import { TEXT_COLOR, TEXT_LIGHT, TREEHOUSE_GREEN, BG_LIGHT } from "../lib/brand";

export const TitleScene: React.FC<{
  title: string;
  subtitle?: string;
  showLogo?: boolean;
  accentColor?: string;
  bgTint?: string;
}> = ({
  title,
  subtitle,
  showLogo = true,
  accentColor = TREEHOUSE_GREEN,
  bgTint = BG_LIGHT,
}) => {
  return (
    <AbsoluteFill>
      <DotGridBg color={bgTint} />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          padding: "0 120px",
        }}
      >
        {showLogo && <TreehouseLogo size={100} delay={5} />}
        <AnimatedText
          text={title}
          fontSize={82}
          fontFamily={quicksandFamily}
          fontWeight={700}
          color={TEXT_COLOR}
          delay={showLogo ? 30 : 10}
          style={{ textAlign: "center" }}
        />
        {subtitle && (
          <AnimatedText
            text={subtitle}
            fontSize={42}
            fontFamily={robotoFamily}
            fontWeight={400}
            color={TEXT_LIGHT}
            delay={showLogo ? 55 : 35}
            style={{ textAlign: "center", maxWidth: 1100 }}
          />
        )}
      </AbsoluteFill>
      <GreenLine width={400} height={4} delay={showLogo ? 75 : 55} bottom={140} color={accentColor} />
    </AbsoluteFill>
  );
};
