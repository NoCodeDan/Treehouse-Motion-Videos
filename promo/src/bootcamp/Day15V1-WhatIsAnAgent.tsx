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
import { DAY15V1_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { AgentFlowVisual } from "./visuals/AgentFlowVisual";

export const Day15V1WhatIsAnAgent: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 - Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="What Is an Agent?" subtitle="Track A — Build Your Own AI Agent" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 2 - Hook: Demo — task in, result out */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="THE DIFFERENCE" title="Prompts Answer. Agents Do." bullets={[
            { icon: "🎬", text: "Demo: agent running live — input in, output out" },
            { icon: "🎯", text: "No prompt written from scratch" },
            { icon: "⚡", text: "Task in, result out — every single time" },
            { icon: "🔄", text: "That's the difference between a prompt and an agent" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 3 - Four C's: Callout + Credibility */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="THIS LESSON" title="Stop Using AI the Hard Way" bullets={[
            { icon: "📢", text: "Using AI as a fancy search engine? One-off messages, fresh starts?" },
            { icon: "🔑", text: "This lesson changes that — give AI a job, not a question" },
            { icon: "🏆", text: "Everything you build in Weeks 3 and 4 starts with this one idea" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 4 - Four C's: Compass + Core Learning */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene title="What You'll Walk Away With" bullets={[
            { icon: "🧭", text: "Understand what separates a prompt from an agent" },
            { icon: "🎯", text: "Identify the first job your agent will do" },
            { icon: "💡", text: "Core: A prompt answers a question. An agent completes a task." },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 5 - What an agent actually is: the problem with prompts */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="THE PROBLEM" title="Prompting Works — Until It Doesn't" bullets={[
            { icon: "💬", text: "You type something, AI responds, you move on" },
            { icon: "🔁", text: "Need the same thing done 20 times? That breaks down." },
            { icon: "📋", text: "Five steps in a row? You're babysitting every one." },
            { icon: "🚫", text: "Without you there? It can't run at all." },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 6 - The colleague analogy */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <ComparisonScene title="The Colleague Analogy" leftCard={{
            title: "A Prompt", items: [
              { icon: "💬", text: "\"Hey, can you quickly summarize this?\"" },
              { icon: "1️⃣", text: "One-off ask" },
              { icon: "🔄", text: "Start from scratch next time" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "An Agent", items: [
              { icon: "👤", text: "Hiring someone whose job IS summarizing" },
              { icon: "📏", text: "Your format, your rules, every time" },
              { icon: "🔁", text: "Hand them material — they deliver" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 7 - Same AI, different structure */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <ComparisonScene title="Prompt vs. Agent" leftCard={{
            title: "A Prompt", items: [
              { icon: "💬", text: "Answers a question" },
              { icon: "1️⃣", text: "One-off interaction" },
              { icon: "🔄", text: "Fresh start each time" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "An Agent", items: [
              { icon: "✅", text: "Completes a task" },
              { icon: "🔁", text: "Recurring role to fill" },
              { icon: "📏", text: "Has structure and rules" },
            ],
          }} bgTint={TINT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 8 - Three things overview diagram */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <DiagramScene title="Three Things That Make an Agent" steps={[
            { icon: "📥", label: "Inputs → Outputs" },
            { icon: "🛡️", label: "Guardrails" },
            { icon: "🎯", label: "Single Responsibility" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 9 - Deep dive: Inputs → Processing → Outputs */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="AGENT TRAIT #1" title="Inputs → Processing → Outputs" bullets={[
            { icon: "📥", text: "Your agent knows what it receives" },
            { icon: "⚙️", text: "It knows what it does with that information" },
            { icon: "📤", text: "It knows what it produces" },
            { icon: "✅", text: "Always. Not sometimes — always." },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 10 - Deep dive: Guardrails */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="AGENT TRAIT #2" title="Guardrails" bullets={[
            { icon: "🛡️", text: "Your agent knows what it should NOT do" },
            { icon: "🚫", text: "\"Never invent data\"" },
            { icon: "📏", text: "\"Never answer outside your scope\"" },
            { icon: "❓", text: "\"If you don't have enough info, ask\"" },
            { icon: "⚡", text: "These separate a reliable agent from a flaky one" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 11 - Deep dive: Single Responsibility */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="AGENT TRAIT #3" title="Single Responsibility" bullets={[
            { icon: "🎯", text: "The best beginner agents do ONE thing well" },
            { icon: "🚫", text: "Not five things okay" },
            { icon: "✅", text: "One thing — consistently" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 12 - Example: Content Idea Generator */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <SplitVisualScene title="Content Idea Generator" bullets={[
            { icon: "📥", text: "Input: your topic area and target audience" },
            { icon: "📤", text: "Output: five content ideas with hooks, every time" },
            { icon: "🔁", text: "Same quality, same format, repeatable" },
          ]} visual={<AgentFlowVisual delay={30} />} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 13 - Example: Meeting Prep Assistant */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene title="Meeting Prep Assistant" bullets={[
            { icon: "📥", text: "Input: attendee name and meeting topic" },
            { icon: "📤", text: "Output: a prep brief — background, talking points, questions to ask" },
            { icon: "🎯", text: "One clear job, consistent format" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 14 - Example: Email Drafter */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene title="Email Drafter" bullets={[
            { icon: "📥", text: "Input: the situation and three key points" },
            { icon: "📤", text: "Output: a professional email draft in your voice" },
            { icon: "🔄", text: "Clear input, defined output, repeats" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 15 - The Pattern */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <DiagramScene title="The Agent Pattern" steps={[
            { icon: "📋", label: "Clear Input" },
            { icon: "⚙️", label: "Defined Process" },
            { icon: "📊", label: "Repeatable Output" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 16 - Pause Here: Direct to camera */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TextAndBulletsScene badge="PAUSE HERE" title="Before the Next Video..." bullets={[
            { icon: "🤔", text: "Think about a task you do every week" },
            { icon: "🔁", text: "It's repetitive — same shape every time" },
            { icon: "⏱️", text: "Takes 15 minutes or more" },
            { icon: "📐", text: "Not a creative task with no structure" },
            { icon: "💡", text: "That's your agent's first job" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 17 - Find Your Agent's First Job */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TextAndBulletsScene badge="YOUR TURN" title="Write It Down" bullets={[
            { icon: "✍️", text: "Write down that task — we're about to build it" },
            { icon: "📋", text: "It has a clear input" },
            { icon: "📊", text: "It has a defined output" },
            { icon: "🔁", text: "And it's a job that repeats" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 18 - Outro */}
        <TransitionSeries.Sequence durationInFrames={D[17]}>
          <TitleScene title="A Job, A Structure, Rules" subtitle="That's what separates an agent from a prompt" bgTint={TINT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* Scene 19 - Closing */}
        <TransitionSeries.Sequence durationInFrames={D[18]}>
          <TitleScene title="Next: Build Your First Agent" subtitle="No code. No setup. Just Claude Projects." showLogo bgTint={TINT_GREEN} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
