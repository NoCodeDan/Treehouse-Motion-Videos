import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { TitleScene } from "../templates/TitleScene";
import { TextAndBulletsScene } from "../templates/TextAndBulletsScene";
import { DiagramScene } from "../templates/DiagramScene";
import { ComparisonScene } from "../templates/ComparisonScene";
import { SplitVisualScene } from "../templates/SplitVisualScene";
import { ACCENT_PURPLE, ACCENT_BLUE, TINT_GREEN, TINT_BLUE, TINT_PURPLE } from "../lib/brand";
import { DAY27_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const Day27RealUsageDay: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Real Usage Day — Round 2" subtitle="Day 27 — The honest measure" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Framing — same concept, different agent */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene title="Same Concept. Different Agent." bullets={[
            { icon: "📋", text: "You did this on Day 20. Same exercise." },
            { icon: "🔄", text: "But your agent has changed — stress testing, a real integration, an upgrade sprint, a full ship checklist" },
            { icon: "🎯", text: "It's a different thing now" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Day 20 vs Today comparison */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <ComparisonScene
            title="Day 20 vs Day 27"
            leftCard={{
              title: "Day 20",
              items: [
                { icon: "📝", text: "Fresh off the build" },
                { icon: "🔧", text: "A working draft" },
                { icon: "❓", text: "Untested assumptions" },
              ],
              accentColor: ACCENT_PURPLE,
            }}
            rightCard={{
              title: "Day 27",
              items: [
                { icon: "🛡️", text: "Stress-tested" },
                { icon: "🔗", text: "Real integration" },
                { icon: "🚀", text: "Upgraded and shipped" },
              ],
              accentColor: ACCENT_BLUE,
            }}
            bgTint={TINT_BLUE}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. The honest measure */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene title="The Honest Measure" bullets={[
            { icon: "📊", text: "The comparison between Day 20 and today is the most honest measure of what you built this week" },
            { icon: "🚫", text: "Not the code. Not the documentation." },
            { icon: "✅", text: "The experience of actually using it on something real" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. The Exercise — diagram */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <DiagramScene title="The Exercise" steps={[
            { icon: "📋", label: "Pick Real Task" },
            { icon: "▶️", label: "Run Agent" },
            { icon: "📤", label: "Use Output" },
            { icon: "🔍", label: "Compare to Day 20" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 1 — real task, different than Day 20 */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 1" title="Use Your Agent on a Real Task" bullets={[
            { icon: "🆕", text: "Different task than Day 20 — a new one you genuinely need done today" },
            { icon: "📋", text: "Use your input template. Run it properly." },
            { icon: "🎯", text: "Don't give it the easy case — give it something real" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 2 — actually use the output */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="STEP 2" title="Use the Output" bullets={[
            { icon: "📧", text: "Send the email. Bring the doc to the meeting. Post the content." },
            { icon: "🔄", text: "Same rule as Day 20: actually use it" },
            { icon: "💡", text: "The test isn't whether it produced something — the test is whether it helped" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Reflection: experience and quality */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="REFLECT" title="Compare the Experience" bullets={[
            { icon: "⚡", text: "What's different about running it? Speed? Confidence? Friction?" },
            { icon: "📈", text: "Did the output quality improve? By how much, roughly?" },
            { icon: "🔢", text: "1-10 scale, same as Day 20 — pick a number" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Reflection: input system and time */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="REFLECT" title="Input System + Timing" bullets={[
            { icon: "📋", text: "Did your input system work smoothly, or did you still find yourself improvising?" },
            { icon: "🛠️", text: "If improvising, your template needs one more update" },
            { icon: "⏱️", text: "How long did the whole process take, start to finish? Compare to Day 20." },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Most important question */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <SplitVisualScene title="The Most Important Question" bullets={[
            { icon: "🔄", text: "Will you run this agent again next week — without being reminded?" },
            { icon: "💡", text: "Why or why not?" },
            { icon: "✅", text: "Honest answer. No judgment either way." },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="What to Submit" bullets={[
            { icon: "📦", text: "One real-world agent output" },
            { icon: "📝", text: "A short comparative reflection: Day 20 vs Day 27 — what's different and why" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Discord share */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="DISCORD" title="Share Your Progress Story" bullets={[
            { icon: "💬", text: "\"My agent scored [X/10] on Day 20 and [Y/10] today. Here's what changed.\"" },
            { icon: "🌟", text: "These are some of the most encouraging posts in this community" },
            { icon: "📊", text: "They show what two weeks of iteration actually produces" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Outro — your progress story */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TitleScene title="Your Progress Story" subtitle="Day 20 score vs Day 27 score — that's your journey" bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 14. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TitleScene title="See You on Day 28" subtitle="Tomorrow: you built something real" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
