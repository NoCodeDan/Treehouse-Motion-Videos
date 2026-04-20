import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { TitleScene } from "../templates/TitleScene";
import { TextAndBulletsScene } from "../templates/TextAndBulletsScene";
import { ComparisonScene } from "../templates/ComparisonScene";
import { SplitVisualScene } from "../templates/SplitVisualScene";
import {
  TREEHOUSE_GREEN,
  ACCENT_PURPLE,
  ACCENT_BLUE,
  TINT_GREEN,
  TINT_BLUE,
  TINT_PURPLE,
} from "../lib/brand";
import { DAY08_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { MVPFunnel } from "./visuals/MVPFunnel";
import { FeatureCards } from "./visuals/FeatureCards";

export const Day08RefiningMVP: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 – Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene
            title="Refining Your Idea Into an MVP"
            subtitle="Less is more when you're just starting"
            showLogo
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 2 – Hook */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TitleScene
            title="Take the app you defined last week. Now cut it in half."
            subtitle="That sounds like giving up. It isn't. The version you walked in with is probably too large to ship."
            showLogo={false}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 3 – Your Scope Is Still Too Broad */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene
            title="Your Scope Is Still Too Broad"
            subtitle="If your app idea feels overwhelming to think about building — that's useful information."
            bullets={[
              { icon: "🎯", text: "Week 2: turning your idea into a blueprint" },
              { icon: "✂️", text: "First: get honest about what actually belongs in it" },
              { icon: "📋", text: "By the end: what MVP means + your top-three feature list" },
              { icon: "💡", text: "Narrowing your scope isn't limiting your vision — it's what makes it possible" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 4 – What MVP Actually Means */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene
            title="What MVP Actually Means"
            subtitle="Minimum Viable Product. People get this wrong all the time."
            bullets={[
              { icon: "❌", text: "Doesn't mean broken or half-finished" },
              { icon: "❌", text: "Doesn't mean something you're embarrassed to show" },
              { icon: "✅", text: "Means: the smallest version that actually solves the problem" },
              { icon: "🔑", text: "The key word is viable — it has to work. It has to do the thing." },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 5 – Why MVP Matters for AI Building */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene
            title="Why MVP Matters for AI Building"
            subtitle="Two reasons this is critical when building with AI."
            bullets={[
              { icon: "🤖", text: "AI builds better when the problem is clear" },
              { icon: "📋", text: "Vague idea with 10 features → vague, sprawling result" },
              { icon: "🎯", text: "Tight problem with 3 features → something that works" },
              { icon: "⚡", text: "Smaller means you can actually finish" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 6 – Everything vs. MVP */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <ComparisonScene
            title="Everything vs. MVP"
            leftCard={{
              title: "Everything App",
              accentColor: "#e74c3c",
              items: [
                { icon: "📋", text: "10+ features planned" },
                { icon: "⏰", text: "Months to build" },
                { icon: "😵", text: "More things that can break" },
                { icon: "❌", text: "Never ships" },
              ],
            }}
            rightCard={{
              title: "MVP",
              accentColor: TREEHOUSE_GREEN,
              items: [
                { icon: "3️⃣", text: "3 core features" },
                { icon: "⚡", text: "Weeks to build" },
                { icon: "✅", text: "Focused and working" },
                { icon: "🚀", text: "Ships and gets feedback" },
              ],
            }}
            bgTint={TINT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 7 – Checkpoint */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TitleScene
            title="Small. Focused. Viable."
            subtitle="Now let's figure out what your actual three features are."
            showLogo={false}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 8 – How to Find Your Three Features */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <SplitVisualScene
            title="How to Find Your Three Features"
            subtitle="Go back to your Week 1 idea — your user and your problem."
            bullets={[
              { icon: "📝", text: "'What are the top 3 features that solve this problem — and only this problem?'" },
              { icon: "❌", text: "'Don't add anything optional'" },
              { icon: "🤔", text: "For each: does my user actually need this?" },
              { icon: "🎯", text: "Need = core. Cool = version 2." },
            ]}
            visual={<FeatureCards delay={30} />}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 9 – The Three-Feature Constraint */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene
            title="The Three-Feature Constraint"
            subtitle="Keep going until you have exactly three features. Not four. Not two-and-a-half."
            bullets={[
              { icon: "🎯", text: "The constraint is a tool — it forces clarity" },
              { icon: "⚡", text: "About what your app actually is" },
              { icon: "🚫", text: "'It would be cool if' = version 2" },
              { icon: "✅", text: "'My user needs this to get value' = core" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 10 – Check Your Problem Statement */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <SplitVisualScene
            title="Check Your Problem Statement"
            subtitle="Go back to your problem statement from Week 1. Read it fresh."
            bullets={[
              { icon: "❌", text: "'People struggle with productivity' — too vague" },
              { icon: "✅", text: "'Freelancers lose track of client deadlines because they're managing everything in their inbox'" },
              { icon: "🎯", text: "That's something you can build from" },
              { icon: "🤖", text: "'Is my problem statement specific enough for a focused MVP?'" },
            ]}
            visual={<MVPFunnel delay={30} />}
            visualSide="left"
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 11 – Sharpen It Now */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene
            title="Sharpen It Now"
            subtitle="If your problem statement needs to get sharper, now is the time."
            bullets={[
              { icon: "⏰", text: "Before the spec. Before building anything." },
              { icon: "🤖", text: "Ask AI: 'What's vague or missing?'" },
              { icon: "🔍", text: "Let AI surface the gaps you can't see" },
              { icon: "✅", text: "Specific enough → ready for your spec" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 12 – MVP Mindset Achieved */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene
            title="MVP Mindset Achieved"
            subtitle="Small, focused, specific. Three features. One clear problem."
            bullets={[
              { icon: "🔜", text: "Tomorrow: stress-test those features with AI" },
              { icon: "🔨", text: "Find the gaps before they become problems" },
              { icon: "💪", text: "If your features survive, you're ready for your spec" },
              { icon: "⚡", text: "That's when things start to feel real" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T_FINAL })}
        />

        {/* Scene 13 – Closing */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TitleScene
            title="See You on Day 9"
            subtitle="Up next: Stress-Testing Your Idea"
            showLogo
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
