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
import { DAYB20_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const DayB20FriendTest: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="The Friend Test" subtitle="Day 20 — Borrow someone else's eyes" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — you know your app too well */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene title="You Know Your App Too Well" bullets={[
            { icon: "🧠", text: "You know where everything is and what the buttons do" },
            { icon: "🙈", text: "You skip the confusing parts because you know the workaround" },
            { icon: "🔄", text: "You fill in gaps automatically without realizing it" },
            { icon: "❌", text: "You've lost the ability to see it the way a new person sees it" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. The solution — borrow someone else's perspective */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="THE FIX" title="Borrow Someone Else's Eyes" bullets={[
            { icon: "👤", text: "Find a real person — friend, family member, colleague" },
            { icon: "🆕", text: "Someone who has never seen your app before" },
            { icon: "🤐", text: "Don't explain anything upfront. Don't guide them." },
            { icon: "💡", text: "What you learn in an hour beats another day building in isolation" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. The Exercise overview diagram */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <DiagramScene title="The Friend Test Exercise" steps={[
            { icon: "👤", label: "Find Tester" },
            { icon: "🔗", label: "Hand Over" },
            { icon: "👀", label: "Watch Silently" },
            { icon: "📝", label: "Take Notes" },
            { icon: "❓", label: "Ask Questions" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Step 1 — Find your tester */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <SplitVisualScene badge="STEP 1" title="Find Your Tester" bullets={[
            { icon: "👤", text: "This doesn't need to be a tech person" },
            { icon: "🌟", text: "Non-technical users surface the most valuable feedback" },
            { icon: "🤷", text: "If anything, pick someone who would be confused by it" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 2 — Set it up without setup */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 2" title="Set It Up Without Setup" bullets={[
            { icon: "🔗", text: "Hand them the URL or your device" },
            { icon: "💬", text: "Say: \"This is an app I'm building. I want to see what you think.\"" },
            { icon: "🚫", text: "No demo. No walkthrough. That's all." },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 3 — Watch without interrupting */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="STEP 3" title="Watch Without Interrupting" bullets={[
            { icon: "🤐", text: "Resist the urge to explain or fix things" },
            { icon: "⏸️", text: "When they hesitate, let them hesitate" },
            { icon: "❌", text: "When they click the wrong thing, let them" },
            { icon: "👁️", text: "Your job right now is observation, not assistance" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Step 4 — What to note */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="STEP 4" title="Note What You See" bullets={[
            { icon: "⏸️", text: "Where did they pause or get confused?" },
            { icon: "🖱️", text: "What did they try that didn't work?" },
            { icon: "✅", text: "What did they understand immediately?" },
            { icon: "🗣️", text: "What did they say out loud — positive or negative?" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Step 5 — Two questions after */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="STEP 5" title="Ask Two Questions After" bullets={[
            { icon: "1️⃣", text: "\"What did you think this app was for?\"" },
            { icon: "2️⃣", text: "\"What would make you want to use it again?\"" },
            { icon: "💡", text: "Their answers reveal what you can't see from inside the build" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Builder vs. Fresh Eyes comparison */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <ComparisonScene title="Builder Eyes vs. Fresh Eyes" leftCard={{
            title: "What You See", items: [
              { icon: "🧠", text: "Features you spent hours on" },
              { icon: "🔧", text: "Workarounds you've memorized" },
              { icon: "📋", text: "Things still on the to-do list" },
            ], accentColor: ACCENT_BLUE,
          }} rightCard={{
            title: "What They See", items: [
              { icon: "😕", text: "Confusing labels and missing cues" },
              { icon: "🚪", text: "Dead ends and broken flows" },
              { icon: "✨", text: "The parts that actually work" },
            ],
          }} bgTint={TINT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Reflection — can they explain it back? */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="REFLECT" title="Do They Understand Your App?" bullets={[
            { icon: "🤔", text: "Can they explain what it does in their own words?" },
            { icon: "🚨", text: "If not, the core value isn't clear enough yet" },
            { icon: "😮", text: "What's missing that surprised you?" },
            { icon: "👀", text: "Fresh eyes see the obvious gaps builders stop noticing" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Deliverable — three observations */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <DiagramScene title="Your Three Observations" steps={[
            { icon: "😕", label: "One Confusion" },
            { icon: "✅", label: "One Success" },
            { icon: "🔧", label: "One Fix" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Discord share */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="SHARE" title="Post Your Field Notes" bullets={[
            { icon: "📝", text: "Write down what confused them, what worked, and what you'll fix" },
            { icon: "💬", text: "Share it in Discord — real user test notes are gold" },
            { icon: "🤝", text: "These field notes are some of the most useful things you'll read" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 14. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="See You on Day 21" subtitle="Tomorrow: prep for launch week" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
