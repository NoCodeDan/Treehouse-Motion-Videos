import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { TitleScene } from "../templates/TitleScene";
import { TextAndBulletsScene } from "../templates/TextAndBulletsScene";
import { SplitVisualScene } from "../templates/SplitVisualScene";
import { DiagramScene } from "../templates/DiagramScene";
import {
  ACCENT_PURPLE,
  ACCENT_BLUE,
  TINT_GREEN,
  TINT_BLUE,
  TINT_PURPLE,
} from "../lib/brand";
import { DAY05V2_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { ValidationFlow } from "./visuals/ValidationFlow";

export const Day05V2ValidatingIdea: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 – Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene
            title="Validating Your Idea"
            subtitle="Make sure it solves a real problem for real people"
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
            title="Picking an idea and knowing it's worth building are two different things."
            subtitle="Most people skip the difference. They get excited, start building, and weeks later discover the problem wasn't that painful to anyone else."
            showLogo={false}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 3 – Validation in One Question */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene
            title="Validation in One Question"
            subtitle="Does this solve a real problem, for a specific person, in a way that's actually useful?"
            bullets={[
              { icon: "🎯", text: "Validation gets overcomplicated. It doesn't need to be." },
              { icon: "🤝", text: "You and AI will work through four questions together" },
              { icon: "✅", text: "By the end: know whether your idea is worth building" },
              { icon: "🔍", text: "And what it needs to look like" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 4 – Four Questions to Answer */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <SplitVisualScene
            title="Four Questions to Answer"
            subtitle="Don't rush these. Each builds on the one before."
            bullets={[
              { icon: "1️⃣", text: "Who is this for?" },
              { icon: "2️⃣", text: "What problem do they have?" },
              { icon: "3️⃣", text: "Why does the problem matter?" },
              { icon: "4️⃣", text: "What would a simple solution look like?" },
            ]}
            visual={<ValidationFlow delay={30} />}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 5 – Question 1: Who Is This For? */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene
            title="Question 1: Who Is This For?"
            badge="Q1"
            subtitle="Not 'busy people.' Not 'small business owners.' Go narrower."
            bullets={[
              { icon: "🎯", text: "What kind of person? At what stage? What specific situation?" },
              { icon: "🤖", text: "'Help me get specific about my target user for [idea]'" },
              { icon: "❓", text: "'What do I actually know about them? What assumptions am I making?'" },
              { icon: "💡", text: "Vague user → vague features → vague app" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 6 – Question 2: What Problem Do They Have? */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene
            title="Question 2: What Problem Do They Have?"
            badge="Q2"
            subtitle="Name the pain. Not the feature — the problem."
            bullets={[
              { icon: "🔍", text: "Features are solutions. You haven't earned the solution yet." },
              { icon: "🤖", text: "'What is the specific, painful problem my target user faces?'" },
              { icon: "📝", text: "'Help me describe the problem without jumping to the solution'" },
              { icon: "⚠️", text: "If you can't describe it clearly, you don't understand it enough" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 7 – Question 3: Why Does the Problem Matter? */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene
            title="Question 3: Why Does the Problem Matter?"
            badge="Q3"
            subtitle="The 'so what' question. Lots of things are mildly annoying."
            bullets={[
              { icon: "🤖", text: "'Why does this problem actually matter to the person experiencing it?'" },
              { icon: "💰", text: "'What's the real cost — time, money, stress, missed opportunity?'" },
              { icon: "⚖️", text: "Low cost = low motivation to use your app" },
              { icon: "🎯", text: "You want a problem people actually want solved" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 8 – Question 4: What Would a Simple Solution Look Like? */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene
            title="Question 4: What Would a Simple Solution Look Like?"
            badge="Q4"
            subtitle="Now you can think about the solution. Keep it minimal on purpose."
            bullets={[
              { icon: "🤖", text: "'If the solution were as simple as possible — what would it look like?'" },
              { icon: "🎯", text: "'The absolute minimum version that would actually help someone'" },
              { icon: "🌱", text: "This plants the seed for your MVP" },
              { icon: "⏸️", text: "You're not building yet — just checking if a simple version makes sense" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 9 – Checkpoint */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TitleScene
            title="Four Questions. Four Answers."
            subtitle="You've done something most people skip — understanding the problem before designing the solution."
            showLogo={false}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 10 – The Learning Loop */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <DiagramScene
            title="The Learning Loop"
            subtitle="The core methodology of this bootcamp — not just for validation, for everything."
            steps={[
              { icon: "❓", label: "Ask" },
              { icon: "🧪", label: "Try" },
              { icon: "🔍", label: "Notice" },
              { icon: "✏️", label: "Refine" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 11 – Your Idea, Sharper */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene
            title="Your Idea, Sharper"
            subtitle="AI is most useful when you treat it as a thinking partner, not an answer machine."
            bullets={[
              { icon: "✅", text: "Idea intact and sharper? You're ready for Days 6 and 7" },
              { icon: "❓", text: "More questions than you started with? Also fine." },
              { icon: "🧠", text: "That means the thinking is working" },
              { icon: "📝", text: "Bring those questions into the next session" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 12 – Research Done. Validation Done. */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene
            title="Research Done. Validation Done."
            subtitle="You know who you're building for and why the problem matters."
            bullets={[
              { icon: "✅", text: "You've done the research" },
              { icon: "✅", text: "You've done the validation" },
              { icon: "🔜", text: "Days 6 and 7: project days — put it all together" },
              { icon: "📋", text: "One defined app concept. You already did the hard thinking." },
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
            title="See You on Day 6"
            subtitle="Up next: Your First Real Project"
            showLogo
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
