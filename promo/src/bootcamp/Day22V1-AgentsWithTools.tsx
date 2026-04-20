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
import { DAY22V1_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const Day22V1AgentsWithTools: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 - Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Connecting Your Agent to the Real World" subtitle="Day 22 — Agents with Tools" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 2 - Hook: Your agent is smart but limited */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="THE PROBLEM" title="Your Agent Is Smart — But Limited" bullets={[
            { icon: "🧠", text: "Your agent is smart. But it only knows what you paste into it." },
            { icon: "📋", text: "Every time you run it, you copy and paste the same context" },
            { icon: "🌍", text: "Today we connect it to the outside world" },
            { icon: "⚡", text: "Same agent — dramatically better output" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 3 - Four C's: Callout + Credibility */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="WHY THIS MATTERS" title="From Conversations to the Real World" bullets={[
            { icon: "💡", text: "If you've been thinking 'it would be better if it could access my files' — that's today" },
            { icon: "🎯", text: "The core concepts are simpler than they sound" },
            { icon: "📈", text: "You've spent a week building an agent that works in conversations" },
            { icon: "🌐", text: "This is where it starts working in the world" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 4 - Compass + Core Learning */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="COMPASS" title="What You'll Learn Today" bullets={[
            { icon: "🔧", text: "What 'tools' actually means for agents" },
            { icon: "🎬", text: "See a live demo of one real integration" },
            { icon: "📐", text: "Understand the one principle that makes integrations succeed" },
            { icon: "🧱", text: "Core: Start with one integration. Get it reliable. Then add more." },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 5 - What "Tools" Means: Overview */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene title={'What "Tools" Means for Agents'} bullets={[
            { icon: "🔌", text: "It can interact with things outside the conversation" },
            { icon: "📁", text: "It can read and write files" },
            { icon: "🌐", text: "It can search the web" },
            { icon: "📤", text: "It can send information to other apps" },
            { icon: "⚡", text: "It can take actions — not just produce text" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 6 - File Access + Web Search */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="TOOL #1 & #2" title="File Access & Web Search" bullets={[
            { icon: "📁", text: "File access: point at a folder and read from it" },
            { icon: "📑", text: "Client notes, brand guidelines, past work — always available" },
            { icon: "🚫", text: "No more pasting that context every single time" },
            { icon: "🌐", text: "Web search: pull current information before answering" },
            { icon: "⏰", text: "Useful for anything time-sensitive or fact-dependent" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 7 - MCP: USB-C for AI */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="TOOL #3" title="MCP — USB-C for AI" bullets={[
            { icon: "🔗", text: "Model Context Protocol — a standard connector for AI" },
            { icon: "🔌", text: "If a tool has an MCP connector, your agent can use it" },
            { icon: "📁", text: "Files, browsers, APIs — one standard plug" },
            { icon: "📈", text: "More connectors are being built every month" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 8 - Human-in-the-Loop */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="TOOL #4" title="Human-in-the-Loop" bullets={[
            { icon: "👤", text: "Not every action should be automatic" },
            { icon: "✋", text: "'Show me your draft and wait for my approval before finalizing'" },
            { icon: "🎯", text: "That's a tool too — you" },
            { icon: "🛡️", text: "One of the most useful 'integrations' you can add" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 9 - Live Demo: Adding a File Integration */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <DiagramScene title="Let's Add One Integration" subtitle="Three steps to connect your agent to reference documents" steps={[
            { icon: "📁", label: "Create /reference folder" },
            { icon: "📝", label: "Update CLAUDE.md" },
            { icon: "▶️", label: "Run + Compare" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 10 - Step 1: Create Reference Folder */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="STEP 1" title="Create a Reference Folder" bullets={[
            { icon: "📁", text: "Create a /reference folder inside your agent directory" },
            { icon: "📄", text: "Add relevant files — anything your agent should know about" },
            { icon: "🚫", text: "Things you don't need to paste every time you run it" },
            { icon: "💡", text: "Client notes, guidelines, past work, templates" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 11 - Step 2: Update CLAUDE.md */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="STEP 2" title="Tell Your Agent Where to Look" bullets={[
            { icon: "📝", text: "Update your CLAUDE.md with reference instructions:" },
            { icon: "📁", text: '"You have access to files in the /reference folder"' },
            { icon: "🔍", text: '"Before answering, check if any of those files are relevant"' },
            { icon: "✅", text: '"If they are, use them. If they\'re not, ignore them."' },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 12 - Step 3: The Difference */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <ComparisonScene title="That Difference Is What Integration Adds" leftCard={{
            title: "Without Reference", items: [
              { icon: "📋", text: "Only knows what you paste" },
              { icon: "🔄", text: "Generic, surface-level output" },
              { icon: "😤", text: "Same context pasted every run" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "With Reference", items: [
              { icon: "📁", text: "Reads from your documents" },
              { icon: "🎯", text: "Specific, informed output" },
              { icon: "⚡", text: "Context always available" },
            ],
          }} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 13 - The One Rule */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="THE RULE" title="One Integration at a Time" bullets={[
            { icon: "1️⃣", text: "Start with one. Not two. Not the full stack. One." },
            { icon: "✅", text: "Get it working reliably. Run it 3 times." },
            { icon: "📊", text: "Confirm the output is better. Then consider adding more." },
            { icon: "⚠️", text: "Every broken integration came from adding too much at once" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 14 - Integration Options */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene badge="CHOOSE ONE" title="Your Integration Options" bullets={[
            { icon: "📁", text: "File access — create a /reference folder with relevant documents" },
            { icon: "📋", text: "Input template — a structured document your agent reads from" },
            { icon: "💾", text: "Output destination — agent saves output to a specific file" },
            { icon: "👤", text: "Approval step — agent shows draft and waits for your go-ahead" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 15 - Checkpoint */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <DiagramScene title="Checkpoint" subtitle="You now know what tools mean in practice" steps={[
            { icon: "🔧", label: "Tools = outside access" },
            { icon: "📁", label: "File integration built" },
            { icon: "🧱", label: "One at a time" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 16 - Reliability Before Complexity */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TextAndBulletsScene title="Reliability Before Complexity" bullets={[
            { icon: "🎯", text: "You've seen a file integration built live" },
            { icon: "📐", text: "The principle: one at a time, reliability before complexity" },
            { icon: "📝", text: "Instruction step below walks you through adding your integration" },
            { icon: "🗺️", text: "Then stay for Video 2 — the full agent landscape" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 17 - Outro */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TitleScene title="Your Agent Works in the World Now" subtitle="Not just in conversations — it reads, references, and acts" bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 18 - Teaser for Video 2 */}
        <TransitionSeries.Sequence durationInFrames={D[17]}>
          <TitleScene title="Stay for Video 2" subtitle="There's a whole landscape of agent tools beyond Claude Code — know your map" bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* Scene 19 - Closing */}
        <TransitionSeries.Sequence durationInFrames={D[18]}>
          <TitleScene title="Next: The AI Agent Landscape" subtitle="Know what everything is and where it fits" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
