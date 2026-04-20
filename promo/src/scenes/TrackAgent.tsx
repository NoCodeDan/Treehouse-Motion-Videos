import React from "react";
import { AbsoluteFill } from "remotion";
import { DotGridBg } from "../components/DotGridBg";
import { TrackCard } from "../components/TrackCard";
import { ChatAgent } from "../components/ChatAgent";
import { TINT_GREEN, TREEHOUSE_GREEN } from "../lib/brand";

export const TrackAgent: React.FC = () => {
  return (
    <AbsoluteFill>
      <DotGridBg color={TINT_GREEN} dotColor="rgba(105,199,115,0.06)" />
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
        {/* Left side: Track card */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <TrackCard
            number="01"
            title="Build Your Own Agent"
            bullets={[
              "Design an agent with a clear job",
              "Add tools, context & real inputs",
              "Build AI that actually works for you",
            ]}
            accentColor={TREEHOUSE_GREEN}
            delay={10}
            bulletDelays={[70, 130, 190]}
          />
        </div>

        {/* Right side: Chat + Code visual */}
        <div
          style={{
            flex: 1,
            height: 360,
            position: "relative",
          }}
        >
          <ChatAgent delay={80} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
