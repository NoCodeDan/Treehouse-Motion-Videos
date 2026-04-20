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
import { DAY20_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const Day20RealWorldRun: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Real-World Run" subtitle="Day 20 — The most important day of the week" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Framing — most important day */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene title="This Is the Most Important Day" bullets={[
            { icon: "📋", text: "The CLAUDE.md, the context interview, the reliability fixes — all preparation" },
            { icon: "🎯", text: "Today you use your agent on a task you actually need done" },
            { icon: "🔄", text: "This is where the bootcamp stops being a bootcamp and starts being useful" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. This is where it gets real */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene title="This Is Where It Gets Real" bullets={[
            { icon: "🚫", text: "Not a practice run. Not a test." },
            { icon: "💼", text: "A real job from your real life" },
            { icon: "📌", text: "Something you genuinely need done this weekend" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Goal: honest data */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene title="The Goal Is Honest Data" bullets={[
            { icon: "📊", text: "The goal isn't a perfect result" },
            { icon: "🔍", text: "Does your agent do the job? How close?" },
            { icon: "🛠️", text: "What would make it better?" },
            { icon: "💡", text: "You can't answer those without running it on something real" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Step 1: Pick a real task — top options */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="STEP 1" title="Pick a Real Task" bullets={[
            { icon: "📝", text: "Draft content you need to publish next week" },
            { icon: "📅", text: "Prep for a meeting happening Monday" },
            { icon: "📧", text: "Process a batch of emails, notes, or ideas you've been putting off" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 1 continued — more ideas */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 1" title="More Task Ideas" bullets={[
            { icon: "📊", text: "Create a plan for a project you're actively working on" },
            { icon: "🔬", text: "Summarize research for a decision you need to make soon" },
            { icon: "⚠️", text: "Not a hypothetical — an actual item from your real to-do list" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 2: Use your input template */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="STEP 2" title="Use Your Input Template" bullets={[
            { icon: "📋", text: "Fill out the input template you created on Day 19" },
            { icon: "✍️", text: "Give it real information — not placeholder text" },
            { icon: "🎯", text: "The template ensures your agent gets what it needs" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Step 3: The process diagram */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <DiagramScene title="Step 3: Run It. Use the Output." steps={[
            { icon: "📋", label: "Fill Template" },
            { icon: "▶️", label: "Run Agent" },
            { icon: "📤", label: "Use Output" },
          ]} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Key rule: actually use the output */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="KEY RULE" title="Actually Use the Output" bullets={[
            { icon: "📧", text: "Send the email" },
            { icon: "📋", text: "Bring the prep doc to the meeting" },
            { icon: "📱", text: "Share the content" },
            { icon: "✅", text: "Don't just read it and move on — using it IS the test" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Comparison: reading vs using */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <ComparisonScene
            title="Reading vs Using"
            leftCard={{
              title: "Just Reading",
              items: [
                { icon: "👀", text: "Skim the output" },
                { icon: "🤔", text: "Think 'that looks okay'" },
                { icon: "❌", text: "No real feedback" },
              ],
              accentColor: ACCENT_PURPLE,
            }}
            rightCard={{
              title: "Actually Using",
              items: [
                { icon: "📤", text: "Send it, share it, present it" },
                { icon: "📊", text: "See where it works and fails" },
                { icon: "✅", text: "Real data for improvement" },
              ],
              accentColor: ACCENT_BLUE,
            }}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Reflection questions — time + quality */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="REFLECT" title="Reflection Questions (Part 1)" bullets={[
            { icon: "⏱️", text: "Did it save you time? How much, roughly?" },
            { icon: "📐", text: "Was the output good enough as-is, or did it need editing?" },
            { icon: "💡", text: "Both are valid answers — the answer tells you something" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Reflection questions — input gaps, score, reuse */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="REFLECT" title="Reflection Questions (Part 2)" bullets={[
            { icon: "📝", text: "What input did you wish you'd provided? That belongs in your template." },
            { icon: "🔢", text: "On a scale of 1-10, how useful? A 4 is better info than a polished 7." },
            { icon: "🔄", text: "Would you run this agent again next week? This is the most important question." },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Deliverable + Discord share */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Share Your Results" bullets={[
            { icon: "📦", text: "One real-world agent output + your honest reflection answers" },
            { icon: "💬", text: "Tell the community what real task you used it for" },
            { icon: "🎯", text: "Share your 1-10 score — a 4 with a clear 'here's why' is just as valuable as a 9" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. Outro */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="Honest Data Over Perfect Results" subtitle="Your answers will shape what you build in Week 4" bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 15. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TitleScene title="See You on Day 21" subtitle="Tomorrow: plan your agent's next level" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
