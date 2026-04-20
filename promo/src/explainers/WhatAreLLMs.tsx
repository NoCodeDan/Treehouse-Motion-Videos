import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";

import { TitleScene } from "../templates/TitleScene";
import { TextAndBulletsScene } from "../templates/TextAndBulletsScene";
import { DiagramScene } from "../templates/DiagramScene";
import { SplitVisualScene } from "../templates/SplitVisualScene";
import { ComparisonScene } from "../templates/ComparisonScene";

import { TextPrediction } from "./llm-visuals/TextPrediction";
import { CodeComparison } from "./llm-visuals/CodeComparison";

import { TREEHOUSE_GREEN, TINT_GREEN, TINT_BLUE, TINT_PURPLE, ACCENT_PURPLE, ACCENT_BLUE } from "../lib/brand";

const T = 20; // standard transition duration

export const WhatAreLLMs: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1: Title — "What Are LLMs?" */}
        <TransitionSeries.Sequence durationInFrames={300}>
          <TitleScene
            title="What Are LLMs?"
            subtitle="Large Language Models, Explained Simply"
            showLogo
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 2: "LLM Stands For..." */}
        <TransitionSeries.Sequence durationInFrames={360}>
          <TextAndBulletsScene
            badge="Breaking It Down"
            title='LLM Stands For...'
            subtitle="Large Language Model — here's what each word means"
            bullets={[
              { icon: "📏", text: '"Large" — Billions of parameters' },
              { icon: "💬", text: '"Language" — Understands and generates text' },
              { icon: "🧠", text: '"Model" — A trained pattern matcher' },
            ]}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 3: "How They're Trained" */}
        <TransitionSeries.Sequence durationInFrames={360}>
          <DiagramScene
            title="How They're Trained"
            subtitle="LLMs learn by reading massive amounts of text"
            steps={[
              { icon: "📚", label: "Data" },
              { icon: "⚙️", label: "Training" },
              { icon: "🧠", label: "Model" },
            ]}
            accentColor={ACCENT_BLUE}
            bgTint={TINT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 4: "What They Actually Do" */}
        <TransitionSeries.Sequence durationInFrames={360}>
          <SplitVisualScene
            title="What They Actually Do"
            bullets={[
              { icon: "🔮", text: "Predict the next word" },
              { icon: "🔁", text: "Repeat, word by word" },
              { icon: "📝", text: "Until a full response forms" },
            ]}
            visual={<TextPrediction delay={30} />}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 5: "What They're Good At" */}
        <TransitionSeries.Sequence durationInFrames={330}>
          <TextAndBulletsScene
            badge="Strengths"
            title="What They're Good At"
            bullets={[
              { icon: "✍️", text: "Writing and summarizing" },
              { icon: "💻", text: "Coding and debugging" },
              { icon: "❓", text: "Answering questions" },
              { icon: "🌍", text: "Translating languages" },
            ]}
            accentColor={TREEHOUSE_GREEN}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 6: "What They're Not" */}
        <TransitionSeries.Sequence durationInFrames={330}>
          <TextAndBulletsScene
            badge="Limitations"
            title="What They're Not"
            bullets={[
              { icon: "🗄️", text: "Not a database of facts" },
              { icon: "⚠️", text: 'Not always right — they "hallucinate"' },
              { icon: "🤖", text: "No real understanding or awareness" },
            ]}
            accentColor={ACCENT_PURPLE}
            bgTint={TINT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 7: "Traditional Code vs LLMs" */}
        <TransitionSeries.Sequence durationInFrames={360}>
          <ComparisonScene
            title="Traditional Code vs LLMs"
            leftCard={{
              title: "Traditional Code",
              accentColor: "#8a9aa5",
              items: [
                { icon: "📋", text: "Rigid if/else rules" },
                { icon: "🔧", text: "Manual for every case" },
                { icon: "❌", text: "Breaks on new inputs" },
              ],
            }}
            rightCard={{
              title: "With an LLM",
              accentColor: TREEHOUSE_GREEN,
              items: [
                { icon: "💬", text: "Describe what you want" },
                { icon: "🔄", text: "Handles infinite variations" },
                { icon: "✨", text: "Adapts to context" },
              ],
            }}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 30 })}
        />

        {/* Scene 8: Closing — "The Takeaway" */}
        <TransitionSeries.Sequence durationInFrames={300}>
          <TitleScene
            title="The Takeaway"
            subtitle="LLMs are powerful tools. The more you understand them, the better you can use them."
            showLogo
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
