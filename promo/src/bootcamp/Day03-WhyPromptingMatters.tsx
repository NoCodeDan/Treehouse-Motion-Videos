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
import { DAY03_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { PromptTransformation } from "./visuals/PromptTransformation";
import { FiveMovesChecklist } from "./visuals/FiveMovesChecklist";

export const Day03WhyPromptingMatters: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1 — Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene
            title="Why Prompting Matters"
            subtitle="The skill that changes everything"
            showLogo
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 2 — Hook */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TitleScene
            title="The tool barely mattered. What mattered was the prompt."
            subtitle="Give any AI a vague question and you'll get a vague answer. That's not an AI problem. It's an input problem."
            showLogo={false}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 3 — Blueprint metaphor */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene
            title="AI Is a Contractor. The Prompt Is the Blueprint."
            subtitle="If you've gotten useless responses and blamed the tool — most people do."
            bullets={[
              { icon: "📝", text: "Hand a contractor a vague sketch → sort-of-right result" },
              { icon: "📐", text: "Hand them detailed blueprints → exactly what you meant" },
              { icon: "🎯", text: "Same principle with AI prompts" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 4 — Iterative, not perfect */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TitleScene
            title="You don't need a perfect prompt to start."
            subtitle="You need an iterative one. Write, see what comes back, refine."
            showLogo={false}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 5 — Garbage In, Garbage Out */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <ComparisonScene
            title="Garbage In, Garbage Out"
            leftCard={{
              title: "Vague Input",
              accentColor: "#e74c3c",
              items: [
                { icon: "😐", text: "Short, generic question" },
                { icon: "❓", text: "No context provided" },
                { icon: "🎲", text: "Random, useless output" },
              ],
            }}
            rightCard={{
              title: "Clear Input",
              accentColor: TREEHOUSE_GREEN,
              items: [
                { icon: "🎯", text: "Specific, detailed request" },
                { icon: "📋", text: "Context + goal + constraints" },
                { icon: "✨", text: "Targeted, useful result" },
              ],
            }}
            bgTint={TINT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 6 — Context is the difference */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene
            title="Context Is the Difference"
            bullets={[
              { icon: "🔑", text: "The difference between bad and great isn't vocabulary" },
              { icon: "🧩", text: "It's giving AI what it needs to understand your actual question" },
              { icon: "🔍", text: "Most people use AI like a search engine — short question, expect brilliance" },
              { icon: "❌", text: "That's not how this works" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 7 — What AI needs */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene
            title="What AI Needs From You"
            subtitle="Give it these three things and the quality jumps dramatically."
            bullets={[
              { icon: "🌍", text: "Context — background about you and the situation" },
              { icon: "🎯", text: "A goal — what 'done' looks like" },
              { icon: "🚧", text: "Constraints — format, tone, length, audience" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 8 — Bad prompt demo + PromptTransformation */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <SplitVisualScene
            title="Watch a Prompt Transform"
            bullets={[
              { icon: "🔴", text: `Bad: "Create a title for my video about AI prompting"` },
              { icon: "😐", text: "Generic. Could apply to any video. Not useful." },
              { icon: "🔄", text: "Let's add context, step by step..." },
            ]}
            visual={<PromptTransformation delay={30} />}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 9 — Better prompt */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene
            title="The Better Prompt"
            badge="LEVEL 2"
            subtitle={`"Create 10 engaging YouTube titles for a video that teaches people how to write better prompts for AI tools like ChatGPT."`}
            bullets={[
              { icon: "🎬", text: "Now AI knows the format: YouTube titles" },
              { icon: "🔢", text: "The quantity: 10" },
              { icon: "📚", text: "The topic: better prompts" },
              { icon: "👥", text: "The audience: people learning AI tools" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 10 — Strong prompt */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene
            title="The Strong Prompt"
            badge="LEVEL 3"
            subtitle="Add role, tone, audience, constraints, and examples. Night and day."
            bullets={[
              { icon: "🎭", text: "Who this is for and what tone to use" },
              { icon: "📋", text: "What the video covers and what a good title looks like" },
              { icon: "🌙", text: "Same topic. Completely different result." },
              { icon: "💡", text: "The tool didn't change. The thinking did." },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 11 — Checkpoint */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TitleScene
            title="Three Prompt Versions. Three Different Outputs."
            subtitle="Now here are five specific moves that make any prompt stronger."
            showLogo={false}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 12 — Five Moves intro + visual */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <SplitVisualScene
            title="5 Moves to Improve Any Prompt"
            bullets={[
              { icon: "🎯", text: "Each move makes AI output dramatically better" },
              { icon: "📈", text: "Stack them for maximum impact" },
              { icon: "⚡", text: "Practice makes it second nature" },
            ]}
            visual={<FiveMovesChecklist delay={30} />}
            visualSide="left"
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 13 — Moves 1-2 */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene
            title="Moves 1 & 2"
            bullets={[
              { icon: "1️⃣", text: "Add context — Who are you? What are you working on? AI knows nothing unless you tell it." },
              { icon: "2️⃣", text: "State your goal clearly — 'Help me brainstorm' and 'write a final draft' are completely different requests." },
              { icon: "🎯", text: "Name what done looks like." },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 14 — Moves 3-5 */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene
            title="Moves 3, 4 & 5"
            bullets={[
              { icon: "3️⃣", text: "Have AI interview you — 'Ask me questions to better understand what I'm building'" },
              { icon: "4️⃣", text: "Ask for example prompts — 'What's a good prompt to get this result?'" },
              { icon: "5️⃣", text: "Ask for example outputs — 'Show me 3 different ways you could respond'" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 15 — The pattern */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TitleScene
            title="Write. See What Comes Back. Refine."
            subtitle="That's iterative prompting. That's how productive AI conversations actually work."
            showLogo={false}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 16 — Outro */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TextAndBulletsScene
            title="From Vague to Useful"
            subtitle="You changed the instructions, not the tool."
            bullets={[
              { icon: "✍️", text: "Tomorrow: apply these five moves to your own ideas" },
              { icon: "⚠️", text: "You'll learn to catch AI when it's just telling you what you want to hear" },
              { icon: "🎯", text: "That one matters. Don't skip it." },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T_FINAL })}
        />

        {/* 17 — Closing */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TitleScene
            title="See You on Day 4"
            subtitle="Up next: Practice — Talking With AI"
            showLogo
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
