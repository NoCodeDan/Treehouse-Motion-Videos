import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { TitleScene } from "../templates/TitleScene";
import { TextAndBulletsScene } from "../templates/TextAndBulletsScene";
import { DiagramScene } from "../templates/DiagramScene";
import { ComparisonScene } from "../templates/ComparisonScene";
import { ACCENT_PURPLE, ACCENT_BLUE, TINT_GREEN, TINT_BLUE, TINT_PURPLE } from "../lib/brand";
import { DAY16_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const Day16TestBreakImprove: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 - Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Test, Break, and Improve" subtitle="Day 16 — Find out what you really built" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 2 - Hook: An agent that works once */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene title="A Lucky Prompt vs. A Real Agent" bullets={[
            { icon: "🎲", text: "An agent that works once isn't an agent — it's a lucky prompt" },
            { icon: "📅", text: "A real agent works on Tuesday AND Thursday" },
            { icon: "🔇", text: "It handles clear inputs and messy ones" },
            { icon: "💥", text: "When it fails, it fails obviously — not quietly mid-paragraph" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 3 - Don't Skip Ahead */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene title="Don't Skip This Step" bullets={[
            { icon: "⚠️", text: "This is where most people skip ahead" },
            { icon: "🔑", text: "The difference between frustrating and reliable?" },
            { icon: "🎯", text: "Almost always comes down to what you find in this exercise" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 4 - Three Phases Overview */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <DiagramScene title="Three Phases" steps={[
            { icon: "▶️", label: "Run It 3x" },
            { icon: "💥", label: "Break It" },
            { icon: "🔧", label: "Fix One Thing" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 5 - Phase 1: Run It 3 Times */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="PHASE 1" title="Run It 3 Times" bullets={[
            { icon: "📋", text: "Give your agent 3 different real inputs" },
            { icon: "🚫", text: "Not test data — actual things from your work or life" },
            { icon: "👀", text: "Watch what happens across all three" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 6 - Phase 1 Detail: Consistency Check */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="PHASE 1" title="What to Watch For" bullets={[
            { icon: "📐", text: "Does the output format stay consistent across runs?" },
            { icon: "🔄", text: "Does it handle each input the same way?" },
            { icon: "📝", text: "Note every difference — that's your reliability map" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 7 - Phase 2: Try to Break It */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="PHASE 2" title="Try to Break It" bullets={[
            { icon: "🌫️", text: "Vague input — \"Just make it good.\"" },
            { icon: "🚧", text: "Out-of-scope input — something it was never meant to handle" },
            { icon: "📚", text: "Too much information — a wall of unstructured text" },
            { icon: "⚔️", text: "Contradictory instructions — \"Keep it short but be thorough\"" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 8 - Phase 2 Detail: How Does It Fail? */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <ComparisonScene title="How Does It Respond?" leftCard={{
            title: "Bad Signs",
            items: [
              { icon: "💨", text: "Pushes through with garbage output" },
              { icon: "🤥", text: "Produces something confidently wrong" },
              { icon: "🙈", text: "Ignores the problem entirely" },
            ],
            accentColor: "#E74C3C",
          }} rightCard={{
            title: "Good Signs",
            items: [
              { icon: "❓", text: "Asks for clarification" },
              { icon: "🛑", text: "Flags that input is outside scope" },
              { icon: "📋", text: "Follows guardrails even under pressure" },
            ],
            accentColor: "#27AE60",
          }} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 9 - Phase 3: Fix One Thing */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="PHASE 3" title="Fix One Thing" bullets={[
            { icon: "1️⃣", text: "You don't need to fix everything right now" },
            { icon: "🎯", text: "Pick the single weakness that most impacts output quality" },
            { icon: "✏️", text: "Update your Claude Project instructions to address it" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 10 - Phase 3 Detail: Retest */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="PHASE 3" title="The Retest" bullets={[
            { icon: "🔄", text: "Run your agent again with the same input that caused the problem" },
            { icon: "📊", text: "Compare the before and after output" },
            { icon: "✅", text: "Did it improve? That's your feedback loop" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 11 - Reflection: Assumptions & Consistency */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene title="Reflect: Assumptions & Format" bullets={[
            { icon: "🤔", text: "Where did it make assumptions you didn't want?" },
            { icon: "💡", text: "That often means your instructions are too vague in one spot" },
            { icon: "📐", text: "Was output format consistent across all 3 real runs?" },
            { icon: "📝", text: "If not, your format instructions need to be more explicit" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 12 - Reflection: Questions & Impact */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene title="Reflect: Gaps & Impact" bullets={[
            { icon: "❓", text: "What would it need to ask you before starting?" },
            { icon: "📥", text: "Those questions belong in your instructions as required inputs" },
            { icon: "🎯", text: "What single change would have the biggest impact on quality?" },
            { icon: "🔧", text: "That's what you're fixing today" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 13 - Deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene title="Your Deliverable" bullets={[
            { icon: "📄", text: "Updated Claude Project instructions — call it v1.1" },
            { icon: "✍️", text: "A short reflection note (3-5 sentences)" },
            { icon: "🔑", text: "Explain what you changed and why" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 14 - Discord Share */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene title="Share Your Before & After" bullets={[
            { icon: "📸", text: "Post what the instructions looked like before your fix" },
            { icon: "📸", text: "Show what they look like now" },
            { icon: "🌟", text: "These before/afters are the most useful posts in this community" },
            { icon: "🤝", text: "Other people are hitting the same walls" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* Scene 15 - Closing */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TitleScene title="Instructions v1.1" subtitle="Test it. Break it. Fix the one thing that matters most." showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
