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
import { DAYB18_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";

export const DayB18BreakItOnPurpose: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Break It on Purpose" subtitle="Day 18 — Find weak spots before users do" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — your app is running, now find where it falls apart */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene title="Your App Is Running. That's Real." bullets={[
            { icon: "🎉", text: "You have a working app. That's a milestone." },
            { icon: "🔍", text: "Now it's time to find out where it falls apart." },
            { icon: "⏰", text: "Every app has weak spots — the question is whether you find them now or a real user finds them later." },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. Framing — be the bad user */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene title="Be the Bad User" bullets={[
            { icon: "👤", text: "Today you're going to be that user — the one who types the wrong thing" },
            { icon: "🖱️", text: "The one who clicks in the wrong order and doesn't follow instructions" },
            { icon: "💡", text: "This is called stress-testing, and it's one of the most valuable things you can do" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Bug logs are your building backlog */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <ComparisonScene title="Bugs Found Now vs. Bugs Found Later" leftCard={{
            title: "Found by You Today", items: [
              { icon: "🐛", text: "Fast and free to fix" },
              { icon: "📋", text: "Goes on your building backlog" },
              { icon: "🧠", text: "You learn how your app actually works" },
            ], accentColor: ACCENT_BLUE,
          }} rightCard={{
            title: "Found by a Real User", items: [
              { icon: "😤", text: "Costs trust and credibility" },
              { icon: "🔥", text: "Creates urgent, stressful fixes" },
              { icon: "❓", text: "You may never hear about it — they just leave" },
            ],
          }} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. The exercise overview diagram */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <DiagramScene title="The Stress-Test Exercise" steps={[
            { icon: "📱", label: "Open App" },
            { icon: "🔤", label: "Weird Inputs" },
            { icon: "📭", label: "Empty States" },
            { icon: "🧭", label: "Break Nav" },
            { icon: "📝", label: "Log Bugs" },
            { icon: "🤖", label: "Ask AI" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. Step 1: Open your app like a stranger */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene badge="STEP 1" title="Open Your App as a Stranger" bullets={[
            { icon: "👁️", text: "Use it like someone who's never seen it before" },
            { icon: "😤", text: "Pretend you have no patience and no instructions" },
            { icon: "🎯", text: "You're not looking for perfection — you're generating a list of known issues" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Step 2: Try weird inputs */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene badge="STEP 2" title="Try Weird Inputs" bullets={[
            { icon: "🔤", text: "Type too many characters. Submit empty forms." },
            { icon: "🔣", text: "Use symbols where text is expected" },
            { icon: "🔗", text: "Paste a URL where a name should go" },
            { icon: "📏", text: "Push every field to its limits" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Step 3: Test empty states */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene badge="STEP 3" title="Test Empty States" bullets={[
            { icon: "📭", text: "What does the app show when there's no data yet?" },
            { icon: "🆕", text: "What happens on the very first visit before anything exists?" },
            { icon: "🔄", text: "Empty states are where most apps silently confuse users" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. Step 4: Confuse the navigation */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="STEP 4" title="Confuse the Navigation" bullets={[
            { icon: "⬅️", text: "Click the back button in unexpected places" },
            { icon: "🔀", text: "Try to access pages out of order" },
            { icon: "🔄", text: "Refresh mid-action — does the app recover?" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. Step 5: Log everything */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="STEP 5 — LOG IT" title="For Every Bug You Find" bullets={[
            { icon: "📝", text: "What happened?" },
            { icon: "🎯", text: "What did you expect to happen?" },
            { icon: "🚨", text: "Is it a blocker or something to address later?" },
            { icon: "💡", text: "You don't need to fix it today — just write it down" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Step 6: Bring bugs to AI */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <SplitVisualScene badge="STEP 6" title="Bring Your Bugs to AI" bullets={[
            { icon: "🤖", text: "For anything you don't know how to fix, paste your bug description" },
            { icon: "💬", text: "Ask: \"Here's what's happening in my app. What might cause this and how would I fix it?\"" },
            { icon: "🔧", text: "AI excels at diagnosing patterns you haven't seen before" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. The bug fix flow diagram */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <DiagramScene title="The Bug Fix Flow" steps={[
            { icon: "🐛", label: "Find Bug" },
            { icon: "📝", label: "Log It" },
            { icon: "🤖", label: "Ask AI" },
            { icon: "✅", label: "Fix + Test" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. Reflection — surprises */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene badge="REFLECTION" title="What Broke That Surprised You?" bullets={[
            { icon: "😮", text: "Surprises here are good — they're things you'd rather know now than after launch" },
            { icon: "👤", text: "What would a confused new user do first?" },
            { icon: "🧭", text: "If you handed this to someone with zero context, where would they get stuck?" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. Deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene badge="DELIVERABLE" title="Your Bug Log Is Your Backlog" bullets={[
            { icon: "📋", text: "A short list of what you found, what you expected, and whether it's blocking your core loop" },
            { icon: "💬", text: "Share your most interesting bug in Discord" },
            { icon: "🤝", text: "Odds are someone else hit the same thing — this is what the community is for" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. Outro */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <TitleScene title="Bug Logs Aren't Failure Reports" subtitle="They're your building backlog — smart decisions about what to fix before launch" bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 16. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TitleScene title="See You on Day 19" subtitle="Tomorrow: from MVP to modern app" showLogo bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
