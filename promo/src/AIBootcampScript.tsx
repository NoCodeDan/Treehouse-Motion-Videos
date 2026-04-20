import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { fade } from "@remotion/transitions/fade";
import { Hook } from "./scenes/script/Hook";
import { ProgramStructure } from "./scenes/script/ProgramStructure";
import { FoundationPrompting } from "./scenes/script/FoundationPrompting";
import { FoundationTools } from "./scenes/script/FoundationTools";
import { FoundationBuilder } from "./scenes/script/FoundationBuilder";
import { ChooseTrack } from "./scenes/script/ChooseTrack";
import { ScriptTrackAgent } from "./scenes/script/TrackAgent";
import { ScriptTrackApp } from "./scenes/script/TrackApp";
import { ScriptTrackDashboard } from "./scenes/script/TrackDashboard";
import { Outcome } from "./scenes/script/Outcome";
import { ScriptCTA } from "./scenes/script/CTA";

const T = 20; // standard transition duration

export const AIBootcampScript: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1: Hook — 240 frames (8s) */}
        <TransitionSeries.Sequence durationInFrames={240}>
          <Hook />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 2: Program Structure — 330 frames (11s) */}
        <TransitionSeries.Sequence durationInFrames={330}>
          <ProgramStructure />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 3: Foundation — Prompting — 270 frames (9s) */}
        <TransitionSeries.Sequence durationInFrames={270}>
          <FoundationPrompting />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 4: Foundation — AI Tools — 270 frames (9s) */}
        <TransitionSeries.Sequence durationInFrames={270}>
          <FoundationTools />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 5: Foundation — Think Like a Builder — 300 frames (10s) */}
        <TransitionSeries.Sequence durationInFrames={300}>
          <FoundationBuilder />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 6: Choose Your Track — 240 frames (8s) */}
        <TransitionSeries.Sequence durationInFrames={240}>
          <ChooseTrack />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 7: Track A — AI Agents — 270 frames (9s) */}
        <TransitionSeries.Sequence durationInFrames={270}>
          <ScriptTrackAgent />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 8: Track B — Web Apps — 270 frames (9s) */}
        <TransitionSeries.Sequence durationInFrames={270}>
          <ScriptTrackApp />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-left" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 9: Track C — Data Dashboards — 270 frames (9s) */}
        <TransitionSeries.Sequence durationInFrames={270}>
          <ScriptTrackDashboard />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 30 })}
        />

        {/* Scene 10: Outcome — 330 frames (11s) */}
        <TransitionSeries.Sequence durationInFrames={330}>
          <Outcome />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 30 })}
        />

        {/* Scene 11: CTA — 300 frames (10s) */}
        <TransitionSeries.Sequence durationInFrames={300}>
          <ScriptCTA />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
