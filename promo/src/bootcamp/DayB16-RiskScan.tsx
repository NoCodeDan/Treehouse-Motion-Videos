import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { TitleScene } from "../templates/TitleScene";
import { TextAndBulletsScene } from "../templates/TextAndBulletsScene";
import { DiagramScene } from "../templates/DiagramScene";
import { ComparisonScene } from "../templates/ComparisonScene";
import { ACCENT_PURPLE, ACCENT_BLUE, TINT_GREEN, TINT_BLUE, TINT_PURPLE } from "../lib/brand";
import { DAYB16_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const DayB16RiskScan: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Risk Scan" subtitle="Day 16 — Find where your app will get stuck" showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — don't skip past this moment */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene title="Don't Skip This Step" bullets={[
            { icon: "🏗️", text: "You have a scaffold. You have momentum." },
            { icon: "⚠️", text: "This is the moment most builders skip straight past." },
            { icon: "🛑", text: "Don't. Before you build features, find the hard parts." },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Framing — why this matters */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene title="Know Where It Gets Stuck" bullets={[
            { icon: "🧠", text: "You're not solving every hard thing today" },
            { icon: "🎯", text: "Knowing the hard parts lets you choose what to build first" },
            { icon: "💡", text: "Builders stay focused by knowing what to do first — not doing everything" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. What a Risk Scan is */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="TODAY'S EXERCISE" title="What Is a Risk Scan?" bullets={[
            { icon: "🔍", text: "Ask AI to look at your idea and surface what will slow you down" },
            { icon: "📊", text: "Then decide: what do you build in Week 3, what do you park?" },
            { icon: "🧭", text: "This is how builders stay focused" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. The Exercise — 6-step flow */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <DiagramScene title="The Risk Scan Exercise" steps={[
            { icon: "🤖", label: "Open AI Tool" },
            { icon: "📋", label: "Share Spec" },
            { icon: "🔍", label: "Run Prompt" },
            { icon: "📖", label: "Read Patterns" },
            { icon: "📊", label: "Two Lists" },
            { icon: "🎯", label: "Core Loop" },
          ]} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Steps 1-2: Open AI + share spec */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEPS 1-2" title="Set Up the Conversation" bullets={[
            { icon: "🤖", text: "Open Claude, ChatGPT, or whichever AI you've been using" },
            { icon: "📋", text: "Paste your Week 2 spec or describe your app in a few sentences" },
            { icon: "💡", text: "The more context you give, the better the risks it surfaces" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 3: The prompt */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="STEP 3 — THE PROMPT" title="Ask AI to Find Your Risks" bullets={[
            { icon: "💬", text: "\"I'm building [your app idea].\"" },
            { icon: "🔍", text: "\"What are the 3 hardest parts to build?\"" },
            { icon: "📝", text: "\"For each one, explain why it's difficult and what would make it manageable.\"" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Step 4: Read for patterns */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="STEP 4" title="Read for Patterns, Not a To-Do List" bullets={[
            { icon: "🔗", text: "Are there parts that depend on things you haven't figured out yet?" },
            { icon: "⏱️", text: "Are there features that sound small but could take a week?" },
            { icon: "🧩", text: "You're looking for hidden complexity — not just a list of tasks" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Step 5: Two lists — comparison */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <ComparisonScene title="Make Two Lists" leftCard={{
            title: "Build in Week 3", items: [
              { icon: "🏗️", text: "Simplest version of your core loop" },
              { icon: "🎯", text: "The main thing your app needs to do" },
              { icon: "✅", text: "What makes it useful, nothing more" },
            ], accentColor: ACCENT_BLUE,
          }} rightCard={{
            title: "Park for Later", items: [
              { icon: "🅿️", text: "Features that are cool but not essential" },
              { icon: "✨", text: "Nice-to-haves and edge cases" },
              { icon: "📌", text: "Postponing isn't giving up — it's how you ship" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Step 6: Core loop in one sentence */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="STEP 6" title="Define Your Core Loop" bullets={[
            { icon: "📝", text: "Write it down in one sentence" },
            { icon: "💡", text: "Example: \"A user signs in, submits a request, and gets a response.\"" },
            { icon: "🎯", text: "That's the one thing you're building toward this week" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Reflection — postponing is shipping */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="REFLECTION" title="What Can You Postpone?" bullets={[
            { icon: "🤔", text: "What can you set aside without hurting the core experience?" },
            { icon: "🚀", text: "Postponing a non-essential feature isn't giving up" },
            { icon: "📦", text: "It's how you ship" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Reflection — simplest core loop */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene title="Find Your Focus" bullets={[
            { icon: "🔄", text: "What's the simplest version of your core loop?" },
            { icon: "✏️", text: "If you can describe it in one sentence, you've found your focus" },
            { icon: "📏", text: "Does your scope still fit two weeks of building?" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Two Lists + One Sentence" bullets={[
            { icon: "📊", text: "A two-column list: Build Now / Park for Later" },
            { icon: "📝", text: "One sentence describing your core loop" },
            { icon: "💬", text: "Drop it in Discord — see what other builders are prioritizing" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. Outro */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="Know What to Build First" subtitle="Seeing what others prioritize is one of the most useful things you'll read" bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 15. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TitleScene title="See You on Day 17" subtitle="Tomorrow: build sprint begins" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
