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
import { DAYC19_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { InsightCardVisual } from "./visuals/InsightCardVisual";

export const DayC19DataStorytelling: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Data Storytelling for Beginners" subtitle="Track C — Build Your Own Data Dashboard" showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — a chart without context is just a shape */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="THE PROBLEM" title="A Chart Without Context Is Just a Shape" bullets={[
            { icon: "📊", text: "It might be interesting. It might be accurate." },
            { icon: "🤷", text: "But it doesn't tell anyone what to do about it" },
            { icon: "💬", text: "The thing that makes a dashboard useful isn't the visualization" },
            { icon: "💡", text: "It's the words underneath it" },
          ]} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. The real problem — charts don't speak for themselves */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="THE REALITY" title="Charts Do Not Speak for Themselves" bullets={[
            { icon: "📊", text: "Most technical people skip this step" },
            { icon: "🚫", text: "They assume the chart speaks for itself — it doesn't" },
            { icon: "🏆", text: "Labels, context, and written insights beat beautiful charts every time" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Four C's — what you will learn */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene title="What You Will Learn" bullets={[
            { icon: "🧭", text: "Turn a raw visualization into a dashboard that communicates" },
            { icon: "📝", text: "Add a title, three bullet insights, and one recommendation" },
            { icon: "🎯", text: "The 'What this means' section is the most important part of any dashboard" },
            { icon: "💡", text: "Upgrade your Dashboard v0 into something you'd actually share" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Same data, different dashboard (before/after) */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <ComparisonScene title="Same Data, Completely Different Dashboard" leftCard={{
            title: "Without Context", items: [
              { icon: "📊", text: "Some bars are taller than others" },
              { icon: "❓", text: "No title, no labels, no context" },
              { icon: "🤷", text: "You don't know what caused the differences" },
              { icon: "🚫", text: "No idea what to do about it" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "With Three Additions", items: [
              { icon: "📝", text: "A clear title framing the question" },
              { icon: "🏷️", text: "Axis labels explaining each bar" },
              { icon: "💬", text: "Two sentences of written context" },
              { icon: "🎯", text: "Now you know exactly what to do" },
            ],
          }} bgTint={TINT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. The three communication tools (overview) */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <DiagramScene title="Three Things That Make a Dashboard Communicate" steps={[
            { icon: "📝", label: "A title that states the question" },
            { icon: "🏷️", label: "Labels that eliminate confusion" },
            { icon: "💡", label: "A 'What this means' section" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Tool 1 — a title that states the question */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="TOOL 1" title="A Title That States the Question" bullets={[
            { icon: "🚫", text: "Not 'Content Performance.' Not 'Data Overview.'" },
            { icon: "✅", text: "Which content type drives the most engagement?" },
            { icon: "✅", text: "Where am I spending the most time each week?" },
            { icon: "🎯", text: "A question as a title tells everyone — including future you — exactly what they're looking at and why" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Tool 1 — before/after title examples */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <ComparisonScene title="Before and After: Dashboard Titles" leftCard={{
            title: "Generic Titles", items: [
              { icon: "🚫", text: "Revenue Chart" },
              { icon: "🚫", text: "Content Performance" },
              { icon: "🚫", text: "Data Overview" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Question Titles", items: [
              { icon: "✅", text: "Where does our revenue come from?" },
              { icon: "✅", text: "Which posts drive the most clicks?" },
              { icon: "✅", text: "What am I spending the most time on?" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Tool 2 — labels that eliminate confusion */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="TOOL 2" title="Labels That Eliminate Confusion" bullets={[
            { icon: "🏷️", text: "Every axis, every category, every column needs a plain-English label" },
            { icon: "🚫", text: "Not abbreviations. Not codes. Not 'Q1_rev_2025'" },
            { icon: "👁️", text: "If you can't read it at a glance, it needs to be renamed" },
            { icon: "📅", text: "Include date ranges and time periods" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Tool 2 — label anti-patterns */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <ComparisonScene title="Labels: What to Avoid vs. What to Use" leftCard={{
            title: "Confusing Labels", items: [
              { icon: "🚫", text: "Q1_rev_2025" },
              { icon: "🚫", text: "cat_a, cat_b, cat_c" },
              { icon: "🚫", text: "val (thousands)" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Clear Labels", items: [
              { icon: "✅", text: "Revenue — Jan to Mar 2025" },
              { icon: "✅", text: "Blog, Newsletter, Social" },
              { icon: "✅", text: "Monthly Revenue ($)" },
            ],
          }} bgTint={TINT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Tool 3 — the "What this means" section */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <SplitVisualScene badge="TOOL 3" title={'The "What This Means" Section'} bullets={[
            { icon: "💡", text: "The most important part — and the part nobody teaches" },
            { icon: "📝", text: "Underneath or beside every chart, write three bullets" },
            { icon: "🏆", text: "Worth more than any color choice, font, or design element" },
            { icon: "🎯", text: "This is where the dashboard becomes useful" },
          ]} visual={<InsightCardVisual delay={30} />} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Tool 3 — the three insight questions */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="THREE QUESTIONS" title="What to Write in Your Insight Section" bullets={[
            { icon: "1️⃣", text: "What does this chart actually show?" },
            { icon: "2️⃣", text: "What surprised you?" },
            { icon: "3️⃣", text: "What would you do differently because of it?" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. The recommendation sentence */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <DiagramScene title="The Recommendation Sentence" steps={[
            { icon: "📊", label: "Look at your chart" },
            { icon: "💡", label: "Write three insight bullets" },
            { icon: "🎯", label: "Add one recommendation" },
          ]} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. "Based on this, I will ___" template */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene badge="THE TEMPLATE" title={'"Based on this, I will __________"'} bullets={[
            { icon: "📝", text: "After your three bullets, add one sentence starting with this phrase" },
            { icon: "🎯", text: "That sentence is the whole point of the dashboard" },
            { icon: "🔄", text: "If you can't write it, the dashboard isn't answering your question yet" },
            { icon: "💡", text: "Go back and ask a better question" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. Checkpoint — context beats charts */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TextAndBulletsScene badge="CHECKPOINT" title="Context Beats Charts" bullets={[
            { icon: "📊", text: "You know that context beats charts every time" },
            { icon: "📝", text: "You know the three things that make a dashboard communicate" },
            { icon: "💡", text: "You know what the 'What this means' section is for" },
            { icon: "🚀", text: "Now you're going to add it to what you built" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 16. Where you are now */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TextAndBulletsScene badge="RIGHT NOW" title="Your Dashboard v0 Has Charts — Not Words" bullets={[
            { icon: "📊", text: "You have at least one chart from earlier days" },
            { icon: "🤷", text: "What it probably doesn't have is words" },
            { icon: "📝", text: "Today you add them — and that changes everything" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 17. Your task — upgrade dashboard v0 */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TextAndBulletsScene badge="YOUR TASK" title="Upgrade Your Dashboard v0" bullets={[
            { icon: "1️⃣", text: "Add a title that is a question" },
            { icon: "2️⃣", text: "Add clear labels on every chart" },
            { icon: "3️⃣", text: "Write a 'What this means' section with 3 bullet insights" },
            { icon: "4️⃣", text: "Add one recommendation: 'Based on this, I will __________'" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 18. Deliverable — shareable dashboard draft */}
        <TransitionSeries.Sequence durationInFrames={D[17]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Your Shareable Dashboard Draft" bullets={[
            { icon: "📋", text: "This is version 0 turned into something you'd actually use" },
            { icon: "🎯", text: "It doesn't need to be beautiful — it needs to be readable" },
            { icon: "🌐", text: "Share it with the community — show what you built and what you learned" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 19. Outro */}
        <TransitionSeries.Sequence durationInFrames={D[18]}>
          <TitleScene title="The Words Matter More Than the Visuals" subtitle="A dashboard is not charts — a dashboard is answers" bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 20. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[19]}>
          <TitleScene title="See You on Day 20" subtitle="Where you use your dashboard like a real tool for the first time" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
