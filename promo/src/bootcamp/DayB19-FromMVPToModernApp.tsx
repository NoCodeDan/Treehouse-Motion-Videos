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
import { DAYB19_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { RealAppTrinityVisual } from "./visuals/RealAppTrinityVisual";

export const DayB19FromMVPToModernApp: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="From MVP to Modern App" subtitle="Day 19 — Packages, APIs, and AI Models" showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — real products vs prototypes */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="THE HOOK" title="Why Some Apps Feel Real" bullets={[
            { icon: "🎯", text: "Some apps feel like real products, others feel like prototypes" },
            { icon: "🧩", text: "It's not the design or the idea — it's the building blocks inside" },
            { icon: "💡", text: "Today you learn how modern apps actually get built" },
            { icon: "🔄", text: "This will change how you think about what's possible" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Callout — who this is for */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="WHO THIS IS FOR" title="You Have a Working MVP" bullets={[
            { icon: "✅", text: "Your app works — the core loop is functional" },
            { icon: "🔐", text: "You're wondering how to add login or payments" },
            { icon: "🤖", text: "You want AI features without building AI from scratch" },
            { icon: "🚀", text: "This is your upgrade path" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Credibility — every app is assembled */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="THE TRUTH" title="Every App You Use Is Assembled" bullets={[
            { icon: "📱", text: "Notion, Stripe, Airbnb, every startup — assembled from existing pieces" },
            { icon: "🔐", text: "The founders didn't invent login" },
            { icon: "💳", text: "They didn't build their own payment processor" },
            { icon: "🎯", text: "They plugged in what existed and focused on what made their app different" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Compass — what you'll learn today */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <DiagramScene title="Today's Roadmap" steps={[
            { icon: "📦", label: "Packages" },
            { icon: "🔗", label: "APIs" },
            { icon: "🤖", label: "AI Models" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Core Loop — tighten what you have first */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="FIRST THINGS FIRST" title="Tighten Your Core Loop" bullets={[
            { icon: "🔄", text: "Your core loop is the main thing your app does" },
            { icon: "👤", text: "The one journey that makes the app worth using" },
            { icon: "⚠️", text: "If that journey is rough, adding features makes things worse" },
            { icon: "🎯", text: "Fix the foundation before building on top" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Core Loop walkthrough — fix before adding */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene title="Walk Through Your Core Loop" bullets={[
            { icon: "🐌", text: "Where does it feel slow?" },
            { icon: "❓", text: "Where is it unclear?" },
            { icon: "💥", text: "Where does it break?" },
            { icon: "✅", text: "Fix that first — everything else comes after" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Packages intro — pre-built superpowers */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="PACKAGES" title="Building Blocks That Give You Superpowers" bullets={[
            { icon: "📦", text: "A package is pre-written code that gives your app a new capability" },
            { icon: "🧱", text: "You didn't build it — someone else already solved this problem" },
            { icon: "🛡️", text: "Battle-tested by thousands of other developers" },
            { icon: "⚡", text: "The skill is knowing they exist and how to plug them in" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Auth deep dive — Clerk example */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="AUTHENTICATION" title="Clerk: Login in an Afternoon" bullets={[
            { icon: "🔐", text: "Building login from scratch: passwords, sessions, security — weeks of work" },
            { icon: "📦", text: "Clerk does it in an afternoon" },
            { icon: "👤", text: "Login, sign-up, profile management, session handling — all included" },
            { icon: "🛡️", text: "Security vulnerabilities handled by experts, not by you" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Payments + more packages */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="MORE PACKAGES" title="Stripe, Uploads, Maps, and More" bullets={[
            { icon: "💳", text: "Stripe: add payments — configure your product, handle the webhook, done" },
            { icon: "📁", text: "Packages for file uploads and form handling" },
            { icon: "🗺️", text: "Packages for maps, analytics, email, and notifications" },
            { icon: "🧩", text: "For almost every common feature, a battle-tested package exists" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. The real skill */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <SplitVisualScene title="The Real Skill" bullets={[
            { icon: "🚫", text: "Not building every system yourself" },
            { icon: "🔍", text: "Knowing which packages exist" },
            { icon: "🔌", text: "Knowing how to plug them in" },
            { icon: "🎯", text: "Focus on what makes your app different" },
          ]} visual={<RealAppTrinityVisual delay={30} />} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. AI workflow — describe, AI sets up */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="THE WORKFLOW" title="Let Your AI IDE Do the Setup" bullets={[
            { icon: "💬", text: "Describe what you need to your AI IDE" },
            { icon: "📄", text: "Point it at the package documentation" },
            { icon: "🤖", text: "The AI handles the installation and wiring" },
            { icon: "✅", text: "You get the feature without writing the code from memory" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Checkpoint */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="CHECKPOINT" title="Packages Unlock Superpowers" bullets={[
            { icon: "🔐", text: "Authentication, payments, uploads — you don't build those" },
            { icon: "🔌", text: "You connect them" },
            { icon: "🧠", text: "Next: a different kind of building block — one that makes your app think" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. APIs explained */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene badge="APIs" title="APIs Are Bridges" bullets={[
            { icon: "🔗", text: "An API connects your app to a service that lives somewhere else" },
            { icon: "🗺️", text: "Every map inside an app that isn't Google Maps — API call" },
            { icon: "💳", text: "Every payment that goes through — API call" },
            { icon: "🌤️", text: "When your weather app shows tomorrow's forecast — API call" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. AI models via API */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TextAndBulletsScene badge="AI MODELS" title="AI Works the Same Way" bullets={[
            { icon: "🤖", text: "OpenAI, Google Gemini, Anthropic Claude — powerful AI via API" },
            { icon: "📤", text: "You send a request: text, an image, a document" },
            { icon: "📥", text: "You get back a response your app can use" },
            { icon: "🚫", text: "You don't train the model. You don't run it. You just connect." },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 16. Electricity analogy */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <DiagramScene title="Think of It Like Electricity" steps={[
            { icon: "🔌", label: "Plug In" },
            { icon: "⚡", label: "Use Power" },
            { icon: "🏠", label: "Build Your App" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 17. AI features you can build */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TextAndBulletsScene badge="WHAT'S POSSIBLE" title="One API Call Away" bullets={[
            { icon: "📝", text: "A text summarizer that condenses long content" },
            { icon: "💡", text: "An idea generator or brainstorming assistant" },
            { icon: "💬", text: "A support reply assistant for your users" },
            { icon: "✨", text: "A content improver or classification engine" },
            { icon: "📅", text: "These aren't future features — you can add them this week" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 18. What you need — API key + description */}
        <TransitionSeries.Sequence durationInFrames={D[17]}>
          <DiagramScene title="The API Flow" steps={[
            { icon: "🔑", label: "API Key" },
            { icon: "📋", label: "Clear Prompt" },
            { icon: "📤", label: "Send Request" },
            { icon: "📥", label: "Get Response" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 19. Comparison — Build vs Assemble */}
        <TransitionSeries.Sequence durationInFrames={D[18]}>
          <ComparisonScene title="Build from Scratch vs. Assemble" leftCard={{
            title: "Build Everything", items: [
              { icon: "🔨", text: "Write login system from scratch" },
              { icon: "💳", text: "Build your own payment processor" },
              { icon: "🤖", text: "Train your own AI model" },
              { icon: "⏳", text: "Months of engineering work" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Assemble Smart", items: [
              { icon: "📦", text: "Clerk for auth in an afternoon" },
              { icon: "💳", text: "Stripe for payments in a day" },
              { icon: "🔗", text: "AI API call for intelligence" },
              { icon: "🚀", text: "Ship real features this week" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 20. Pick your upgrade */}
        <TransitionSeries.Sequence durationInFrames={D[19]}>
          <TextAndBulletsScene badge="YOUR DELIVERABLE" title="Pick One Upgrade for Your App" bullets={[
            { icon: "🅰️", text: "Option A: Add authentication with Clerk" },
            { icon: "🅱️", text: "Option B: Add payments with Stripe" },
            { icon: "🅲", text: "Option C: Define one AI-powered feature and describe the input/output" },
            { icon: "📣", text: "Pick one and post your choice in Discord" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 21. Outro */}
        <TransitionSeries.Sequence durationInFrames={D[20]}>
          <TitleScene title="Your MVP Just Leveled Up" subtitle="Authentication, payments, and AI features — assembled from building blocks that already exist" bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 22. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[21]}>
          <TitleScene title="See You on Day 20" subtitle="Tomorrow: testing your MVP with a real person" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
