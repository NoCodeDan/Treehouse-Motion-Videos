import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { TitleScene } from "../templates/TitleScene";
import { TextAndBulletsScene } from "../templates/TextAndBulletsScene";
import { SplitVisualScene } from "../templates/SplitVisualScene";
import { DiagramScene } from "../templates/DiagramScene";
import { ComparisonScene } from "../templates/ComparisonScene";
import { ACCENT_PURPLE, ACCENT_BLUE, TINT_GREEN, TINT_BLUE, TINT_PURPLE } from "../lib/brand";
import { DAYC27_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const DayC27WeeklyHabitSystem: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Weekly Habit System" subtitle="Track C — Build Your Own Data Dashboard" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Framing — project vs system */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <ComparisonScene title="Project vs. System" leftCard={{
            title: "Project", items: [
              { icon: "1️⃣", text: "Updated once" },
              { icon: "🏁", text: "Has a finish line" },
              { icon: "🗑️", text: "Built and forgotten" },
            ],
          }} rightCard={{
            title: "System", items: [
              { icon: "🔄", text: "Updated every week" },
              { icon: "♾️", text: "Keeps running" },
              { icon: "📈", text: "Stays useful over time" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Why dashboards get abandoned */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene title="Why Dashboards Get Abandoned" bullets={[
            { icon: "🔄", text: "The difference between a project and a system is a ritual" },
            { icon: "🧠", text: "A short, repeatable process that fits your existing routine" },
            { icon: "🚫", text: "When the process is unclear, even useful dashboards get abandoned" },
            { icon: "✅", text: "When the process is clear, you'll actually do it" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Today's goal */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <SplitVisualScene title="Today's Goal" bullets={[
            "Design a habit that takes ten minutes or less",
            "Keep your dashboard honest, current, and useful",
            "Build it for your schedule — not someone else's",
          ]} visual="checklist" bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Step 1 — Describe your workflow */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="STEP 1" title="Describe Your Workflow to AI" bullets={[
            { icon: "💬", text: "Tell Claude how you currently work" },
            { icon: "🕐", text: "When are you most likely to spend 10 minutes on something reflective?" },
            { icon: "🌅", text: "Do you prefer mornings or evenings?" },
            { icon: "📋", text: "Do you batch tasks or handle them daily?" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 2 — AI prompt */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 2" title="Use This Prompt" bullets={[
            { icon: "🤖", text: "\"Help me create a 10-minute weekly routine to keep this dashboard useful\"" },
            { icon: "🎯", text: "\"I want it to fit my schedule naturally, not feel like a chore\"" },
            { icon: "📝", text: "Read what AI produces — then adapt it to how you actually work" },
            { icon: "⚠️", text: "Match your real habits, not how you think you should work" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 3 — Three components diagram */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <DiagramScene title="Three Components of Your Ritual" steps={[
            { icon: "📅", label: "When" },
            { icon: "📋", label: "What" },
            { icon: "📍", label: "Where" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. When — specific time slot */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <ComparisonScene title="When: Pick a Specific Time" leftCard={{
            title: "Vague", items: [
              { icon: "❌", text: "\"Sometime on the weekend\"" },
              { icon: "❌", text: "\"When I have free time\"" },
              { icon: "❌", text: "\"Maybe Sunday\"" },
            ],
          }} rightCard={{
            title: "Specific", items: [
              { icon: "✅", text: "\"Every Sunday at 8pm\"" },
              { icon: "✅", text: "\"Monday morning before email\"" },
              { icon: "✅", text: "\"Friday after lunch\"" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. What — three exact actions */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="WHAT" title="Three Steps Maximum" bullets={[
            { icon: "1️⃣", text: "Add this week's data (5 minutes)" },
            { icon: "2️⃣", text: "Read your insight section and update if anything changed (3 minutes)" },
            { icon: "3️⃣", text: "Update your decision sentence for next week (2 minutes)" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Where — same environment every time */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="WHERE" title="Same Environment, Every Time" bullets={[
            { icon: "💻", text: "Same device, same context, every session" },
            { icon: "🔁", text: "Routine reduces friction" },
            { icon: "⚡", text: "Less setup time means you're more likely to do it" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Step 4 — Write it down */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="STEP 4" title="Write It Down Somewhere You'll See" bullets={[
            { icon: "📅", text: "Put it on your calendar as a recurring event" },
            { icon: "📌", text: "A sticky note on your laptop" },
            { icon: "📱", text: "A repeating task in whatever app you use" },
            { icon: "🔔", text: "It needs to surface automatically — don't rely on memory" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Reflection — failure modes */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene title="Design Around Failure" bullets={[
            { icon: "🚧", text: "What would make you skip this ritual?" },
            { icon: "🎯", text: "Design around your most likely failure mode" },
            { icon: "🚫", text: "If you usually skip Sunday evening tasks, don't schedule it then" },
            { icon: "🔄", text: "Be honest about your patterns, not aspirational" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Reflection — minimum viable ritual */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <SplitVisualScene title="The Minimum Useful Version" bullets={[
            "If you had five minutes instead of ten, what's the one thing you'd do?",
            "That's your floor — the version you do when life is full",
            "A small ritual done consistently beats a big one done never",
          ]} visual="checklist" bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. Deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene title="Your Deliverable" bullets={[
            { icon: "📦", text: "Your personal dashboard habit plan: when, what, and where" },
            { icon: "💬", text: "Share in Discord: your ritual, your schedule, your three-step process" },
            { icon: "🤝", text: "Accountability and specific formats help everyone build theirs" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 15. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TitleScene title="See You on Day 28" subtitle="Tomorrow: final reflection and what comes next" showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
