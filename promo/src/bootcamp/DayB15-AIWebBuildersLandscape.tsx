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
import { DAYB15_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { BuilderToolsVisual } from "./visuals/BuilderToolsVisual";

export const DayB15AIWebBuildersLandscape: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="AI Web Builders Landscape" subtitle="Track B — Build Your Own Web App" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — paste a spec, app appears */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="THE DEMO" title="Spec In, App Out" bullets={[
            { icon: "📋", text: "You pasted a spec. The builder read it." },
            { icon: "⚡", text: "Pages, layout, navigation — under a minute" },
            { icon: "🏗️", text: "A real structure. The bones of something." },
            { icon: "🚀", text: "That's where we're starting today" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Four C's — callout + credibility */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene title="Why This Matters Now" bullets={[
            { icon: "📢", text: "You finished Week 2 with a spec — this bridges spec to app" },
            { icon: "🏆", text: "AI builders are the fastest path from idea to browser" },
            { icon: "💡", text: "They're trained to generate UI from plain English" },
            { icon: "📋", text: "That's exactly what your spec is" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Four C's — compass + core learning */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="TODAY'S GOAL" title="What You'll Walk Away With" bullets={[
            { icon: "🧭", text: "Understand what AI web builders do" },
            { icon: "🎯", text: "Know how to pick the right one for you" },
            { icon: "🏗️", text: "Have your first project scaffold generated" },
            { icon: "💡", text: "The goal isn't a finished app — it's a starting point" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. What AI builders actually do — two modes */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <ComparisonScene title="Two Modes of AI Building" leftCard={{
            title: "Code Generation", items: [
              { icon: "💻", text: "Generates code from a description" },
              { icon: "📁", text: "You see and edit the source" },
              { icon: "🔧", text: "More control, more complexity" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Visual Interface", items: [
              { icon: "🎨", text: "Generates visual UI that produces code" },
              { icon: "👀", text: "See results instantly" },
              { icon: "⚡", text: "Faster start, less control" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. What AI builds well */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene title="What AI Builders Are Good At" bullets={[
            { icon: "✅", text: "UI components — buttons, cards, layouts" },
            { icon: "✅", text: "Page layouts and navigation structure" },
            { icon: "✅", text: "Forms, inputs, and placeholder content" },
            { icon: "✅", text: "Turning a clear description into structure fast" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. What AI doesn't do */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="YOUR JOB" title="What AI Builders Won't Do" bullets={[
            { icon: "⚠️", text: "Know your business logic" },
            { icon: "⚠️", text: "Understand edge cases you haven't described" },
            { icon: "⚠️", text: "Make product decisions for you" },
            { icon: "💡", text: "You provide direction — AI provides speed" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Your spec matters */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene title="Your Week 2 Spec Matters" bullets={[
            { icon: "📋", text: "The more specific your description, the better the output" },
            { icon: "🎯", text: "Vague spec = vague scaffold" },
            { icon: "✅", text: "Detailed spec = meaningful head start" },
            { icon: "⚡", text: "This is why you spent a week writing it" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. The Four Tools overview */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <SplitVisualScene title="The Four Tools" bullets={[
            { icon: "💜", text: "Lovable — visual-first, plain language" },
            { icon: "▲", text: "v0 — UI components, clean output" },
            { icon: "⚡", text: "Bolt.new — full-stack, browser-based" },
            { icon: "🔧", text: "Replit — full dev environment" },
          ]} visual={<BuilderToolsVisual delay={30} />} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Lovable deep dive */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="LOVABLE" title="Describe It. Watch It Build." bullets={[
            { icon: "💜", text: "Designed for plain-language descriptions" },
            { icon: "🎨", text: "Visual-first — the app builds itself" },
            { icon: "⚡", text: "Great for moving fast without touching code" },
            { icon: "🎯", text: "Best for: people who want to describe and go" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. v0 deep dive */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="V0" title="Clean UI Components" bullets={[
            { icon: "▲", text: "By Vercel — strong at generating UI components" },
            { icon: "🎨", text: "Clean, polished output you'll customize later" },
            { icon: "💻", text: "Works well if you're comfortable with some code" },
            { icon: "🎯", text: "Best for: clean UI output you can dig into" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Bolt.new deep dive */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="BOLT.NEW" title="Full-Stack in Your Browser" bullets={[
            { icon: "⚡", text: "Generates full-stack apps in the browser" },
            { icon: "🔄", text: "Runs code live — see changes immediately" },
            { icon: "🏗️", text: "Great for iteration, everything in one place" },
            { icon: "🎯", text: "Best for: people who want to describe and build fast" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Replit deep dive */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="REPLIT" title="Full Dev Environment" bullets={[
            { icon: "🔧", text: "Complete development environment in your browser" },
            { icon: "💪", text: "More flexible and more powerful" },
            { icon: "🧩", text: "Better fit if you like exploring and customizing" },
            { icon: "🎯", text: "Best for: technical comfort or willingness to learn" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. How to pick — match your work style */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <ComparisonScene title="Which One Matches You?" leftCard={{
            title: "Describe & Build", items: [
              { icon: "💜", text: "Lovable — plain language to app" },
              { icon: "⚡", text: "Bolt.new — full-stack, one place" },
              { icon: "🎯", text: "No code touching required" },
            ],
          }} rightCard={{
            title: "Dig Into Output", items: [
              { icon: "▲", text: "v0 — clean UI to customize" },
              { icon: "🔧", text: "Replit — full flexibility" },
              { icon: "💻", text: "Some technical comfort" },
            ], accentColor: "#999",
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. Pick one, commit */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TextAndBulletsScene badge="KEY DECISION" title="Pick One. Commit for Two Weeks." bullets={[
            { icon: "🎯", text: "None of these is the 'best' tool — wrong question" },
            { icon: "⚠️", text: "Switching mid-build is the most common mistake" },
            { icon: "⏱️", text: "Every tool has its own patterns, exports, and quirks" },
            { icon: "✅", text: "The best tool is the one you'll actually use" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 16. Your first session diagram */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <DiagramScene title="Your First Session" steps={[
            { icon: "📋", label: "Paste Spec" },
            { icon: "⚡", label: "Generate" },
            { icon: "👀", label: "Review" },
            { icon: "🔧", label: "Refine" },
          ]} bgTint={TINT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 17. Checkpoint */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TextAndBulletsScene badge="CHECKPOINT" title="Name Your Project" bullets={[
            { icon: "✅", text: "You know what each builder does" },
            { icon: "✅", text: "You've picked one" },
            { icon: "✅", text: "You've pasted your spec and seen your first scaffold" },
            { icon: "🏗️", text: "That scaffold is your project — everything builds on it" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 18. Deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[17]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Your First Scaffold" bullets={[
            { icon: "1️⃣", text: "Pick your builder and open it" },
            { icon: "2️⃣", text: "Paste your Week 2 spec" },
            { icon: "3️⃣", text: "Generate your first scaffold" },
            { icon: "📸", text: "Share a screenshot in Discord — name your tool, name your app" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 19. Outro */}
        <TransitionSeries.Sequence durationInFrames={D[18]}>
          <TitleScene title="Spec to App Skeleton" subtitle="That's the foundation for Weeks 3 and 4" bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 20. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[19]}>
          <TitleScene title="See You on Day 16" subtitle="Tomorrow: find the hardest part before it surprises you" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
