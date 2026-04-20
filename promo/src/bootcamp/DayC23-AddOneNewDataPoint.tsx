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
import { DAYC23_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const DayC23AddOneNewDataPoint: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Add One New Data Point" subtitle="Track C — Build Your Own Data Dashboard" showLogo bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Framing — your dashboard works, now make it more complete */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="FRAMING" title="Your Dashboard Works — Now Make It More Complete" bullets={[
            { icon: "✅", text: "Your dashboard is functional — that is real progress" },
            { icon: "📊", text: "Adding data is not the same as complicating things" },
            { icon: "🎯", text: "The right data point turns a pattern you can see into one you can explain" },
            { icon: "🚫", text: "Today you add one thing — not five — just one" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Key insight — see vs explain */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <SplitVisualScene badge="KEY INSIGHT" title="See It vs. Explain It" leftLabel="Before" leftItems={[
            "My Tuesday posts get more views",
            "Pattern is visible",
            "But you cannot explain why",
          ]} rightLabel="After One Data Point" rightItems={[
            "Tuesday posts get views because they cover topics my audience cares about",
            "Pattern is explainable",
            "Now you can act on it",
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. The rule — one thing, not five */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="THE RULE" title="One Addition — The Most Useful One" bullets={[
            { icon: "1️⃣", text: "The most useful addition you identified on Day 21" },
            { icon: "💡", text: "Or the one that would have helped you make a better decision on Day 20" },
            { icon: "🎯", text: "One well-chosen data point beats five random ones" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Option 1 — five more rows */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="OPTION 1" title="Five More Rows" bullets={[
            { icon: "📋", text: "More data points in the same categories you already track" },
            { icon: "📏", text: "Especially useful if your dataset felt too small to trust" },
            { icon: "🔢", text: "Same structure, just more entries to strengthen the pattern" },
            { icon: "✅", text: "Best when: your conclusions felt shaky due to sample size" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Option 2 — one new column */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="OPTION 2" title="One New Column" bullets={[
            { icon: "🏷️", text: "A category, tag, or rating that adds context to what you already have" },
            { icon: "📝", text: "Content data? Add a topic category" },
            { icon: "💼", text: "Freelance data? Add client size" },
            { icon: "⚡", text: "Habit data? Add energy level" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Option 3 — one extra import */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="OPTION 3" title="One Extra Import" bullets={[
            { icon: "📥", text: "A second source pulled in from outside your main dataset" },
            { icon: "📅", text: "Calendar exports, social analytics, bank categories" },
            { icon: "🔑", text: "Keep it small and manageable — one source, not three" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Step 2 — add to your dataset */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <DiagramScene title="Add It to Your Dataset" steps={[
            { icon: "📋", label: "Pick Your Addition" },
            { icon: "📝", label: "Update Sheet or CSV" },
            { icon: "🏷️", label: "Label Clearly" },
            { icon: "✅", label: "Verify Data" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Step 3 — update your chart */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="STEP 3" title="Update Your Chart" bullets={[
            { icon: "📊", text: "If the new data adds a dimension — update the visualization" },
            { icon: "🔄", text: "If it just adds rows — refresh the data and watch for shifts" },
            { icon: "👀", text: "Does the pattern look different now?" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Step 4 — check your insight */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <ComparisonScene title="Check Your Insight" leftCard={{
            title: "Confirmed", items: [
              { icon: "✅", text: "The new data backs up what you thought" },
              { icon: "✅", text: "Your original pattern holds with more evidence" },
              { icon: "✅", text: "You can trust the conclusion now" },
            ],
          }} rightCard={{
            title: "Changed", items: [
              { icon: "🔄", text: "The new data adds a wrinkle" },
              { icon: "🔄", text: "Your original pattern shifts or breaks" },
              { icon: "🔄", text: "You have a better, more nuanced insight" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Reflection — right addition vs wrong */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <SplitVisualScene badge="REFLECTION" title="Right Addition vs. Wrong Addition" leftLabel="Right Addition" leftItems={[
            "Makes existing patterns sharper",
            "Adds clarity to your dashboard",
            "Helps you explain what you see",
          ]} rightLabel="Wrong Addition" rightItems={[
            "Makes the dashboard more confusing",
            "Adds noise instead of signal",
            "If this happened — pull it back",
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. What would you track next? */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="LOOK AHEAD" title="What Would You Track If You Could Track Anything?" bullets={[
            { icon: "🔮", text: "Sometimes the most useful data does not exist yet" },
            { icon: "📝", text: "It has to be collected deliberately" },
            { icon: "🎯", text: "What would be worth starting to track going forward?" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Deliverable + Discord share */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Updated Dataset v1" bullets={[
            { icon: "📦", text: "At least one new column, five new rows, or one additional source" },
            { icon: "💬", text: "Share what you added and what changed when you did" },
            { icon: "🏆", text: "\"I added a topic column and now I can see my best content is all about X\"" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 14. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="Your Dashboard Just Got Smarter" subtitle="Tomorrow: build sprint — Dashboard v1" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
