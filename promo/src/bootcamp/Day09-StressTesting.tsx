import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { TitleScene } from "../templates/TitleScene";
import { TextAndBulletsScene } from "../templates/TextAndBulletsScene";
import { SplitVisualScene } from "../templates/SplitVisualScene";
import {
  ACCENT_PURPLE,
  ACCENT_BLUE,
  TINT_GREEN,
  TINT_BLUE,
  TINT_PURPLE,
} from "../lib/brand";
import { DAY09_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { StressTestVisual } from "./visuals/StressTestVisual";

export const Day09StressTesting: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 – Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene
            title="Stress-Testing Your Idea"
            subtitle="Let AI challenge your assumptions before you build"
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
            title="Your three features look great. Now let's find out if they survive contact with reality."
            subtitle="That's called stress-testing, and it's one of the most productive things you can do right now."
            showLogo={false}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 3 – Find the Weak Spots First */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene
            title="Find the Weak Spots First"
            subtitle="The goal isn't to break your idea. It's to find the weak spots before they become problems."
            bullets={[
              {
                icon: "🎯",
                text: "The questions AI asks today are the same ones real users would ask later",
              },
              {
                icon: "⏰",
                text: "Better to answer them now than in Week 3",
              },
              {
                icon: "💪",
                text: "Two exercises. Use your app idea and your three features for both.",
              },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 4 – Exercise 1: Challenge Your Features */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <SplitVisualScene
            title="Exercise 1: Challenge Your Features"
            bullets={[
              {
                icon: "📝",
                text: "Share your idea and features with AI",
              },
              {
                icon: "🔍",
                text: "'What parts are unclear? What assumptions am I making?'",
              },
              {
                icon: "⚠️",
                text: "'Are any of these bigger or more complex than they sound?'",
              },
              {
                icon: "🎯",
                text: "'Suggest narrower or better MVP versions where you see a problem'",
              },
            ]}
            visual={<StressTestVisual delay={30} />}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 5 – Don't Defend — Listen */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene
            title="Don't Defend — Listen"
            subtitle="Don't defend your choices. Listen."
            bullets={[
              { icon: "📝", text: "Write down anything that surprises you" },
              { icon: "❓", text: "Note anything you can't answer" },
              { icon: "🕳️", text: "Those are your gaps" },
              { icon: "🎯", text: "Gaps found now cost nothing" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 6 – Exercise 2: The Key Prompt Pattern */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene
            title="Exercise 2: The Key Prompt Pattern"
            subtitle="For each feature individually, ask AI:"
            bullets={[
              {
                icon: "🤖",
                text: "'What questions would you need answered before you could help me build [feature]?'",
              },
              {
                icon: "💡",
                text: "Every question AI returns is a spec gap",
              },
              {
                icon: "📝",
                text: "Answer what you can. Note what you still need to figure out.",
              },
              {
                icon: "📋",
                text: "When spec day comes, you'll already know what needs to go in it",
              },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 7 – Soft Spots Caught Now Cost Nothing */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TitleScene
            title="Soft Spots Caught Now Cost Nothing."
            subtitle="Soft spots found in Week 3 cost everything."
            showLogo={false}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 8 – Features, Sharper */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene
            title="Features, Sharper"
            subtitle="By the end of today, your features should be sharper."
            bullets={[
              {
                icon: "✂️",
                text: "Some might be narrower. A few might be reworded.",
              },
              { icon: "✅", text: "That's progress, not retreat" },
              {
                icon: "🧠",
                text: "Tomorrow: how the technical pieces of an app fit together",
              },
              {
                icon: "🗣️",
                text: "Not to code them — to talk about them clearly",
              },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T_FINAL })}
        />

        {/* Scene 9 – Closing */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TitleScene
            title="See You on Day 10"
            subtitle="Up next: Basic Coding Knowledge for AI Builders"
            showLogo
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
