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
import { DAY28_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { ProgressJourneyVisual } from "./visuals/ProgressJourneyVisual";

export const Day28YouBuiltSomethingReal: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="You Built Something Real" subtitle="Day 28 — Final Reflection + Celebration" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Your journey + ProgressJourneyVisual */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <SplitVisualScene title="Your Journey" bullets={[
            { icon: "📅", text: "Two weeks ago: didn't know what an AI agent was" },
            { icon: "🔧", text: "Built it, named it, broke it, fixed it" },
            { icon: "📝", text: "Wrote its instructions, stress-tested its edges" },
            { icon: "🚀", text: "Shipped it and used it on actual work from your actual life" },
          ]} visual={<ProgressJourneyVisual delay={30} />} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. "Not a bootcamp project — a tool you built" */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="TAKE THIS IN" title="Not a Bootcamp Project" bullets={[
            { icon: "📦", text: "Yesterday you used it again" },
            { icon: "💡", text: "Not because it was an assignment — because it was useful" },
            { icon: "🔑", text: "That's not a bootcamp project. That's a tool you built." },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Ran the whole loop — comparison */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <ComparisonScene title="You Ran the Whole Loop" leftCard={{
            title: "Most People",
            items: [
              { icon: "👀", text: "Watch demos" },
              { icon: "📱", text: "Read threads" },
              { icon: "💭", text: "Talk about building agents" },
            ],
          }} rightCard={{
            title: "You",
            items: [
              { icon: "🔧", text: "Built the agent" },
              { icon: "🧪", text: "Tested and iterated" },
              { icon: "🚀", text: "Shipped and used it" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Celebrate — what did your agent do this week? */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="CELEBRATE" title="What Did Your Agent Do This Week?" bullets={[
            { icon: "🎯", text: "Be specific — not \"it helped with stuff\"" },
            { icon: "📋", text: "What task did it handle? What output did you actually use?" },
            { icon: "⏱️", text: "How much time or effort did it save you?" },
            { icon: "✍️", text: "Answer this before you do anything else" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Celebrate — hardest moment + what you'd tell Day 1 you */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="REFLECT" title="The Stuck Moments Are Worth Naming" bullets={[
            { icon: "💪", text: "What was the hardest moment of the past two weeks?" },
            { icon: "🧗", text: "How did you get through it?" },
            { icon: "💡", text: "What would you tell Day 1 you? One sentence." },
            { icon: "🔑", text: "The thing you wish you'd known from the start" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. v2 Roadmap — what would v2 do? */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="V2 ROADMAP" title="What Would Agent v2 Do?" bullets={[
            { icon: "🆕", text: "What would v2 do that v1 can't? Pick one thing." },
            { icon: "📥", text: "A second input source?" },
            { icon: "📤", text: "A new output format?" },
            { icon: "⏰", text: "A trigger that runs it automatically?" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. v2 Roadmap — upgrade options */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="V2 ROADMAP" title="More Upgrade Ideas" bullets={[
            { icon: "🧠", text: "Memory that accumulates across sessions" },
            { icon: "❤️", text: "What would make this agent feel essential?" },
            { icon: "🤔", text: "Something you'd actively miss if it stopped working" },
            { icon: "📝", text: "Write a short roadmap — one paragraph, a direction not a plan" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. The essential test — would you miss it? */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="THE ESSENTIAL TEST" title="Would You Miss It?" bullets={[
            { icon: "❓", text: "If your agent disappeared tomorrow..." },
            { icon: "✅", text: "\"Yes\" means you built something real" },
            { icon: "🔄", text: "\"Not yet\" means iterate — the skill transfers" },
            { icon: "🌱", text: "Either way, you know how to build agents now" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. A second agent — you know how now */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="WHAT'S POSSIBLE" title="A Second Agent?" bullets={[
            { icon: "🤖", text: "Is there another agent you want to build?" },
            { icon: "🧰", text: "You know how now — same loop, different job" },
            { icon: "🔁", text: "Define the job, write instructions, test, ship" },
            { icon: "🚀", text: "The foundational skill transfers to any platform" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Bigger picture — where to go from here */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="BIGGER PICTURE" title="Where to Go From Here" bullets={[
            { icon: "🔗", text: "Want to connect more apps? Explore n8n or Make" },
            { icon: "💬", text: "Want a customer-facing chatbot? Look at Voiceflow or Botpress" },
            { icon: "🗺️", text: "You don't have to go any of these directions" },
            { icon: "💡", text: "But you can — that's what changed" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Bigger picture — Claude API + Tracks B and C */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="BIGGER PICTURE" title="Go Deeper When You're Ready" bullets={[
            { icon: "🔌", text: "Want to go deeper with Claude? Explore the Claude API" },
            { icon: "🏗️", text: "Want to build a full product? That's Track B and Track C" },
            { icon: "📚", text: "They'll be here when you're ready" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. "Now you understand what you're choosing between" */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TitleScene title="The Difference" subtitle="Two weeks ago vs today: now you understand what you're choosing between." bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. What you built diagram */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <DiagramScene title="What You Built in Two Weeks" steps={[
            { icon: "💡", label: "Concept" },
            { icon: "🔧", label: "Built" },
            { icon: "🧪", label: "Tested" },
            { icon: "🔄", label: "Iterated" },
            { icon: "🚀", label: "Shipped" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. Deliverable — v2 roadmap + My Agent Story */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Your Final Share" bullets={[
            { icon: "📋", text: "V2 Roadmap: one paragraph — what's next and why" },
            { icon: "📖", text: "My Agent Story: 3-5 sentences on what you built and learned" },
            { icon: "💬", text: "Post your story in the community channel" },
            { icon: "🤝", text: "Read others' stories. Comment on two. React to more." },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 16. "That's a tool you built" */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TitleScene title="That's Not a Bootcamp Project" subtitle="That's a tool you built." bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 17. Final closing — share your story */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TitleScene title="You Built Something Real" subtitle="Share your story. Celebrate out loud." showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
