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
import { DAY23_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const Day23GatherRealInputs: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Gather Real Inputs" subtitle="Day 23 — From clean data to messy reality" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — you've been feeding it clean data */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene title="Clean Inputs vs. Real Inputs" bullets={[
            { icon: "✨", text: "You've been feeding your agent clean, well-formatted, carefully selected inputs" },
            { icon: "🔨", text: "That's how you build something — it's not how you use something" },
            { icon: "🌊", text: "Real inputs are messier: your inbox, your notes, your rushed morning prep" },
            { icon: "❓", text: "They're incomplete, inconsistent, and sometimes contradictory" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Key insight — built vs used */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <ComparisonScene title="Built vs. Used" leftCard={{
            title: "A Tool You Built",
            items: [
              { icon: "🧪", text: "Clean test data" },
              { icon: "📋", text: "Formatted examples" },
              { icon: "✅", text: "Carefully selected inputs" },
            ],
          }} rightCard={{
            title: "A Tool You Use",
            items: [
              { icon: "📧", text: "Messy inbox data" },
              { icon: "📝", text: "Rushed notes" },
              { icon: "🔀", text: "Inconsistent formats" },
            ],
          }} bgTint={TINT_GREEN} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. This isn't Day 16 — adapting, not breaking */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene title="Adapting, Not Breaking" bullets={[
            { icon: "🚫", text: "This isn't about breaking your agent — that was Day 16" },
            { icon: "🎯", text: "This is about adapting it to the actual data it will encounter in your life" },
            { icon: "💡", text: "The difference between a tool you built and a tool you use is almost always in the inputs" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Step 1: Collect 3 real inputs — first set */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="STEP 1" title="Collect 3 Real Inputs" bullets={[
            { icon: "⚡", text: "Go get actual items from your work or life — not examples, not mock data" },
            { icon: "📧", text: "3 emails that need responses" },
            { icon: "📅", text: "3 meeting agendas that need prep" },
            { icon: "📝", text: "3 pieces of content that need development" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 1 continued — more categories */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 1" title="More Real Input Ideas" bullets={[
            { icon: "💼", text: "3 client briefs that need proposals" },
            { icon: "🗒️", text: "3 batches of notes that need organizing" },
            { icon: "✅", text: "3 tasks in whatever format they actually exist right now" },
            { icon: "⚠️", text: "Don't clean them up first — feed them in as they are" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 2: Run all three — diagram */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <DiagramScene title="Step 2: Run Your Agent on All 3" steps={[
            { icon: "📥", label: "Feed Input As-Is" },
            { icon: "▶️", label: "Run Agent" },
            { icon: "📊", label: "Compare Results" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Step 3: Pay attention to format — comparison */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <ComparisonScene title="Step 3: Pay Attention to Format" leftCard={{
            title: "What Worked?",
            items: [
              { icon: "📋", text: "Did copy/paste work cleanly?" },
              { icon: "📐", text: "Did a structured template produce better output?" },
              { icon: "📁", text: "Did a file upload work better than pasting?" },
            ],
          }} rightCard={{
            title: "What Didn't?",
            items: [
              { icon: "🔇", text: "Was there formatting noise that confused the agent?" },
              { icon: "📉", text: "Did one run produce noticeably worse results?" },
              { icon: "🔀", text: "Was output quality inconsistent across the 3?" },
            ],
          }} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Format questions — what to note for each run */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="FOR EACH RUN" title="Note These Details" bullets={[
            { icon: "1️⃣", text: "Did copy/paste work? Or was there formatting noise that confused the agent?" },
            { icon: "2️⃣", text: "Did a structured template work better than raw text?" },
            { icon: "3️⃣", text: "Did a file upload work better than pasting?" },
            { icon: "4️⃣", text: "Was the output quality consistent across all 3, or did one run produce noticeably worse results?" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Step 4: Update your input template */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="STEP 4" title="Update Your Input Template" bullets={[
            { icon: "🔧", text: "Based on what you learned, update your Day 19 input template" },
            { icon: "🎯", text: "Make it handle real inputs better" },
            { icon: "📐", text: "One or two specific additions usually make a significant difference" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Reflection prompts */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="REFLECT" title="Reflection Prompts" bullets={[
            { icon: "🏆", text: "Which input format produced the best output — pasted text, structured template, or file?" },
            { icon: "➡️", text: "Use that format going forward" },
            { icon: "😮", text: "Did any of the 3 inputs confuse your agent in a way you didn't expect?" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Reflection detail — consistency and CLAUDE.md */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="REFLECT" title="Dig Deeper" bullets={[
            { icon: "📝", text: "Unexpected confusion? That's a CLAUDE.md update waiting to happen" },
            { icon: "📊", text: "Is quality consistent across all 3, or does one type reliably underperform?" },
            { icon: "⬇️", text: "Address the worst case, not the best — the best is already working" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Deliverable + Discord share */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="What to Share" bullets={[
            { icon: "📦", text: "3 real-world agent outputs + a note on which input format worked best and why" },
            { icon: "💬", text: "Discord: What format worked best — raw paste, structured template, or file?" },
            { icon: "🤝", text: "Input format is one of those things nobody talks about but everybody struggles with" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. Outro — address the worst case */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="Address the Worst Case" subtitle="Not the best case — that's already working" bgTint={TINT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 15. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TitleScene title="See You on Day 24" subtitle="Tomorrow: build sprint — Agent v2" showLogo bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
