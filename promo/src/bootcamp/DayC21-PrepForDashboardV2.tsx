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
import { DAYC21_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const DayC21PrepForDashboardV2: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Prep for Dashboard v2" subtitle="Track C — Build Your Own Data Dashboard" showLogo bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Week 3 recap — what you've built */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="WEEK 3 DONE" title="Look at What You Built" bullets={[
            { icon: "📊", text: "You have a working dashboard" },
            { icon: "💡", text: "You found a real insight in your data" },
            { icon: "🎯", text: "You made at least one decision using actual data" },
            { icon: "🏗️", text: "That's the whole foundation — not nothing" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Week 4 framing — better and repeatable */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <SplitVisualScene badge="WEEK 4" title="Making It Better — and Repeatable" bullets={[
            "Week 4 is about making it better",
            "More importantly, making it repeatable",
            "Not more charts. Not more colors.",
            "One specific upgrade that makes it more useful next time you open it",
          ]} visual="checklist" bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Today's goal — plan the upgrade */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="TODAY" title="Plan One Upgrade" bullets={[
            { icon: "1️⃣", text: "One thing. Not five. Not a full redesign." },
            { icon: "🔍", text: "The one addition that would have made your real-world use test easier" },
            { icon: "🎯", text: "Or more useful. Or more honest." },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Step 1 — Review Day 20 notes */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="STEP 1" title="Review Your Day 20 Notes" bullets={[
            { icon: "📝", text: "Look at what you wrote about your decision" },
            { icon: "🕳️", text: "What did the dashboard make harder?" },
            { icon: "🔑", text: "That gap is where your upgrade lives" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 2 — Five upgrade options (first three) */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 2" title="Pick ONE Upgrade" bullets={[
            { icon: "1️⃣", text: "Cleaner layout — reorganize so the most important thing is first" },
            { icon: "2️⃣", text: "One filter — slice data by date, category, or another variable" },
            { icon: "3️⃣", text: "One additional metric — the key number that was missing" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 2 continued — last two upgrade options */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="STEP 2" title="Two More Options" bullets={[
            { icon: "4️⃣", text: "A weekly update system — a clear process for updating the data" },
            { icon: "5️⃣", text: "A publishable portfolio version — share-ready for recruiters or collaborators" },
            { icon: "🎯", text: "Choose the one that fits the gap you identified" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Step 3 — Write your upgrade plan */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <DiagramScene title="Write Your Upgrade Plan" steps={[
            { icon: "1️⃣", label: "What You're Adding" },
            { icon: "2️⃣", label: "Why It's More Useful" },
            { icon: "3️⃣", label: "What You Need" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. The three-sentence format */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="FORMAT" title="Three Sentences or Less" bullets={[
            { icon: "📝", text: "What you're adding or changing" },
            { icon: "💡", text: "Why it makes the dashboard more useful" },
            { icon: "🔧", text: "What you'll need to do it — data, tool, or AI help" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Reflection — useful vs impressive */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <ComparisonScene title="More Useful, Not More Impressive" leftCard={{
            title: "More Useful", items: [
              { icon: "✅", text: "Tied to a real decision" },
              { icon: "✅", text: "Answers a question you ask regularly" },
              { icon: "✅", text: "Faster to get to the insight" },
            ],
          }} rightCard={{
            title: "More Impressive", items: [
              { icon: "❌", text: "Looks better but doesn't help" },
              { icon: "❌", text: "Answers questions no one asks" },
              { icon: "❌", text: "More charts for the sake of charts" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Reflection — smallest change, biggest difference */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="REFLECTION" title="Smallest Change, Biggest Difference" bullets={[
            { icon: "🤔", text: "What's the smallest change that would make the biggest difference?" },
            { icon: "🔧", text: "Week 4 is about one focused improvement, not a full rebuild" },
            { icon: "✅", text: "If you can't finish it in one session, scope it down" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <SplitVisualScene badge="SHARE" title="Post Your Upgrade Plan" bullets={[
            "Your deliverable: a 3-sentence upgrade plan",
            "One sentence is enough for Discord",
            "\"I'm adding [this] because [it would help me do this]\"",
            "Seeing what others are upgrading gives everyone better ideas",
          ]} visual="checklist" bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Outro */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TitleScene title="Plan Locked In" subtitle="Next: learn what makes dashboards trustworthy" bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 14. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="See You on Day 22" subtitle="Tomorrow: trustworthy dashboards" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
