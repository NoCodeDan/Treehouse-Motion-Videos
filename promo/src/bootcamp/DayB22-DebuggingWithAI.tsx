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
import { DAYB22_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { BugReportVisual } from "./visuals/BugReportVisual";

export const DayB22DebuggingWithAI: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Debugging with AI" subtitle="Day 22 — Bugs are information, not failure" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — "Something broke. You don't know why." */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="HOOK" title="Something Broke. You Don't Know Why." bullets={[
            { icon: "😶", text: "You're staring at the screen and nothing makes sense" },
            { icon: "🚫", text: "That feeling is not a sign you're doing it wrong" },
            { icon: "🔨", text: "That's what building feels like" },
            { icon: "💡", text: "Today you learn how to move through it" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Callout — "If you've hit a bug and felt like stopping" */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="CALLOUT" title="This Video Is For You" bullets={[
            { icon: "🛑", text: "If you've hit a bug this week and felt like stopping" },
            { icon: "🔄", text: "Bugs aren't going to disappear" },
            { icon: "📈", text: "But you're about to get a lot better at handling them" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Credibility — bugs are information, not failure */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <ComparisonScene title="Bugs Are Not Failure" leftCard={{
            title: "Builder Who Stalls", items: [
              { icon: "🚫", text: "Sees a bug as a dead end" },
              { icon: "😰", text: "Tries to avoid all errors" },
              { icon: "😞", text: "Feels defeated when things break" },
            ],
          }} rightCard={{
            title: "Builder Who Ships", items: [
              { icon: "💡", text: "Sees a bug as information" },
              { icon: "🔧", text: "Knows how to respond when things break" },
              { icon: "✅", text: "Treats errors as part of the process" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Compass — what you'll learn today */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="COMPASS" title="By the End of This Video" bullets={[
            { icon: "📝", text: "Describe a bug so AI can help you fix it" },
            { icon: "👀", text: "Read AI-generated code without panic" },
            { icon: "🧠", text: "Think about errors as part of the process" },
            { icon: "🔧", text: "Core learning: debugging is a skill — AI makes it accessible" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Bugs are information — every error tells you something */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="KEY IDEA" title="Every Error Is Telling You Something" bullets={[
            { icon: "📢", text: "The app didn't break randomly — something specific happened" },
            { icon: "🔍", text: "The system responded in a specific way" },
            { icon: "🎯", text: "Your job isn't to avoid errors — it's to read them" },
            { icon: "📋", text: "Write down what happened before you change anything" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Stop before changing code */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="STEP 1" title="Stop Before Changing Code" bullets={[
            { icon: "🛑", text: "The first thing is NOT to start changing code" },
            { icon: "🤔", text: "Ask: what exactly happened?" },
            { icon: "⏪", text: "What were you doing when it broke?" },
            { icon: "📋", text: "That description becomes your bug report for AI" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Three-part bug description + BugReportVisual */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <SplitVisualScene title="The Three-Part Bug Description" bullets={[
            { icon: "1️⃣", text: "What you were doing" },
            { icon: "2️⃣", text: "What happened" },
            { icon: "3️⃣", text: "What you expected" },
            { icon: "💬", text: "Three sentences — that's all AI needs" },
          ]} visual={<BugReportVisual delay={30} />} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Bug description examples */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <ComparisonScene title="Describing Bugs: Wrong vs Right" leftCard={{
            title: "Vague (Unhelpful)", items: [
              { icon: "❌", text: "\"It's broken\"" },
              { icon: "❌", text: "\"It doesn't work\"" },
              { icon: "❌", text: "\"Something went wrong\"" },
            ],
          }} rightCard={{
            title: "Structured (Effective)", items: [
              { icon: "✅", text: "\"I submitted the form with an empty name field\"" },
              { icon: "✅", text: "\"The page went blank and nothing was saved\"" },
              { icon: "✅", text: "\"I expected an error saying the field was required\"" },
            ],
          }} bgTint={TINT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. AI response — explanation matters */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="AI FIX" title="The AI Explained What It Did — And Why" bullets={[
            { icon: "🤖", text: "AI doesn't need you to understand the fix before applying it" },
            { icon: "📖", text: "It explains what it's doing and why" },
            { icon: "🧠", text: "That explanation builds pattern recognition over time" },
            { icon: "🔁", text: "Next time you hit a similar issue, it'll feel familiar" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Reading code without panic */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="HONEST TRUTH" title="Reading Code Without Panic" bullets={[
            { icon: "😅", text: "AI will give you code you don't fully understand — that's fine" },
            { icon: "🔍", text: "You don't need to understand every line" },
            { icon: "🎯", text: "Understand what it takes in and what it produces" },
            { icon: "✅", text: "Can you verify it does what you intended?" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Two things that help — ask AI + test immediately */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="TWO TIPS" title="Two Things That Help" bullets={[
            { icon: "1️⃣", text: "Ask AI to explain what it just gave you in plain language" },
            { icon: "2️⃣", text: "Test immediately — run the change and see if it works" },
            { icon: "✅", text: "If it works, move on" },
            { icon: "🔄", text: "If it doesn't, you now have new information" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Mindset — no badge for solving it alone */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="MINDSET" title="There's No Badge for Solving It Alone" bullets={[
            { icon: "⏰", text: "Don't sit with broken code for an hour without asking for help" },
            { icon: "🏆", text: "There's no prize for struggling in silence" },
            { icon: "🤖", text: "AI is your debugging partner — use it" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. The full framework recap */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <DiagramScene title="The Debug Framework" steps={[
            { icon: "📝", label: "Describe clearly" },
            { icon: "📋", label: "Give context" },
            { icon: "🧪", label: "Test the fix" },
            { icon: "❓", label: "Ask questions" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. Deliverable — fix one real bug */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TextAndBulletsScene badge="EXERCISE" title="Fix One Real Bug Today" bullets={[
            { icon: "🐛", text: "Pick one bug from your Day 18 log — or one from this week" },
            { icon: "📝", text: "Write the three-part description" },
            { icon: "🤖", text: "Work through it with AI" },
            { icon: "💬", text: "Share what it was and how you fixed it in Discord" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 16. Bugs are checkpoints — outro */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TitleScene title="Bugs Aren't Obstacles" subtitle="They're checkpoints — every one you get through makes the next one faster" bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 17. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TitleScene title="See You on Day 23" subtitle="Tomorrow: implementing one improvement solo" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
