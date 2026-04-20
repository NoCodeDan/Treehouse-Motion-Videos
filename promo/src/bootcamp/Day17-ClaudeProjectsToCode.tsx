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
import { DAY17_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const Day17ClaudeProjectsToCode: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 - Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Claude Projects to Claude Code" subtitle="Give Your Agent Superpowers" showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 2 - Hook */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="THE UPGRADE" title="Same Agent. Same Job." bullets={[
            { icon: "💬", text: "One returns a response in a chat window" },
            { icon: "💾", text: "The other just wrote a file to your computer" },
            { icon: "⚡", text: "That's the difference we're talking about today" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 3 - Four C's */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene title="What You'll Walk Away With" bullets={[
            { icon: "📢", text: "Your Projects agent worked — but you've hit its limits" },
            { icon: "🏆", text: "Writing clear instructions is THE skill — it transfers directly" },
            { icon: "🧭", text: "Understand what Code adds and rebuild your agent there" },
            { icon: "💡", text: "Projects = prove the concept. Code = give it real capability." },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 4 - Projects Limitation */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="THE CEILING" title="What Projects Can't Do" bullets={[
            { icon: "💬", text: "Your agent lives inside a chat window — that's its world" },
            { icon: "📋", text: "It can read what you paste and write back to you" },
            { icon: "🚫", text: "It can't touch your files. It can't run anything. It can only talk." },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 5 - Read and Write Files */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="CAPABILITY 1" title="It Can Read and Write Files" bullets={[
            { icon: "📁", text: "Not just files you paste — actual files on your computer" },
            { icon: "📄", text: "Pull from a folder of reference documents" },
            { icon: "📊", text: "Read a CSV, process data, write output to a file" },
            { icon: "🔄", text: "Every time — automatically, without copy-pasting" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 6 - Run Commands */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="CAPABILITY 2" title="It Can Run Commands" bullets={[
            { icon: "⚙️", text: "Scripts, terminal commands, multi-step processes" },
            { icon: "🚀", text: "Your agent doesn't just draft — it can execute" },
            { icon: "🔧", text: "Chain tasks together into real workflows" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 7 - Multi-step Autonomous */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="CAPABILITY 3" title="It Works Through Tasks Autonomously" bullets={[
            { icon: "🎯", text: "You give it a goal, not just a prompt" },
            { icon: "🧠", text: "It figures out the steps on its own" },
            { icon: "📋", text: "Multi-step reasoning without hand-holding" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 8 - MCP */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="CAPABILITY 4" title="MCP: USB Ports for AI" bullets={[
            { icon: "🔗", text: "Model Context Protocol — a standard way to connect tools" },
            { icon: "🌐", text: "Files, browsers, APIs — if it has a connector, your agent can use it" },
            { icon: "🔌", text: "Think of it like USB ports: plug in what you need" },
            { icon: "📡", text: "Connect Claude Code to other apps and services" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 9 - CLAUDE.md Persistent Memory */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="CAPABILITY 5" title="CLAUDE.md: Persistent Memory" bullets={[
            { icon: "🧠", text: "Instead of pasting instructions every time, write them once" },
            { icon: "📝", text: "A file called CLAUDE.md in your project folder" },
            { icon: "🔄", text: "Every time Claude Code runs, it reads that file first" },
            { icon: "📌", text: "Your instructions stick — no more repeating yourself" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 10 - Projects vs Code Comparison */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <ComparisonScene title="Projects vs. Code" leftCard={{
            title: "Claude Projects", items: [
              { icon: "💬", text: "Chat window only" },
              { icon: "📋", text: "Read what you paste" },
              { icon: "✏️", text: "Write back to you" },
              { icon: "🚫", text: "Can't touch files or run anything" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Claude Code", items: [
              { icon: "📁", text: "Read/write actual files" },
              { icon: "⚙️", text: "Run commands and scripts" },
              { icon: "🔗", text: "Connect to tools via MCP" },
              { icon: "🧠", text: "Persistent memory via CLAUDE.md" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 11 - Accessibility */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="DON'T PANIC" title="It's the Same Conversation" bullets={[
            { icon: "💬", text: "'Claude Code' sounds technical — it has 'code' in the name" },
            { icon: "🖥️", text: "You're talking to Claude in a terminal instead of a chat window" },
            { icon: "🤝", text: "Same conversation. Same AI. Different interface." },
            { icon: "📋", text: "Everything you learned in Projects applies here" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 12 - Terminal Isn't Scary */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene title="You're Not Writing Code" bullets={[
            { icon: "🤖", text: "Claude Code does the technical work" },
            { icon: "📝", text: "Your job is still: write clear instructions and tell it what to do" },
            { icon: "💪", text: "The terminal looks intimidating the first time — that's normal" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 13 - Installation */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="INSTALL" title="Get Claude Code Running" bullets={[
            { icon: "🍎", text: "Mac/Linux: curl -fsSL https://claude.ai/install.sh | bash" },
            { icon: "🪟", text: "Windows: irm https://claude.ai/install.ps1 | iex" },
            { icon: "🧩", text: "Or install the VS Code / Cursor extension" },
            { icon: "✅", text: "Pick whichever method feels comfortable" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 14 - First Run */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <DiagramScene title="Your First Run" subtitle="Navigate to your folder and type one word" steps={[
            { icon: "📁", label: "cd my-agent" },
            { icon: "▶️", label: "Type: claude" },
            { icon: "✨", label: "You're in" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 15 - Demo Narration */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TextAndBulletsScene badge="DEMO" title="Same Task. Real Output." bullets={[
            { icon: "🔄", text: "Give it the same task you gave Claude Projects" },
            { icon: "💾", text: "The output is the same — but now it's saved to a file" },
            { icon: "📂", text: "Point it at a folder of reference documents" },
            { icon: "🔗", text: "Chain it into a workflow — this is where it gets powerful" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 16 - CLAUDE.md Structure */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TextAndBulletsScene badge="CLAUDE.MD" title="Your Agent's Instruction Manual" bullets={[
            { icon: "📝", text: "Your Job — agent definition from Day 15" },
            { icon: "📋", text: "Instructions — refined instructions from Day 16" },
            { icon: "📐", text: "Output Format — be specific: '3 bullets, each under 20 words'" },
            { icon: "🛡️", text: "Rules — never invent info, ask clarifying questions, guardrails" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 17 - Checkpoint */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <DiagramScene title="Your Checkpoint" subtitle="You should have all three before moving on" steps={[
            { icon: "📦", label: "Installed" },
            { icon: "📁", label: "Agent Folder" },
            { icon: "✅", label: "One Test Run" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 18 - Exercise */}
        <TransitionSeries.Sequence durationInFrames={D[17]}>
          <TextAndBulletsScene badge="EXERCISE" title="Rebuild Your Agent in Claude Code" bullets={[
            { icon: "1️⃣", text: "Create your agent workspace folder" },
            { icon: "2️⃣", text: "Copy knowledge files into the folder" },
            { icon: "3️⃣", text: "Write your CLAUDE.md from your Projects instructions" },
            { icon: "4️⃣", text: "Run it with a real task" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 19 - Compare Outputs */}
        <TransitionSeries.Sequence durationInFrames={D[18]}>
          <TextAndBulletsScene badge="COMPARE" title="Run the Same 3 Inputs From Day 16" bullets={[
            { icon: "🔬", text: "Compare what Claude Code produces vs Claude Projects" },
            { icon: "📊", text: "Note differences in quality, consistency, capability" },
            { icon: "💡", text: "The comparison is where the real learning happens" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 20 - Deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[19]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="What You're Submitting" bullets={[
            { icon: "✅", text: "A working agent in Claude Code with a CLAUDE.md file" },
            { icon: "🔄", text: "Runs 3 times with consistent output format" },
            { icon: "📸", text: "Screenshot your CLAUDE.md and one output for Discord" },
            { icon: "🏆", text: "Bonus: share what surprised you about Projects vs Code" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 21 - Outro */}
        <TransitionSeries.Sequence durationInFrames={D[20]}>
          <TitleScene title="From Concept to Real Environment" subtitle="Your agent is about to do more than talk" bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* Scene 22 - Closing */}
        <TransitionSeries.Sequence durationInFrames={D[21]}>
          <TitleScene title="See You on Day 18" subtitle="Tomorrow: the context upgrade" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
