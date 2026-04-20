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
import { DAY21_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const Day21PrepForToolsWeek: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 - Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Prep for Week 4" subtitle="Day 21 — Plan your agent's next level" showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 2 - Framing: Week 3 Was About Proving the Concept */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene title="Week 3 Was About Proving the Concept" bullets={[
            { icon: "🔨", text: "You built an agent, tested it, broke it, fixed it" },
            { icon: "🚀", text: "You ran it on something real" },
            { icon: "🔄", text: "Week 4 is different — the goal isn't a better agent" },
            { icon: "🎯", text: "It's an agent you'll actually use every week" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 3 - The Higher Bar */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <ComparisonScene title="That's a Higher Bar" leftCard={{
            title: "Bootcamp Agent", items: [
              { icon: "✅", text: "Works when you test it" },
              { icon: "✅", text: "Produces decent output" },
              { icon: "✅", text: "Runs on example inputs" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Weekly-Use Agent", items: [
              { icon: "🎯", text: "Earns a permanent place in your workflow" },
              { icon: "🎯", text: "Handles real-world messiness" },
              { icon: "🎯", text: "Worth running again next week" },
            ],
          }} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 4 - Today's Goal */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="TODAY" title="Plan the Upgrade That Gets You There" bullets={[
            { icon: "📌", text: "One clear improvement" },
            { icon: "📊", text: "Grounded in what you actually learned this week" },
            { icon: "🚫", text: "Not what sounds impressive — what you actually need" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 5 - Step 1: Day 20 Reflection */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="STEP 1" title="Look at Your Day 20 Reflection" bullets={[
            { icon: "📊", text: "Your honest answers from yesterday are your roadmap" },
            { icon: "🔍", text: "What was the biggest gap?" },
            { icon: "💡", text: "Between what the agent produced and what you actually needed" },
            { icon: "🗺️", text: "That gap tells you exactly what to fix" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 6 - Step 2: Pick ONE Upgrade Category */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 2" title="Pick ONE Upgrade Category" bullets={[
            { icon: "📥", text: "Better inputs: structured templates, forms, or document ingestion" },
            { icon: "🧠", text: "Better context: reference docs, past work, or knowledge base" },
            { icon: "🔄", text: "Better workflow: steps, validation, or approval checkpoints" },
            { icon: "📤", text: "Better output: multiple formats, audiences, or downstream actions" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 7 - When to Use Each Upgrade */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="HOW TO CHOOSE" title="When to Pick Each Upgrade" bullets={[
            { icon: "📥", text: "Better inputs — when raw pasting isn't working" },
            { icon: "🧠", text: "Better context — when output lacks depth or specificity" },
            { icon: "🔄", text: "Better workflow — when you can't trust output without reviewing it" },
            { icon: "📤", text: "Better output — when it needs to go somewhere or look different" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 8 - The Focus Rule */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="KEY RULE" title="Pick One. Not Two." bullets={[
            { icon: "🎯", text: "The agents that improve fastest are the focused ones" },
            { icon: "🚫", text: "Not three half-finished changes" },
            { icon: "⚡", text: "One upgrade, done well, tested, and actually working" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 9 - Step 3: Write Your Agent v2 Plan */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="STEP 3" title="Write Your Agent v2 Plan" bullets={[
            { icon: "📝", text: "One paragraph — that's it" },
            { icon: "❓", text: "What will change?" },
            { icon: "🔧", text: "How will you do it?" },
            { icon: "💡", text: "Why will it make your agent more useful?" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 10 - Catch-Up Minimum */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <DiagramScene title="Fell Behind? Minimum for Week 4" steps={[
            { icon: "1️⃣", label: "Agent running in Claude Code — even once (Day 17)" },
            { icon: "2️⃣", label: "Run it on one real task (Day 20)" },
            { icon: "3️⃣", label: "Post Agent Definition Sheet in Discord (Day 15)" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 11 - You Don't Need Polished */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene title="You Don't Need to Be Polished" bullets={[
            { icon: "🚀", text: "You need to have something running" },
            { icon: "🔧", text: "A working agent beats a perfect plan every time" },
            { icon: "📍", text: "Week 4 will build on whatever you've got" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 12 - Reflection Prompts */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="REFLECTION" title="Questions to Sit With" bullets={[
            { icon: "🔥", text: "What would make your agent twice as useful — not better, twice as useful?" },
            { icon: "😤", text: "What would frustrate you most if the agent got it wrong?" },
            { icon: "🧭", text: "Is the job your agent is doing still the right job?" },
            { icon: "💡", text: "It's not too late to change the assignment" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 13 - Deliverable + Discord */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Your Agent v2 Plan" bullets={[
            { icon: "📝", text: "A 1-paragraph plan: what you're upgrading in Week 4 and why" },
            { icon: "💬", text: "Post it in Discord — seeing what others plan is one of the best sources of ideas" },
            { icon: "🤝", text: "Read other people's plans for inspiration" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 14 - Outro */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="One Focused Upgrade" subtitle="Not three half-finished changes" bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* Scene 15 - Closing */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TitleScene title="Week 4 Starts Monday" subtitle="Deliverable: your Agent v2 Plan" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
