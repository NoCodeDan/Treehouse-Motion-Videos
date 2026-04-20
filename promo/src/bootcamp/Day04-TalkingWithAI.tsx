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
import { DAY04_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { YesMachineVisual } from "./visuals/YesMachineVisual";

export const Day04TalkingWithAI: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 – Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene
            title="Talking With AI"
            subtitle="Learn to push back and get real answers"
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
            title="AI agrees with everything you say. That's not a feature. That's a trap."
            subtitle="Today you're going to catch it in the act — and then learn how to flip it from yes-machine to actual thinking partner."
            showLogo={false}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 3 – AI Is Trained to Be Helpful */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene
            title="AI Is Trained to Be Helpful"
            subtitle="'Helpful' often means agreeable. It will validate your idea, praise your direction, and tell you you're on the right track — even when you're not."
            bullets={[
              { icon: "👍", text: "Too smooth, too agreeable, too good to be true" },
              { icon: "⚠️", text: "That's the default — not your imagination" },
              { icon: "🔄", text: "Today you learn to override it" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 4 – Three Exercises */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene
            title="Three Exercises"
            subtitle="Each one builds on the last."
            bullets={[
              { icon: "1️⃣", text: "Catch AI being agreeable" },
              { icon: "2️⃣", text: "Let AI interview you" },
              { icon: "3️⃣", text: "Let AI improve your prompt" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 5 – Exercise 1: Catch AI Being Agreeable */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <SplitVisualScene
            title="Exercise 1: Catch AI Being Agreeable"
            bullets={[
              { icon: "🧪", text: "Take any idea — ask AI: 'Is this a good idea?'" },
              { icon: "👀", text: "Watch how it responds" },
              { icon: "💪", text: "Push back: 'What assumptions are you making? What could be wrong?'" },
              { icon: "🔄", text: "Notice the tone shift when you demand critical thinking" },
            ]}
            visual={<YesMachineVisual delay={30} />}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 6 – Exercise 2: Let AI Interview You */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene
            title="Exercise 2: Let AI Interview You"
            subtitle="Share your direction and use this prompt exactly:"
            bullets={[
              { icon: "🎤", text: "'Ask me questions to better understand what I'm trying to build.'" },
              { icon: "❓", text: "Answer the questions it asks" },
              { icon: "💡", text: "Notice how much clearer your idea becomes just from articulating it" },
              { icon: "🎯", text: "That clarity is yours to keep" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 7 – Exercise 3: Let AI Improve Your Prompt */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene
            title="Exercise 3: Let AI Improve Your Prompt"
            bullets={[
              { icon: "📝", text: "Write a rough prompt for something you want help with" },
              { icon: "🤖", text: "Ask: 'How could I improve this prompt to get a better result?'" },
              { icon: "🔄", text: "Apply the feedback. Compare the two outputs." },
              { icon: "⬆️", text: "Rough prompt → feedback → refined prompt → better output" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 8 – You Don't Need Perfect Prompts */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TitleScene
            title="You Don't Need Perfect Prompts."
            subtitle="You need the habit of improving them. That loop — rough prompt, feedback, refined prompt, better output — is how productive AI conversations actually work."
            showLogo={false}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 9 – From Practice to Real Work */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene
            title="From Practice to Real Work"
            subtitle="If these exercises feel messy or inconclusive, that's expected."
            bullets={[
              { icon: "🧠", text: "You're learning to read AI, not just generate text" },
              { icon: "🔄", text: "That's a different skill — it takes practice" },
              { icon: "🔜", text: "Tomorrow: the focus shifts to picking your idea" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T_FINAL })}
        />

        {/* Scene 10 – Closing */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TitleScene
            title="See You on Day 5"
            subtitle="Up next: Deep Research — Picking Your Idea"
            showLogo
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
