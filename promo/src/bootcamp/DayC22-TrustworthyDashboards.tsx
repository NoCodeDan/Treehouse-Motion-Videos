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
import { DAYC22_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { MisleadingChartVisual } from "./visuals/MisleadingChartVisual";

export const DayC22TrustworthyDashboards: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Trustworthy Dashboards" subtitle="Track C — Build Your Own Data Dashboard" showLogo bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — most dashboards reflect what you already believed */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="HOOK" title="Most Dashboards Get This Wrong" bullets={[
            { icon: "🪞", text: "They look like they answer a question — but they just reflect what you already believed" },
            { icon: "⚠️", text: "That's not data. That's a mirror." },
            { icon: "🎯", text: "Today: how to make your dashboard actually honest" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Callout — who this is for */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="CALLOUT" title="This Is for You If..." bullets={[
            { icon: "🤔", text: "You looked at your dashboard and thought 'this confirms what I already knew'" },
            { icon: "🔄", text: "Career switchers using data to validate a career move" },
            { icon: "📊", text: "Entrepreneurs tracking their business" },
            { icon: "🛠️", text: "Builders trying to make real decisions from data" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Credibility — dangerous dashboards mislead with confidence */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="CREDIBILITY" title="The Most Dangerous Dashboard" bullets={[
            { icon: "💀", text: "The most dangerous dashboard is one that misleads you with confidence" },
            { icon: "🧠", text: "You don't need to become a statistician" },
            { icon: "🔑", text: "Reading data critically separates dashboards that help from dashboards that just feel good" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Compass — what you'll learn today */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <DiagramScene title="By the End of This Video" steps={[
            { icon: "🔍", label: "Spot when a chart is misleading you" },
            { icon: "🔗", label: "Understand correlation vs causation in plain English" },
            { icon: "📝", label: "Add a Decision Section to keep you honest" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Core Learning */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <ComparisonScene title="The Question Your Dashboard Must Answer" leftCard={{
            title: "Not This", items: [
              { icon: "📋", text: "What happened?" },
              { icon: "📊", text: "What are the numbers?" },
              { icon: "📈", text: "Is it going up or down?" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "This", items: [
              { icon: "🎯", text: "What should I do differently now?" },
              { icon: "🔄", text: "What action does this data suggest?" },
              { icon: "✅", text: "What decision can I make today?" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Why good charts can still mislead */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene title="Why Good Charts Can Still Mislead" bullets={[
            { icon: "📊", text: "A chart can be 100% accurate and still lie to you" },
            { icon: "🧠", text: "Our brains fill in stories from visual patterns" },
            { icon: "⚠️", text: "Scale, axis, and framing all shape your perception" },
            { icon: "🎭", text: "The chart doesn't tell you which story is true" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Correlation example — views + posting frequency */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <SplitVisualScene title="The Correlation Trap" bullets={[
            { icon: "📈", text: "Views going up. Posting frequency going up. More posts = more views?" },
            { icon: "🌟", text: "Maybe one piece went viral" },
            { icon: "🤖", text: "Maybe the algorithm changed" },
            { icon: "👥", text: "Maybe your audience grew for a completely separate reason" },
          ]} visual={<MisleadingChartVisual delay={20} />} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Correlation vs causation comparison */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <ComparisonScene title="Correlation vs Causation" leftCard={{
            title: "Correlation", items: [
              { icon: "📈", text: "Two things happening together" },
              { icon: "🔗", text: "A pattern exists in the data" },
              { icon: "❓", text: "Does NOT mean one causes the other" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Causation", items: [
              { icon: "🎯", text: "One thing directly making another happen" },
              { icon: "🔬", text: "Requires controlled testing to prove" },
              { icon: "✅", text: "Much harder to establish" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Ask before acting — the Tuesday pattern */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="KEY QUESTION" title="Ask Before You Act on a Pattern" bullets={[
            { icon: "📅", text: "Your best content days might be Tuesdays — but posting more on Tuesdays won't necessarily fix growth" },
            { icon: "🤔", text: "The pattern might exist because of your audience's schedule, topics, or just chance" },
            { icon: "💡", text: "Ask: 'Would these two things actually cause each other? Or is this a coincidence I'm trying to explain?'" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Three signs overview */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="WARNING SIGNS" title="Three Signs a Chart Is Misleading You" bullets={[
            { icon: "1️⃣", text: "It starts at a number other than zero" },
            { icon: "2️⃣", text: "The time period is suspiciously short" },
            { icon: "3️⃣", text: "The sample is too small" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Sign 1: Non-zero baseline */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <SplitVisualScene title="Sign 1: Non-Zero Baseline" bullets={[
            { icon: "📊", text: "A line chart starting at 50 instead of 0 makes small changes look enormous" },
            { icon: "👀", text: "A 2% change can look like a 50% swing" },
            { icon: "✅", text: "Always check the baseline — where does the axis start?" },
          ]} visual={<MisleadingChartVisual delay={20} />} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Sign 2: Short time period */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene title="Sign 2: Suspiciously Short Time Period" bullets={[
            { icon: "📅", text: "One good week is not a trend" },
            { icon: "📈", text: "Three months is a trend" },
            { icon: "🔍", text: "Be careful how much you read into short windows of data" },
            { icon: "⚠️", text: "Always zoom out before drawing conclusions" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. Sign 3: Small sample size */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene title="Sign 3: Too Small a Sample" bullets={[
            { icon: "🔢", text: "10 data points can show almost any pattern you want to see" },
            { icon: "📊", text: "20 is better. 50 is where patterns start to mean something." },
            { icon: "⚠️", text: "Fewer than 20 entries? Hold your conclusions lightly." },
            { icon: "💡", text: "Always show the count alongside the percentage" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. Decision Section — "Based on this data, I will ___" */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TextAndBulletsScene badge="DECISION SECTION" title={'"Based on This Data, I Will ___"'} bullets={[
            { icon: "📝", text: "Every dashboard should include a Decision Section — not just a chart, a sentence" },
            { icon: "🎯", text: "If you can't fill in the blank, you're looking at the wrong thing" },
            { icon: "🔄", text: "Change the question before you change the chart" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 16. Decoration vs Tool */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <ComparisonScene title="Decoration vs Tool" leftCard={{
            title: "Decoration", items: [
              { icon: "🎨", text: "Shows interesting patterns" },
              { icon: "📊", text: "Looks impressive" },
              { icon: "❌", text: "Doesn't help you decide anything" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Tool", items: [
              { icon: "🔧", text: "Tells you what to do differently" },
              { icon: "📝", text: "Points toward a specific action" },
              { icon: "✅", text: "Changes what you do next week" },
            ],
          }} bgTint={TINT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 17. Checkpoint — where you are now */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TextAndBulletsScene badge="CHECKPOINT" title="Where You Are Now" bullets={[
            { icon: "✅", text: "You understand why accurate charts can still mislead" },
            { icon: "✅", text: "You know the plain-English version of correlation vs causation" },
            { icon: "✅", text: "You know the question — 'What should I do differently now?' — that makes a dashboard worth building" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 18. Outro — next steps */}
        <TransitionSeries.Sequence durationInFrames={D[17]}>
          <TextAndBulletsScene badge="YOUR DELIVERABLE" title="Add a Decision Section Today" bullets={[
            { icon: "📝", text: "Add to your dashboard: 'Based on this data, I will ___'" },
            { icon: "🎯", text: "Fill it in with one specific action — a real decision from real data" },
            { icon: "🔜", text: "Next: Day 23 — add one new data source to make your dashboard more complete" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 19. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[18]}>
          <TitleScene title="Honest Data, Better Decisions" subtitle="Tomorrow: add one new data source" showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
