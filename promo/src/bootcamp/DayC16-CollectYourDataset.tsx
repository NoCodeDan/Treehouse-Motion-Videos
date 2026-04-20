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
import { DAYC16_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const DayC16CollectYourDataset: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Collect Your Dataset" subtitle="Track C — Build Your Own Data Dashboard" showLogo bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Framing — yesterday you wrote a question, today you collect the data */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="TODAY'S GOAL" title="Yesterday a Question. Today the Data." bullets={[
            { icon: "📋", text: "Yesterday you wrote a question — today you collect the data that answers it" },
            { icon: "🚫", text: "Most people skip this step — they open a dashboard tool before they have anything to put in it" },
            { icon: "🔄", text: "That is backwards — data first, build second" },
          ]} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. The only rule — one source, ten entries */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="THE RULE" title="One Source. Ten Entries. Something Real." bullets={[
            { icon: "1️⃣", text: "Pick ONE source — do not try to pull from five places on the first day" },
            { icon: "🔟", text: "Ten rows is enough to see a pattern — more is better but ten gets you started" },
            { icon: "✅", text: "You need real data — the kind that actually reflects your life or your work" },
            { icon: "💡", text: "Messy is fine — incomplete is fine — starting is the point" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Step 1 — Choose data source (personal) */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene badge="STEP 1" title="Personal Life Data Sources" bullets={[
            { icon: "😴", text: "Habit tracker — sleep, workouts, mood logs" },
            { icon: "📅", text: "Calendar or time log — where your hours actually went" },
            { icon: "💰", text: "Spending categories — from your bank app or a notes app" },
            { icon: "⚡", text: "Energy or mood notes — how you felt throughout the week" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Step 1 — Choose data source (business) */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="STEP 1" title="Business or Work Data Sources" bullets={[
            { icon: "📈", text: "Content performance — views, likes, saves from any platform" },
            { icon: "👥", text: "Leads or client contacts — who reached out and when" },
            { icon: "💵", text: "Freelance income — revenue by project or client" },
            { icon: "⏱️", text: "Project time — estimates vs actuals, where hours really go" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 2 — Gather at least 10 entries */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 2" title="Gather At Least 10 Entries" bullets={[
            { icon: "🔟", text: "10 rows minimum — more is better, but ten gets you started" },
            { icon: "📊", text: "Google Sheet — easiest to build from later" },
            { icon: "📁", text: "A CSV export from any app you already use" },
            { icon: "✏️", text: "A manual table you type yourself — that counts too" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 3 — Label your columns clearly */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <ComparisonScene title="Give Your Columns Clear Names" leftCard={{
            title: "Not This", items: [
              { icon: "❌", text: "col_1" },
              { icon: "❌", text: "col_2" },
              { icon: "❌", text: "field_a" },
              { icon: "❌", text: "x" },
            ],
          }} rightCard={{
            title: "Do This", items: [
              { icon: "✅", text: "Date" },
              { icon: "✅", text: "Client" },
              { icon: "✅", text: "Hours Spent" },
              { icon: "✅", text: "Revenue" },
            ],
          }} bgTint={TINT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Step 4 — Save it somewhere accessible */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="STEP 4" title="Save It Somewhere You Can Access Tomorrow" bullets={[
            { icon: "📄", text: "A Google Sheet works — shareable and easy to connect" },
            { icon: "💾", text: "A downloaded CSV works — simple and portable" },
            { icon: "🏷️", text: "Column headers on row one — always" },
            { icon: "📌", text: "You will upload or paste this file on Day 17" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. The full process — diagram */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <DiagramScene title="The Full Process" steps={[
            { icon: "1️⃣", label: "Pick one data source" },
            { icon: "2️⃣", label: "Gather 10+ entries" },
            { icon: "3️⃣", label: "Label every column in plain English" },
            { icon: "4️⃣", label: "Save as Google Sheet or CSV" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Reflection — what patterns do you suspect? */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="REFLECT" title="What Patterns Do You Suspect?" bullets={[
            { icon: "🤔", text: "You probably already have a hunch about what the data will show" },
            { icon: "✏️", text: "Write down your gut feeling before you see the numbers" },
            { icon: "🔍", text: "Compare your intuition to what the data actually reveals" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Reflection — what's missing? */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="REFLECT" title="What's Missing That You Wish You Had Tracked?" bullets={[
            { icon: "📝", text: "Notice the gaps in your data now — this is how dashboards get better" },
            { icon: "🗓️", text: "You will address these gaps in Week 4" },
            { icon: "💡", text: "Every missing field is a future improvement, not a failure" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Your Dataset Is Your Deliverable" bullets={[
            { icon: "✅", text: "A small dataset with at least 10 entries, clearly labeled" },
            { icon: "💾", text: "Saved and ready to use tomorrow" },
            { icon: "💬", text: "Share in Discord: what data source you picked and what question you are answering" },
            { icon: "🤝", text: "You will be surprised how many people are working on similar questions" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Your data is ready */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TitleScene title="Your Data Is Ready" subtitle="Tomorrow you build your first dashboard from it" bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 14. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="See You on Day 17" subtitle="Tomorrow: build sprint — dashboard v0" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
