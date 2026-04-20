import React from "react";
import { AbsoluteFill } from "remotion";
import { DotGridBg } from "../components/DotGridBg";
import { TrackCard } from "../components/TrackCard";
import { BrowserMockup } from "../components/BrowserMockup";
import { TINT_PURPLE, ACCENT_PURPLE } from "../lib/brand";

export const TrackApp: React.FC = () => {
  return (
    <AbsoluteFill>
      <DotGridBg color={TINT_PURPLE} dotColor="rgba(155,111,199,0.05)" />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 80px",
          gap: 60,
        }}
      >
        {/* Left side: Browser mockup (appears after card) */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BrowserMockup delay={80} />
        </div>

        {/* Right side: Track card (appears first) */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <TrackCard
            number="02"
            title="Build Your Own App"
            bullets={[
              "Build a working web app with AI",
              "Add real features: auth, APIs & more",
              "Launch live with a shareable URL",
            ]}
            accentColor={ACCENT_PURPLE}
            delay={10}
            bulletDelays={[70, 130, 190]}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
