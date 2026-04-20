import React from "react";
import { AbsoluteFill } from "remotion";
import { DotGridBg } from "../../components/DotGridBg";
import { TrackCard } from "../../components/TrackCard";
import { DashboardViz } from "../../components/DashboardViz";
import { TINT_BLUE, ACCENT_BLUE } from "../../lib/brand";

export const ScriptTrackDashboard: React.FC = () => {
  return (
    <AbsoluteFill>
      <DotGridBg color={TINT_BLUE} dotColor="rgba(90,159,212,0.05)" />
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
            number="C"
            title="Data Dashboards"
            bullets={[
              "Use AI to analyze personal or business data",
              "Build a simple, visual dashboard",
              "Generate insights you can actually act on",
            ]}
            accentColor={ACCENT_BLUE}
            delay={10}
          />
        </div>

        {/* Right side: Dashboard viz */}
        <div
          style={{
            flex: 1,
            height: 400,
            position: "relative",
          }}
        >
          <DashboardViz delay={80} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
