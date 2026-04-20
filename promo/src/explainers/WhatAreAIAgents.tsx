import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";

import { TitleScene } from "../templates/TitleScene";
import { TextAndBulletsScene } from "../templates/TextAndBulletsScene";
import { ComparisonScene } from "../templates/ComparisonScene";
import { SplitVisualScene } from "../templates/SplitVisualScene";

import { ChatAgent } from "../components/ChatAgent";
import { BrowserMockup } from "../components/BrowserMockup";

import { AutonomySpectrum } from "./agent-visuals/AutonomySpectrum";
import { ReActLoop } from "./agent-visuals/ReActLoop";
import { ToolCallingFlow } from "./agent-visuals/ToolCallingFlow";
import { MemoryTypesGrid } from "./agent-visuals/MemoryTypesGrid";
import { MultiAgentOrchestrator } from "./agent-visuals/MultiAgentOrchestrator";
import { ThreeWayComparisonScene } from "./agent-visuals/ThreeWayComparisonScene";
import { PlatformComparisonTable } from "./agent-visuals/PlatformComparisonTable";
import { PersonaUseCaseCards } from "./agent-visuals/PersonaUseCaseCards";
import { MistakeChecklist } from "./agent-visuals/MistakeChecklist";
import { DecisionTreeFlow } from "./agent-visuals/DecisionTreeFlow";
import { FutureTimeline } from "./agent-visuals/FutureTimeline";

import { AgentNarrationLayer } from "./agent-narration/AgentNarrationLayer";
import { AgentBackgroundMusic } from "./agent-narration/AgentBackgroundMusic";

import { AGENT_SCENE_DURATIONS } from "./agent-narration/agentNarrationConfig";

import {
  TREEHOUSE_GREEN,
  ACCENT_PURPLE,
  ACCENT_BLUE,
  TINT_GREEN,
  TINT_BLUE,
  TINT_PURPLE,
} from "../lib/brand";

const T = 20; // standard transition duration
const D = AGENT_SCENE_DURATIONS;

export const WhatAreAIAgents: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1: Title card */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene
            title="The Complete Beginner's Guide to AI Agents"
            subtitle="Everything you need to understand what agents are, how they work, and where to start"
            showLogo
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 2: Hook — "You've seen AI agents everywhere..." */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <SplitVisualScene
            title="AI Agents Are Everywhere"
            bullets={[
              { icon: "🚀", text: "Every startup is building one" },
              { icon: "💼", text: "Every LinkedIn post is hyping one" },
              { icon: "💰", text: "Every VC is funding one" },
              { icon: "❓", text: "But what actually is an AI agent?" },
            ]}
            visual={<ChatAgent delay={30} />}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 3: What is an agent? */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <SplitVisualScene
            title="What Is an AI Agent?"
            bullets={[
              { icon: "🎯", text: "Perceives input, reasons, takes actions" },
              { icon: "🔄", text: "Keeps going until a goal is met" },
              { icon: "🤖", text: "Without you babysitting every step" },
              { icon: "📋", text: 'Temp worker: "Summarize this doc"' },
              { icon: "🔬", text: 'Researcher: "Monitor competitors weekly"' },
            ]}
            visual={<ChatAgent delay={30} />}
            visualSide="left"
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 4: Autonomy Spectrum */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <SplitVisualScene
            title="The Autonomy Spectrum"
            bullets={[
              { icon: "👤", text: "Copilot — Suggests, you decide" },
              { icon: "💬", text: "Assistant — Completes tasks on demand" },
              { icon: "⚡", text: "Agent — Multi-step workflows" },
              { icon: "🤖", text: "Autonomous — Runs without being asked" },
            ]}
            visual={<AutonomySpectrum delay={30} />}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 5: Agent vs Prompt */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <ComparisonScene
            title="Agent vs. Just a Prompt"
            leftCard={{
              title: "A Prompt",
              accentColor: "#8a9aa5",
              items: [
                { icon: "📝", text: '"Summarize this article"' },
                { icon: "1️⃣", text: "One input, one output" },
                { icon: "⏹️", text: "Done immediately" },
              ],
            }}
            rightCard={{
              title: "An Agent",
              accentColor: TREEHOUSE_GREEN,
              items: [
                { icon: "🔍", text: "Monitor, search, decide" },
                { icon: "🔄", text: "Loops, tools, memory" },
                { icon: "♾️", text: "Keeps running until done" },
              ],
            }}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 6: Three-way comparison */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <ThreeWayComparisonScene
            title="Chatbots vs. Automation vs. Agents"
            bgTint={TINT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 7: Zapier vs Agent */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <ComparisonScene
            title="Zapier vs. an Agent"
            leftCard={{
              title: "Zapier",
              accentColor: "#8a9aa5",
              items: [
                { icon: "📧", text: "Predictable inputs" },
                { icon: "📋", text: "Simple if-then logic" },
                { icon: "🔗", text: "Routes data, doesn't think" },
              ],
            }}
            rightCard={{
              title: "AI Agent",
              accentColor: TREEHOUSE_GREEN,
              items: [
                { icon: "🧠", text: "Requires judgment" },
                { icon: "🔄", text: "Adapts to unexpected inputs" },
                { icon: "💡", text: "Makes decisions" },
              ],
            }}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 8: Section divider — How Agents Work */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TitleScene
            title="How Agents Actually Work"
            subtitle="The basic mechanics that help you build better and debug faster"
            showLogo={false}
            accentColor={ACCENT_BLUE}
            bgTint={TINT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 9: ReAct Loop */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <SplitVisualScene
            title="The Agent Loop"
            bullets={[
              { icon: "👁", text: "Perceive — Takes in input" },
              { icon: "🧠", text: "Reason — Decides what to do" },
              { icon: "⚡", text: "Act — Calls tools, writes, sends" },
              { icon: "🔍", text: "Observe — Checks results" },
              { icon: "💾", text: "Remember — Updates knowledge" },
              { icon: "🔄", text: "Repeat — Until goal is met" },
            ]}
            visual={<ReActLoop delay={30} />}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 10: Tools & Function Calling */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <SplitVisualScene
            title="Tools & Function Calling"
            bullets={[
              { icon: "🔧", text: "Search, read/write files, call APIs" },
              { icon: "📡", text: "Structured tool requests" },
              { icon: "🔌", text: 'MCP — "USB for AI"' },
              { icon: "🌐", text: "One standard, all models" },
            ]}
            visual={<ToolCallingFlow delay={30} />}
            visualSide="left"
            accentColor={ACCENT_BLUE}
            bgTint={TINT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 11: Memory Types */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <SplitVisualScene
            title="Memory Types"
            bullets={[
              { icon: "💬", text: "In-Context — Current conversation" },
              { icon: "📚", text: "External/RAG — Knowledge base search" },
              { icon: "📅", text: "Episodic — Past events" },
              { icon: "🧠", text: "Semantic — Facts & preferences" },
            ]}
            visual={<MemoryTypesGrid delay={30} />}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 12: Multi-Agent Systems */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <SplitVisualScene
            title="Multi-Agent Systems"
            bullets={[
              { icon: "👑", text: "Orchestrator delegates to specialists" },
              { icon: "🔍", text: "Research Agent searches & extracts" },
              { icon: "✍️", text: "Writer Agent drafts content" },
              { icon: "✅", text: "QA Agent reviews & improves" },
            ]}
            visual={<MultiAgentOrchestrator delay={30} />}
            visualSide="left"
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 13: Building Intro */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TitleScene
            title="The Different Ways to Build One"
            subtitle="The honest breakdown of every approach, who it's for, and when to use it"
            showLogo={false}
            accentColor={ACCENT_PURPLE}
            bgTint={TINT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 14: No-Code / Low-Code */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene
            badge="No-Code / Low-Code"
            title="Visual Builders"
            subtitle="Drag-and-drop your way to a working agent"
            bullets={[
              { icon: "🔗", text: "n8n — Open source, self-hostable, most powerful free option" },
              { icon: "🤖", text: "Relevance AI — Multi-agent workflows, genuinely sophisticated" },
              { icon: "🗣️", text: "Voiceflow — Best for customer-facing conversational agents" },
              { icon: "💬", text: "Botpress — Good free tier, chatbots with AI escalation" },
              { icon: "🌊", text: "Flowise — Visual LangChain builder, self-hostable" },
            ]}
            accentColor={TREEHOUSE_GREEN}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 15: Prompt-Based */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TextAndBulletsScene
            badge="Prompt-Based"
            title="Quasi-Agents"
            subtitle="Not full agents, but more powerful than you'd think"
            bullets={[
              { icon: "🟣", text: "Claude Projects — Persistent instructions + knowledge base" },
              { icon: "🟢", text: "ChatGPT GPTs — Custom AI with basic tool access" },
              { icon: "🔵", text: "Gemini Gems — Google's take on custom AI assistants" },
            ]}
            accentColor={ACCENT_PURPLE}
            bgTint={TINT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 16: Vibe Coding */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TextAndBulletsScene
            badge="Vibe Coding"
            title="Describe It, Build It"
            subtitle="AI generates the code — you iterate through conversation"
            bullets={[
              { icon: "💜", text: "Lovable — Full SaaS apps for non-technical founders" },
              { icon: "⚡", text: "Bolt — Most affordable full-stack entry ($10/mo)" },
              { icon: "🖱️", text: "Cursor — 10x faster for existing developers" },
              { icon: "🎨", text: "V0 — Best for frontend/UI, exceptional code quality" },
            ]}
            accentColor={ACCENT_BLUE}
            bgTint={TINT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 17: Frameworks */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TextAndBulletsScene
            badge="Frameworks"
            title="Maximum Control"
            subtitle="Python code that defines exactly how your agents behave"
            bullets={[
              { icon: "🔗", text: "LangChain / LangGraph — Largest ecosystem, stateful workflows" },
              { icon: "👥", text: "CrewAI — Multi-agent crews with role-based design" },
              { icon: "🏢", text: "AutoGen (Microsoft) — Conversational multi-agent patterns" },
            ]}
            accentColor={TREEHOUSE_GREEN}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 18: Personal Agent OS */}
        <TransitionSeries.Sequence durationInFrames={D[17]}>
          <SplitVisualScene
            title="Personal Agent OS"
            bullets={[
              { icon: "🖥️", text: "Install on your own hardware" },
              { icon: "🧠", text: "Permanent memory — knows everything" },
              { icon: "⏰", text: "Runs 24/7, proactively helps" },
              { icon: "🔌", text: "Connects Discord, Telegram, WhatsApp" },
            ]}
            visual={<BrowserMockup delay={30} />}
            accentColor={ACCENT_PURPLE}
            bgTint={TINT_PURPLE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 19: Platform Comparison Table */}
        <TransitionSeries.Sequence durationInFrames={D[18]}>
          <PlatformComparisonTable bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 20: Self-hosted vs Managed */}
        <TransitionSeries.Sequence durationInFrames={D[19]}>
          <ComparisonScene
            title="Self-Hosted vs. Managed"
            leftCard={{
              title: "Self-Hosted",
              accentColor: ACCENT_BLUE,
              items: [
                { icon: "🔒", text: "Full data privacy" },
                { icon: "💰", text: "Lower cost at volume" },
                { icon: "🏗️", text: "Open-source models (Ollama)" },
                { icon: "⚙️", text: "Full stack control" },
              ],
            }}
            rightCard={{
              title: "Managed / Cloud",
              accentColor: TREEHOUSE_GREEN,
              items: [
                { icon: "🧠", text: "Best models (Claude, GPT-4o)" },
                { icon: "🚀", text: "Ship fast, no servers" },
                { icon: "✅", text: "Enterprise compliance" },
                { icon: "📈", text: "Scale without ops" },
              ],
            }}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 21: Use Cases — Creators & Solopreneurs */}
        <TransitionSeries.Sequence durationInFrames={D[20]}>
          <PersonaUseCaseCards
            persona="Content Creators & Solopreneurs"
            personaIcon="🎨"
            accentColor={TREEHOUSE_GREEN}
            bgTint={TINT_GREEN}
            useCases={[
              {
                icon: "📝",
                title: "Content Repurposing",
                description: "One input, five platform-native outputs",
              },
              {
                icon: "🎬",
                title: "YouTube to SEO Blog",
                description: "Transcript to optimized blog post",
              },
              {
                icon: "📊",
                title: "Performance Analysis",
                description: "Weekly engagement insights brief",
              },
            ]}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 22: Use Cases — Builders & Developers */}
        <TransitionSeries.Sequence durationInFrames={D[21]}>
          <PersonaUseCaseCards
            persona="No-Code Builders & Developers"
            personaIcon="🛠️"
            accentColor={ACCENT_BLUE}
            bgTint={TINT_BLUE}
            useCases={[
              {
                icon: "🤖",
                title: "Customer Support Bot",
                description: "Handles 80% of queries, escalates edge cases",
              },
              {
                icon: "🔍",
                title: "AI Code Review Pipeline",
                description: "Reviews PRs for bugs, style, and security",
              },
              {
                icon: "🐛",
                title: "Error-to-Fix-to-PR",
                description: "Sentry error → auto-generated fix PR",
              },
            ]}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 23: Use Cases — Marketers */}
        <TransitionSeries.Sequence durationInFrames={D[22]}>
          <PersonaUseCaseCards
            persona="Marketers"
            personaIcon="📣"
            accentColor={ACCENT_PURPLE}
            bgTint={TINT_PURPLE}
            useCases={[
              {
                icon: "🕵️",
                title: "Competitive Intelligence",
                description: "Weekly digest of competitor changes",
              },
              {
                icon: "📈",
                title: "Campaign Analysis",
                description: "Cross-channel performance synthesis",
              },
              {
                icon: "✉️",
                title: "Personalized Outreach",
                description: "Research-driven custom first lines",
              },
            ]}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 24: Decision Tree */}
        <TransitionSeries.Sequence durationInFrames={D[23]}>
          <SplitVisualScene
            title="Where to Start"
            bullets={[
              { icon: "❓", text: "Can you code?" },
              { icon: "🔗", text: "Custom app or connecting tools?" },
              { icon: "🚀", text: "Ship real or explore quickly?" },
            ]}
            visual={<DecisionTreeFlow delay={30} />}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 25: Common Mistakes */}
        <TransitionSeries.Sequence durationInFrames={D[24]}>
          <MistakeChecklist bgTint={TINT_PURPLE} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 26: Future */}
        <TransitionSeries.Sequence durationInFrames={D[25]}>
          <SplitVisualScene
            title="Where This Is All Going"
            bullets={[
              { icon: "🔌", text: "MCP becomes the universal layer" },
              { icon: "🏗️", text: "Agent-first software is the default" },
              { icon: "🐝", text: "Swarms get practical" },
              { icon: "👤", text: "Personal AI agents for everyone" },
              { icon: "🛡️", text: "Guardian agents emerge" },
            ]}
            visual={<FutureTimeline delay={30} />}
            visualSide="left"
            accentColor={ACCENT_BLUE}
            bgTint={TINT_BLUE}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 27: Closing */}
        <TransitionSeries.Sequence durationInFrames={D[26]}>
          <TitleScene
            title="Start Small. Start Now."
            subtitle="Pick one workflow. Map every step. Build the simplest version that works. Then expand."
            showLogo={false}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 30 })}
        />

        {/* Scene 28: CTA */}
        <TransitionSeries.Sequence durationInFrames={D[27]}>
          <TitleScene
            title="Learn to Build AI Agents"
            subtitle="teamtreehouse.com"
            showLogo
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      {/* Audio layers overlaid on top */}
      <AgentNarrationLayer />
      <AgentBackgroundMusic />
    </AbsoluteFill>
  );
};
