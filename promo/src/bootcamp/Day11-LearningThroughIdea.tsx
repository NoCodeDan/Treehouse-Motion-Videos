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
import { DAY11_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { ConceptMappingVisual } from "./visuals/ConceptMappingVisual";

export const Day11LearningThroughIdea: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene
            title="Learning Through Your Idea"
            subtitle="Where abstract becomes concrete"
            showLogo={true}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 2 */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TitleScene
            title="Yesterday: four technical concepts. Front end. Back end. APIs. Database."
            subtitle="Today you find out which ones live inside your app. This is where abstract becomes concrete."
            showLogo={false}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 3 */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene
            title="AI as Your Thinking Partner"
            subtitle="You're not coding anything. You're thinking."
            bullets={[
              {
                icon: "\uD83E\uDD16",
                text: "Using AI as a thinking partner to map what you learned onto your idea",
              },
              {
                icon: "\uD83D\uDCDD",
                text: "Three exercises. Do all three.",
              },
              {
                icon: "\u2B50",
                text: "The third one is the most valuable",
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

        {/* Scene 4 */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <SplitVisualScene
            title="Exercise 1: Map the Concepts"
            bullets={[
              {
                icon: "\uD83D\uDCDD",
                text: "Tell AI your app idea",
              },
              {
                icon: "\uD83E\uDD16",
                text: "'List the technical concepts involved in building this app'",
              },
              {
                icon: "\uD83D\uDCCB",
                text: "'Keep it relevant to what I'm actually building'",
              },
              {
                icon: "\uD83D\uDD0D",
                text: "Some terms will be familiar. Some might be new.",
              },
            ]}
            visual={<ConceptMappingVisual delay={30} />}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 5 */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene
            title="Exercise 2: Learn What You Don't Know"
            subtitle="For any term you don't recognize, run two questions:"
            bullets={[
              {
                icon: "1\uFE0F\u20E3",
                text: "'Explain [term] like I'm brand new to building apps'",
              },
              {
                icon: "2\uFE0F\u20E3",
                text: "'How does [term] relate to my specific app?'",
              },
              {
                icon: "\u26A0\uFE0F",
                text: "Don't skip the second question",
              },
              {
                icon: "\uD83D\uDCA1",
                text: "The first gives the definition. The second makes it stick.",
              },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 6 */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene
            title="Exercise 3: Reflect"
            subtitle="After going through the list, ask yourself:"
            bullets={[
              {
                icon: "\uD83E\uDD14",
                text: "Which terms helped you understand your app better?",
              },
              {
                icon: "\uD83D\uDCA1",
                text: "Did any reveal a part you hadn't fully thought through?",
              },
              {
                icon: "\u270D\uFE0F",
                text: "Write it down \u2014 even one sentence",
              },
              {
                icon: "\uD83C\uDFAF",
                text: "Shows where your understanding is solid and where you need clarity",
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

        {/* Scene 7 */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene
            title="Tomorrow Is Spec Day"
            subtitle="You're going to take everything you know and turn it into a document AI can build from."
            bullets={[
              {
                icon: "\uD83E\uDDE0",
                text: "Your idea, your user, your problem, your features",
              },
              {
                icon: "\uD83D\uDDE3\uFE0F",
                text: "Your technical vocabulary",
              },
              {
                icon: "\uD83D\uDCCB",
                text: "All of it \u2192 one spec document",
              },
              {
                icon: "\uD83C\uDFAF",
                text: "That's the Week 2 payoff",
              },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T_FINAL })}
        />

        {/* Scene 8 */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TitleScene
            title="See You on Day 12"
            subtitle="Up next: How to Write a Spec with AI"
            showLogo={true}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
