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
import { DAYC18_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const DayC18InsightDiscovery: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Insight Discovery" subtitle="Track C — Build Your Own Data Dashboard" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Framing — chart to meaning */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="THE SHIFT" title="From Chart to Meaning" bullets={[
            { icon: "📊", text: "You collected the data. You built the chart." },
            { icon: "🔍", text: "Today you find out what it actually means" },
            { icon: "💡", text: "A chart tells you what happened — AI helps you see why it matters" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. The step most people skip */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="KEY INSIGHT" title="The Step Most People Skip" bullets={[
            { icon: "⏭️", text: "This is the most valuable step — and the most skipped" },
            { icon: "🧩", text: "AI spots patterns you missed and questions you should be asking" },
            { icon: "👀", text: "Sometimes the pattern is obvious once someone points it out" },
            { icon: "🎯", text: "Sometimes it surprises you — either way, you leave with something to act on" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. The frame — you decide */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <ComparisonScene title="The Frame" leftCard={{
            title: "What AI Does",
            items: [
              { icon: "👁️", text: "A second set of eyes on your information" },
              { icon: "🔍", text: "Surfaces patterns in data right in front of you" },
              { icon: "📊", text: "Pattern-matching, not analyzing your life" },
            ],
          }} rightCard={{
            title: "What You Do",
            items: [
              { icon: "🧠", text: "You decide what to do about it" },
              { icon: "✅", text: "You're not handing decisions to a machine" },
              { icon: "🎯", text: "You collected the data — AI helps you see it" },
            ],
          }} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Step 1: Share with AI */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="STEP 1" title="Share Your Chart or Data with AI" bullets={[
            { icon: "📷", text: "Option A: screenshot of your dashboard with a description" },
            { icon: "📋", text: "Option B: raw data, pasted directly into the conversation" },
            { icon: "💬", text: "Open Claude or whatever AI you've been using" },
            { icon: "🎯", text: "Tell AI what the data represents and where it came from" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 2: Run the insight prompt */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 2" title="Run the Insight Prompt" bullets={[
            { icon: "💬", text: "\"Look at this data and tell me 3 insights I might be missing\"" },
            { icon: "📖", text: "Read the response carefully" },
            { icon: "⚠️", text: "Don't accept all of it as fact — AI is pattern-matching" },
            { icon: "🔍", text: "Notice what it surfaces — what did it catch that you hadn't?" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 3: Push further */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <DiagramScene title="Step 3: Push Further" steps={[
            { icon: "🔍", label: "Initial patterns" },
            { icon: "❓", label: "Why does this pattern exist?" },
            { icon: "🔗", label: "What might be causing it?" },
            { icon: "📐", label: "What should I track differently?" },
            { icon: "💡", label: "Real insight" },
          ]} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Step 3 follow-up prompts */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="FOLLOW-UP PROMPTS" title="If Something Catches Your Attention" bullets={[
            { icon: "💬", text: "\"Why do you think that pattern exists? What might be causing it?\"" },
            { icon: "💬", text: "\"What would I need to track differently to understand this better?\"" },
            { icon: "🎯", text: "One of the three insights will feel significant — chase that one" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Step 4: Write one insight */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="STEP 4" title="Write One Insight in Plain English" bullets={[
            { icon: "✍️", text: "Not a chart label — a sentence that means something to you" },
            { icon: "📊", text: "Backed by the data you just explored" },
            { icon: "🎯", text: "Someone who has never seen your data should understand it" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Example insight */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="EXAMPLE" title="What a Real Insight Looks Like" bullets={[
            { icon: "💡", text: "\"My most productive hours are before 10am, but I schedule meetings during that window\"" },
            { icon: "📝", text: "That's an insight — specific, personal, and actionable" },
            { icon: "🎯", text: "Write yours down — one sentence, plain English" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Reflection prompts */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="REFLECT" title="Three Questions to Ask Yourself" bullets={[
            { icon: "😲", text: "What surprised you? The gap between expectation and data is where the value is" },
            { icon: "✅", text: "What confirms what you already felt? Data validating ignored instincts is still useful" },
            { icon: "🔄", text: "What would you change next week? The whole point of a dashboard is a decision — name one" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Share Your Insight" bullets={[
            { icon: "📝", text: "One insight written in plain English — a sentence or two" },
            { icon: "💬", text: "Post to Discord — even a tentative one counts" },
            { icon: "🤔", text: "\"I think I might be spending twice as long on X as I thought\" — that's real" },
            { icon: "👥", text: "The community's reaction helps you figure out if it's significant" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Reflection */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TitleScene title="You Found Meaning in Your Data" subtitle="Tomorrow: tell the story your data wants to tell" bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 14. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="See You on Day 19" subtitle="Tomorrow: data storytelling" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
