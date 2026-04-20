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
import { DAY15V2_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { AgentDefinitionVisual } from "./visuals/AgentDefinitionVisual";

export const Day15V2BuildFirstAgent: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 - Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Build Your First Agent" subtitle="Claude Projects — No Code Required" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 2 - Hook: You're about to build your first agent */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="LET'S BUILD" title="Your First Agent — Right Now" bullets={[
            { icon: "🚫", text: "No code. No terminal. No complicated setup." },
            { icon: "✅", text: "Just Claude Projects" },
            { icon: "🎯", text: "And the job you identified in the last video" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 3 - Callout: If you've been hesitant */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="CALLOUT" title={'"Building AI" Sounds Technical — Not Anymore'} bullets={[
            { icon: "😟", text: "If you've been hesitant because it sounds technical" },
            { icon: "🔄", text: "This is where that changes" },
            { icon: "✅", text: "Claude Projects is the right starting point for exactly that reason" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 4 - Credibility: The foundational skill */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="CREDIBILITY" title="The Skill That Transfers Everywhere" bullets={[
            { icon: "🏆", text: "Claude Projects teaches the foundational skill" },
            { icon: "📝", text: "Writing clear, structured instructions for an AI system" },
            { icon: "🔗", text: "This transfers to every other agent platform" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 5 - Compass: What you'll have by the end */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="COMPASS" title="By the End of This Video" bullets={[
            { icon: "🧭", text: "A working agent in Claude Projects" },
            { icon: "📋", text: "With custom instructions" },
            { icon: "📁", text: "A knowledge file uploaded" },
            { icon: "✅", text: "And one successful test run" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 6 - Core Learning: Claude Projects is a persistent workspace */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="CORE LEARNING" title="Claude Projects Is a Persistent Workspace" bullets={[
            { icon: "💡", text: "You give Claude a job description, rules, and context" },
            { icon: "🧠", text: "It remembers all of it — every single time" },
            { icon: "🔄", text: "Every conversation starts with your instructions loaded" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 7 - Regular Chat vs Claude Projects comparison */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <ComparisonScene title="Regular Chat vs. Claude Projects" leftCard={{
            title: "Regular Chat", items: [
              { icon: "💨", text: "Forgets everything when conversation ends" },
              { icon: "📋", text: "Paste instructions every single time" },
              { icon: "🔄", text: "Start from scratch each session" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Claude Projects", items: [
              { icon: "🧠", text: "Carries your instructions into every conversation" },
              { icon: "📁", text: "Remembers your rules and uploaded files" },
              { icon: "🎯", text: "Consistent output every time" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 8 - Why it's your first real agent */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="KEY INSIGHT" title="Your First Real Agent" bullets={[
            { icon: "🤔", text: "Not because it's autonomous" },
            { icon: "✅", text: "Because it's consistent" },
            { icon: "🎯", text: "Same instructions, same rules, every conversation" },
            { icon: "💡", text: "Consistency is what makes an agent useful" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 9 - Other agent platforms exist */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="LANDSCAPE" title="Many Ways to Build Agents" bullets={[
            { icon: "⚡", text: "Zapier AI, Make, n8n, Voiceflow, and more" },
            { icon: "🗺️", text: "We'll map the whole landscape in Week 4" },
            { icon: "📝", text: "For now: Claude Projects teaches the ONE skill that makes all of those work" },
            { icon: "🔗", text: "Giving AI clear instructions — that skill transfers everywhere" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 10 - Step 1: Create + Name Your Project */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="STEP 1" title="Create a New Project and Name It" bullets={[
            { icon: "📝", text: "Give it the name of the job it's going to do" },
            { icon: "✅", text: "\"Meeting Prep Agent\"" },
            { icon: "✅", text: "\"Weekly Content Ideas\"" },
            { icon: "✅", text: "\"Email Drafter\"" },
            { icon: "💡", text: "Name it like a role, not a tool" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 11 - Step 2: Write Custom Instructions overview */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <SplitVisualScene title="Write Your Custom Instructions" bullets={[
            { icon: "📋", text: "This is the agent's job description" },
            { icon: "🎭", text: "What role it's playing" },
            { icon: "📋", text: "What the job is" },
            { icon: "📐", text: "What format to use" },
            { icon: "🚫", text: "What it should never do" },
          ]} visual={<AgentDefinitionVisual delay={30} />} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 12 - Step 2 detail: Instruction components with examples */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="STEP 2 — DETAILS" title="What to Include in Instructions" bullets={[
            { icon: "🎭", text: "Role: \"You are a meeting prep specialist...\"" },
            { icon: "🎯", text: "Job: \"Produce a prep brief for each meeting...\"" },
            { icon: "📐", text: "Format: \"Always output: Background, Talking Points, Questions\"" },
            { icon: "🛡️", text: "Guardrail: \"Never invent information. Ask if unsure.\"" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 13 - Step 3: Upload a Knowledge File */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="STEP 3" title="Upload a Knowledge File" bullets={[
            { icon: "📁", text: "A style guide, past content, client brief — whatever fits" },
            { icon: "🧠", text: "This is what makes your agent smarter than a general prompt" },
            { icon: "⬆️", text: "It has context specific to YOU" },
            { icon: "🎯", text: "Your data, your preferences, your standards" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 14 - Step 4: Run It With Real Input */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene badge="STEP 4" title="Run It With a Real Input" bullets={[
            { icon: "▶️", text: "Give it a real task — not a test, a real one" },
            { icon: "📊", text: "Watch the output come back" },
            { icon: "🔍", text: "Shaped by your instructions, your files, your rules" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 15 - The difference: compare output */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <ComparisonScene title="See the Difference" leftCard={{
            title: "Fresh Claude Chat", items: [
              { icon: "💬", text: "Generic, broad response" },
              { icon: "❓", text: "No context about you" },
              { icon: "🔄", text: "Different every time" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Your Claude Project", items: [
              { icon: "🎯", text: "Tailored to your role and rules" },
              { icon: "📁", text: "Uses your uploaded knowledge" },
              { icon: "✅", text: "Consistent format every time" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 16 - Checkpoint: You should now have all four */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <DiagramScene title="Your Checkpoint" subtitle="Your screen should now have all four" steps={[
            { icon: "📝", label: "Project Name" },
            { icon: "📋", label: "Custom Instructions" },
            { icon: "📁", label: "Knowledge File" },
            { icon: "✅", label: "Test Run" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 17 - You're ahead of most people */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TextAndBulletsScene badge="CHECKPOINT" title="You're Ahead of Most People" bullets={[
            { icon: "🏆", text: "Most people who try to build agents get stuck on tools" },
            { icon: "✅", text: "You're already past that" },
            { icon: "💡", text: "You have a working agent — right now" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 18 - Agent Definition Sheet exercise */}
        <TransitionSeries.Sequence durationInFrames={D[17]}>
          <TextAndBulletsScene badge="EXERCISE" title="Fill Out Your Agent Definition Sheet" bullets={[
            { icon: "📝", text: "Agent Name — give it a name" },
            { icon: "🎯", text: "Job — does what, for who, producing what output" },
            { icon: "📥", text: "Input — what type of information you give it" },
            { icon: "📤", text: "Output — what specific format it produces" },
            { icon: "🛡️", text: "Guardrails — what it should NEVER do (list 2-3)" },
            { icon: "📁", text: "Knowledge — what files or context would make it better" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 19 - Agent job examples to pick from */}
        <TransitionSeries.Sequence durationInFrames={D[18]}>
          <TextAndBulletsScene badge="IDEAS" title="Pick Your Agent's Job" bullets={[
            { icon: "💡", text: "Weekly content idea generator (topic → 5 ideas with hooks)" },
            { icon: "📋", text: "Meeting prep assistant (attendee + topic → prep brief)" },
            { icon: "✉️", text: "Email drafter (situation + key points → polished draft)" },
            { icon: "📅", text: "Daily planning agent (calendar + priorities → day plan)" },
            { icon: "📄", text: "Client proposal outliner (project details → proposal structure)" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 20 - Build steps summary */}
        <TransitionSeries.Sequence durationInFrames={D[19]}>
          <DiagramScene title="Build It in Claude Projects" subtitle="Four steps to your working agent" steps={[
            { icon: "1️⃣", label: "Create Project" },
            { icon: "2️⃣", label: "Write Instructions" },
            { icon: "3️⃣", label: "Upload Knowledge" },
            { icon: "4️⃣", label: "Run + Test" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* Scene 21 - Outro */}
        <TransitionSeries.Sequence durationInFrames={D[20]}>
          <TitleScene title="You Just Built Your First Agent" subtitle="Now do it with YOUR job, YOUR context — use the task you identified earlier" bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* Scene 22 - Closing */}
        <TransitionSeries.Sequence durationInFrames={D[21]}>
          <TitleScene title="See You on Day 16" subtitle="Tomorrow: test, break, and improve your agent" showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
