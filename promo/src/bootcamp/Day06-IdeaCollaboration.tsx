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
import { DAY06_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { ProjectMilestone } from "./visuals/ProjectMilestone";

export const Day06IdeaCollaboration: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 – Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene
            title="Your First Real Project"
            subtitle="Two days. You and AI. One defined app concept."
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
            title="You've spent the week thinking. Now you build."
            subtitle="This is your first real project. The activity is the content."
            showLogo={false}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 3 – This Is a Project */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene
            title="This Is a Project, Not a Lesson"
            subtitle="You're going to do the thinking; AI is your collaborator."
            bullets={[
              { icon: "\uD83C\uDFAF", text: "Come out with something real: one defined idea" },
              { icon: "\uD83D\uDC64", text: "A specific user and a specific problem" },
              { icon: "\uD83E\uDD16", text: "AI is your collaborator \u2014 you guide, it helps" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 4 – Two Steps */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <DiagramScene
            title="Two Steps"
            subtitle="If you already know your idea, go straight to Step 2."
            steps={[
              { icon: "\uD83D\uDCA1", label: "Settle Your Idea" },
              { icon: "\uD83E\uDD16", label: "Define with AI" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 5 – Define It with AI */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <SplitVisualScene
            title="Step 2: Define It with AI"
            subtitle="With your idea locked, work through these with AI:"
            bullets={[
              { icon: "\uD83D\uDC64", text: "Who is your target user? Describe them in one sentence." },
              { icon: "\uD83C\uDFAF", text: "What problem do they have, and why does it matter?" },
              { icon: "\uD83D\uDEE0\uFE0F", text: "What would a simple version of the solution look like?" },
              { icon: "\uD83D\uDCDD", text: "Write down your answers \u2014 anywhere. These become your foundation." },
            ]}
            visual={<ProjectMilestone delay={30} />}
            visualSide="left"
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 6 – Capture Your Answers */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene
            title="Capture Your Answers"
            subtitle="A note, a doc, a text file \u2014 anywhere."
            bullets={[
              { icon: "\uD83D\uDCCB", text: "These become the foundation for Weeks 3 and 4" },
              { icon: "\uD83C\uDFD7\uFE0F", text: "Everything you build rests on these answers" },
              { icon: "\u270D\uFE0F", text: "Write them down \u2014 don\u2019t just think them" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 7 – Fallback Idea */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene
            title="If You're Stuck: The Fallback Idea"
            subtitle="If you genuinely can't settle on something, there's a fallback idea in the Week 3 and 4 materials."
            bullets={[
              { icon: "\uD83D\uDCA1", text: "Use it. Build from it. Make it yours." },
              { icon: "\uD83D\uDD04", text: "You'll learn just as much from a provided idea as from your own" },
              { icon: "\uD83C\uDFAF", text: "The process is what matters" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 8 – Week 1 Deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene
            title="Your Week 1 Deliverable"
            subtitle="By the end of Day 7, you should have:"
            bullets={[
              { icon: "\u2705", text: "One defined idea: a clear user, a clear problem" },
              { icon: "\uD83C\uDFAF", text: "A direction for the solution" },
              { icon: "\uD83C\uDFD7\uFE0F", text: "The foundation everything else gets built on" },
              { icon: "\uD83D\uDD1C", text: "Week 2 starts on Day 8 \u2014 turning this into something buildable" },
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
            title="Ship Your First Deliverable"
            subtitle="See you on Day 8 \u2014 Week 2 begins"
            showLogo
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
