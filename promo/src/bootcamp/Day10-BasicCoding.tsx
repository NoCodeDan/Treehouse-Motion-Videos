import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { TitleScene } from "../templates/TitleScene";
import { TextAndBulletsScene } from "../templates/TextAndBulletsScene";
import { SplitVisualScene } from "../templates/SplitVisualScene";
import {
  ACCENT_PURPLE,
  ACCENT_BLUE,
  TINT_GREEN,
  TINT_BLUE,
  TINT_PURPLE,
} from "../lib/brand";
import { DAY10_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { AppArchitectureDiagram } from "./visuals/AppArchitectureDiagram";

export const Day10BasicCoding: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* Scene 1 — Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene
            title="Basic Coding Knowledge"
            subtitle="You won't write code — but you'll understand it"
            showLogo
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 2 — Hook */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TitleScene
            title="You're building an app without writing code. So why is this video about code?"
            subtitle="Because the moment something breaks — and something will break — you need to be able to describe the problem. This video gives you the words."
            showLogo={false}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 3 — Know the Pieces */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene
            title="Know the Pieces, Direct the Build"
            subtitle="Knowing how the pieces fit together doesn't make you a developer. It makes you a much better director of one."
            bullets={[
              { icon: "🎯", text: "Four fundamental parts of any app — in plain English" },
              { icon: "🤖", text: "Use that understanding to prompt AI more precisely" },
              { icon: "💡", text: "You don't need to build these pieces" },
              { icon: "🗣️", text: "You need to know what to call them when something goes wrong" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 4 — 4 Parts of Every App */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <SplitVisualScene
            title="4 Parts of Every App"
            bullets={[
              { icon: "🖥️", text: "Front End — what users see and interact with" },
              { icon: "⚙️", text: "Back End — the logic behind the scenes" },
              { icon: "🔌", text: "APIs — how different pieces talk to each other" },
              { icon: "🗄️", text: "Database — where data lives" },
            ]}
            visual={<AppArchitectureDiagram delay={30} />}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 5 — Front End */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TextAndBulletsScene
            title="Front End: The Storefront"
            badge="PART 1"
            subtitle="Everything a user can see and interact with. Buttons, screens, layouts, forms."
            bullets={[
              { icon: "🏪", text: "Think of it as the storefront — the part facing the customer" },
              { icon: "👆", text: "When you open an app and tap something — that's the front end" },
              { icon: "🔍", text: "If something looks wrong, a button isn't working, or layout is broken…" },
              { icon: "🎯", text: "That's a front end problem" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 6 — Back End */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <TextAndBulletsScene
            title="Back End: The Kitchen"
            badge="PART 2"
            subtitle="Everything happening behind the scenes. The logic. The rules."
            bullets={[
              { icon: "👨‍🍳", text: "The kitchen — the customer never sees it, but it does all the actual work" },
              { icon: "⚡", text: "What happens when data gets submitted or an action gets triggered" },
              { icon: "🔍", text: "If something happens at the wrong time or data isn't processing correctly…" },
              { icon: "🎯", text: "That's a back end problem" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 7 — APIs */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene
            title="APIs: The Waiter"
            badge="PART 3"
            subtitle="A bridge between different pieces of software. The waiter in a restaurant."
            bullets={[
              { icon: "🍽️", text: "You don't walk into the kitchen — you tell the waiter what you want" },
              { icon: "🔄", text: "The API takes your order to the kitchen and comes back with the result" },
              { icon: "💳", text: "Payments, maps, emails, weather — all through APIs" },
              { icon: "🔍", text: "If something isn't connecting or data isn't coming through — that's an API issue" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 8 — Database */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <TextAndBulletsScene
            title="Database: The Storage"
            badge="PART 4"
            subtitle="Organized, structured storage. Users' accounts, saved items, history."
            bullets={[
              { icon: "🗃️", text: "Four things you can do with stored data: Create, Read, Update, Delete" },
              { icon: "📝", text: "That's called CRUD — now you know the acronym" },
              { icon: "🔍", text: "If data isn't saving, duplicating, or disappearing…" },
              { icon: "🎯", text: "That's a database problem" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 9 — Checkpoint */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TitleScene
            title="Four Parts. Most Problems Trace Back to One."
            subtitle="Front end, back end, APIs, database. They work together."
            showLogo={false}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 10 — Better Prompter */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene
            title="Why This Makes You a Better Prompter"
            subtitle="Here's the practical payoff."
            bullets={[
              { icon: "❌", text: "Instead of: 'the app is broken'" },
              { icon: "✅", text: "'The front end button isn't triggering the back end function that saves form data to the database'" },
              { icon: "🎯", text: "Completely different conversation. AI knows exactly where to look." },
              { icon: "⚡", text: "Useful answer in one exchange instead of five" },
            ]}
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 11 — Two-Question Pattern */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <TextAndBulletsScene
            title="The Two-Question Pattern"
            subtitle="Any time you hit a technical term you don't recognize:"
            bullets={[
              { icon: "1️⃣", text: "'Explain this like I'm brand new to building apps'" },
              { icon: "2️⃣", text: "'How does this apply to my specific app?'" },
              { icon: "💡", text: "First gives you the definition. Second makes it stick." },
              { icon: "🔄", text: "Unfamiliar term → plain English → apply to your context" },
            ]}
            bgTint={TINT_BLUE}
            accentColor={ACCENT_BLUE}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        {/* Scene 12 — Outro */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene
            title="You Have the Vocabulary"
            subtitle="Front end, back end, APIs, database. That's the foundation."
            bullets={[
              { icon: "🔜", text: "Tomorrow: map these concepts directly onto your own app idea" },
              { icon: "🎯", text: "When it's time to build, you'll know how the pieces fit" },
              { icon: "⏱️", text: "It takes about 20 minutes" },
              { icon: "💪", text: "That's a real head start" },
            ]}
            bgTint={TINT_PURPLE}
            accentColor={ACCENT_PURPLE}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T_FINAL })}
        />

        {/* Scene 13 — Closing */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TitleScene
            title="See You on Day 11"
            subtitle="Up next: Learning Through Your Own Idea"
            showLogo
            bgTint={TINT_GREEN}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
