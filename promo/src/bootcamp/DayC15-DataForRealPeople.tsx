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
import { DAYC15_DURATIONS as D, T, T_FINAL } from "./bootcampConfig";
import { DataTableVisual } from "./visuals/DataTableVisual";

export const DayC15DataForRealPeople: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      <TransitionSeries>
        {/* 1. Title */}
        <TransitionSeries.Sequence durationInFrames={D[0]}>
          <TitleScene title="Data for Real People" subtitle="Track C — Build Your Own Data Dashboard" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 2. Hook — data you already have */}
        <TransitionSeries.Sequence durationInFrames={D[1]}>
          <TextAndBulletsScene badge="THE HOOK" title="You Already Have Data" bullets={[
            { icon: "📱", text: "Your phone, calendar, inbox, bank account" },
            { icon: "📊", text: "Spreadsheets, transactions, habits, logs" },
            { icon: "🔍", text: "You just have not looked at it in a way that answers anything" },
            { icon: "💡", text: "That is what this week changes" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 3. This track is built for you */}
        <TransitionSeries.Sequence durationInFrames={D[2]}>
          <TextAndBulletsScene badge="CALLOUT" title="Not a Data Person? Perfect." bullets={[
            { icon: "🔄", text: "Career switchers, entrepreneurs, non-technical builders" },
            { icon: "🚫", text: "This is not data science" },
            { icon: "🏠", text: "This is about your life and your work" },
            { icon: "📊", text: "If dashboards sound like charts you would never use — this is for you" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 4. Four C's intro — what you will learn */}
        <TransitionSeries.Sequence durationInFrames={D[3]}>
          <TextAndBulletsScene title="What You Will Learn" bullets={[
            { icon: "📢", text: "What data actually is — no technical background needed" },
            { icon: "🏆", text: "What a dashboard is actually for — not charts, answers" },
            { icon: "🧭", text: "You will write your first dashboard question today" },
            { icon: "💡", text: "That question is what this whole week builds toward" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 5. Core learning */}
        <TransitionSeries.Sequence durationInFrames={D[4]}>
          <TitleScene title="A Dashboard Is Not Charts" subtitle="A dashboard is answers." bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 6. What data actually is */}
        <TransitionSeries.Sequence durationInFrames={D[5]}>
          <ComparisonScene title="What Data Actually Is" leftCard={{
            title: "What People Think", items: [
              { icon: "❌", text: "Huge databases and SQL queries" },
              { icon: "❌", text: "Needs a data science degree" },
              { icon: "❌", text: "Only useful at scale" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "What It Really Is", items: [
              { icon: "✅", text: "Organized observations" },
              { icon: "✅", text: "Rows, columns, and labels" },
              { icon: "✅", text: "Useful at any size" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 7. Data is organized observations */}
        <TransitionSeries.Sequence durationInFrames={D[6]}>
          <TextAndBulletsScene title="Data Is Organized Observations" bullets={[
            { icon: "😴", text: "You slept 6 hours last night — that is data" },
            { icon: "💸", text: "You spent $47 on lunch this week — that is data" },
            { icon: "📱", text: "Your Tuesday posts get more engagement — that is data" },
            { icon: "📝", text: "You have been collecting it your whole life" },
            { icon: "🔑", text: "You just have not organized it to show you anything useful" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 8. Data table visual */}
        <TransitionSeries.Sequence durationInFrames={D[7]}>
          <SplitVisualScene title="A Simple Data Table" bullets={[
            { icon: "📋", text: "Rows are entries or events" },
            { icon: "📁", text: "Columns are categories or measurements" },
            { icon: "🏷️", text: "Labels make every value meaningful" },
          ]} visual={<DataTableVisual delay={30} />} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 9. The question is the difference */}
        <TransitionSeries.Sequence durationInFrames={D[8]}>
          <TextAndBulletsScene badge="KEY INSIGHT" title="Without a Question, It Is Just a List" bullets={[
            { icon: "📄", text: "A spreadsheet full of numbers tells you nothing on its own" },
            { icon: "❓", text: "The question is what turns data into insight" },
            { icon: "🎯", text: "The difference between a list and a dashboard is one thing: a question" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 10. What a dashboard actually is */}
        <TransitionSeries.Sequence durationInFrames={D[9]}>
          <TextAndBulletsScene badge="KEY IDEA" title="What a Dashboard Actually Is" bullets={[
            { icon: "🚫", text: "Most people think a dashboard is a fancy chart — it is not" },
            { icon: "🎯", text: "A place to get answers without having to dig" },
            { icon: "❓", text: "Every chart should answer a specific question" },
            { icon: "✅", text: "If it does not answer something, remove it" },
          ]} bgTint={TINT_GREEN} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 11. Dashboard vs spreadsheet */}
        <TransitionSeries.Sequence durationInFrames={D[10]}>
          <ComparisonScene title="Spreadsheet vs Dashboard" leftCard={{
            title: "Messy Spreadsheet", items: [
              { icon: "❌", text: "Rows of raw numbers" },
              { icon: "❌", text: "No clear takeaway" },
              { icon: "❌", text: "Requires digging to find meaning" },
            ], accentColor: "#999",
          }} rightCard={{
            title: "Clean Dashboard", items: [
              { icon: "✅", text: "One or two focused charts" },
              { icon: "✅", text: "Written insight underneath" },
              { icon: "✅", text: "One question, one answer, visible" },
            ],
          }} bgTint={TINT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 12. Questions that work */}
        <TransitionSeries.Sequence durationInFrames={D[11]}>
          <TextAndBulletsScene title="Questions That Drive Dashboards" bullets={[
            { icon: "1️⃣", text: "Where does my time go each week?" },
            { icon: "2️⃣", text: "What content performs best — and why?" },
            { icon: "3️⃣", text: "What spending habits surprise me?" },
            { icon: "4️⃣", text: "What tasks create the most stress?" },
            { icon: "5️⃣", text: "What leads turn into customers?" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 13. No technical training required */}
        <TransitionSeries.Sequence durationInFrames={D[12]}>
          <TextAndBulletsScene title="No Technical Training Required" bullets={[
            { icon: "🚫", text: "None of these questions require a degree or certification" },
            { icon: "📂", text: "All of them use data you probably already have somewhere" },
            { icon: "🏗️", text: "You will build something that answers a real question" },
            { icon: "🔧", text: "Using data you already collect" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 14. The reframe */}
        <TransitionSeries.Sequence durationInFrames={D[13]}>
          <TextAndBulletsScene badge="THE REFRAME" title="Perfection Is Not the Goal" bullets={[
            { icon: "📉", text: "You will not have perfect data — that is fine" },
            { icon: "🌍", text: "Neither does anyone else" },
            { icon: "🎯", text: "The goal is a dashboard that answers something real" },
            { icon: "🛠️", text: "Messy data, rough layout, one honest question — enough to start" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 15. The question formula */}
        <TransitionSeries.Sequence durationInFrames={D[14]}>
          <DiagramScene title="The Dashboard Question Formula" steps={[
            { icon: "📝", label: "I want to understand __________" },
            { icon: "🎯", label: "so I can improve __________" },
            { icon: "📊", label: "That sentence is your dashboard question" },
            { icon: "🏗️", label: "Everything you build this week serves it" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 16. Example dashboard questions */}
        <TransitionSeries.Sequence durationInFrames={D[15]}>
          <TextAndBulletsScene badge="EXAMPLES" title="Dashboard Questions in Action" bullets={[
            { icon: "⏰", text: "I want to understand where my time goes so I can protect the hours that matter most" },
            { icon: "📱", text: "I want to understand which content performs best so I can create more of what works" },
            { icon: "💰", text: "I want to understand my spending patterns so I can find where money is leaking" },
          ]} bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={linearTiming({ durationInFrames: T })} />

        {/* 17. Checkpoint */}
        <TransitionSeries.Sequence durationInFrames={D[16]}>
          <TextAndBulletsScene badge="CHECKPOINT" title="Here Is Where You Are" bullets={[
            { icon: "📝", text: "Data = organized observations — rows and columns with a question" },
            { icon: "📋", text: "Dashboard = answers, not charts" },
            { icon: "🎯", text: "Your job this week = build something that answers YOUR question" },
            { icon: "🏗️", text: "Question formula ready to use" },
          ]} bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 18. Outro — deliverable */}
        <TransitionSeries.Sequence durationInFrames={D[17]}>
          <TextAndBulletsScene badge="YOUR DELIVERABLE" title="Write Your Dashboard Question" bullets={[
            { icon: "📝", text: "Use the template: I want to understand _____ so I can improve _____" },
            { icon: "💾", text: "Write it down — save it somewhere you will see it all week" },
            { icon: "💬", text: "Post it in Discord — seeing others' questions sharpens your own" },
          ]} bgTint={TINT_GREEN} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />

        {/* 19. Outro */}
        <TransitionSeries.Sequence durationInFrames={D[18]}>
          <TitleScene title="Data Is Not Scary" subtitle="Tomorrow: collect the data that answers your question" bgTint={TINT_PURPLE} accentColor={ACCENT_PURPLE} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T_FINAL })} />

        {/* 20. Closing */}
        <TransitionSeries.Sequence durationInFrames={D[19]}>
          <TitleScene title="See You on Day 16" subtitle="Tomorrow: collect your personal dataset" showLogo bgTint={TINT_BLUE} accentColor={ACCENT_BLUE} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
