import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { TitleScene } from "../templates/TitleScene";
import { TextAndBulletsScene } from "../templates/TextAndBulletsScene";
import { ComparisonScene } from "../templates/ComparisonScene";
import { SplitVisualScene } from "../templates/SplitVisualScene";
import { ACCENT_PURPLE, ACCENT_BLUE, TINT_GREEN, TINT_BLUE, TINT_PURPLE } from "../lib/brand";
import { DAY25_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const Day25StressTest: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 - Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Stress Test" subtitle="Day 25 — Find out what happens when things go wrong" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 2 - Framing: You've been feeding it good inputs */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene title="You've Been Playing Nice" bullets={[
            { icon: "✅", text: "Well-formatted inputs. Reasonably complete." },
            { icon: "🎯", text: "Close to what you intended it to receive" },
            { icon: "🧪", text: "Good inputs make any agent look good" },
            { icon: "🌍", text: "The real world won't be this generous" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 3 - Your future self won't be careful */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene title="Your Future Self Won't Be Careful" bullets={[
            { icon: "☕", text: "Rushed Monday morning — messy paste, missing context" },
            { icon: "🌊", text: "Inputs get messy. Context goes missing." },
            { icon: "💥", text: "Someone pastes in something your agent was never designed to handle" },
            { icon: "🔍", text: "Today you find out what happens — before it matters" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 4 - The goal: fail gracefully */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene title="The Goal Isn't Indestructible" bullets={[
            { icon: "🛡️", text: "You can't prevent every bad input" },
            { icon: "🎯", text: "The goal: fail gracefully — clearly, obviously" },
            { icon: "🚫", text: "Without pretending to produce something it can't" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 5 - Test 1: Missing Context */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="TEST 1" title="Missing Context" bullets={[
            { icon: "❓", text: "Remove a critical piece of information it needs" },
            { icon: "🤔", text: "Does it ask for what's missing?" },
            { icon: "😬", text: "Does it proceed anyway and guess?" },
            { icon: "🤥", text: "Does it produce confident-sounding output based on nothing?" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 6 - Test 2: Contradictory Input */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="TEST 2" title="Contradictory Input" bullets={[
            { icon: "⚔️", text: "\"Make this urgent but keep the tone casual\"" },
            { icon: "📏", text: "\"Make it short but include all the details\"" },
            { icon: "🚩", text: "Does it flag the contradiction?" },
            { icon: "🎲", text: "Or does it produce something that satisfies neither?" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 7 - Test 3: Messy Text */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="TEST 3" title="Messy Text" bullets={[
            { icon: "📝", text: "Paste in unformatted, stream-of-consciousness notes" },
            { icon: "💭", text: "The kind of thing you'd actually produce in a rush" },
            { icon: "🔍", text: "Can it still extract what it needs?" },
            { icon: "📊", text: "Does it produce good output from bad input?" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 8 - Test 4: Out of Scope */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="TEST 4" title="Out-of-Scope Request" bullets={[
            { icon: "🚧", text: "Ask it to do something it was never designed for" },
            { icon: "🏷️", text: "Something completely outside its job description" },
            { icon: "🛑", text: "Does it refuse clearly?" },
            { icon: "🤷", text: "Or does it attempt an answer anyway?" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 9 - Test 5: Input Overload */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="TEST 5" title="Input Overload" bullets={[
            { icon: "📚", text: "Give it 5x the normal amount of information" },
            { icon: "📊", text: "Does the output quality hold up?" },
            { icon: "🔀", text: "Does it start dropping things or conflating details?" },
            { icon: "🧵", text: "Does it lose the thread entirely?" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 10 - How it fails matters — comparison */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <ComparisonScene title="How It Fails Matters" leftCard={{
            title: "Silent Failures",
            items: [
              { icon: "💨", text: "Pushes through with confident nonsense" },
              { icon: "🙈", text: "Ignores the problem entirely" },
              { icon: "🤥", text: "Produces output based on nothing" },
            ],
            accentColor: "#E74C3C",
          }} rightCard={{
            title: "Graceful Failures",
            items: [
              { icon: "❓", text: "Asks for what's missing" },
              { icon: "🚩", text: "Flags contradictions before proceeding" },
              { icon: "🛑", text: "Refuses what's outside its scope" },
            ],
            accentColor: "#27AE60",
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 11 - The fix: add guardrails for each failure */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="THE FIX" title="Add a Guardrail for Each Failure" bullets={[
            { icon: "🔧", text: "For every failure you found, write a guardrail" },
            { icon: "📝", text: "Add them to your CLAUDE.md" },
            { icon: "🛡️", text: "Each guardrail should prevent that specific failure" },
            { icon: "🔄", text: "Then retest — does the behavior actually change?" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 12 - Guardrail format */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <SplitVisualScene title="The Guardrail Format" bullets={[
            { icon: "📋", text: "If [situation], then [specific behavior]" },
            { icon: "💡", text: "Situation = what went wrong in your test" },
            { icon: "🎯", text: "Behavior = exactly what the agent should do instead" },
          ]} visual={
            <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 24, background: "rgba(0,0,0,0.05)", borderRadius: 16, fontFamily: "monospace", fontSize: 18, lineHeight: 1.6 }}>
              <div style={{ fontWeight: "bold", marginBottom: 8 }}>Example:</div>
              <div style={{ color: "#6C3483" }}>&quot;If the input is missing a context section, ask one clarifying question before proceeding.&quot;</div>
              <div style={{ color: "#E74C3C", marginTop: 8 }}>&quot;Do not guess.&quot;</div>
            </div>
          } bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 13 - Guardrail examples: specific beats vague */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <ComparisonScene title="Specific Beats Vague" leftCard={{
            title: "Vague Guardrail",
            items: [
              { icon: "🌫️", text: "\"Handle bad inputs well\"" },
              { icon: "🌫️", text: "\"Be careful with missing info\"" },
              { icon: "🌫️", text: "\"Don't go off topic\"" },
            ],
            accentColor: "#E74C3C",
          }} rightCard={{
            title: "Specific Guardrail",
            items: [
              { icon: "🎯", text: "\"If input < 50 words, ask for more context\"" },
              { icon: "🎯", text: "\"If no audience specified, ask before writing\"" },
              { icon: "🎯", text: "\"If asked to code, say: that's not my job\"" },
            ],
            accentColor: "#27AE60",
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 14 - Reflection */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene title="Reflection" bullets={[
            { icon: "😮", text: "Which failure surprised you most? That one matters most to address." },
            { icon: "💪", text: "Where did it perform better than expected? Your earlier work is solid." },
            { icon: "📐", text: "Are your guardrails specific enough to actually change behavior?" },
            { icon: "✏️", text: "Vague guardrails don't work. Rewrite them until they're specific." },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 15 - Deliverable + Discord */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TextAndBulletsScene title="Deliverable + Discord Share" bullets={[
            { icon: "📄", text: "Updated CLAUDE.md with at least 3 new guardrails" },
            { icon: "🧪", text: "Each based on today's edge case experiments" },
            { icon: "💬", text: "Discord: What was the weirdest way your agent failed?" },
            { icon: "🌟", text: "Real failures are more useful than polished wins" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 16 - Outro */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TitleScene title="At Least 3 New Guardrails" subtitle="Your CLAUDE.md is getting stronger with every test" bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* Scene 17 - Closing */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TitleScene title="See You on Day 26" subtitle="Tomorrow: ship day — launch your agent" showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
