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
import { DAY01V1_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { WeekTimeline } from "./visuals/WeekTimeline";
import { BuilderNotDeveloper } from "./visuals/BuilderNotDeveloper";
import { AIInternVisual } from "./visuals/AIInternVisual";

export const Day01V1Welcome: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 – Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene
            title="Welcome to the AI Bootcamp"
            subtitle="Your 4-week journey from idea to MVP"
            showLogo
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 2 – What You'll Build */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <SplitVisualScene
            title="What You'll Build in 4 Weeks"
            bullets={[
              { icon: "📅", text: "Week 1: AI Foundations & Mindset" },
              { icon: "🎯", text: "Week 2: Idea Validation & Planning" },
              { icon: "🛠️", text: "Week 3: Building Your MVP" },
              { icon: "🚀", text: "Week 4: Polish & Ship" },
            ]}
            visual={<WeekTimeline delay={30} />}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 3 – Builder Not Developer */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <SplitVisualScene
            title="You're a Builder, Not a Developer"
            bullets={[
              { icon: "🧱", text: "No coding experience needed" },
              { icon: "🤖", text: "AI writes the code for you" },
              { icon: "💡", text: "You bring the ideas and direction" },
            ]}
            visual={<BuilderNotDeveloper delay={30} />}
            visualSide="left"
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 4 – AI Is Your Intern */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <SplitVisualScene
            title="AI Is Your Intern"
            bullets={[
              { icon: "📋", text: "You give direction, AI executes" },
              { icon: "🔄", text: "Review, refine, repeat" },
              { icon: "⚡", text: "Faster than learning to code" },
              { icon: "🎯", text: "Stay focused on YOUR vision" },
            ]}
            visual={<AIInternVisual delay={30} />}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 5 – Watch Practice Build */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <DiagramScene
            title="Watch. Practice. Build."
            subtitle="Our learning method for every lesson"
            steps={[
              { icon: "👀", label: "Watch" },
              { icon: "✍️", label: "Practice" },
              { icon: "🏗️", label: "Build" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 6 – The 4 C's */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene
            title="Our Teaching Framework"
            badge="THE 4 C'S"
            bullets={[
              { icon: "🔍", text: "Concept — Understand the idea" },
              { icon: "🌍", text: "Context — See it in action" },
              { icon: "⚡", text: "Challenge — Practice yourself" },
              { icon: "🎯", text: "Create — Build something real" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 7 – 4-Week Journey */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <DiagramScene
            title="Your 4-Week Journey"
            steps={[
              { icon: "🧠", label: "Foundations" },
              { icon: "📋", label: "Planning" },
              { icon: "🛠️", label: "Build" },
              { icon: "🚀", label: "Ship" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T_FINAL })}
        />

        {/* Scene 8 – Let's Get Started */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TitleScene
            title="Let's Get Started"
            subtitle="Your AI-powered journey begins now"
            showLogo
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
