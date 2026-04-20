import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { TitleScene } from "../templates/TitleScene";
import { TextAndBulletsScene } from "../templates/TextAndBulletsScene";
import { DiagramScene } from "../templates/DiagramScene";
import { SplitVisualScene } from "../templates/SplitVisualScene";
import { ComparisonScene } from "../templates/ComparisonScene";
import { ACCENT_PURPLE, ACCENT_BLUE, TINT_GREEN, TINT_BLUE, TINT_PURPLE } from "../lib/brand";
import { DAYC20_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const DayC20RealWorldUseTest: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Real-World Use Test" subtitle="Track C — Build Your Own Data Dashboard" showLogo bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Framing — today you use it */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="FRAMING" title="Today You Use It" bullets={[
            { icon: "🎯", text: "You've built a dashboard — today you put it to work" },
            { icon: "🧪", text: "Not to admire it, not to share it" },
            { icon: "✅", text: "To make one actual decision with it — that's the test" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Why most dashboards fail */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="THE PROBLEM" title="Why Most Dashboards Fail" bullets={[
            { icon: "📊", text: "They look interesting while you're building them" },
            { icon: "📅", text: "But the next week, when you need a real answer — they don't help" },
            { icon: "🔍", text: "The chart doesn't answer the right question" },
            { icon: "🌫️", text: "The data is too vague, the insight isn't actionable" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. The right time to find out */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <ComparisonScene title="Find Out Now, Not Later" leftCard={{
            title: "Discover It Now",
            items: [
              { icon: "📍", text: "Day 20 — before you polish" },
              { icon: "🔧", text: "Week 4 can fix what's broken" },
              { icon: "💡", text: "Real feedback while it matters" },
            ],
          }} rightCard={{
            title: "Find Out Too Late",
            items: [
              { icon: "🎨", text: "Spent days making it pretty" },
              { icon: "🚫", text: "Opened it once, never again" },
              { icon: "🗑️", text: "Polished something that isn't useful" },
            ],
          }} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Step 1: Open your dashboard */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <DiagramScene title="Step 1: Open Your Dashboard" steps={[
            { icon: "📊", label: "Open Your Draft" },
            { icon: "📈", label: "Review Your Chart" },
            { icon: "📝", label: "Re-read Your 3 Insights" },
            { icon: "🔍", label: "Read It Fresh — Like First Time" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 2 scenarios: time & spending */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 2" title="Pick Your Scenario" bullets={[
            { icon: "⏱️", text: "Time tracker: Plan next week — block time differently based on where hours actually go" },
            { icon: "💰", text: "Spending log: Identify one category to cut or redirect" },
            { icon: "📱", text: "Content tracker: Choose your next piece based on what performs — not what you feel like making" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 2 scenarios: clients & habits */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="STEP 2" title="More Scenarios" bullets={[
            { icon: "🤝", text: "Client or lead tracker: Find your highest-value source, focus outreach there this week" },
            { icon: "🔁", text: "Habit tracker: Adjust one habit based on the pattern you see" },
            { icon: "🎯", text: "Whatever your data — make one real decision with it" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Step 2: Make the decision */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="DECIDE" title="Make One Real Decision" bullets={[
            { icon: "📈", text: "Should I double down on this channel?" },
            { icon: "💰", text: "Is this expense worth keeping?" },
            { icon: "📅", text: "Should I change my schedule based on this trend?" },
            { icon: "🔄", text: "Let the data answer — not your gut" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Step 3: Write it down */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="STEP 3" title="Write the Decision Down" bullets={[
            { icon: "📝", text: "One sentence: 'Based on my dashboard, I decided to __________'" },
            { icon: "🎯", text: "It doesn't need to be profound — it needs to be real" },
            { icon: "✅", text: "If you can fill in that blank, the dashboard is working" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Step 4: Note what was harder */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="STEP 4" title="Note What the Dashboard Made Harder" bullets={[
            { icon: "🕳️", text: "What did you wish it showed that it didn't?" },
            { icon: "❓", text: "What question did you have that your dashboard couldn't answer?" },
            { icon: "📋", text: "Write that down — it's your upgrade list for Week 4" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Reflection: Did it help? */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <ComparisonScene title="Reflection: Did It Help?" leftCard={{
            title: "Yes",
            items: [
              { icon: "✅", text: "You have a working dashboard" },
              { icon: "📊", text: "It answered a real question" },
              { icon: "🚀", text: "Week 4 is about refinement" },
            ],
          }} rightCard={{
            title: "No",
            items: [
              { icon: "🔍", text: "What was missing?" },
              { icon: "📐", text: "Was the data too vague?" },
              { icon: "🔧", text: "That's what Week 4 fixes" },
            ],
          }} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Reflection: What would make it more useful? */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="REFLECT" title="What Would Make It More Useful?" bullets={[
            { icon: "🪞", text: "Not more visual — more useful" },
            { icon: "🎯", text: "What would you actually want to see next time you open it?" },
            { icon: "⏱️", text: "A good dashboard gives answers in seconds, not minutes" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Deliverable + Discord */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Share Your Decision" bullets={[
            { icon: "📦", text: "Your deliverable: one real decision made using your dashboard" },
            { icon: "💬", text: "Tell the community what you decided and whether the dashboard helped" },
            { icon: "🏆", text: "Honest answers like 'it didn't help me decide' are the most valuable" },
            { icon: "🔧", text: "That honesty is exactly what Week 4 is for" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 14. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="One Decision, One Dashboard" subtitle="Tomorrow: prep for Dashboard v2" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
