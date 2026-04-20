import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { TitleScene } from "../templates/TitleScene";
import { TextAndBulletsScene } from "../templates/TextAndBulletsScene";
import { DiagramScene } from "../templates/DiagramScene";
import { ComparisonScene } from "../templates/ComparisonScene";
import { SplitVisualScene } from "../templates/SplitVisualScene";
import { ACCENT_PURPLE, ACCENT_BLUE, TINT_GREEN, TINT_BLUE, TINT_PURPLE } from "../lib/brand";
import { DAY24_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const Day24BuildSprint: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 - Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Build Sprint: Agent v2" subtitle="Day 24 — One meaningful improvement" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 2 - Framing: You've done the work, now build */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene title="You've Done the Work" bullets={[
            { icon: "🧪", text: "You've tested, reflected, gathered real inputs" },
            { icon: "📋", text: "You planned an upgrade on Day 21" },
            { icon: "📊", text: "You gathered real-world data on Day 23" },
            { icon: "🔨", text: "Today you build it" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 3 - One Upgrade, Not Three Tweaks */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene title="One Upgrade, Not Three Tweaks" bullets={[
            { icon: "🎯", text: "The goal is one meaningful improvement" },
            { icon: "⚠️", text: "Three small tweaks feel like progress" },
            { icon: "🔀", text: "But they leave you with a messier agent than you started with" },
            { icon: "✅", text: "One real upgrade — better inputs, context, workflow, or output" },
            { icon: "📏", text: "Creates a noticeable difference you can measure" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 4 - Focus. Build. Test. */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <DiagramScene title="Today's Mantra" steps={[
            { icon: "🎯", label: "Focus" },
            { icon: "🔨", label: "Build" },
            { icon: "🧪", label: "Test" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 5 - v2 Build Checklist Overview */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="CHECKLIST" title="Your v2 Build Checklist" bullets={[
            { icon: "1️⃣", text: "Implement your upgrade from the Day 21 plan" },
            { icon: "2️⃣", text: "Update your CLAUDE.md — keep it clean" },
            { icon: "3️⃣", text: "Add one validation step (self-check before output)" },
            { icon: "4️⃣", text: "Run on all 3 real inputs from Day 23" },
            { icon: "5️⃣", text: "Update HOW-TO-RUN.md if anything changed" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 6 - Step 1: Implement Your Upgrade */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 1" title="Implement Your Upgrade" bullets={[
            { icon: "📋", text: "Go back to your Day 21 v2 plan" },
            { icon: "🔄", text: "If your plan changed based on Day 23 — that's fine" },
            { icon: "🎯", text: "Build what's most useful now" },
            { icon: "🔨", text: "One thing. Build it well." },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 7 - Step 2: Update CLAUDE.md */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="STEP 2" title="Update Your CLAUDE.md" bullets={[
            { icon: "📝", text: "Add new instructions, context, or output format rules" },
            { icon: "🧹", text: "Delete old instructions that no longer apply" },
            { icon: "✨", text: "Keep it clean — clarity beats volume" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 8 - Step 3: Add a Validation Step */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="STEP 3" title="Add One Validation Step" bullets={[
            { icon: "🔍", text: "Have your agent check its own work before finalizing" },
            { icon: "📋", text: "List specific quality criteria it must review against" },
            { icon: "🔄", text: "If it doesn't meet them — revise before returning output" },
            { icon: "💡", text: "Even a simple self-check catches obvious mistakes" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 9 - Validation Prompt Example */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <SplitVisualScene title="The Validation Prompt" bullets={[
            { icon: "💬", text: "\"Before you give me your final output...\"" },
            { icon: "📋", text: "\"Review it against these criteria: [list]\"" },
            { icon: "🔄", text: "\"If it doesn't meet them, revise.\"" },
          ]} visual={
            <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 24, background: "rgba(0,0,0,0.05)", borderRadius: 16, fontFamily: "monospace", fontSize: 18, lineHeight: 1.6 }}>
              <div style={{ fontWeight: "bold", color: ACCENT_PURPLE }}>Add to CLAUDE.md:</div>
              <div style={{ color: "#333" }}>Before finalizing output,</div>
              <div style={{ color: "#333" }}>review against:</div>
              <div style={{ paddingLeft: 16, color: "#555" }}>- Matches requested format?</div>
              <div style={{ paddingLeft: 16, color: "#555" }}>- Addresses all inputs?</div>
              <div style={{ paddingLeft: 16, color: "#555" }}>- No hallucinated data?</div>
              <div style={{ color: "#333" }}>If not, revise before returning.</div>
            </div>
          } bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 10 - Step 4: Run on All 3 Real Inputs */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="STEP 4" title="Run on All 3 Real Inputs" bullets={[
            { icon: "▶️", text: "Use the same 3 real inputs from Day 23" },
            { icon: "📊", text: "Outputs should be noticeably better than Day 23" },
            { icon: "⚠️", text: "If they're not — the upgrade didn't land" },
            { icon: "🔧", text: "Go back and adjust before moving on" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 11 - Comparison: Day 23 vs Day 24 */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <ComparisonScene title="The Measure of Success" leftCard={{
            title: "Day 23 Output", items: [
              { icon: "📝", text: "First pass with real inputs" },
              { icon: "🔍", text: "Exposed gaps and weak spots" },
              { icon: "📋", text: "Baseline for comparison" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Day 24 Output", items: [
              { icon: "✅", text: "Upgrade applied and tested" },
              { icon: "🔒", text: "Validation step catches mistakes" },
              { icon: "📈", text: "Consistently better results" },
            ],
          }} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 12 - Reflection Prompts */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="REFLECT" title="Reflection Prompts" bullets={[
            { icon: "🤔", text: "Did the upgrade you planned actually work?" },
            { icon: "📊", text: "Is output from all 3 runs consistently better than Day 23?" },
            { icon: "🔍", text: "Did the validation step catch anything?" },
            { icon: "💡", text: "If it caught nothing — make the criteria more specific" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 13 - Mid-Week Check-In */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="MID-WEEK CHECK" title="Where Are You?" bullets={[
            { icon: "✅", text: "On track? Agent v2 handles real inputs consistently. Day 26 is ship day." },
            { icon: "🔧", text: "Behind? Simplify. Get ONE real input working with consistent output." },
            { icon: "🚀", text: "Ahead? Add a second integration or create two output formats." },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 14 - Outro */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="Better Than Day 23?" subtitle="Real data over hype, always" bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* Scene 15 - Closing */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TitleScene title="See You on Day 25" subtitle="Tomorrow: stress test your agent v2" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
