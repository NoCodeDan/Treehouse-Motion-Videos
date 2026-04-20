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
import { DAY13_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { SixComponentBreakdown } from "./visuals/SixComponentBreakdown";
import { ProgressTimeline } from "./visuals/ProgressTimeline";
import { BrowserMockup } from "../components/BrowserMockup";

export const Day13MVPSpecProject: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene
            title="Your MVP Spec Project"
            subtitle="Everything you've learned, one deliverable"
            showLogo
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
            title="Two weeks ago, you had an idea."
            subtitle="Right now, you have a user, a problem, three features, technical vocabulary, and a method for writing specs with AI. That's everything you need to build a real app."
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
            title="Your Week 2 Project"
            subtitle="Unlike earlier project days, this one produces something you'll actually use: a spec document."
            bullets={[
              { icon: "📋", text: "The foundation for everything you build in Weeks 3 and 4" },
              { icon: "🎯", text: "Not a practice spec. Your spec. The real one." },
              { icon: "📅", text: "Two days to write it" },
              { icon: "🤖", text: "One AI conversation to produce most of it" },
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
            title="Your Six Sections"
            subtitle="By the end of Day 14, a complete lightweight MVP spec saved as a markdown file."
            bullets={[
              { icon: "📋", text: "App Summary — name, description, type" },
              { icon: "🎯", text: "Problem Statement + Target User" },
              { icon: "⚡", text: "Core Feature List — your three MVP features" },
              { icon: "🔄", text: "User Flows + What Success Looks Like" },
            ]}
            visual={<SixComponentBreakdown delay={30} />}
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
            title="How to Approach This"
            subtitle="Use the Spec Prompt Pattern from Day 12:"
            bullets={[
              { icon: "🤖", text: "'Help me turn this idea into a clear MVP spec. Ask me questions one at a time.'" },
              { icon: "💬", text: "Let AI guide the conversation" },
              { icon: "🎯", text: "Your job: answer honestly and specifically. Don't rush." },
              { icon: "⚡", text: "Quality of your spec directly affects what AI can build from it" },
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
            title="Share It — Get Feedback"
            subtitle="Once your spec is written, drop it in the community Discord channel."
            bullets={[
              { icon: "👥", text: "The Treehouse team will review it and give feedback" },
              { icon: "🔍", text: "If something's vague or missing, better to find out now than in Week 3" },
              { icon: "📖", text: "Read other people's specs too" },
              { icon: "💡", text: "You'll see angles, phrasing, and approaches you didn't think of" },
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
          <TitleScene
            title="Two Weeks Done."
            subtitle="Week 1: you learned to think with AI. Week 2: you built the blueprint. Week 3: you build the thing."
            showLogo={false}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 8 */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <SplitVisualScene
            title="Week 3: You Build the Thing"
            subtitle="You're going to take your spec into the actual building tools."
            bullets={[
              { icon: "🛠️", text: "Cursor, Lovable, Bolt — real AI building tools" },
              { icon: "🚀", text: "Your first working version of your app" },
              { icon: "💻", text: "Not a wireframe. Not a mock. A working app." },
              { icon: "🔀", text: "Choose your path: web app, AI agent, or data visualization" },
            ]}
            visual={<ProgressTimeline delay={30} />}
            visualSide="left"
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
          <SplitVisualScene
            title="What That Looks Like"
            subtitle="Real examples, real outputs. The kind of thing you'll have by Day 28."
            bullets={[
              { icon: "🏗️", text: "Week 3: start building" },
              { icon: "✨", text: "Week 4: refine and launch" },
              { icon: "🎯", text: "Working apps built by real bootcampers" },
              { icon: "💪", text: "That's where this is going" },
            ]}
            visual={<BrowserMockup delay={30} />}
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
            title="You Have the Idea. You Have the Spec."
            subtitle="Everything from here is building."
            bullets={[
              { icon: "🧠", text: "You understand AI tools and their limits" },
              { icon: "🎯", text: "You have a validated, refined idea" },
              { icon: "📋", text: "You have an MVP spec in hand" },
              { icon: "💪", text: "You're ready to build" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T_FINAL })}
        />

        {/* Scene 11 */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TitleScene
            title="Week 3 Starts Now"
            subtitle="See you in the build phase"
            showLogo
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
