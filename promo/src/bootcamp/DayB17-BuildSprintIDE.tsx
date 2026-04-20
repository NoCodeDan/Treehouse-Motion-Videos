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
import { DAYB17_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { DeployPipelineVisual } from "./visuals/DeployPipelineVisual";

export const DayB17BuildSprintIDE: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="IDE + Packages + Database" subtitle="Day 17 — Three unlocks for real apps" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — demo vs real app */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="THE HOOK" title="That's Not an App. That's a Demo." bullets={[
            { icon: "💨", text: "Someone uses it, closes it, opens it again — everything is gone" },
            { icon: "🚫", text: "No persistence, no version control, no real environment" },
            { icon: "🔧", text: "Today we close that gap with three tools" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Four C's — Callout + Credibility */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="FOUR C's" title="From 'Works on My Screen' to Works for Real" bullets={[
            { icon: "📣", text: "If you have a scaffold from Day 15, this bridges the gap" },
            { icon: "🏆", text: "Every builder who ships has the same toolkit" },
            { icon: "🧭", text: "Customize code, store versions safely, remember what users do" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Four C's — Compass + Core Learning */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="CORE LEARNING" title="Three Layers of Every Real App" bullets={[
            { icon: "💻", text: "Code you can customize — beyond what the builder generates" },
            { icon: "🔒", text: "A version you can trust — rollback when things break" },
            { icon: "💾", text: "Data that persists — actions have consequences that last" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Unlock 1: Why You Need an IDE */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="UNLOCK 1" title="Why You Need a Real IDE" bullets={[
            { icon: "🤖", text: "Your AI builder is great at generating structure" },
            { icon: "🚫", text: "It's not designed for deep customization" },
            { icon: "🔍", text: "Change behavior, fix specifics, add logic — you need a proper editor" },
            { icon: "📂", text: "Full access to your project files on your machine" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Three IDEs Worth Knowing */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="IDE OPTIONS" title="Three IDEs Worth Knowing" bullets={[
            { icon: "💻", text: "Cursor — built around AI-assisted editing (recommended)" },
            { icon: "📝", text: "VS Code — industry standard, add AI assistants" },
            { icon: "🚀", text: "Antigravity — emerging AI-native option" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. IDE Mental Model */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <ComparisonScene title="The Mental Model" leftCard={{
            title: "AI Builder", items: [
              { icon: "⚡", text: "Generates fast" },
              { icon: "🏗️", text: "Great for scaffolding" },
              { icon: "🔄", text: "Work in both" },
            ], accentColor: ACCENT_BLUE,
          }} rightCard={{
            title: "IDE", items: [
              { icon: "🔍", text: "Goes deeper" },
              { icon: "🎯", text: "Granular control" },
              { icon: "🔓", text: "You're never stuck" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Unlock 2: The Problem GitHub Solves */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="UNLOCK 2" title="The Version Control Problem" bullets={[
            { icon: "😰", text: "You change something. It breaks." },
            { icon: "❓", text: "You don't know what you changed" },
            { icon: "🚫", text: "You can't get back to the version that worked" },
            { icon: "🐙", text: "GitHub solves this — every version stored safely" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. GitHub + Vercel Pipeline */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <SplitVisualScene title="Your Deploy Pipeline" bullets={[
            { icon: "💻", text: "Build in your editor" },
            { icon: "🐙", text: "Push to GitHub — compare versions, share code" },
            { icon: "🚀", text: "Vercel auto-deploys to a real URL" },
            { icon: "🔄", text: "Every push = live update. Professional workflow." },
          ]} visual={<DeployPipelineVisual delay={30} />} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Checkpoint — Three Things You Know */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <DiagramScene title="Checkpoint: Three Things You Know" subtitle="Stop here. Take a breath." steps={[
            { icon: "💻", label: "Code in an IDE" },
            { icon: "🐙", label: "Versions on GitHub" },
            { icon: "🚀", label: "Live on Vercel" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Checkpoint narration */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="CHECKPOINT" title="These Tools Connect Together" bullets={[
            { icon: "🔗", text: "None of this had to be done from scratch" },
            { icon: "🧩", text: "Export from builder, store on GitHub, deploy on Vercel" },
            { icon: "✨", text: "One more unlock to go — the one that makes your app feel real" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Unlock 3: The Database Problem */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="UNLOCK 3" title="Open Your App. Do Something. Refresh." bullets={[
            { icon: "📝", text: "Create a record. Add a note. Submit a form." },
            { icon: "🔄", text: "Refresh the page." },
            { icon: "💨", text: "Gone. Every interaction disappears." },
            { icon: "🧠", text: "Your app doesn't know how to remember anything yet" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Why Databases Matter — Comparison */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <ComparisonScene title="What a Database Changes" leftCard={{
            title: "Without Database", items: [
              { icon: "💨", text: "Data disappears on refresh" },
              { icon: "👤", text: "No user accounts" },
              { icon: "📋", text: "Stateless — just a fancy form" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "With Database", items: [
              { icon: "💾", text: "Data persists across sessions" },
              { icon: "👤", text: "Users sign in, data is there" },
              { icon: "🏗️", text: "Actions have consequences that last" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. Three Database Options */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene badge="DATABASE OPTIONS" title="Three Beginner-Friendly Choices" bullets={[
            { icon: "🔷", text: "Convex — real-time, type-safe" },
            { icon: "🟢", text: "Supabase — PostgreSQL, open source" },
            { icon: "🔥", text: "Firebase — Google, easy start" },
            { icon: "💡", text: "All have generous free tiers for the kind of apps you're building" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. Records and Fields */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TextAndBulletsScene badge="THE MODEL" title="Records and Fields" bullets={[
            { icon: "🗄️", text: "A database stores records — a user, a message, a task" },
            { icon: "📊", text: "Each record has fields — name, date, status" },
            { icon: "🎯", text: "You don't need dozens of tables" },
            { icon: "📏", text: "Start with one table, well-defined. Expand later." },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 16. You Don't Need Engineering Knowledge */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TextAndBulletsScene badge="KEY INSIGHT" title="You Don't Need to Be an Engineer" bullets={[
            { icon: "🚫", text: "You don't need to understand databases at an engineering level" },
            { icon: "✅", text: "You need to know what they do and how to connect one" },
            { icon: "🧩", text: "Your AI builder or IDE handles the technical wiring" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 17. Three Unlocks Recap */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <DiagramScene title="Three Unlocks" subtitle="What most beginners spend weeks confused by" steps={[
            { icon: "💻", label: "IDE" },
            { icon: "🔄", label: "Deploy" },
            { icon: "🗄️", label: "Database" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 18. Deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[17]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Pick Your Database and Define One Record" bullets={[
            { icon: "1️⃣", text: "Choose: Convex, Supabase, or Firebase" },
            { icon: "2️⃣", text: "Define one record type your app needs to store" },
            { icon: "3️⃣", text: "Write down the fields that record needs" },
            { icon: "📣", text: "Post your choice in Discord" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 19. Outro */}
        <TransitionSeries.Sequence durationInFrames={D[18]}>
          <TextAndBulletsScene badge="RECAP" title="You Just Unlocked Real Infrastructure" bullets={[
            { icon: "💻", text: "An IDE for going deeper than your builder" },
            { icon: "🐙", text: "GitHub and Vercel for shipping safely" },
            { icon: "🗄️", text: "A database for making your app remember" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 20. Teaser */}
        <TransitionSeries.Sequence durationInFrames={D[19]}>
          <TitleScene title="Your App Has Real Infrastructure" subtitle="IDE, version control, persistent data" bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 21. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[20]}>
          <TitleScene title="See You on Day 18" subtitle="Tomorrow: break it on purpose" showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
