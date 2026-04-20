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
import { DAYB26_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { RealAppTrinityVisual } from "./visuals/RealAppTrinityVisual";

export const DayB26ShipLaunchDay: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Ship: Launch Day" subtitle="Day 26 — You have a real URL" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — "You have a URL. A real one." */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="HOOK" title="You Have a URL. A Real One." bullets={[
            { icon: "🌐", text: "Someone can open it on their phone, their laptop, anywhere" },
            { icon: "🔄", text: "Your app loads, works, and remembers them next time" },
            { icon: "🚀", text: "That's not a demo. That's a real app." },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Four C's — Callout + Credibility */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="THE FOUR C'S" title="What You Actually Built" bullets={[
            { icon: "📣", text: "Callout: Two weeks of building — now see what you've actually made" },
            { icon: "🏆", text: "Credibility: The apps you use daily are built on these same three layers" },
            { icon: "🧱", text: "You assembled the same building blocks real products use" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Four C's — Compass + Core Learning */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="THE FOUR C'S" title="Where We're Going" bullets={[
            { icon: "🧭", text: "Compass: Deploy your app, document what you built, understand what makes it real" },
            { icon: "💡", text: "Core Learning: You didn't just build a demo — you assembled a modern app" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Deploy It — push, confirm, test */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="DEPLOY IT" title="Get Your App Live" bullets={[
            { icon: "🐙", text: "Push your latest changes to GitHub" },
            { icon: "🔗", text: "Confirm your Vercel deployment is connected and building" },
            { icon: "📱", text: "Open the URL on your phone or a different browser" },
            { icon: "🖥️", text: "Test on a device with nothing to do with your dev environment" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Deploy diagram */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <DiagramScene title="Final Deploy Check" steps={[
            { icon: "🐙", label: "Push to GitHub" },
            { icon: "🚀", label: "Verify Build" },
            { icon: "📱", label: "Test on Device" },
            { icon: "✅", label: "It's Live" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. It's Live — infrastructure moment */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="IT'S LIVE" title="You Built Infrastructure" bullets={[
            { icon: "🌍", text: "That URL exists on a server — accessible from anywhere" },
            { icon: "👤", text: "Users can sign up, do something, come back tomorrow" },
            { icon: "💾", text: "Their data is still there when they return" },
            { icon: "🏗️", text: "That's infrastructure. You built infrastructure." },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Real App Trinity intro */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <SplitVisualScene title="The Real App Trinity" bullets={[
            { icon: "📦", text: "Packages — pre-built tools you connected" },
            { icon: "🔗", text: "APIs — intelligence your app accesses on demand" },
            { icon: "🗄️", text: "Database — memory that makes your app real" },
          ]} visual={<RealAppTrinityVisual delay={30} />} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Packages deep dive */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="PACKAGES" title="Tools Built by Expert Teams" bullets={[
            { icon: "🔐", text: "Authentication — you didn't build a login system, you integrated one" },
            { icon: "💳", text: "Payments — secure transactions handled by specialists" },
            { icon: "📁", text: "File uploads — infrastructure you connected, not created" },
            { icon: "🧩", text: "That's how real apps get built" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. APIs deep dive */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="APIs" title="Intelligence on Demand" bullets={[
            { icon: "🤖", text: "AI models — your app can think, and that's not small" },
            { icon: "🔌", text: "External services — data feeds and third-party capabilities" },
            { icon: "☁️", text: "Capability your app accesses without running anything yourself" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Database deep dive */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="DATABASE" title="Memory. Persistence. Reality." bullets={[
            { icon: "🧠", text: "Your app knows who your users are" },
            { icon: "📅", text: "It remembers what they did yesterday" },
            { icon: "📝", text: "It stores the record of everything that's happened" },
            { icon: "💡", text: "Without this, nothing persists — with it, your app is real" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Reflection — look at your own app */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <ComparisonScene title="Look at Your App" leftCard={{
            title: "Day 14", items: [
              { icon: "📄", text: "A spec document" },
              { icon: "💡", text: "An idea" },
              { icon: "🚫", text: "No code yet" },
            ],
          }} rightCard={{
            title: "Day 26", items: [
              { icon: "📦", text: "Packages integrated" },
              { icon: "🔗", text: "APIs connected" },
              { icon: "🗄️", text: "Database storing data" },
            ],
          }} bgTint={TINT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Document It — four questions */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="DOCUMENT IT" title="Write Down What You Built" bullets={[
            { icon: "❓", text: "What does your app do?" },
            { icon: "👤", text: "Who is it for?" },
            { icon: "🎯", text: "What problem does it solve?" },
            { icon: "🔧", text: "What's the tech stack? (Builder, database, packages, APIs)" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. How to Talk About It */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene badge="YOUR PITCH" title="How to Talk About It" bullets={[
            { icon: "🎤", text: "My app [name] helps [who] to [what]" },
            { icon: "🔧", text: "Built with [builder] + [packages/APIs]" },
            { icon: "🌐", text: "Live at [URL]" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. Portfolio — first entry */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TextAndBulletsScene badge="PORTFOLIO" title="Your First Portfolio Entry" bullets={[
            { icon: "📄", text: "Not for an assignment — for yourself" },
            { icon: "📂", text: "This becomes the first entry in your portfolio" },
            { icon: "🔁", text: "You'll come back to it" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 16. Journey recap diagram */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <DiagramScene title="What You Built in Two Weeks" steps={[
            { icon: "📋", label: "Spec" },
            { icon: "🏗️", label: "Scaffold" },
            { icon: "🔧", label: "Integrate" },
            { icon: "🚀", label: "Ship" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 17. Fourteen Days Ago reflection */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TextAndBulletsScene badge="REFLECTION" title="Fourteen Days Ago, You Had a Spec" bullets={[
            { icon: "📋", text: "Today you have a deployed web app with persistence" },
            { icon: "🔗", text: "Real-world integrations and a live URL" },
            { icon: "🏆", text: "The Real App Trinity: packages, APIs, and a database" },
            { icon: "💡", text: "You didn't just make a demo. You built a modern app." },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 18. Deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[17]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Share Your Launch" bullets={[
            { icon: "🌐", text: "Deployed app with a live URL" },
            { icon: "📝", text: "Document what you built in 3-4 sentences" },
            { icon: "💬", text: "Share your URL in Discord — this is your launch" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 19. See You on Day 27 */}
        <TransitionSeries.Sequence durationInFrames={D[18]}>
          <TitleScene title="See You on Day 27" subtitle="Tomorrow: share it once. One small launch moment." bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 20. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[19]}>
          <TitleScene title="You Shipped It." subtitle="That's not a small thing." showLogo bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
