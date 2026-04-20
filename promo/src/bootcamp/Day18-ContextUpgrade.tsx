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
import { DAY18_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const Day18ContextUpgrade: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 - Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Context Upgrade" subtitle="Day 18 — Let your agent interview YOU" showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 2 - Hook: The Right Instinct */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene title="The Right Instinct, Wrong Approach" bullets={[
            { icon: "🤔", text: "Most people try to improve by tweaking instructions" },
            { icon: "🎯", text: "Right instinct — but what should instructions actually say?" },
            { icon: "💡", text: "Today you answer that by asking your agent to interview you" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 3 - Why This Works */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene title="Why This Works" bullets={[
            { icon: "🧠", text: "Your agent knows what it's missing better than you do" },
            { icon: "🔍", text: "It's the one producing output without the right context" },
            { icon: "🚀", text: "This exercise surfaces context gaps you don't know you have" },
            { icon: "🔗", text: "The fastest way to close the gap between good and great" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 4 - The Context Interview */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="THE EXERCISE" title="The Context Interview" bullets={[
            { icon: "🎤", text: "Open Claude Code and give your agent this instruction:" },
            { icon: "💬", text: '"Interview me first. Ask 5-10 questions that would help you do a better job."' },
            { icon: "⏸️", text: '"Wait for my answers. Then use them to produce better output."' },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 5 - How to Answer */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <ComparisonScene title="How to Answer the Interview" leftCard={{
            title: "Don't Do This", items: [
              { icon: "❌", text: "Give it what you think it wants" },
              { icon: "❌", text: "Keep answers generic or vague" },
              { icon: "❌", text: "Skip questions that feel hard" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Do This Instead", items: [
              { icon: "✅", text: "Answer honestly — give what's actually true" },
              { icon: "✅", text: "Be specific about your situation" },
              { icon: "✅", text: "Then let it run with the new context" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 6 - After the Interview: Compare */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <DiagramScene title="After the Interview" steps={[
            { icon: "📊", label: "Compare to Day 16-17" },
            { icon: "🎯", label: "Find the Best Question" },
            { icon: "📝", label: "Update CLAUDE.md" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 7 - The Permanent Upgrade */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="KEY INSIGHT" title="The Permanent Upgrade" bullets={[
            { icon: "🎯", text: "Identify the ONE question that made the biggest difference" },
            { icon: "📝", text: "That question represents a gap in your instructions" },
            { icon: "🔒", text: "Update your CLAUDE.md with the new context — permanently" },
            { icon: "⬆️", text: "Closing it permanently is the upgrade" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 8 - Reflection: Surprise Questions */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="REFLECTION" title="Questions to Sit With" bullets={[
            { icon: "😮", text: "Which question surprised you — one you hadn't thought to include?" },
            { icon: "➡️", text: "That answer belongs in your CLAUDE.md now" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 9 - Reflection: Wrong Assumptions */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene title="Fix the Assumption, Not the Output" bullets={[
            { icon: "❌", text: "Did any question reveal a wrong assumption your agent was making?" },
            { icon: "🔧", text: "Fix the assumption in your instructions — not just the output" },
            { icon: "📈", text: "What context did you give today that you couldn't have on Day 15?" },
            { icon: "🤝", text: "This is what 'getting to know your agent' looks like" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 10 - Mid-Week Check-In */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="MID-WEEK CHECK" title="Pause and Take Stock" bullets={[
            { icon: "✅", text: "Running in Claude Code? You're on track. Keep going." },
            { icon: "🆘", text: "Stuck on setup? Post in Discord — one message usually unblocks you in 10 min" },
            { icon: "🔄", text: "Questioning your agent's job? This is the right moment to pivot" },
            { icon: "🚀", text: "Ahead of schedule? Add a second input type and test variety" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 11 - Why Pivoting Now Is Smart */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene title="If You're Questioning the Job" bullets={[
            { icon: "⚡", text: "Switching now is faster than polishing something you won't use" },
            { icon: "🧭", text: "Week 3 ends soon — better to pivot now than in Week 4" },
            { icon: "🎯", text: "A real task you actually need > a clever task you never run" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 12 - Deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="What You're Producing Today" bullets={[
            { icon: "📝", text: "An updated CLAUDE.md with richer context from the interview" },
            { icon: "📊", text: "One improved output to compare against your previous results" },
            { icon: "💬", text: "Discord Share: What question did your agent ask that you hadn't thought of?" },
            { icon: "🌟", text: "These questions are often the most useful thing in the whole channel" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 13 - Outro */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TitleScene title="Richer Context = Better Output" subtitle="Your agent knows what it needs — now your CLAUDE.md does too" bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* Scene 14 - Closing */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="See You on Day 19" subtitle="Tomorrow: making your agent reliable" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
