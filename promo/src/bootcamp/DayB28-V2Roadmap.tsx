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
import { DAYB28_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { BootcampJourneyVisual } from "./visuals/BootcampJourneyVisual";

export const DayB28V2Roadmap: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="v2 Roadmap" subtitle="Day 28 — v1 is done. v2 starts now." showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — "Twenty-eight days ago, you had no app" */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="FRAMING" title="Twenty-Eight Days Ago, You Had No App" bullets={[
            { icon: "📅", text: "Today you have a deployed web app with a database, real integrations, and a live URL" },
            { icon: "🛤️", text: "You took an idea through a spec, through a scaffold, through a bug log, through a friend test" },
            { icon: "✅", text: "Out the other side as something real — that path is not an accident" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Your 28-Day Journey + visual */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <SplitVisualScene title="That's the Process" bullets={[
            { icon: "💡", text: "Idea became a spec" },
            { icon: "🏗️", text: "Spec became a scaffold" },
            { icon: "🧪", text: "Scaffold became a tested product" },
            { icon: "🚀", text: "Product shipped to a live URL" },
          ]} visual={<BootcampJourneyVisual delay={30} />} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. This is the last day — look forward */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="LAST DAY" title="v1 Is Done. v2 Starts Now." bullets={[
            { icon: "📖", text: "This is the last day of the bootcamp — use it to look forward" },
            { icon: "🧠", text: "v2 starts in your head, on paper, on your terms" },
            { icon: "🔥", text: "Builders who finish one thing and immediately think about what's next are the ones who keep building" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Step 1 — List your next feature ideas */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="STEP 1" title="List 3-5 Next Feature Ideas" bullets={[
            { icon: "📝", text: "You know your app better than anyone — what would make it genuinely more useful?" },
            { icon: "🗣️", text: "What did users ask about that you couldn't do yet?" },
            { icon: "🔍", text: "What did you park in Week 3 that still feels worth pursuing?" },
            { icon: "💡", text: "Don't filter for feasibility yet — just get them down" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 2 — Prioritize one */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 2" title="Prioritize One Feature" bullets={[
            { icon: "🎯", text: "If you came back to this app next week, what would you build first?" },
            { icon: "⭕", text: "Circle it — that's your v2 starting point" },
            { icon: "📏", text: "Can you build it in a weekend? That's the right size." },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 3 — Think about the next track */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="STEP 3" title="Think About the Next Track" bullets={[
            { icon: "🤖", text: "Track A: AI Agents — build tools that think and act" },
            { icon: "📊", text: "Data visualization track — tell stories with data" },
            { icon: "🔧", text: "Each track adds a different kind of capability to your builder toolkit" },
            { icon: "🧭", text: "What would make your builder toolkit more complete?" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Step 4 — Would YOU use it weekly? */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="STEP 4" title="What Would Make This App Weekly-Use Worthy?" bullets={[
            { icon: "🔄", text: "Not a user. You. Would you use this app every week?" },
            { icon: "🤔", text: "If you wouldn't use it regularly in its current state, what's missing?" },
            { icon: "🎯", text: "That answer is usually the most important feature on your v2 list" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Reflection prompts — capture your ideas */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="REFLECT" title="Capture Your Ideas Now" bullets={[
            { icon: "✏️", text: "Write down your feature ideas before they fade — the ideas right after shipping are the clearest" },
            { icon: "🗺️", text: "What track would you replay or explore next? What capability do you want to add?" },
            { icon: "🏠", text: "The apps people keep using are the ones that earn a regular place in their lives" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Deliverable — what to share */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Share in Discord" bullets={[
            { icon: "📋", text: "Your v2 feature list — the 3-5 ideas you brainstormed" },
            { icon: "⭕", text: "Your circled priority — the one you'd build first" },
            { icon: "💬", text: "Your answer to: what would make this useful weekly?" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Comparison — v1 vs v2 mindset */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <ComparisonScene title="v1 vs v2 Mindset" leftCard={{
            title: "v1: Ship It", items: [
              { icon: "🔧", text: "Get it working" },
              { icon: "🐛", text: "Fix the bugs" },
              { icon: "🌐", text: "Deploy to a URL" },
              { icon: "👤", text: "Get first users" },
            ],
          }} rightCard={{
            title: "v2: Make It Matter", items: [
              { icon: "🎯", text: "Make it genuinely useful" },
              { icon: "🗣️", text: "Add what users asked for" },
              { icon: "⭕", text: "Build the feature you circled" },
              { icon: "🔄", text: "Earn a weekly habit" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. What you know how to do — diagram */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <DiagramScene title="What You Know How to Do" steps={[
            { icon: "💡", label: "Ideate" },
            { icon: "📋", label: "Spec" },
            { icon: "🏗️", label: "Build" },
            { icon: "🧪", label: "Test" },
            { icon: "🚀", label: "Ship" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. A note — what you've gained */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="A NOTE" title="A New Way of Working" bullets={[
            { icon: "🧠", text: "You know how to take an idea through to a working product" },
            { icon: "🤖", text: "You know how to use AI as a builder, not just a search engine" },
            { icon: "🔌", text: "You know what packages, APIs, and databases do — and how to connect them" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. That's yours now */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="That's Yours Now" subtitle="No one can take it back." bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. What you build next */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TitleScene title="What You Build Next Is Up to You" subtitle="You shipped a modern web app in four weeks. That is the work. Carry it forward." bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 16. Final closing */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TitleScene title="You Built Something Real" subtitle="Share your story. Keep building." showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
