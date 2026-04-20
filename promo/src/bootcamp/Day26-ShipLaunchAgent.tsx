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
import { DAY26_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { ShipChecklistVisual } from "./visuals/ShipChecklistVisual";

export const Day26ShipLaunchAgent: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Ship: Launch Your Agent" subtitle="Day 26 — From project to permanent tool" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — do you use it next week? */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="THE HOOK" title="Will You Use It Next Week?" bullets={[
            { icon: "🎬", text: "Clean input, clean output, done in 30 seconds" },
            { icon: "📋", text: "The difference between a project and a real tool" },
            { icon: "🎯", text: "One thing: do you use it next week?" },
            { icon: "🚀", text: "Today we make sure you will" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Callout — a working agent that doesn't get used */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="CALLOUT" title="A Working Agent That Doesn't Get Used" bullets={[
            { icon: "📋", text: "It works, but you're not sure you'll come back to it" },
            { icon: "📝", text: "A working agent that doesn't get used isn't a tool" },
            { icon: "🏷️", text: "It's a completed exercise" },
            { icon: "✅", text: "There's a specific thing you do to cross that line" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Credibility — look how far you've come */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="CREDIBILITY" title="You've Built Something Real" bullets={[
            { icon: "📢", text: "Two weeks ago you didn't know what an agent was" },
            { icon: "🏆", text: "Now you have one that handles real inputs" },
            { icon: "💡", text: "And produces real outputs" },
            { icon: "🎯", text: "Today: make sure it stays in your life after bootcamp" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Compass + Core Learning */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="COMPASS" title="The Shipping Checklist" bullets={[
            { icon: "🧭", text: "Five things that make an agent stick" },
            { icon: "💡", text: "Plus a quick intro to what's possible next" },
            { icon: "✅", text: "Reliable output, clear input system" },
            { icon: "📅", text: "Documentation and a scheduled moment to use it" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Shipping checklist overview + visual */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <SplitVisualScene title="Five Things That Ship" bullets={[
            { icon: "✅", text: "Reliability: 3 runs, all usable without editing" },
            { icon: "📄", text: "Documentation: future-you can follow it" },
            { icon: "📋", text: "Input system: repeatable, not a blank screen" },
            { icon: "💾", text: "Output destination: the loop is closed" },
            { icon: "📅", text: "Scheduled moment: a recurring reminder" },
          ]} visual={<ShipChecklistVisual delay={30} />} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Check 1: Reliability */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="CHECK 1" title="Reliability Check" bullets={[
            { icon: "▶️", text: "Run your agent 3 times in a row" },
            { icon: "✅", text: "All 3 outputs should be usable WITHOUT editing" },
            { icon: "🚫", text: "Not good enough that you could edit them into shape" },
            { icon: "🔧", text: "If not all usable: one more round of tightening" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Check 2: Documentation */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="CHECK 2" title="Documentation" bullets={[
            { icon: "📄", text: "HOW-TO-RUN.md — clear enough for future-you" },
            { icon: "🕐", text: "The version of you who hasn't touched this in two weeks" },
            { icon: "🧠", text: "Could pick it up and run it without remembering anything" },
            { icon: "❓", text: "If that version would be confused, it's not done" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Check 3: Input System */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="CHECK 3" title="Input System" bullets={[
            { icon: "📋", text: "A repeatable way to give your agent what it needs" },
            { icon: "📁", text: "A template, a folder, a structured document" },
            { icon: "🚫", text: "Not a blank screen where you start typing and hope" },
            { icon: "⚡", text: "The input system makes it feel frictionless on a busy day" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Check 4: Output Destination */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="CHECK 4" title="Output Destination" bullets={[
            { icon: "💾", text: "You know where the output goes and what happens next" },
            { icon: "📤", text: "Saves to a file, paste it somewhere, send it" },
            { icon: "🔗", text: "The loop is closed — no figuring out what to do with it" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Check 5: Scheduled Moment */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="CHECK 5" title="A Scheduled Moment" bullets={[
            { icon: "📅", text: "The most underrated step of all" },
            { icon: "🔄", text: "Set a recurring reminder to run your agent" },
            { icon: "📆", text: "Weekly, daily, monthly — whatever fits the job" },
            { icon: "🔔", text: "A calendar event, a recurring task, an alarm" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Comparison: Completed Exercise vs Shipped Tool */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <ComparisonScene title="What Makes the Difference?" leftCard={{
            title: "Completed Exercise",
            items: [
              { icon: "📝", text: "Works when you test it" },
              { icon: "😶", text: "No documentation" },
              { icon: "🤷", text: "No input system" },
              { icon: "🗑️", text: "Output goes nowhere" },
            ],
            accentColor: "#999",
          }} rightCard={{
            title: "Shipped Tool",
            items: [
              { icon: "✅", text: "Reliable every time" },
              { icon: "📄", text: "Documented for future-you" },
              { icon: "📋", text: "Repeatable input" },
              { icon: "📅", text: "Scheduled to run" },
            ],
            accentColor: ACCENT_BLUE,
          }} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. What's Next: CLAUDE.md as persistent memory */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="WHAT'S NEXT" title="Persistent Memory" bullets={[
            { icon: "🧠", text: "CLAUDE.md is already persistent memory" },
            { icon: "📖", text: "Claude Code reads it every time it runs" },
            { icon: "📝", text: "Your agent can create files it reads next time" },
            { icon: "🔄", text: "Notes on what it did last run — context accumulates" },
            { icon: "💡", text: "That's how an agent starts to feel like it knows you" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. What's Next: Triggers */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene badge="GOING FURTHER" title="Triggers and Automation" bullets={[
            { icon: "⏰", text: "Run without you starting it — that's triggers" },
            { icon: "🔧", text: "Cron jobs, webhooks, email forwarding" },
            { icon: "📬", text: "Post-bootcamp territory — but knowing it exists matters" },
            { icon: "🚀", text: "You're not at the ceiling of what this can do" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. Simple is sustainable */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TextAndBulletsScene title="Simple Is Sustainable" bullets={[
            { icon: "📅", text: "For now: a weekly calendar reminder does the job" },
            { icon: "✅", text: "You don't need cron jobs or webhooks today" },
            { icon: "💡", text: "Simple systems get used — complex ones get abandoned" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 16. The Essential Test */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TextAndBulletsScene badge="THE TEST" title="Would You Miss It?" bullets={[
            { icon: "❓", text: "One question before you call this done" },
            { icon: "🔍", text: "If this agent disappeared tomorrow, would you miss it?" },
            { icon: "✅", text: "\"Yes, I'd miss it\" — you're done. Ship it." },
            { icon: "💡", text: "That's your signal it earned its place" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 17. If not yet — iterate */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TextAndBulletsScene badge="ITERATE" title="Haven't Found the Right Job Yet?" bullets={[
            { icon: "🔄", text: "\"Probably not\" means you haven't found the right job" },
            { icon: "👍", text: "That's okay — iterate, try a different job" },
            { icon: "🧠", text: "The skill you built this week transfers" },
            { icon: "🏆", text: "You know how to build agents — the hard part is behind you" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 18. Demo Format */}
        <TransitionSeries.Sequence durationInFrames={D[17]}>
          <TextAndBulletsScene badge="YOUR DEMO" title="How to Talk About What You Built" bullets={[
            { icon: "🎤", text: "\"My agent [name] does [job]\"" },
            { icon: "📥", text: "\"I give it [input], it produces [output]\"" },
            { icon: "📅", text: "\"I use it every [frequency] for [real purpose]\"" },
            { icon: "💡", text: "Clear, specific, honest — no jargon, no exaggeration" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 19. Five Things Diagram */}
        <TransitionSeries.Sequence durationInFrames={D[18]}>
          <DiagramScene title="Five Things That Ship" steps={[
            { icon: "✅", label: "Reliable" },
            { icon: "📄", label: "Documented" },
            { icon: "📋", label: "Input System" },
            { icon: "💾", label: "Output Dest" },
            { icon: "📅", label: "Scheduled" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 20. Checkpoint */}
        <TransitionSeries.Sequence durationInFrames={D[19]}>
          <TextAndBulletsScene badge="CHECKPOINT" title="That's What Ships" bullets={[
            { icon: "✅", text: "Reliability, documentation, input, output, schedule" },
            { icon: "🎯", text: "Not perfect. Not impressive." },
            { icon: "🏆", text: "Reliable and useful." },
            { icon: "📋", text: "Instruction step below has the full checklist" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 21. Outro */}
        <TransitionSeries.Sequence durationInFrames={D[20]}>
          <TitleScene title="You Built an Agent. You Shipped It." subtitle="That's not a small thing — most people never get to this moment." bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 22. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[21]}>
          <TitleScene title="See You on Day 27" subtitle="Tomorrow: the real test — use it when it's not an assignment" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
