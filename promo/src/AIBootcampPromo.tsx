import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { fade } from "@remotion/transitions/fade";
import { Opening } from "./scenes/Opening";
import { WhyAI } from "./scenes/WhyAI";
import { ProgramOverview } from "./scenes/ProgramOverview";
import { Foundations } from "./scenes/Foundations";
import { ChooseTrack } from "./scenes/ChooseTrack";
import { TrackAgent } from "./scenes/TrackAgent";
import { TrackApp } from "./scenes/TrackApp";
import { TrackDashboard } from "./scenes/TrackDashboard";
import { CTA } from "./scenes/CTA";
import { NarrationLayer } from "./narration/NarrationLayer";
import { BackgroundMusic } from "./narration/BackgroundMusic";

const T = 20; // standard transition duration

export const AIBootcampPromo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1: Opening / Hook — 139 frames */}
        <TransitionSeries.Sequence durationInFrames={139}>
          <Opening />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 2: Why AI Matters — 420 frames (14s) */}
        <TransitionSeries.Sequence durationInFrames={420}>
          <WhyAI />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 3: 30-Day Program Overview — 330 frames (11s) */}
        <TransitionSeries.Sequence durationInFrames={330}>
          <ProgramOverview />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 4: Weeks 1-2 Foundations — 330 frames (11s) */}
        <TransitionSeries.Sequence durationInFrames={330}>
          <Foundations />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 5: Weeks 3-4 Choose Your Track — 315 frames (10.5s) */}
        <TransitionSeries.Sequence durationInFrames={315}>
          <ChooseTrack />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 6: Track 1 — Agent — 300 frames (10s) */}
        <TransitionSeries.Sequence durationInFrames={300}>
          <TrackAgent />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 7: Track 2 — App — 330 frames (11s) */}
        <TransitionSeries.Sequence durationInFrames={330}>
          <TrackApp />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-left" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 8: Track 3 — Dashboard — 300 frames (10s) */}
        <TransitionSeries.Sequence durationInFrames={300}>
          <TrackDashboard />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 30 })}
        />

        {/* Scene 9: CTA / Closing — 300 frames (10s) */}
        <TransitionSeries.Sequence durationInFrames={300}>
          <CTA />
        </TransitionSeries.Sequence>
      </TransitionSeries>
      <NarrationLayer />
      <BackgroundMusic />
    </AbsoluteFill>
  );
};
