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
import { DAYB23_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const DayB23SoloImprovement: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Solo Improvement Sprint" subtitle="Day 23 — Less scaffolding, more independence" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Framing — yesterday you learned to debug, today you build on that */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="FRAMING" title="You Learned to Debug. Now You Build." bullets={[
            { icon: "🔧", text: "Yesterday you learned how to debug with AI" },
            { icon: "📈", text: "Today you build on that — with less scaffolding" },
            { icon: "🎯", text: "One small improvement, implemented by you" },
            { icon: "🤖", text: "Just you, your app, your AI tool, and the Day 22 framework" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Why this feels different — intentional discomfort */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="HONEST TRUTH" title="This Will Feel Different" bullets={[
            { icon: "🚶", text: "No step-by-step walkthrough today" },
            { icon: "🗺️", text: "The path isn't pre-lit — and that's intentional" },
            { icon: "💪", text: "You need reps where you figure out the path yourself" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Confidence that demos can't build */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <ComparisonScene title="Two Kinds of Understanding" leftCard={{
            title: "Watching a Demo", items: [
              { icon: "👀", text: "You follow along and it makes sense" },
              { icon: "😊", text: "You feel confident in the moment" },
              { icon: "😶", text: "But the confidence fades when you're alone" },
            ],
          }} rightCard={{
            title: "Doing It Yourself", items: [
              { icon: "💪", text: "You struggle, ask questions, figure it out" },
              { icon: "🐢", text: "The confidence builds slower" },
              { icon: "🏆", text: "But it sticks — because you earned it" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. The only rule — start small, finish it */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="THE RULE" title="Start Small. Finish What You Pick." bullets={[
            { icon: "📏", text: "Pick something specific and contained" },
            { icon: "⏱️", text: "Something you could finish in one focused session" },
            { icon: "✅", text: "That's the only rule: start small, finish it" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 1: Choose one improvement from your Top 3 */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 1" title="Choose One Improvement" bullets={[
            { icon: "📋", text: "Go back to your Week 4 Top 3 list from Day 21" },
            { icon: "🎯", text: "Pick one item — something specific you can act on" },
            { icon: "📏", text: "It should be small enough to finish today" },
            { icon: "🔒", text: "Commit to it before you start building" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Good picks vs not yet */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <ComparisonScene title="Choosing the Right Size" leftCard={{
            title: "Good Picks", items: [
              { icon: "✅", text: "Fix a form validation issue from testing" },
              { icon: "✅", text: "Improve the empty state for a page" },
              { icon: "✅", text: "Add a loading indicator" },
              { icon: "✅", text: "Tighten a confusing navigation flow" },
            ],
          }} rightCard={{
            title: "Not Yet", items: [
              { icon: "🚫", text: "Adding authentication" },
              { icon: "🚫", text: "Connecting a full API" },
              { icon: "🚫", text: "Launching to production" },
              { icon: "📅", text: "Save these bigger items for Day 24" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Step 2: State what you're building */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <SplitVisualScene title="State What You're Building" bullets={[
            { icon: "📝", text: "Write it down before you touch any code" },
            { icon: "✏️", text: "\"I'm going to [change this thing]...\"" },
            { icon: "🎯", text: "\"...so that [this happens instead].\"" },
            { icon: "1️⃣", text: "One sentence. That's it." },
          ]} visual={
            <div style={{ display: "flex", flexDirection: "column", gap: 18, padding: 24, fontSize: 22, fontFamily: "monospace", background: "#f8f8ff", borderRadius: 16, border: "2px solid #e0e0e0" }}>
              <div style={{ fontWeight: 700, color: "#6B46C1" }}>Before you start:</div>
              <div style={{ color: "#333" }}>"I'm going to <span style={{ background: "#E9D8FD", padding: "2px 6px", borderRadius: 4 }}>add a loading spinner to the dashboard</span> so that <span style={{ background: "#C6F6D5", padding: "2px 6px", borderRadius: 4 }}>users know data is being fetched</span>."</div>
            </div>
          } bgTint={TINT_BLUE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Step 3: Build it with AI */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="STEP 3" title="Build It — With AI Help" bullets={[
            { icon: "🤖", text: "Use your AI tool to help write the code" },
            { icon: "💬", text: "Describe the improvement clearly to AI" },
            { icon: "❓", text: "Ask for explanations when you get code you don't understand" },
            { icon: "🧠", text: "Understanding grows each time you ask 'why'" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Use Day 22's debugging framework when things break */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="FROM DAY 22" title="When Things Break — Use the Framework" bullets={[
            { icon: "1️⃣", text: "What you were doing when it broke" },
            { icon: "2️⃣", text: "What happened (the actual behavior)" },
            { icon: "3️⃣", text: "What you expected to happen" },
            { icon: "📋", text: "Three sentences — give that to AI and work through it" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Step 4: Test against your core loop */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="STEP 4" title="Test It Against Your Core Loop" bullets={[
            { icon: "🧪", text: "Go through your app's core loop end to end" },
            { icon: "✅", text: "Does the change work the way you intended?" },
            { icon: "🔍", text: "Does it break anything else?" },
            { icon: "📋", text: "Then mark it done on your Top 3 list" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. The full process — diagram */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <DiagramScene title="The Solo Improvement Process" steps={[
            { icon: "📋", label: "Choose from Top 3" },
            { icon: "📝", label: "State it in one sentence" },
            { icon: "🔧", label: "Build with AI" },
            { icon: "🧪", label: "Test your core loop" },
            { icon: "✅", label: "Mark it done" },
          ]} bgTint={TINT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Reflection — understanding after doing vs being told */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="REFLECT" title="What Crossed Over Today?" bullets={[
            { icon: "💡", text: "There's a difference between understanding when explained and understanding after doing it" },
            { icon: "🔄", text: "What would you do differently next time?" },
            { icon: "📓", text: "Even small builds have lessons worth noting" },
            { icon: "📈", text: "The lesson doesn't have to be big to be valuable" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. Deliverable — one completed improvement */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="One Completed Improvement" bullets={[
            { icon: "🚀", text: "Your deliverable: one finished improvement to your app" },
            { icon: "📸", text: "Share before and after in Discord" },
            { icon: "👀", text: "Showing the change matters more than describing it" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. Outro */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TitleScene title="Every Improvement You Make on Your Own" subtitle="Builds a confidence that watching a demo can't" bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 16. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TitleScene title="See You on Day 24" subtitle="Tomorrow: final feature sprint" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
