import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { TitleScene } from "../templates/TitleScene";
import { TextAndBulletsScene } from "../templates/TextAndBulletsScene";
import { SplitVisualScene } from "../templates/SplitVisualScene";
import { ComparisonScene } from "../templates/ComparisonScene";
import { ACCENT_PURPLE, ACCENT_BLUE, TINT_GREEN, TINT_BLUE, TINT_PURPLE } from "../lib/brand";
import { DAYC17_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { DashboardMockupVisual } from "./visuals/DashboardMockupVisual";

export const DayC17BuildSprintDashboardV0: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Build Sprint: Dashboard v0" subtitle="Track C — Build Your Own Data Dashboard" showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Framing — today you build */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="MINDSET" title="Today You Build" bullets={[
            { icon: "🔨", text: "Not a finished dashboard — a first draft" },
            { icon: "📐", text: "Version 0 is about visibility, not perfection" },
            { icon: "🎯", text: "You're building something that shows YOU what's in your data" },
            { icon: "✅", text: "You'll have a working dashboard by the end of this step" },
          ]} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Visibility not perfection */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="KEY IDEA" title="Rough Is Fine. Ugly Is Fine." bullets={[
            { icon: "🚫", text: "You're not designing something to show anyone yet" },
            { icon: "👁️", text: "You're building something that shows you what's happening" },
            { icon: "💡", text: "One chart that works beats five charts you never finished" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Comparison — 1 working chart vs 5 unfinished */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <ComparisonScene title="What Actually Matters" leftCard={{
            title: "What works", items: [
              { icon: "✅", text: "One chart, fully working" },
              { icon: "✅", text: "Answers a real question" },
              { icon: "✅", text: "Built in 30 minutes" },
              { icon: "✅", text: "Moves you forward" },
            ],
          }} rightCard={{
            title: "What doesn't", items: [
              { icon: "❌", text: "Five charts half-finished" },
              { icon: "❌", text: "Pretty but meaningless" },
              { icon: "❌", text: "Spent hours on layout" },
              { icon: "❌", text: "Never actually shipped" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Step 1: Open your tool */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="STEP 1" title="Open Your Tool" bullets={[
            { icon: "💬", text: "Use Claude or Claude Code — both work for today" },
            { icon: "🖥️", text: "Claude's standard chat interface is enough" },
            { icon: "⚡", text: "No special setup needed — just start a conversation" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 2: Share data + prompt template */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 2" title="Share Your Data and Question" bullets={[
            { icon: "📋", text: "Paste your dataset or describe it to AI" },
            { icon: "❓", text: "Include your dashboard question from Day 15" },
            { icon: "💬", text: "Prompt: 'Here's my dataset. My question is [X]. Suggest 3 charts that would best answer this.'" },
            { icon: "📊", text: "AI will suggest chart types tailored to your data" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 2b: Pick 1-2 suggestions */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="STEP 2" title="Read and Pick" bullets={[
            { icon: "👀", text: "Read through AI's 3 chart suggestions carefully" },
            { icon: "🎯", text: "Pick the 1-2 that feel most useful for your question" },
            { icon: "🧠", text: "Trust your instinct — you know your question best" },
          ]} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Step 3: Build one chart */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <SplitVisualScene title="Build One Chart" bullets={[
            { icon: "📊", text: "Ask AI to help you create the chart you picked" },
            { icon: "🎯", text: "One chart. Working. Real." },
            { icon: "❓", text: "Does it answer your question? Then it works." },
          ]} visual={<DashboardMockupVisual delay={30} />} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Tool options */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="OPTIONS" title="Pick Your Chart Tool" bullets={[
            { icon: "📈", text: "Google Sheets — AI can walk you through the chart tools" },
            { icon: "🖥️", text: "Claude Code — generate a chart in Python or JavaScript" },
            { icon: "🌐", text: "Datawrapper or Google Data Studio — simple chart builders" },
            { icon: "✅", text: "Any tool that produces a working chart is the right tool" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Step 4: Don't polish */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="RESIST" title="Do Not Polish Yet" bullets={[
            { icon: "🚫", text: "No color tweaking, no font changes, no layout cleanup" },
            { icon: "🚫", text: "No adding extra charts just because you can" },
            { icon: "📅", text: "You'll polish in Week 4 — today's job is seeing the data" },
            { icon: "✅", text: "Done when you have one chart that answers something" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Reflection prompts */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="REFLECT" title="Reflection Prompts" bullets={[
            { icon: "📝", text: "What does this chart actually show you? Write one sentence in plain English." },
            { icon: "💡", text: "Not a data description — what it means for you or your work" },
            { icon: "🔮", text: "What would you want to see next? Your first instinct is often the best indicator." },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Deliverable — screenshot + Discord share */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Ship Your Dashboard v0" bullets={[
            { icon: "📸", text: "Take a screenshot of your working dashboard" },
            { icon: "💬", text: "Post it in Discord — however rough it looks" },
            { icon: "🏆", text: "Version 0 is the hardest one to ship" },
            { icon: "🚀", text: "Getting it out there is the whole point" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Outro */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TitleScene title="Dashboard v0 Built" subtitle="Tomorrow: discover insights hiding in your data" bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 14. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="See You on Day 18" subtitle="Tomorrow: insight discovery" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
