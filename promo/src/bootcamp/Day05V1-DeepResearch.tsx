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
import { DAY05V1_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { ResearchFunnel } from "./visuals/ResearchFunnel";

export const Day05V1DeepResearch: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 – Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene
            title="Deep Research & Picking Your Idea"
            subtitle="Use AI to research, compare, and decide"
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
            title="You probably have more than one idea. That's actually the problem."
            subtitle="Most people stall here — not from lack of ideas, but from too many of them with no system for deciding which one to actually build."
            showLogo={false}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 3 – Narrow Down Early */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene
            title="Narrow Down Early"
            subtitle="The people who build something real are the ones who narrow down early. Committing to one idea feels uncomfortable. Trying to build three is how you ship zero."
            bullets={[
              { icon: "\uD83C\uDFAF", text: "By the end: use AI to research, compare, and pick one" },
              { icon: "\uD83D\uDCCA", text: "Not by guessing — by looking at the data" },
              { icon: "\uD83E\uDD16", text: "The framework: AI does the competitive research you'd never do alone" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 4 – Why This Research Step Matters */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene
            title="Why This Research Step Matters"
            subtitle="This is one of the most consequential steps in the bootcamp."
            bullets={[
              { icon: "\uD83C\uDFD7\uFE0F", text: "Skip it: you build, it works, then discover 3 other apps do the same thing" },
              { icon: "\uD83D\uDE2C", text: "Or realize the problem only bothered you" },
              { icon: "\u23F1\uFE0F", text: "Research now saves weeks of wasted effort" },
              { icon: "\uD83D\uDD0D", text: "AI compresses days of research into minutes" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 5 – Setting Up the Research Conversation */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <SplitVisualScene
            title="Setting Up the Research Conversation"
            bullets={[
              { icon: "\uD83D\uDCAC", text: "Open your AI tool. Start a fresh conversation." },
              { icon: "\uD83D\uDCDD", text: "'I'm deciding between [idea A] and [idea B]\u2026'" },
              { icon: "\uD83D\uDD0D", text: "'Help me do a quick competitive analysis of both'" },
              { icon: "\uD83C\uDFAF", text: "'What already exists? Who's solving this? What would make each stand out?'" },
            ]}
            visual={<ResearchFunnel delay={30} />}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 6 – What Comes Back */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene
            title="What Comes Back"
            subtitle="A picture of the landscape. Existing players, market gaps, what's already been built."
            bullets={[
              { icon: "\uD83C\uDFE2", text: "Who the competitors are and what they offer" },
              { icon: "\uD83D\uDD73\uFE0F", text: "Where the gaps and opportunities live" },
              { icon: "\u26A1", text: "Days of research compressed into a few minutes" },
              { icon: "\uD83D\uDCA1", text: "That's the AI leverage play" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 7 – Checkpoint */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TitleScene
            title="You've Got the Landscape."
            subtitle="Now let's use it to actually compare your ideas head to head."
            showLogo={false}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 8 – The Pros and Cons Framework */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene
            title="The Pros and Cons Framework"
            subtitle="Ask AI to go deeper with an honest comparison."
            bullets={[
              { icon: "\uD83D\uDCDD", text: "'Give me an honest pros/cons comparison of [A] vs [B]'" },
              { icon: "\uD83C\uDFD7\uFE0F", text: "'Consider: difficulty to build, audience size, competition'" },
              { icon: "\uD83C\uDFAF", text: "'My realistic chance of standing out'" },
              { icon: "\uD83D\uDD0D", text: "Three things to look for in what comes back\u2026" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 9 – Competitor Count */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene
            title="Competitor Count"
            badge="SIGNAL 1"
            bullets={[
              { icon: "\uD83D\uDCCA", text: "More competitors isn't automatically bad — it signals demand" },
              { icon: "\uD83C\uDFAF", text: "But you need a clear angle that makes your version worth using" },
              { icon: "\uD83D\uDCA1", text: "That clear angle is your X factor" },
              { icon: "\u26A1", text: "No competitors might mean no customers" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 10 – Your X Factor */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene
            title="Your X Factor"
            badge="SIGNAL 2"
            bullets={[
              { icon: "\u2B50", text: "The one thing that makes YOUR version different" },
              { icon: "\uD83E\uDD16", text: "AI will help brainstorm, but real insight comes from you" },
              { icon: "\uD83E\uDDE0", text: "What do you know about this problem that a generic app doesn't?" },
              { icon: "\uD83C\uDFAF", text: "Personal experience is your unfair advantage" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 11 – Audience Specificity */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene
            title="Audience Specificity"
            badge="SIGNAL 3"
            bullets={[
              { icon: "\uD83C\uDFAF", text: "The narrower your target user, the easier everything becomes" },
              { icon: "\u2705", text: "'App for freelance photographers managing client galleries'" },
              { icon: "\u274C", text: "'App for creative professionals'" },
              { icon: "\uD83D\uDDE3\uFE0F", text: "Specific = easier to build + easier to talk about" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 12 – How to Make the Decision */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene
            title="How to Make the Decision"
            subtitle="Use the research. Then trust your gut."
            bullets={[
              { icon: "\u2696\uFE0F", text: "If both look roughly equal on paper\u2026" },
              { icon: "\uD83E\uDD14", text: "Which problem have I actually felt?" },
              { icon: "\uD83D\uDCAA", text: "Which one am I more likely to finish?" },
              { icon: "\uD83C\uDFAF", text: "AI surfaces feasibility. You supply what you care about." },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 13 – From Research to Validation */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene
            title="From Research to Validation"
            subtitle="You've got the research framework."
            bullets={[
              { icon: "\u2705", text: "One idea you're leaning toward — a direction, not a final answer" },
              { icon: "\uD83D\uDD1C", text: "Next video: validation — different from research" },
              { icon: "\uD83D\uDCCA", text: "Research = what's out there. Validation = is YOUR angle worth building" },
              { icon: "\u26A1", text: "It might be the most important ten minutes of Week 1" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T_FINAL })}
        />

        {/* Scene 14 – Closing */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene
            title="See You in the Next Video"
            subtitle="Up next: Validating Your Idea"
            showLogo
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
