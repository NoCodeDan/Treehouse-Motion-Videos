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
import { DAYC24_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const DayC24BuildSprintDashboardV1: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Build Sprint: Dashboard v1" subtitle="Track C — Build Your Own Data Dashboard" showLogo bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Framing — v0 was visibility, v1 is usability */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="FRAMING" title="From Visibility to Usability" bullets={[
            { icon: "🔄", text: "This is your second build sprint — the difference between v0 and v1 is clarity" },
            { icon: "👁️", text: "v0 was about visibility — making something real, fast, and rough" },
            { icon: "🎯", text: "v1 is about usability — can someone else look at this and understand it?" },
            { icon: "⏳", text: "Can you look at it in two weeks and still know what it is showing you?" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. The clarity standard — 60-second decision test */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="THE STANDARD" title="The 60-Second Decision Test" bullets={[
            { icon: "⏱️", text: "Can you make a decision in under 60 seconds after opening this dashboard?" },
            { icon: "🚫", text: "Not beauty — clarity and decision-making speed" },
            { icon: "✅", text: "Those are the only standards for today" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. v0 vs v1 comparison */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <ComparisonScene title="v0 vs v1" leftCard={{
            title: "Dashboard v0", items: [
              { icon: "🔨", text: "Fast and rough" },
              { icon: "👁️", text: "Proves the data is visible" },
              { icon: "❓", text: "Only you understand it" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Dashboard v1", items: [
              { icon: "✨", text: "Clean and readable" },
              { icon: "🎯", text: "Built around a decision" },
              { icon: "👥", text: "Anyone can understand it" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Step 1: AI clarity check — the prompt */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="STEP 1" title="Ask AI for a Clarity Check" bullets={[
            { icon: "🤖", text: "Open Claude or your AI tool of choice and share your current dashboard layout" },
            { icon: "💬", text: "Use this prompt: 'Here is my current dashboard. What is the simplest way to make this clearer and easier to act on?'" },
            { icon: "🔍", text: "AI sees your dashboard without your assumptions — it will catch what you cannot" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 1 continued: reading and implementing suggestions */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 1" title="Implement the Best Suggestions" bullets={[
            { icon: "📖", text: "Read the suggestions carefully — do not try to do all of them" },
            { icon: "🎯", text: "Pick the one or two that feel most practical and implement those" },
            { icon: "📝", text: "If the AI gets confused about what the dashboard shows, your user will too" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 2: Improve layout — move most important chart up */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <DiagramScene title="Step 2: Improve Layout and Readability" steps={[
            { icon: "📐", label: "Most important chart goes to top" },
            { icon: "🗑️", label: "Remove anything that does not answer your question" },
            { icon: "🏷️", label: "Every label readable without context" },
            { icon: "👀", label: "Decision Sentence visible without scrolling" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Step 2 continued: labels, context, decision sentence */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="STEP 2" title="The Readability Checklist" bullets={[
            { icon: "📊", text: "Move the most important chart to the most prominent position" },
            { icon: "🚫", text: "Remove anything that does not directly answer your question" },
            { icon: "🏷️", text: "Check that every label is readable without extra context" },
            { icon: "📝", text: "Make sure the 'What this means' section and Decision Sentence are visible without scrolling" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Step 3: Add one interaction */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="STEP 3" title="Add One Interaction (If Relevant)" bullets={[
            { icon: "📅", text: "A filter by date" },
            { icon: "📂", text: "A dropdown by category" },
            { icon: "🔀", text: "A way to slice the data without rebuilding the whole thing" },
            { icon: "🎯", text: "One interaction that makes a decision easier — not five that make it noisier" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Step 3: when to skip it */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="STEP 3" title="When to Skip This Step" bullets={[
            { icon: "✅", text: "This step is optional — only add an interaction if it makes a decision easier" },
            { icon: "🧹", text: "If your dashboard is already clear without it, skip it entirely" },
            { icon: "💡", text: "Adding complexity to a clear dashboard makes it worse, not better" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Step 4: Second visualization — only if needed */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="STEP 4" title="Add a Second Visualization If Needed" bullets={[
            { icon: "📊", text: "Only if your upgrade plan called for it" },
            { icon: "📈", text: "Only if the new data point you added on Day 23 requires a new chart" },
            { icon: "1️⃣", text: "One additional chart maximum — keep it simple" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Step 4: one chart, one question rule */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <ComparisonScene title="The One-Chart Rule" leftCard={{
            title: "Do Not Do This", items: [
              { icon: "🚫", text: "Duplicate what the first chart shows" },
              { icon: "🚫", text: "Add a chart just because you can" },
              { icon: "🚫", text: "Make it complex to look impressive" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Do This Instead", items: [
              { icon: "✅", text: "One chart answers one question" },
              { icon: "✅", text: "Two charts means two different questions" },
              { icon: "✅", text: "Every chart earns its place" },
            ],
          }} bgTint={TINT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Reflection — 60-second test */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="REFLECTION" title="Can You Decide in 60 Seconds?" bullets={[
            { icon: "⏱️", text: "Open your dashboard fresh — can you make a decision in under 60 seconds?" },
            { icon: "⚠️", text: "If not, something is competing for attention that should not be there" },
            { icon: "🧹", text: "The fix is usually removing something, not adding something" },
            { icon: "🎯", text: "Clarity comes from subtraction" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. Reflection — what would you cut? */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene badge="REFLECTION" title="What Would You Cut in Half?" bullets={[
            { icon: "✂️", text: "If you had to cut the dashboard in half, what would go?" },
            { icon: "💡", text: "Cutting something is often more valuable than adding something" },
            { icon: "🏆", text: "The best dashboards feel almost too simple — that is the goal" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. Deliverable + Discord share */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TextAndBulletsScene badge="YOUR DELIVERABLE" title="Dashboard v1 — Clean and Decision-Ready" bullets={[
            { icon: "📦", text: "Your deliverable: Dashboard v1 — clean, readable, and built around the decision it supports" },
            { icon: "📸", text: "Post a before/after screenshot if you have one — or just the v1 on its own" },
            { icon: "🔄", text: "The upgrade from rough to clear is worth showing" },
            { icon: "💬", text: "If someone in the community can make it clearer with one suggestion, that is exactly what the channel is for" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 16. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TitleScene title="Dashboard v1 Complete" subtitle="Clean, readable, decision-ready" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
