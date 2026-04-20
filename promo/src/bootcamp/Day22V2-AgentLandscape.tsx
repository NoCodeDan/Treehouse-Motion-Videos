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
import { DAY22V2_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { AgentLandscapeVisual } from "./visuals/AgentLandscapeVisual";

export const Day22V2AgentLandscape: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="The AI Agent Landscape" subtitle="Your Map — Five categories, five minutes" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — what are all those other tools? */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="THE QUESTION" title="What Are All Those Other Tools?" bullets={[
            { icon: "🤔", text: "You've been building with Claude Code" },
            { icon: "💬", text: "You keep hearing about other tools people mention" },
            { icon: "🗺️", text: "This video is the answer — your map of the landscape" },
            { icon: "🎯", text: "You'll know what everything is and where it fits" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Five categories overview + visual */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <SplitVisualScene title="Five Categories of Agent Tools" bullets={[
            { icon: "🔗", text: "No-code automation builders" },
            { icon: "🤖", text: "Dedicated agent platforms" },
            { icon: "💻", text: "Code frameworks" },
            { icon: "✨", text: "Vibe coding tools" },
            { icon: "🟢", text: "Claude Code — where you are now" },
          ]} visual={<AgentLandscapeVisual delay={30} />} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. No-code automation */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="CATEGORY 1" title="No-Code Automation Builders" bullets={[
            { icon: "🔗", text: "Zapier AI, Make, n8n" },
            { icon: "✅", text: "Connect apps with if/then logic plus AI" },
            { icon: "📧", text: "Trigger from email → process with AI → save to Notion" },
            { icon: "⚠️", text: "Not great for complex reasoning or long multi-step tasks" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. No-code automation — when to use */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="CATEGORY 1" title="When No-Code Automation Shines" bullets={[
            { icon: "🔄", text: "Your agent's job is moving data between tools" },
            { icon: "⚡", text: "Excellent for workflows you can describe as a flowchart" },
            { icon: "📊", text: "Best for repetitive, predictable automations" },
            { icon: "🧠", text: "AI handles the processing step, not the orchestration" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Dedicated agent platforms */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="CATEGORY 2" title="Dedicated Agent Platforms" bullets={[
            { icon: "🤖", text: "Relevance AI, Dify, Voiceflow" },
            { icon: "🎨", text: "Visual builders designed specifically for AI agents" },
            { icon: "👥", text: "Strong for customer-facing agents with polished interfaces" },
            { icon: "⚠️", text: "Less suited for personal productivity tools" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Agent platforms — detail */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="CATEGORY 2" title="Agent Platforms — The Sweet Spot" bullets={[
            { icon: "💬", text: "Build chatbots that other people interact with" },
            { icon: "🖥️", text: "Polished UI out of the box — no design needed" },
            { icon: "🎯", text: "Best when you need something external-facing" },
            { icon: "📋", text: "Think customer support, onboarding, guided flows" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Code frameworks */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="CATEGORY 3" title="Code Frameworks" bullets={[
            { icon: "💻", text: "LangChain, CrewAI" },
            { icon: "🔧", text: "Maximum control over agent architecture" },
            { icon: "🧩", text: "Complex multi-step workflows, custom memory systems" },
            { icon: "📈", text: "High ceiling, high learning curve" },
            { icon: "👨‍💻", text: "Built for developers who want to code every layer" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Vibe coding tools */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="CATEGORY 4" title="Vibe Coding Tools" bullets={[
            { icon: "✨", text: "Lovable, Bolt, Cursor" },
            { icon: "🚫", text: "Not agent platforms — tools for building full apps with AI" },
            { icon: "🏗️", text: "Your agent needs a custom interface? This is the path" },
            { icon: "📦", text: "Want to productize your agent? Build around it here" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Claude Code — where you are */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="CATEGORY 5" title="Claude Code — Where You Are Now" bullets={[
            { icon: "🟢", text: "Conversational, powerful, no coding required" },
            { icon: "💻", text: "Runs on your local machine" },
            { icon: "🧠", text: "Best starting point for personal productivity agents" },
            { icon: "⚡", text: "Strongest available model for non-trivial workflows" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Why Claude Code — reason 1 */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="YOUR PATH" title="Why Claude Code — The Foundational Skill" bullets={[
            { icon: "1️⃣", text: "Writing clear instructions for AI is THE skill" },
            { icon: "🔄", text: "This skill transfers to every other platform on this list" },
            { icon: "🛠️", text: "Move to n8n, Voiceflow, or LangChain later?" },
            { icon: "✅", text: "The skill you built here is what makes those tools work" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Why Claude Code — reason 2 */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="YOUR PATH" title="Why Claude Code — Most Capable Path" bullets={[
            { icon: "2️⃣", text: "Most capable path for non-technical builders right now" },
            { icon: "🚫", text: "You're not writing code. You're not managing infrastructure." },
            { icon: "💬", text: "You're talking to Claude in a terminal" },
            { icon: "🤖", text: "Claude handles the complexity for you" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. When to explore others — decision guide */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="AFTER BOOTCAMP" title="When to Explore Others" bullets={[
            { icon: "🔗", text: "Connect 5+ apps with automation? → n8n or Make" },
            { icon: "💬", text: "Customer-facing chatbot with polished UI? → Voiceflow or Botpress" },
            { icon: "🏗️", text: "Full product around your agent? → Lovable or Bolt" },
            { icon: "💻", text: "Maximum developer control? → LangChain or Claude API" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. The decision framework */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <DiagramScene title="Choose Your Path After Bootcamp" steps={[
            { icon: "🎯", label: "Know one path well" },
            { icon: "🔨", label: "Build with Claude Code" },
            { icon: "📊", label: "Evaluate what you need" },
            { icon: "🗺️", label: "Branch out when ready" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. Comparison — Claude Code vs Others */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <ComparisonScene title="Claude Code vs. The Rest" leftCard={{
            title: "Claude Code",
            items: [
              { icon: "✅", text: "No coding required" },
              { icon: "✅", text: "Strongest reasoning" },
              { icon: "✅", text: "Personal productivity" },
              { icon: "✅", text: "Foundational skill" },
            ],
            accentColor: ACCENT_BLUE,
          }} rightCard={{
            title: "Other Platforms",
            items: [
              { icon: "🔗", text: "App integrations" },
              { icon: "👥", text: "Customer-facing UIs" },
              { icon: "🏗️", text: "Full app building" },
              { icon: "💻", text: "Developer control" },
            ],
            accentColor: ACCENT_PURPLE,
          }} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 16. You don't need all of these */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TitleScene title="You Don't Need All of These" subtitle="You need to know one path well" bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 17. You have the map */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TitleScene title="You Now Have the Map" subtitle="Everything fits somewhere on it — you're on the right path" bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 18. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[17]}>
          <TitleScene title="Let's Finish the Week Strong" subtitle="Instruction step below — add your integration" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
