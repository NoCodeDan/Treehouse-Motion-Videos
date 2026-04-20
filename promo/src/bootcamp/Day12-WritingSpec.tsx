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
import { DAY12_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { SpecBlueprintVisual } from "./visuals/SpecBlueprintVisual";
import { SixComponentBreakdown } from "./visuals/SixComponentBreakdown";

export const Day12WritingSpec: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene
            title="How to Write a Spec with AI"
            subtitle="Your blueprint for building"
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
            title="Most people building with AI hit the same wall."
            subtitle="They describe their idea, get something sort of right, try to fix it, watch it break somewhere else, and give up. The problem isn't AI. The problem is there was no spec."
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
            title="The Blueprint for Your App"
            subtitle="You're not writing a spec for AI. You're writing it with AI. The process of writing it is how you figure out exactly what you want."
            bullets={[
              {
                icon: "\uD83D\uDCCB",
                text: "A spec tells AI \u2014 and you \u2014 exactly what you're building",
              },
              {
                icon: "\uD83D\uDC64",
                text: "Who it's for and what it needs to do",
              },
              {
                icon: "\u274C",
                text: "Without it, you're both guessing",
              },
              {
                icon: "\u2705",
                text: "By the end: every component of a solid MVP spec",
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
            title="What a Spec Is"
            subtitle="Spec is short for specification."
            bullets={[
              {
                icon: "\uD83D\uDCCB",
                text: "A document that describes your app clearly enough to build from",
              },
              {
                icon: "\uD83C\uDFD7\uFE0F",
                text: "Give a contractor a blueprint \u2192 they can get to work",
              },
              {
                icon: "\uD83D\uDCDD",
                text: "Give them a napkin sketch and say 'like a house' \u2192 sort-of-right result",
              },
              {
                icon: "\uD83C\uDFAF",
                text: "We're writing the blueprint",
              },
            ]}
            visual={<SpecBlueprintVisual delay={30} />}
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
            title="ChatPRD \u2014 A Tool Worth Knowing"
            subtitle="Before we get into the components:"
            bullets={[
              {
                icon: "\uD83C\uDF10",
                text: "ChatPRD.com \u2014 designed to help you generate structured specs",
              },
              {
                icon: "\uD83D\uDCAC",
                text: "Guided conversation format",
              },
              {
                icon: "\uD83D\uDD04",
                text: "We'll also write specs directly in AI tools",
              },
              {
                icon: "\uD83D\uDCA1",
                text: "Good option if you want a more structured experience",
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
          <SplitVisualScene
            title="The Six Components of an MVP Spec"
            subtitle="Here's what every good spec includes."
            bullets={[
              {
                icon: "1\uFE0F\u20E3",
                text: "App Summary \u2014 name, description, type",
              },
              {
                icon: "2\uFE0F\u20E3",
                text: "Problem Statement \u2014 the specific pain you're solving",
              },
              {
                icon: "3\uFE0F\u20E3",
                text: "Target User \u2014 who this is for, specifically",
              },
              {
                icon: "4\uFE0F\u20E3",
                text: "Core Features, User Flows, Success Definition",
              },
            ]}
            visual={<SixComponentBreakdown delay={30} />}
            visualSide="left"
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
            title="Components 1-3: The Foundation"
            badge="FOUNDATION"
            bullets={[
              {
                icon: "\uD83D\uDCCB",
                text: "App Summary \u2014 name, one-line description, type (web app, mobile, AI agent)",
              },
              {
                icon: "\uD83C\uDFAF",
                text: "Problem Statement \u2014 one or two sentences. You wrote a version in Week 1. Now polish it.",
              },
              {
                icon: "\uD83D\uDC64",
                text: "Target User \u2014 'A freelance graphic designer managing 3-5 clients who loses track of deadlines'",
              },
              {
                icon: "\u274C",
                text: "'Busy people' is not a target user",
              },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 8 */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene
            title="Components 4-6: The Details"
            badge="DETAILS"
            bullets={[
              {
                icon: "\u26A1",
                text: "Core Feature List \u2014 your 3 MVP features, each with a one-sentence description of what it does and why",
              },
              {
                icon: "\uD83D\uDD04",
                text: "User Flows \u2014 how they get started, use the main feature, and what happens when something goes wrong",
              },
              {
                icon: "\u2705",
                text: "What Success Looks Like \u2014 how do you know the app is working? Your definition of done.",
              },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 9 */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TitleScene
            title="Six Components. Now Let's Write It."
            subtitle="Summary, problem, user, features, flows, success. Not by filling in a template \u2014 by talking through it with AI."
            showLogo={false}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 10 */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene
            title="The Spec Prompt Pattern"
            subtitle="Open AI. Start a fresh conversation."
            bullets={[
              {
                icon: "\uD83E\uDD16",
                text: "'Help me turn this idea into a clear MVP spec. Ask me questions one at a time.'",
              },
              {
                icon: "\uD83D\uDCAC",
                text: "AI asks. You answer. It builds.",
              },
              {
                icon: "\uD83E\uDD1D",
                text: "Neither of you could produce this document as well alone",
              },
              {
                icon: "\uD83D\uDCA1",
                text: "You have the intent; AI has the structure",
              },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 11 */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene
            title="Save It as Markdown"
            subtitle="When you're done, save the spec as a .md file."
            bullets={[
              {
                icon: "\uD83D\uDCC4",
                text: "Plain text with formatting \u2014 markdown",
              },
              {
                icon: "\uD83D\uDCCB",
                text: "You'll paste this file directly into AI building tools in Weeks 3 and 4",
              },
              {
                icon: "\uD83E\uDD16",
                text: "AI reads it and immediately knows what you're building",
              },
              {
                icon: "\u26A1",
                text: "No need to re-explain your idea at the start of every session",
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

        {/* Scene 12 */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene
            title="Optional Additions"
            subtitle="Not required for your MVP spec. But available if you want them."
            bullets={[
              {
                icon: "\uD83D\uDCD6",
                text: "User stories \u2014 specific scenarios from the user's perspective",
              },
              {
                icon: "\uD83C\uDFD7\uFE0F",
                text: "Tech stack suggestion \u2014 ask AI what it recommends for your app type",
              },
              {
                icon: "\uD83D\uDCCA",
                text: "Phased rollout plan \u2014 features in priority order",
              },
              {
                icon: "\uD83D\uDCA1",
                text: "Go deeper if you want, but the six components are enough",
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

        {/* Scene 13 */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene
            title="Your Spec, Your App"
            subtitle="You now know what a spec is, what goes in it, and how to write one in a single AI conversation."
            bullets={[
              {
                icon: "\uD83D\uDCC5",
                text: "Days 13 and 14: your project days",
              },
              {
                icon: "\uD83D\uDCCB",
                text: "Write the real spec for your real app",
              },
              {
                icon: "\uD83C\uDFD7\uFE0F",
                text: "The one you'll hand to AI builders in Weeks 3 and 4",
              },
              {
                icon: "\uD83C\uDFAC",
                text: "And at the end of Day 14 \u2014 a teaser for what comes next",
              },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T_FINAL })}
        />

        {/* Scene 14 */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene
            title="See You on Day 13"
            subtitle="Up next: Your MVP Spec Project"
            showLogo={true}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
