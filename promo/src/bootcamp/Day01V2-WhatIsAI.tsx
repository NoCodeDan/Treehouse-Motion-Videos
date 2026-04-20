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
import { DAY01V2_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { AIUmbrellaDiagram } from "./visuals/AIUmbrellaDiagram";
import { LLMToolShowcase } from "./visuals/LLMToolShowcase";
import { PredictionVisual } from "./visuals/PredictionVisual";

export const Day01V2WhatIsAI: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1 — Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene
            title="What Is AI, Really?"
            subtitle="Understanding the technology behind the hype"
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
            title="AI just told someone their idea was brilliant."
            subtitle="It said the exact same thing to the next person. And the one after that. That's not a quirk. That's how it works."
            showLogo={false}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 3 — Black box intro */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene
            title="AI Feels Like a Black Box"
            subtitle="Something that works, but you're not sure why. You're not behind — most people are here."
            bullets={[
              { icon: "🎓", text: "No computer science background required" },
              { icon: "⏱️", text: "About ten minutes of clear explanation is all it takes" },
              { icon: "🎯", text: "By the end: what AI is, how tools differ, and why AI gets things wrong" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 4 — Core insight */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TitleScene
            title="AI doesn't know things. It predicts them."
            subtitle="Hold that thought. It changes everything."
            showLogo={false}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 5 — The AI Umbrella */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <SplitVisualScene
            title="The AI Umbrella"
            bullets={[
              { icon: "☂️", text: "AI is a broad term covering many technologies" },
              { icon: "👁️", text: "Computer Vision — AI that can see" },
              { icon: "📊", text: "Machine Learning — AI that learns from data" },
              { icon: "💬", text: "Large Language Models — AI that reads and writes" },
            ]}
            visual={<AIUmbrellaDiagram delay={30} />}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 6 — Computer Vision */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene
            title="Computer Vision"
            badge="BRANCH 1"
            subtitle="AI that can see — processes images and video to identify what's in them"
            bullets={[
              { icon: "📸", text: "Facial recognition" },
              { icon: "🚗", text: "Self-driving cars" },
              { icon: "🏷️", text: "Photo tagging and image search" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 7 — Machine Learning */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene
            title="Machine Learning"
            badge="BRANCH 2"
            subtitle="AI that learns from data — feed it examples, it finds patterns"
            bullets={[
              { icon: "📧", text: "Spam filters" },
              { icon: "🎯", text: "Recommendation algorithms" },
              { icon: "🔒", text: "Fraud detection" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 8 — Large Language Models */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene
            title="Large Language Models"
            badge="BRANCH 3"
            subtitle="LLMs read, write, hold conversations, and help you build software"
            bullets={[
              { icon: "🟢", text: "ChatGPT — OpenAI" },
              { icon: "🟣", text: "Claude — Anthropic" },
              { icon: "🔵", text: "Gemini — Google" },
              { icon: "💡", text: "LLMs changed what's possible for non-technical people" },
              { icon: "🎯", text: "This is the branch we use in this bootcamp" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 9 — Checkpoint */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TitleScene
            title="Now: Which Tools — and Why They Get Things Wrong"
            subtitle="We've covered the three main branches and landed on LLMs. Let's go deeper."
            showLogo={false}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 10 — What's Out There + LLMToolShowcase */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <SplitVisualScene
            title="What's Out There"
            bullets={[
              { icon: "🟢", text: "ChatGPT — most popular, great all-rounder" },
              { icon: "🟣", text: "Claude — best for writing and analysis" },
              { icon: "🔵", text: "Gemini — Google's multimodal powerhouse" },
              { icon: "🔍", text: "Perplexity — pulls from live web, great for research" },
              { icon: "🔄", text: "Dozens more — new ones launch regularly" },
            ]}
            visual={<LLMToolShowcase delay={30} />}
            visualSide="left"
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 11 — Staying Current */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene
            title="How to Stay Current"
            subtitle="The landscape moves fast. Don't try to track everything."
            bullets={[
              { icon: "🤖", text: "Ask AI directly: 'What are the best LLMs right now?'" },
              { icon: "👥", text: "Follow communities — forums, Discord, LinkedIn" },
              { icon: "🧠", text: "More useful than any list: knowing what to look for" },
              { icon: "🔍", text: "Once you understand that, you can evaluate anything new" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 12 — Why AI Sounds Confident + PredictionVisual */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <SplitVisualScene
            title="Why AI Sounds So Confident"
            bullets={[
              { icon: "⚠️", text: "This is the most important thing in this video" },
              { icon: "🔮", text: "LLMs predict the most likely next word" },
              { icon: "📚", text: "Trained on enormous amounts of text" },
              { icon: "🧩", text: "Learned patterns of language and reasoning" },
            ]}
            visual={<PredictionVisual delay={30} />}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 13 — Predicting, Not Knowing */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene
            title="Predicting, Not Knowing"
            bullets={[
              { icon: "❌", text: "AI isn't looking up answers in a database" },
              { icon: "🎭", text: "It generates responses that LOOK like the right answer" },
              { icon: "📈", text: "Based on patterns it recognized during training" },
              { icon: "😎", text: "Same confident tone whether accurate or fabricated" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 14 — Confidently Wrong */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene
            title="That's Why It Loves Your Ideas"
            subtitle="And states wrong facts with a period at the end and no hesitation."
            bullets={[
              { icon: "👍", text: "AI agrees because agreement is the predicted pattern" },
              { icon: "📝", text: "It writes wrong answers with total confidence" },
              { icon: "🧠", text: "The phrase to remember:" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 15 — Knows vs Predicts */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <ComparisonScene
            title="AI Predicts. It Doesn't Know."
            leftCard={{
              title: "What AI Does",
              accentColor: "#8a9aa5",
              items: [
                { icon: "🔮", text: "Predicts likely next words" },
                { icon: "📚", text: "Trained on patterns" },
                { icon: "🎭", text: "Sounds confident always" },
              ],
            }}
            rightCard={{
              title: "What That Means for You",
              accentColor: TREEHOUSE_GREEN,
              items: [
                { icon: "✅", text: "Great for drafts, ideas, speed" },
                { icon: "⚠️", text: "Can be confidently wrong" },
                { icon: "🔍", text: "Always verify important facts" },
              ],
            }}
            bgTint={TINT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 16 — Not a Flaw */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TextAndBulletsScene
            title="This Isn't a Flaw — It's a Reality"
            bullets={[
              { icon: "🧠", text: "You bring judgment and intent" },
              { icon: "⚡", text: "AI brings speed and range" },
              { icon: "🤝", text: "Together, you can do things neither could alone" },
              { icon: "🎯", text: "That's the relationship this bootcamp is built on" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* 17 — Outro */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TextAndBulletsScene
            title="You Have a Better Foundation Than Most"
            subtitle="Most people use AI for months without understanding why confident doesn't mean correct."
            bullets={[
              { icon: "✅", text: "You know what AI is and how the major tools differ" },
              { icon: "🧪", text: "Tomorrow: run the same prompt through multiple tools" },
              { icon: "👀", text: "See the differences for yourself — not read about them" },
              { icon: "📝", text: "I'll give you the exact prompt to use" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T_FINAL })}
        />

        {/* 18 — Closing */}
        <TransitionSeries.Sequence durationInFrames={D[17]}>
          <TitleScene
            title="See You on Day 2"
            subtitle="Up next: Exploring AI Tools"
            showLogo
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
