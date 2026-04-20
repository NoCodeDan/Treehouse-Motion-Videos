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
import { DAYB24_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const DayB24FinalFeatureSprint: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Final Feature Sprint" subtitle="Day 24 — App v1 Completion" showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Framing — build day of launch week */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="LAUNCH WEEK" title="This Is the Build Day" bullets={[
            { icon: "📅", text: "Tomorrow you're doing a walkthrough" },
            { icon: "🚢", text: "Friday you're shipping" },
            { icon: "🔨", text: "Today is the last day to add anything meaningful" },
            { icon: "🎯", text: "One more build day — make it count" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. App v1 definition */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="APP V1" title="A Working App Someone Could Use" bullets={[
            { icon: "🔄", text: "Complete core loop, end to end" },
            { icon: "🔗", text: "At least one real-world integration" },
            { icon: "🚫", text: "Not polished. Not feature-complete." },
            { icon: "✅", text: "Working — someone could actually use it" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Stop putting it off */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <SplitVisualScene badge="TODAY" title="Stop Putting It Off" bullets={[
            "If auth or DB seemed too complicated — today is the day",
            "Not because it will be smooth",
            "Because it needs to be done",
            "You now have the tools to work through it",
          ]} visual="checklist" bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Persistence path */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="PATH A" title="Add Persistence" bullets={[
            { icon: "🗄️", text: "Connect your database to the app" },
            { icon: "💾", text: "Core records save correctly" },
            { icon: "🔄", text: "Core records load correctly" },
            { icon: "👤", text: "A user returns and finds their data waiting" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Auth path */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="PATH B" title="Add Authentication" bullets={[
            { icon: "🔐", text: "Add auth using Clerk or similar" },
            { icon: "📝", text: "User can sign up and create an account" },
            { icon: "🔑", text: "User can log in and return" },
            { icon: "🔗", text: "Account is tied to their data" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Already done both */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="AHEAD?" title="Already Have Both?" bullets={[
            { icon: "🔧", text: "Tighten the implementation" },
            { icon: "🔄", text: "Make sure it works cleanly across your core flow" },
            { icon: "🧹", text: "Clean up edge cases and error states" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Tighten main flow */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <DiagramScene title="Walk the Core Loop" steps={[
            { icon: "📝", label: "Sign Up" },
            { icon: "🎯", label: "Do the Thing" },
            { icon: "👀", label: "See Result" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Deploy checklist */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <DiagramScene title="Prep for Deployment" steps={[
            { icon: "🐙", label: "Pushed to GitHub" },
            { icon: "🔗", label: "Vercel Connected" },
            { icon: "🌐", label: "URL Loads" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Day 21 Top 3 */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="DAY 21 LIST" title="Check Off Your Top 3" bullets={[
            { icon: "📋", text: "Pull up your Day 21 priority list" },
            { icon: "✅", text: "How many items can you check off today?" },
            { icon: "🔄", text: "Core loop must be complete" },
            { icon: "🔗", text: "One real-app integration must be in place" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Scope cuts */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <ComparisonScene title="Cutting Scope" leftCard={{
            title: "Good Engineering", items: [
              { icon: "🎯", text: "Conscious scope decisions" },
              { icon: "⚖️", text: "Deliberate trade-offs" },
              { icon: "📋", text: "Noted for v2 roadmap" },
            ],
          }} rightCard={{
            title: "Worth Noting", items: [
              { icon: "⏰", text: "Features dropped from time pressure" },
              { icon: "🔍", text: "Things that slipped through" },
              { icon: "📝", text: "Write them down for later" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Define done */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="REFLECTION" title="What Does v1 Mean for Your App?" bullets={[
            { icon: "🤔", text: "Define what 'done' looks like — even if it's not perfect" },
            { icon: "📐", text: "Where does it feel rough? Where does it feel solid?" },
            { icon: "🔧", text: "Fix the rough spots. Accept the rest for now." },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TitleScene title="App v1: Deployed to a Live URL" subtitle="Complete core loop + one real integration. Share your URL in Discord." bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 14. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="See You on Day 25" subtitle="Tomorrow: new user walkthrough" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
