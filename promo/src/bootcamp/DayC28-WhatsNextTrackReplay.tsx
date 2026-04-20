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
import { DAYC28_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { DataJourneyVisual } from "./visuals/DataJourneyVisual";

export const DayC28WhatsNextTrackReplay: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title={'What\'s Next + Track Replay'} subtitle="Track C — Build Your Own Data Dashboard" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — "Two weeks ago, you weren't a data person" */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="FRAMING" title="Two Weeks Ago, You Weren't a Data Person" bullets={[
            { icon: "📅", text: "You didn't learn statistics. You didn't memorize chart types." },
            { icon: "❓", text: "You asked a real question, collected real data, and built something that answered it" },
            { icon: "💡", text: "You made at least one decision differently because of what you saw" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. What data literacy actually is */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene title="That's What Data Literacy Actually Is" bullets={[
            { icon: "📊", text: "Not credentials or certifications — it's the ability to turn questions into answers with data" },
            { icon: "🧠", text: "You used AI as your analysis partner, not a replacement for thinking" },
            { icon: "🚀", text: "You shipped a dashboard others can see and use" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Step 1 — Look at what you built + DataJourneyVisual */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <SplitVisualScene badge="STEP 1" title="Look at What You Built" bullets={[
            { icon: "❓", text: "Your question — the thing you wanted to know" },
            { icon: "📊", text: "Your chart — the visualization that answered it" },
            { icon: "💬", text: "Your insights — what the data actually told you" },
            { icon: "🎯", text: "Your decision sentence — what you did differently" },
          ]} visual={<DataJourneyVisual delay={30} />} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. You made that from nothing */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene title="You Made That from Nothing in Fourteen Days" bullets={[
            { icon: "📦", text: "Data source identified and connected" },
            { icon: "🧹", text: "Cleaning and transformation pipeline built" },
            { icon: "📈", text: "Charts that answer your questions" },
            { icon: "🗣️", text: "Insights you can communicate to anyone" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 2 — Reflect Forward: Dashboard v2 */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 2" title="What Would Dashboard v2 Include?" bullets={[
            { icon: "📈", text: "What's the upgrade you didn't get to? The data you wish you had?" },
            { icon: "🔍", text: "What question got sharper as you built? That's your roadmap." },
            { icon: "🎯", text: "This is your roadmap for the next iteration — write it down" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 2 — What other part of your life could you track? */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="STEP 2" title="What Else Could You Track?" bullets={[
            { icon: "🌐", text: "Once you've built one dashboard, you start seeing data everywhere" },
            { icon: "💰", text: "Time. Revenue. Relationships. Health. Learning." },
            { icon: "🎯", text: "Pick the next area that matters most to you" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Step 2 — Which track would you run next? */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="STEP 2" title="Which Track Would You Run Next?" bullets={[
            { icon: "🤖", text: "Track A builds an AI agent — tools that think and act" },
            { icon: "🌐", text: "Track B builds a web app — a deployed product with real users" },
            { icon: "📊", text: "Track C is where you are — replay it with a new question" },
            { icon: "🧭", text: "Or take on something you haven't built yet" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Comparison: Track A vs B vs C */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <ComparisonScene title="Replay or Explore?" leftCard={{
            title: "Replay Track C", items: [
              { icon: "🔄", text: "New question, new dataset" },
              { icon: "📈", text: "Deeper techniques" },
              { icon: "✍️", text: "Sharper storytelling" },
              { icon: "🧱", text: "Build on what you know" },
            ],
          }} rightCard={{
            title: "Try a New Track", items: [
              { icon: "🤖", text: "Track A: AI agents" },
              { icon: "🌐", text: "Track B: Web apps" },
              { icon: "🛠️", text: "Different builder skills" },
              { icon: "🧰", text: "Expand your toolkit" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Step 3 — One sentence capture */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="STEP 3" title="Write One Sentence That Captures the Whole Thing" bullets={[
            { icon: "📝", text: "Not a summary. A statement. Something you know now that you didn't know on Day 15." },
            { icon: "💡", text: "Not what you built — what you learned about how you think" },
            { icon: "🧠", text: "Save it. You will come back to it." },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Reflection prompts: What was harder? */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="REFLECT" title="What Was Harder Than You Expected?" bullets={[
            { icon: "🔥", text: "Be honest — the gaps are where the learning lives" },
            { icon: "🧩", text: "Was it the data cleaning? The visualization choices? The storytelling?" },
            { icon: "📖", text: "Name the hard parts — that's what you actually learned" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Reflection prompts: What was more useful? */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="REFLECT" title="What Turned Out More Useful Than You Thought?" bullets={[
            { icon: "⚡", text: "Sometimes the exercise you almost skipped is the one that changed how you think" },
            { icon: "🔄", text: "Which day or step surprised you with how much it mattered?" },
            { icon: "🏆", text: "That's a clue about what to double down on next" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. What you'll do differently — next two weeks */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="REFLECT" title="What Will You Do Differently in the Next Two Weeks?" bullets={[
            { icon: "🎯", text: "Name it specifically — that's your next step" },
            { icon: "📊", text: "Will you track something new? Ask a harder question? Share your work more?" },
            { icon: "🚀", text: "One concrete action turns reflection into momentum" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. Deliverable + Discord share */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Share in Discord" bullets={[
            { icon: "📋", text: "No required deliverable today — you've already shipped" },
            { icon: "💬", text: "But if you want to close the loop: post what v2 includes, what you'd track next, which track you'd run" },
            { icon: "🤝", text: "Tell the community what you're taking with you — the system doesn't disappear when the bootcamp ends" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. What you take with you — diagram */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <DiagramScene title="A Repeatable System" steps={[
            { icon: "❓", label: "Ask" },
            { icon: "📦", label: "Collect" },
            { icon: "🧹", label: "Clean" },
            { icon: "📊", label: "Visualize" },
            { icon: "💡", label: "Decide" },
          ]} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 16. That's yours now */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TitleScene title="That's Yours Now" subtitle="A repeatable system for learning, building, and shipping with AI. No one can take it back." bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 17. Final closing — Track C Complete */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TitleScene title="Track C: Complete" subtitle="Days 15–28 — Build Your Own Data Dashboard. Keep asking questions. Keep visualizing answers." showLogo bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
