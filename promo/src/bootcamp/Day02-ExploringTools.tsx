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
import { DAY02_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { MultiToolComparison } from "./visuals/MultiToolComparison";
import { EvaluationChecklist } from "./visuals/EvaluationChecklist";

export const Day02ExploringTools: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1 — Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene
            title="Exploring AI Tools"
            subtitle="Find the right tool for you"
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
            title="Everyone has an opinion on which AI tool is best."
            subtitle="You don't need an opinion yet. You need experience. That's what today is for."
            showLogo={false}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 3 — Intro: hands-on day */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene
            title="Your First Hands-On Day"
            subtitle="If you want to trust your AI tools — not just use them — you need to see how they actually behave."
            bullets={[
              { icon: "📚", text: "No new concepts today" },
              { icon: "🎬", text: "No videos to watch" },
              { icon: "🛠️", text: "Just you, a few AI tools, and one prompt" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 4 — The Exercise + MultiToolComparison */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <SplitVisualScene
            title="One Prompt, Multiple Tools"
            bullets={[
              { icon: "🟢", text: "Open ChatGPT, Claude, Gemini — or any tools you like" },
              { icon: "📝", text: `Give each one this exact prompt:` },
              { icon: "💬", text: `"Explain how a beginner could build a simple app that helps people stay organized."` },
              { icon: "👀", text: "Same question. Every tool. Then watch what comes back." },
            ]}
            visual={<MultiToolComparison delay={30} />}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 5 — What to Watch For */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene
            title="What to Watch For"
            subtitle="That's the point. Every tool responds differently."
            bullets={[
              { icon: "📋", text: "Some give numbered lists before you asked for one" },
              { icon: "❓", text: "Some ask clarifying questions first" },
              { icon: "💨", text: "Some sound thorough but say almost nothing specific" },
              { icon: "✂️", text: "Some are concise. Some are overlong." },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 6 — The Skill */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene
            title="Learning to Read AI Output"
            bullets={[
              { icon: "🎯", text: "You're not looking for the right answer" },
              { icon: "📖", text: "You're learning to read AI output critically" },
              { icon: "🔄", text: "A skill you'll use every single day in this bootcamp" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 7 — 4 Questions + EvaluationChecklist */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <SplitVisualScene
            title="Ask Yourself These 4 Things"
            bullets={[
              { icon: "🔍", text: "Is this response actually clear — or does it just sound clear?" },
              { icon: "⚡", text: "Is it actionable, or just describing a process?" },
              { icon: "🤔", text: "Did it make assumptions about what I meant?" },
              { icon: "🛑", text: "Did it admit limitations, or act like there's only one way?" },
            ]}
            visual={<EvaluationChecklist delay={30} />}
            visualSide="left"
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 8 — No Best Tool */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene
            title="There's No Best AI Tool"
            subtitle="There's no best AI tool in the abstract."
            bullets={[
              { icon: "🧠", text: "There's the one that fits how you think" },
              { icon: "🏗️", text: "What you're building" },
              { icon: "🗣️", text: "And how you communicate" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 9 — Outro */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene
            title="Pick Your Favorites"
            bullets={[
              { icon: "📌", text: "Pick one or two tools you felt at home with" },
              { icon: "🔖", text: "Bookmark them — you'll use them every day from here" },
              { icon: "🔜", text: "Tomorrow: Why the quality of the question matters more than the tool" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T_FINAL })}
        />

        {/* 10 — Closing */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TitleScene
            title="Form Your Own Opinions"
            subtitle="Experience beats hearsay — see you on Day 3"
            showLogo
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
