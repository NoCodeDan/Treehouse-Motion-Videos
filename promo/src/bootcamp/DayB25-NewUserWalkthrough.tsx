import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { TitleScene } from "../templates/TitleScene";
import { TextAndBulletsScene } from "../templates/TextAndBulletsScene";
import { SplitVisualScene } from "../templates/SplitVisualScene";
import { DiagramScene } from "../templates/DiagramScene";
import { ComparisonScene } from "../templates/ComparisonScene";
import { ACCENT_PURPLE, ACCENT_BLUE, TINT_GREEN, TINT_BLUE, TINT_PURPLE } from "../lib/brand";
import { DAYB25_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const DayB25NewUserWalkthrough: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="New User Walkthrough" subtitle="Day 25 — Catch what familiarity hides" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Framing — "Tomorrow you ship" */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene title="Tomorrow You Ship" bullets={[
            { icon: "🚀", text: "Before you do, walk through your app one more time" },
            { icon: "👤", text: "Not as you — as a completely new user" },
            { icon: "🌐", text: "Someone who showed up at a URL with no context" },
            { icon: "📋", text: "No instructions, no backstory, no guidance" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Why fresh eyes matter */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <SplitVisualScene title="Why Fresh Eyes Matter" bullets={[
            "This walkthrough catches the things you've stopped seeing",
            "The broken button on the first page",
            "The empty state that shows nothing",
            "The moment a new user has no idea what to do next",
          ]} visual="checklist" bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. The exercise — open as a stranger */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="THE EXERCISE" title="Open as a Stranger" bullets={[
            { icon: "🕵️", text: "Use an incognito window or log out completely" },
            { icon: "🏠", text: "Start from the landing page — not a bookmarked route" },
            { icon: "⏱️", text: "This takes 30 minutes — it will save you from shipping confusion" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Full user journey diagram */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <DiagramScene title="The Full User Journey" steps={[
            { icon: "🌐", label: "Land on App" },
            { icon: "📝", label: "Sign Up" },
            { icon: "🔄", label: "Core Loop" },
            { icon: "🔓", label: "Log Out" },
            { icon: "🔑", label: "Log Back In" },
            { icon: "💾", label: "Data Still There?" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. User journey deep dive */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="DEEP DIVE" title="Walking Each Step" bullets={[
            { icon: "📝", text: "Sign up — if auth is implemented, test the full flow" },
            { icon: "🔄", text: "Complete the core loop — the main thing your app does" },
            { icon: "💾", text: "Log out and log back in — is your data still there?" },
            { icon: "🧭", text: "At every step ask: would a stranger know what to do?" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Log friction — what to look for */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="LOG FRICTION" title="What Creates Friction" bullets={[
            { icon: "😕", text: "Moments where you weren't sure what to do next" },
            { icon: "🏷️", text: "Text or labels that don't clearly explain what they're for" },
            { icon: "🐛", text: "Any broken behavior — errors, missing features, dead links" },
            { icon: "🐌", text: "Anything that feels slow, confusing, or incomplete" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Friction examples */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <SplitVisualScene title="Friction You've Stopped Seeing" bullets={[
            "Empty states that show nothing and give no guidance",
            "Navigation that assumes you know the app's structure",
            "Error messages that don't explain what went wrong",
            "Features that work for you but confuse everyone else",
          ]} visual="warning" bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Triage your list */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="TRIAGE" title="Sort Every Issue" bullets={[
            { icon: "🚨", text: "Fix before launch — blocks the core loop or confuses every user" },
            { icon: "📦", text: "Ship as-is, fix in v2 — rough but doesn't break the experience" },
            { icon: "📋", text: "Mark each item clearly — no ambiguity about what ships" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Fix before launch vs ship as-is (comparison) */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <ComparisonScene title="Fix Now vs. Fix Later" leftCard={{
            title: "Fix Before Launch", items: [
              { icon: "🚨", text: "Blocks the core user flow" },
              { icon: "😕", text: "Would confuse every new user" },
              { icon: "🐛", text: "Broken buttons or dead pages" },
              { icon: "🔐", text: "Auth or data persistence failures" },
            ],
          }} rightCard={{
            title: "Ship As-Is (v2)", items: [
              { icon: "🎨", text: "Cosmetic rough edges" },
              { icon: "✨", text: "Nice-to-have features" },
              { icon: "💅", text: "Minor UI polish items" },
              { icon: "📦", text: "Things that work but aren't pretty" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Fix the blockers */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="ACTION" title="Fix the Blockers" bullets={[
            { icon: "🔧", text: "Work through your 'fix before launch' list now" },
            { icon: "🚫", text: "Don't get pulled into v2 items — stay focused" },
            { icon: "✅", text: "The rest ships tomorrow exactly as it is" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Reflection prompts */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene title="Reflection" bullets={[
            { icon: "🐛", text: "What confusion or bugs did you find? Even small friction compounds with real users" },
            { icon: "⏱️", text: "What do you wish you had more time for? Write it down" },
            { icon: "📋", text: "That wish list is your v2 roadmap starting right now" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Deliverable + Discord share */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Your Triage List" bullets={[
            { icon: "✅", text: "What you fixed — the blockers you squashed" },
            { icon: "📦", text: "What you're shipping as-is — rough but functional" },
            { icon: "📋", text: "What moves to v2 — your future roadmap" },
            { icon: "💬", text: "Drop it in Discord — tomorrow you share a live URL" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 14. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="See You on Day 26" subtitle="Tomorrow: SHIP DAY" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
