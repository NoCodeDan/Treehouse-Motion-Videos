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
import { DAYB21_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const DayB21PrepForLaunchWeek: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Prep for Launch Week" subtitle="Day 21 — Finishing, not exploring" showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Framing — Week 3 is done */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene title="Week 3 Is Done" bullets={[
            { icon: "✅", text: "You built something real" },
            { icon: "🗄️", text: "You have a running app with a database" },
            { icon: "🔄", text: "Your core loop is working" },
            { icon: "👤", text: "You put it in front of a real person and got feedback" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Week 4 is different */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <ComparisonScene title="Week 4 Is Different" leftCard={{
            title: "Week 3: Exploring", items: [
              { icon: "🔍", text: "Try things out" },
              { icon: "🧪", text: "Experiment with features" },
              { icon: "🐛", text: "Find and log bugs" },
            ], accentColor: ACCENT_BLUE,
          }} rightCard={{
            title: "Week 4: Finishing", items: [
              { icon: "🚀", text: "Ship a v1" },
              { icon: "🎯", text: "Be deliberate about what you build" },
              { icon: "✂️", text: "Cut what doesn't make it" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Not everything makes the cut */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene title="Not Everything Makes the Cut" bullets={[
            { icon: "📋", text: "Not every bug on your log is worth fixing this week" },
            { icon: "💡", text: "Not every idea from the Friend Test needs action right now" },
            { icon: "🎯", text: "You're shipping a v1 — a real, deployed web app someone can use" },
            { icon: "📝", text: "Today you make the list that guides the next five days" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Step 1 — Review your materials */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="STEP 1" title="Review Your Week 3 Materials" bullets={[
            { icon: "🐛", text: "Your bug log from Day 18 — what broke and what's still broken" },
            { icon: "👤", text: "Your observations from the Day 20 Friend Test — where users got stuck" },
            { icon: "📋", text: "Features you parked in your Day 16 Risk Scan — revisit what you deferred" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 2 — Write your Top 3 */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 2" title="Write Your Top 3 List" bullets={[
            { icon: "🏆", text: "Three improvements with the most impact on your core loop" },
            { icon: "⚠️", text: "Not the most interesting improvements — the most important ones" },
            { icon: "🔑", text: "Focus on what makes your app work for a real user" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. The litmus test for each item */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <ComparisonScene title="The Litmus Test" leftCard={{
            title: "Stays on the List", items: [
              { icon: "🚫", text: "Without it, the app doesn't make sense" },
              { icon: "🔗", text: "It's critical to the core loop" },
              { icon: "📅", text: "Must be done by Friday" },
            ], accentColor: ACCENT_PURPLE,
          }} rightCard={{
            title: "Week 5 Idea", items: [
              { icon: "✅", text: "App still works without it" },
              { icon: "✨", text: "Nice to have, not need to have" },
              { icon: "📆", text: "Can wait until after launch" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Step 3 — Prioritize ruthlessly */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="STEP 3" title="Prioritize Ruthlessly" bullets={[
            { icon: "🎯", text: "Your v1 goal: a deployed app with a complete core loop" },
            { icon: "🔐", text: "At least one 'real app' integration — auth, payments, or database" },
            { icon: "🏅", text: "Everything else is a bonus" },
            { icon: "✂️", text: "Cutting scope is a skill, not a failure" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. The v1 goal — diagram */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <DiagramScene title="Your v1 Checklist" steps={[
            { icon: "🌐", label: "Deployed" },
            { icon: "🔄", label: "Core Loop" },
            { icon: "🔐", label: "Integration" },
            { icon: "👤", label: "Real User" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Step 4 — Write your Week 4 sentence */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="STEP 4" title="Write Your Week 4 Sentence" bullets={[
            { icon: "📝", text: "Finish this: 'By Friday, my app will [do this] for [this user]'" },
            { icon: "💡", text: "Example: 'By Friday, my app will let a new user sign up, submit a request, and see a personalized AI-generated response'" },
            { icon: "🎯", text: "One sentence. Specific. Achievable." },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Reflection — name the gap */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="REFLECT" title="Name the Gap" bullets={[
            { icon: "🔍", text: "What's the difference between what your app does now and what it needs to do?" },
            { icon: "🗺️", text: "Naming that gap is how you close it" },
            { icon: "🧭", text: "The gap isn't scary — it's your roadmap for the week" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Reflection — let go */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="REFLECT" title="What Can You Let Go Of?" bullets={[
            { icon: "🚫", text: "What are you holding onto that doesn't serve the core loop?" },
            { icon: "🔮", text: "A feature you cut isn't a loss — it's a future version" },
            { icon: "🧘", text: "Letting go now is what makes shipping possible" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene title="Your Deliverable" bullets={[
            { icon: "📋", text: "Your Top 3 improvements list" },
            { icon: "📝", text: "Your Week 4 sentence" },
            { icon: "💬", text: "Post it in Discord — accountability comes from stating your goal out loud" },
            { icon: "🤝", text: "You'll be surprised how much it helps before the week starts" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 14. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="Launch Week Starts Now" subtitle="You're not exploring anymore — you're shipping" showLogo bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
