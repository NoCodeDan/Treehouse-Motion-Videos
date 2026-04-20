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
import { DAYB27_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const DayB27TinyLaunchMoment: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Tiny Launch Moment" subtitle="Day 27 — One share, not a campaign" showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Framing — your app is live */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene title="Your App Is Live. Now Do One Thing." bullets={[
            { icon: "🚀", text: "Not a product launch campaign" },
            { icon: "🚫", text: "Not a landing page with a waitlist" },
            { icon: "1️⃣", text: "One post. One message. One share." },
            { icon: "💎", text: "To one person whose opinion you'd actually value" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Why sharing matters */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene title="Shipping in Private Kills Momentum" bullets={[
            { icon: "🔇", text: "Keeping it to yourself feels safe but stalls growth" },
            { icon: "🏆", text: "Builders who grow fastest share before they're comfortable" },
            { icon: "🎯", text: "Every share before it's perfect practices letting go" },
            { icon: "📈", text: "This isn't about going viral — it's about putting something real out there" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Comparison — ship private vs. share early */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <ComparisonScene title="Two Builder Habits" leftCard={{
            title: "Ship in Private", items: [
              { icon: "🔒", text: "Feels safe but builds no momentum" },
              { icon: "🔁", text: "Endless tweaks with no outside signal" },
              { icon: "🫥", text: "No one knows what you built" },
            ], accentColor: ACCENT_BLUE,
          }} rightCard={{
            title: "Share Before Ready", items: [
              { icon: "💬", text: "Gets real feedback from real people" },
              { icon: "🚀", text: "Builds the habit of putting work out there" },
              { icon: "🧠", text: "You learn what actually matters to users" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Real feedback you can't get any other way */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene title="Feedback You Can't Get Any Other Way" bullets={[
            { icon: "👤", text: "Real people, outside the bootcamp, encountering your app for the first time" },
            { icon: "🔍", text: "They see things you've become blind to" },
            { icon: "👀", text: "Pay attention to what happens — that's the real data" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 1 — pick where to share */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 1" title="Pick Where to Share" bullets={[
            { icon: "💬", text: "Post in Discord with your URL and a one-sentence description" },
            { icon: "👤", text: "Send it to one person — a friend, a potential user, someone who'd benefit" },
            { icon: "🐦", text: "Post on Twitter/X or LinkedIn: 'I built this in two weeks. Here's what it does.'" },
            { icon: "🌐", text: "Submit to a community you're already part of" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 2 — write one sentence */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="STEP 2" title="Write One Sentence About What It Does" bullets={[
            { icon: "📝", text: "Not what your app is — what it does for the person using it" },
            { icon: "💡", text: "Example: 'Helps freelancers send follow-up emails in 30 seconds without sounding robotic'" },
            { icon: "🚫", text: "Not a pitch deck. Not a feature list. One clear sentence." },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. What it does, not what it is */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <ComparisonScene title="What It Does vs. What It Is" leftCard={{
            title: "What It Is (Avoid)", items: [
              { icon: "❌", text: "'A React app with a dashboard'" },
              { icon: "❌", text: "'An AI-powered tool built with Next.js'" },
              { icon: "❌", text: "Technical jargon no one asked for" },
            ], accentColor: ACCENT_BLUE,
          }} rightCard={{
            title: "What It Does (Use This)", items: [
              { icon: "✅", text: "'Helps freelancers send follow-ups in 30 seconds'" },
              { icon: "✅", text: "'Tracks your gym progress without spreadsheets'" },
              { icon: "✅", text: "Benefit-first, clear, human language" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Step 3 — post it or send it */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="STEP 3" title="Post It or Send It" bullets={[
            { icon: "✍️", text: "Don't edit it 12 times" },
            { icon: "📖", text: "Write it, read it once, and ship it" },
            { icon: "📤", text: "The goal is done, not perfect" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Step 4 — note what happens */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="STEP 4" title="Note What Happens" bullets={[
            { icon: "⏰", text: "Check back in a few hours" },
            { icon: "💬", text: "What feedback did you get?" },
            { icon: "❓", text: "What questions did people ask?" },
            { icon: "😮", text: "What surprised you?" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. The steps diagram */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <DiagramScene title="The Tiny Launch Exercise" steps={[
            { icon: "📍", label: "Pick Place" },
            { icon: "📝", label: "One Sentence" },
            { icon: "📤", label: "Post It" },
            { icon: "👀", label: "Note Reactions" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Reflection prompts */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene title="Reflection" bullets={[
            { icon: "😮", text: "What feedback surprised you? Unexpected responses are the most useful." },
            { icon: "🔄", text: "How would you change your one-sentence pitch? The first version is rarely the best." },
            { icon: "📊", text: "Your pitch is a skill — it gets better every time you use it" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Deliverable + Discord share */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Proof You Shared" bullets={[
            { icon: "📸", text: "A screenshot of the post you made" },
            { icon: "📝", text: "Or a note about who you sent it to and what they said" },
            { icon: "💬", text: "Drop it in Discord — every launch moment is worth documenting" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. Outro */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="You Put It Out There" subtitle="One share is all it takes" bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 15. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TitleScene title="See You on Day 28" subtitle="Tomorrow: your v2 roadmap" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
