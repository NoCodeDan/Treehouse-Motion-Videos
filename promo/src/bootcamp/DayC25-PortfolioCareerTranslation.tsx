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
import { DAYC25_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const DayC25PortfolioCareerTranslation: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Portfolio + Career Translation" subtitle="Track C — Build Your Own Data Dashboard" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Framing — you built something, now explain it */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene title="You Built Something. Now Explain It." bullets={[
            { icon: "📊", text: "You built a real data dashboard over the last few days" },
            { icon: "🧠", text: "That might sound like a small next step — it isn't" },
            { icon: "💼", text: "Explaining a project as a skill demonstration is one of the most valuable career moves you can make" },
            { icon: "🚀", text: "Even a personal project, even a rough one — it counts" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Why this matters — recruiter perspective */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene title="What Recruiters Actually Care About" bullets={[
            { icon: "🚫", text: "They don't care that you tracked your own spending" },
            { icon: "✅", text: "They care that you identified a problem" },
            { icon: "📋", text: "Collected data, built something to analyze it, drew a conclusion" },
            { icon: "🔄", text: "And changed your behavior because of it" },
            { icon: "💡", text: "That's data literacy. That's systems thinking. That's what they're looking for." },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Career switcher unlock — comparison */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <ComparisonScene title="Especially If You're Switching Careers" leftCard={{
            title: "What You Did",
            items: [
              { icon: "📊", text: "Tracked personal data" },
              { icon: "🔧", text: "Built a dashboard" },
              { icon: "🤖", text: "Used AI to analyze it" },
            ],
          }} rightCard={{
            title: "What It Demonstrates",
            items: [
              { icon: "🧠", text: "Data literacy" },
              { icon: "📐", text: "Systems thinking" },
              { icon: "💬", text: "Insight communication" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Step 1: Describe your dashboard to AI */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="STEP 1" title="Describe Your Dashboard to AI" bullets={[
            { icon: "💬", text: "Open Claude and write a plain-English description" },
            { icon: "📋", text: "Tell it what your dashboard does and why you built it" },
            { icon: "📊", text: "Include the data source, metrics, and what you learned" },
            { icon: "🎯", text: "Be specific — the more detail, the better the translation" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 1 detail: four questions to answer */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 1" title="Four Questions to Answer" bullets={[
            { icon: "❓", text: "What question were you trying to answer?" },
            { icon: "📦", text: "What data did you use?" },
            { icon: "🔧", text: "What did you build?" },
            { icon: "💡", text: "What did you learn or decide because of it?" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 2: Skills translation prompt */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="STEP 2" title="Use the Skills Translation Prompt" bullets={[
            { icon: "🤖", text: "\"Help me explain this dashboard as a portfolio project\"" },
            { icon: "🔍", text: "\"What skills does it demonstrate?\"" },
            { icon: "💼", text: "\"How would I describe it to a recruiter or hiring manager?\"" },
            { icon: "📖", text: "Read the response — it will name skills you didn't realize you had" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Hidden skills — what AI reveals */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene title="Skills You Didn't Know You Were Demonstrating" bullets={[
            { icon: "📊", text: "Data collection and cleaning" },
            { icon: "📐", text: "Problem framing and scoping" },
            { icon: "🤖", text: "AI-assisted analysis and automation" },
            { icon: "📈", text: "Visualization and insight communication" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Step 3: Write your 1-paragraph case study */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="STEP 3" title="Write Your 1-Paragraph Case Study" bullets={[
            { icon: "📝", text: "Use what AI gave you, but write it in your own words" },
            { icon: "🎯", text: "This paragraph becomes a portfolio entry, a LinkedIn post, or a job application bullet" },
            { icon: "✍️", text: "Keep it tight — one clear paragraph that tells the whole story" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Case study structure diagram */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <DiagramScene title="Case Study Structure" steps={[
            { icon: "❓", label: "Problem you solved" },
            { icon: "🔧", label: "What you built + how" },
            { icon: "📊", label: "Insight or decision" },
            { icon: "💡", label: "Skill it demonstrates" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Reflection: what skill does this demonstrate? */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene title="Reflection: Name the Real Skills" bullets={[
            { icon: "🚫", text: "Not \"I made a chart\"" },
            { icon: "🧠", text: "Think about what it took — problem framing, data collection, analysis" },
            { icon: "💬", text: "Communication, decision-making, tool selection" },
            { icon: "📋", text: "Name those things explicitly — that's what goes on a resume" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Reflection: what problem + what insight */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene title="Reflection: Problem and Insight" bullets={[
            { icon: "🎯", text: "What problem did it solve? Be specific and real." },
            { icon: "🚫", text: "Not \"I understand data better\"" },
            { icon: "✅", text: "\"I found that 40% of my time went to tasks I could batch or eliminate\"" },
            { icon: "💡", text: "One concrete thing you know now that you didn't know two weeks ago" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Deliverable — post your case study */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene title="Your Deliverable" bullets={[
            { icon: "📝", text: "A 1-paragraph case study describing your dashboard as a portfolio project" },
            { icon: "💬", text: "Post it in Discord — useful for your own feedback and for others" },
            { icon: "🤝", text: "Help others figure out how to talk about what they built" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 14. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="See You on Day 26" subtitle="Tomorrow: ship, publish, and showcase" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
