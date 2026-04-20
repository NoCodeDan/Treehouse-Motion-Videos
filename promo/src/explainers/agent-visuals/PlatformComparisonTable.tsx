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
  TEXT_COLOR,
  TREEHOUSE_GREEN,
  ACCENT_PURPLE,
  ACCENT_BLUE,
  BG_LIGHT,
  WHITE,
} from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";

const CATEGORY_COLORS: Record<string, string> = {
  "Prompt": ACCENT_PURPLE,
  "No-Code": TREEHOUSE_GREEN,
  "Vibe": ACCENT_BLUE,
  "Framework": "#e67e22",
  "Personal": "#8a9aa5",
};

const PLATFORMS = [
  { name: "Claude Projects", category: "Prompt", price: "$20/mo", bestFor: "Quick personal agents" },
  { name: "n8n", category: "No-Code", price: "Free / $20", bestFor: "Automation workflows" },
  { name: "Lovable", category: "Vibe", price: "$20/mo", bestFor: "Full-stack apps" },
  { name: "Bolt", category: "Vibe", price: "$10/mo", bestFor: "Fast prototyping" },
  { name: "CrewAI", category: "Framework", price: "Free OSS", bestFor: "Multi-agent crews" },
  { name: "LangChain", category: "Framework", price: "Free OSS", bestFor: "Custom Python agents" },
  { name: "Cursor", category: "Vibe", price: "$20/mo", bestFor: "Dev acceleration" },
  { name: "OpenClaw", category: "Personal", price: "Free OSS", bestFor: "24/7 personal agent" },
];

export const PlatformComparisonTable: React.FC<{
  bgTint?: string;
}> = ({ bgTint = BG_LIGHT }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill>
      <DotGridBg color={bgTint} />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px 80px",
          gap: 30,
        }}
      >
        <AnimatedText
          text="Platform Comparison"
          fontSize={48}
          fontFamily={quicksandFamily}
          fontWeight={700}
          color={TEXT_COLOR}
          delay={5}
          style={{ textAlign: "center" }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            width: "100%",
            maxWidth: 1200,
          }}
        >
          {PLATFORMS.map((platform, i) => {
            const progress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: 30 + staggerDelay(i, 8),
            });
            const translateY = interpolate(progress, [0, 1], [25, 0]);
            const catColor = CATEGORY_COLORS[platform.category] || TREEHOUSE_GREEN;

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  backgroundColor: WHITE,
                  borderRadius: 12,
                  padding: "14px 20px",
                  borderLeft: `4px solid ${catColor}`,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                  opacity: progress,
                  transform: `translateY(${translateY}px)`,
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: quicksandFamily,
                      fontWeight: 700,
                      fontSize: 20,
                      color: TEXT_COLOR,
                    }}
                  >
                    {platform.name}
                  </div>
                  <div
                    style={{
                      fontFamily: robotoFamily,
                      fontWeight: 400,
                      fontSize: 15,
                      color: "#6b7b86",
                      marginTop: 2,
                    }}
                  >
                    {platform.bestFor}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                  <div
                    style={{
                      fontSize: 11,
                      fontFamily: robotoFamily,
                      fontWeight: 700,
                      color: WHITE,
                      backgroundColor: catColor,
                      padding: "3px 10px",
                      borderRadius: 10,
                      textTransform: "uppercase",
                      letterSpacing: 0.8,
                    }}
                  >
                    {platform.category}
                  </div>
                  <div
                    style={{
                      fontFamily: robotoFamily,
                      fontWeight: 600,
                      fontSize: 16,
                      color: TEXT_COLOR,
                    }}
                  >
                    {platform.price}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
      <GreenLine width={300} height={4} delay={100} bottom={50} color={TREEHOUSE_GREEN} />
    </AbsoluteFill>
  );
};
