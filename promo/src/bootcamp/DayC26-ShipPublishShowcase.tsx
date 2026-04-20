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
import { DAYC26_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { ShipFormatsVisual } from "./visuals/ShipFormatsVisual";
import { DataJourneyVisual } from "./visuals/DataJourneyVisual";

export const DayC26ShipPublishShowcase: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Ship, Publish, Showcase" subtitle="Track C — Build Your Own Data Dashboard" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — ten days ago you weren't a data person */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="THE HOOK" title="Ten Days Ago You Said You Weren't a Data Person" bullets={[
            { icon: "📊", text: "Now you have a working dashboard" },
            { icon: "🧠", text: "Built with AI, shaped by your own questions" },
            { icon: "👀", text: "Look at what you built" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Callout — this is for career switchers, entrepreneurs, non-technical builders */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="CALLOUT" title="This One Is for You" bullets={[
            { icon: "🔄", text: "Career switchers who took the leap" },
            { icon: "🚀", text: "Entrepreneurs looking for an edge" },
            { icon: "🛠️", text: "Non-technical builders who built something real" },
            { icon: "🤔", text: "Everyone who started this week unsure it would work" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Credibility — shipping separates learners from builders */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <ComparisonScene title="Shipping Changes Everything" leftCard={{
            title: "People Who Learn", items: [
              { icon: "📖", text: "Read about data" },
              { icon: "📺", text: "Watch tutorials" },
              { icon: "📅", text: "Plan to start someday" },
            ],
          }} rightCard={{
            title: "People Who Build", items: [
              { icon: "🚀", text: "Ship a real project" },
              { icon: "📣", text: "Share it publicly" },
              { icon: "🔄", text: "Iterate from feedback" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Compass — shipping small things creates something larger */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene badge="COMPASS" title="Why Shipping Creates Something Larger" bullets={[
            { icon: "🧭", text: "Shipping small things builds a track record" },
            { icon: "📐", text: "You'll have a framework for sharing in any format" },
            { icon: "🔑", text: "Core learning: shipping creates confidence" },
            { icon: "📈", text: "Confidence compounds over time" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. What you actually built + DataJourneyVisual */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <SplitVisualScene title="What You Actually Built" bullets={[
            { icon: "❓", text: "Identified a real question about your life or work" },
            { icon: "📦", text: "Collected data nobody handed to you" },
            { icon: "🤖", text: "Used AI to see what you couldn't see alone" },
            { icon: "🎯", text: "Built something that helps you make better decisions" },
          ]} visual={<DataJourneyVisual delay={30} />} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. The chain — Question → Data → Chart → Insight → Decision */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <DiagramScene title="A Repeatable System" steps={[
            { icon: "❓", label: "Question" },
            { icon: "📦", label: "Data" },
            { icon: "📊", label: "Chart" },
            { icon: "💡", label: "Insight" },
            { icon: "✅", label: "Decision" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Most people skip this — guess vs system */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <ComparisonScene title="Most People Skip This Chain" leftCard={{
            title: "The Guess Loop", items: [
              { icon: "❓", text: "Have a question" },
              { icon: "🤷", text: "Make a guess" },
              { icon: "🎲", text: "Act on the guess" },
              { icon: "😕", text: "Wonder why things aren't improving" },
            ],
          }} rightCard={{
            title: "What You Built", items: [
              { icon: "❓", text: "Ask a clear question" },
              { icon: "📦", text: "Collect real data" },
              { icon: "📊", text: "Visualize the answer" },
              { icon: "✅", text: "Make an informed decision" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Why small ships matter */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene title="Why Small Ships Matter" bullets={[
            { icon: "🚢", text: "Everyone significant started with something small they shipped before it was perfect" },
            { icon: "🌍", text: "The only way to know if it works: put it in front of someone and see what happens" },
            { icon: "📣", text: "Not because they were brave — because they understood something" },
            { icon: "💡", text: "Confidence comes from shipping, not from planning" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Your dashboard doesn't need to be polished */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene title="It Doesn't Need to Be Polished" bullets={[
            { icon: "✨", text: "It needs to be real" },
            { icon: "👤", text: "Real enough that someone can understand your question" },
            { icon: "🔍", text: "Real enough that they can see what you found out" },
            { icon: "🎯", text: "That's it. That's the bar." },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Ship formats — from the script */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <SplitVisualScene title="Pick Your Ship Format" bullets={[
            { icon: "📄", text: "PDF export — download and save for reference" },
            { icon: "📝", text: "Notion page — paste charts, insights, and recommendation" },
            { icon: "📊", text: "Google Sheet — make it view-only and share the link" },
            { icon: "💬", text: "Discord post — your question, one insight, your decision" },
            { icon: "💼", text: "LinkedIn — \"I built a personal dashboard. Here are 3 things I learned.\"" },
          ]} visual={<ShipFormatsVisual delay={30} />} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. What to include in your share */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene badge="INCLUDE" title="What to Include in Your Share" bullets={[
            { icon: "❓", text: "Your dashboard question" },
            { icon: "📊", text: "Your best chart or screenshot" },
            { icon: "💡", text: "Your one insight in plain English" },
            { icon: "✅", text: "Your decision: \"Based on this, I will __________.\"" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. What shipping does for you — the identity shift */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene title="The Identity Shift" bullets={[
            { icon: "🔄", text: "You stop being someone who's learning about data" },
            { icon: "🏗️", text: "You become someone who builds with it" },
            { icon: "🪪", text: "That's a small but real identity shift" },
            { icon: "🏆", text: "Proof you can go from question to answer to decision" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. A habit of clarity — the system compounds */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene title="You Built a Habit of Clarity" bullets={[
            { icon: "📅", text: "This system will still be there next week, and the week after" },
            { icon: "📈", text: "Every time you update it, it gets more valuable" },
            { icon: "🧠", text: "Every decision sharpens your ability to ask better questions" },
            { icon: "🎯", text: "You didn't build a chart. You built a habit of clarity. Ship it." },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. Checkpoint */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TextAndBulletsScene badge="CHECKPOINT" title="Where You Are Right Now" bullets={[
            { icon: "✅", text: "You know what you built and why it matters" },
            { icon: "✅", text: "You know why shipping matters more than perfecting" },
            { icon: "✅", text: "You know how to share it — pick your format and post" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 16. Outro */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TitleScene title="You Shipped a Data Project" subtitle="Pick your format, share your dashboard, post it in Discord. This is Showcase Day." bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 17. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TitleScene title="See You on Day 27" subtitle="Tomorrow: design the system that keeps this going every week" showLogo bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
