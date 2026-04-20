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
import { DAY19_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { ThreeFixesVisual } from "./visuals/ThreeFixesVisual";

export const Day19ReliabilityGuardrails: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 - Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Three Things That Make an Agent Reliable" subtitle="Day 19 — From flaky to consistent" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 2 - Hook */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="HOOK" title="Your Agent Works... Sometimes" bullets={[
            { icon: "🎲", text: "Run it with a vague prompt — output is inconsistent" },
            { icon: "📐", text: "Format varies from run to run" },
            { icon: "❌", text: "One section is completely made up" },
            { icon: "🎯", text: "Three things separate flaky from reliable" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 3 - The Problem is Structural */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="THE PROBLEM" title="Inconsistency Is Structural" bullets={[
            { icon: "📢", text: "Good output once, can't reproduce it — that's not bad luck" },
            { icon: "🔧", text: "It's a structural problem, and it has a fix" },
            { icon: "🧱", text: "Everything you built — CLAUDE.md, context interview, guardrails — points here" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 4 - Four C's: Credibility + Compass */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene title="What You'll Walk Away With" bullets={[
            { icon: "🏆", text: "See what 'almost working' actually looks like" },
            { icon: "🔍", text: "Three specific fixes with before/after comparisons" },
            { icon: "🧭", text: "An agent someone else could run and get good results" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 5 - Core Learning */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TitleScene title="A Reliable Agent Isn't Smarter" subtitle="It's clearer. Reliability comes from specificity." bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 6 - What "Almost Working" Looks Like */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene title={'What "Almost Working" Looks Like'} bullets={[
            { icon: "📐", text: "The format changed from last time you ran it" },
            { icon: "➕", text: "It added a section nobody asked for" },
            { icon: "❌", text: "One bullet contains information that wasn't in the input" },
            { icon: "😬", text: "Confident output that can't be trusted" },
            { icon: "🔢", text: "Three fixes will address 90% of this" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 7 - Three Fixes Overview */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <SplitVisualScene title="Three Fixes for 90% of Issues" bullets={[
            { icon: "📐", text: "Tighten output format" },
            { icon: "🛡️", text: "Add guardrails" },
            { icon: "📋", text: "Create input template" },
          ]} visual={<ThreeFixesVisual delay={30} />} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 8 - Fix 1: Output Format Comparison */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <ComparisonScene title="Fix 1: Tighten Your Output Format" leftCard={{
            title: "Vague", items: [
              { icon: "📝", text: '"Write a summary"' },
              { icon: "🎲", text: "Different lengths, structures, tones" },
              { icon: "❓", text: "Different every time" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Precise", items: [
              { icon: "📐", text: '"Exactly 3 bullets, action verbs"' },
              { icon: "📏", text: '"15-25 words each, no headers"' },
              { icon: "✅", text: "Same shape, every time" },
            ],
          }} bgTint={TINT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 9 - Fix 1 Detail: Why Specificity Matters */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="FIX 1" title="Why Specificity Matters" bullets={[
            { icon: "🎯", text: "The more specific your format, the less the model guesses" },
            { icon: "⚠️", text: "Every guess is a potential deviation" },
            { icon: "📋", text: "Not a description of what you want — a template of what you'll get" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 10 - Fix 2: Guardrails */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="FIX 2" title="Add Guardrails" bullets={[
            { icon: "🛡️", text: "Not just about what your agent does" },
            { icon: "🚧", text: "What it doesn't do when it doesn't have what it needs" },
            { icon: "💡", text: "Two guardrails every agent should have" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 11 - Fix 2 Detail: The Two Rules */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="TWO RULES" title="Every Agent Needs These" bullets={[
            { icon: "1️⃣", text: "Never invent information not in the input — flag it instead" },
            { icon: "2️⃣", text: "If input is outside scope, say so and stop — don't produce output anyway" },
            { icon: "✅", text: "These two rules alone eliminate most unreliable outputs" },
            { icon: "📄", text: "Add them to your CLAUDE.md today" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 12 - Fix 3: Input Template */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <ComparisonScene title={'Fix 3: Standard Input Template'} leftCard={{
            title: "Unstructured", items: [
              { icon: "💬", text: '"Here\'s the situation, make something good"' },
              { icon: "🎲", text: "Inconsistent input = inconsistent output" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Template", items: [
              { icon: "📋", text: "Same fields filled out every time" },
              { icon: "✅", text: "Agent knows exactly what to expect" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 13 - Fix 3 Detail: Template Structure */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="INPUT TEMPLATE" title="What a Simple Template Looks Like" bullets={[
            { icon: "📋", text: "Context: what's the situation in 2-3 sentences" },
            { icon: "🎯", text: "Request: what do you need specifically" },
            { icon: "📏", text: "Constraints: length, tone, format, audience" },
            { icon: "🚫", text: "What to avoid: anything this output should NOT do" },
            { icon: "🔁", text: "Fill this out before every run — consistent input, consistent output" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 14 - Checkpoint */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene badge="CHECKPOINT" title="Three Fixes — Quick Recap" bullets={[
            { icon: "📐", text: "Output format is specific — a template, not a description" },
            { icon: "🛡️", text: "Guardrails cover missing information and out-of-scope inputs" },
            { icon: "📋", text: "Input template ensures same quality of information every time" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 15 - Recap Diagram */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <DiagramScene title="The Reliability Formula" steps={[
            { icon: "📐", label: "Output Format" },
            { icon: "🛡️", label: "Guardrails" },
            { icon: "📋", label: "Input Template" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 16 - Exercise: Polish and Package */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TextAndBulletsScene badge="EXERCISE" title="Polish and Package" bullets={[
            { icon: "📐", text: "Add precise output format specification to your CLAUDE.md" },
            { icon: "🛡️", text: "Add guardrails for missing info + out-of-scope requests" },
            { icon: "📋", text: "Create a standard input template document in your agent folder" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 17 - HOW-TO-RUN.md */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TextAndBulletsScene badge="DOCUMENTATION" title={'Create a "How to Run This Agent" Doc'} bullets={[
            { icon: "📄", text: "What This Agent Does — one sentence" },
            { icon: "📋", text: "What Input It Needs — paste your template" },
            { icon: "📐", text: "What Output to Expect — describe the format" },
            { icon: "🛡️", text: "What It Won't Do — list your guardrails" },
            { icon: "▶️", text: "How to Run It — step by step" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 18 - The Test */}
        <TransitionSeries.Sequence durationInFrames={D[17]}>
          <TextAndBulletsScene badge="THE TEST" title="Run It 3 Times" bullets={[
            { icon: "▶️", text: "Use your input template each time" },
            { icon: "✅", text: "All 3 outputs consistent in format? You've got something real" },
            { icon: "🔧", text: "Not consistent? Tighten the output format in CLAUDE.md" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 19 - Compare Day 15 to Today */}
        <TransitionSeries.Sequence durationInFrames={D[18]}>
          <ComparisonScene title="See How Far You've Come" leftCard={{
            title: "Day 15", items: [
              { icon: "🌱", text: "First agent attempt" },
              { icon: "🎲", text: "Inconsistent results" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Today", items: [
              { icon: "📐", text: "Precise format + guardrails" },
              { icon: "✅", text: "Reproducible, documented" },
            ],
          }} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 20 - Outro */}
        <TransitionSeries.Sequence durationInFrames={D[19]}>
          <TitleScene title="Reliable. Documented. Repeatable." subtitle="An agent someone else could pick up and run — your Week 3 portfolio piece" bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* Scene 21 - Closing */}
        <TransitionSeries.Sequence durationInFrames={D[20]}>
          <TitleScene title="See You on Day 20" subtitle="Tomorrow: the real-world test" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
