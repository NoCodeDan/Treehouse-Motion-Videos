import React from "react";
import { Composition, Folder } from "remotion";
import { AIBootcampPromo } from "./AIBootcampPromo";
import { AIBootcampScript } from "./AIBootcampScript";
import { WhatAreLLMs } from "./explainers/WhatAreLLMs";
import { WhatAreAIAgents } from "./explainers/WhatAreAIAgents";
import { AGENT_TOTAL_DURATION } from "./explainers/agent-narration/agentNarrationConfig";

// Bootcamp videos
import { Day01V1Welcome } from "./bootcamp/Day01V1-Welcome";
import { Day01V2WhatIsAI } from "./bootcamp/Day01V2-WhatIsAI";
import { Day02ExploringTools } from "./bootcamp/Day02-ExploringTools";
import { Day03WhyPromptingMatters } from "./bootcamp/Day03-WhyPromptingMatters";
import { Day04TalkingWithAI } from "./bootcamp/Day04-TalkingWithAI";
import { Day05V1DeepResearch } from "./bootcamp/Day05V1-DeepResearch";
import { Day05V2ValidatingIdea } from "./bootcamp/Day05V2-ValidatingIdea";
import { Day06IdeaCollaboration } from "./bootcamp/Day06-IdeaCollaboration";
import { Day08RefiningMVP } from "./bootcamp/Day08-RefiningMVP";
import { Day09StressTesting } from "./bootcamp/Day09-StressTesting";
import { Day10BasicCoding } from "./bootcamp/Day10-BasicCoding";
import { Day11LearningThroughIdea } from "./bootcamp/Day11-LearningThroughIdea";
import { Day12WritingSpec } from "./bootcamp/Day12-WritingSpec";
import { Day13MVPSpecProject } from "./bootcamp/Day13-MVPSpecProject";

// Track A — Build Your Own AI Agent (Days 15–28)
import { Day15V1WhatIsAnAgent } from "./bootcamp/Day15V1-WhatIsAnAgent";
import { Day15V2BuildFirstAgent } from "./bootcamp/Day15V2-BuildFirstAgent";
import { Day16TestBreakImprove } from "./bootcamp/Day16-TestBreakImprove";
import { Day17ClaudeProjectsToCode } from "./bootcamp/Day17-ClaudeProjectsToCode";
import { Day18ContextUpgrade } from "./bootcamp/Day18-ContextUpgrade";
import { Day19ReliabilityGuardrails } from "./bootcamp/Day19-ReliabilityGuardrails";
import { Day20RealWorldRun } from "./bootcamp/Day20-RealWorldRun";
import { Day21PrepForToolsWeek } from "./bootcamp/Day21-PrepForToolsWeek";
import { Day22V1AgentsWithTools } from "./bootcamp/Day22V1-AgentsWithTools";
import { Day22V2AgentLandscape } from "./bootcamp/Day22V2-AgentLandscape";
import { Day23GatherRealInputs } from "./bootcamp/Day23-GatherRealInputs";
import { Day24BuildSprint } from "./bootcamp/Day24-BuildSprint";
import { Day25StressTest } from "./bootcamp/Day25-StressTest";
import { Day26ShipLaunchAgent } from "./bootcamp/Day26-ShipLaunchAgent";
import { Day27RealUsageDay } from "./bootcamp/Day27-RealUsageDay";
import { Day28YouBuiltSomethingReal } from "./bootcamp/Day28-YouBuiltSomethingReal";
// Track B — Build Your MVP with AI (Days 15–28)
import { DayB15AIWebBuildersLandscape } from "./bootcamp/DayB15-AIWebBuildersLandscape";
import { DayB16RiskScan } from "./bootcamp/DayB16-RiskScan";
import { DayB17BuildSprintIDE } from "./bootcamp/DayB17-BuildSprintIDE";
import { DayB18BreakItOnPurpose } from "./bootcamp/DayB18-BreakItOnPurpose";
import { DayB19FromMVPToModernApp } from "./bootcamp/DayB19-FromMVPToModernApp";
import { DayB20FriendTest } from "./bootcamp/DayB20-FriendTest";
import { DayB21PrepForLaunchWeek } from "./bootcamp/DayB21-PrepForLaunchWeek";
import { DayB22DebuggingWithAI } from "./bootcamp/DayB22-DebuggingWithAI";
import { DayB23SoloImprovement } from "./bootcamp/DayB23-SoloImprovement";
import { DayB24FinalFeatureSprint } from "./bootcamp/DayB24-FinalFeatureSprint";
import { DayB25NewUserWalkthrough } from "./bootcamp/DayB25-NewUserWalkthrough";
import { DayB26ShipLaunchDay } from "./bootcamp/DayB26-ShipLaunchDay";
import { DayB27TinyLaunchMoment } from "./bootcamp/DayB27-TinyLaunchMoment";
import { DayB28V2Roadmap } from "./bootcamp/DayB28-V2Roadmap";
// Track C — Build Your Own Data Dashboard (Days 15–28)
import { DayC15DataForRealPeople } from "./bootcamp/DayC15-DataForRealPeople";
import { DayC16CollectYourDataset } from "./bootcamp/DayC16-CollectYourDataset";
import { DayC17BuildSprintDashboardV0 } from "./bootcamp/DayC17-BuildSprintDashboardV0";
import { DayC18InsightDiscovery } from "./bootcamp/DayC18-InsightDiscovery";
import { DayC19DataStorytelling } from "./bootcamp/DayC19-DataStorytelling";
import { DayC20RealWorldUseTest } from "./bootcamp/DayC20-RealWorldUseTest";
import { DayC21PrepForDashboardV2 } from "./bootcamp/DayC21-PrepForDashboardV2";
import { DayC22TrustworthyDashboards } from "./bootcamp/DayC22-TrustworthyDashboards";
import { DayC23AddOneNewDataPoint } from "./bootcamp/DayC23-AddOneNewDataPoint";
import { DayC24BuildSprintDashboardV1 } from "./bootcamp/DayC24-BuildSprintDashboardV1";
import { DayC25PortfolioCareerTranslation } from "./bootcamp/DayC25-PortfolioCareerTranslation";
import { DayC26ShipPublishShowcase } from "./bootcamp/DayC26-ShipPublishShowcase";
import { DayC27WeeklyHabitSystem } from "./bootcamp/DayC27-WeeklyHabitSystem";
import { DayC28WhatsNextTrackReplay } from "./bootcamp/DayC28-WhatsNextTrackReplay";
import {
  computeTotalDuration,
  DAY01V1_DURATIONS,
  DAY01V2_DURATIONS,
  DAY02_DURATIONS,
  DAY03_DURATIONS,
  DAY04_DURATIONS,
  DAY05V1_DURATIONS,
  DAY05V2_DURATIONS,
  DAY06_DURATIONS,
  DAY08_DURATIONS,
  DAY09_DURATIONS,
  DAY10_DURATIONS,
  DAY11_DURATIONS,
  DAY12_DURATIONS,
  DAY13_DURATIONS,
  DAY15V1_DURATIONS,
  DAY15V2_DURATIONS,
  DAY16_DURATIONS,
  DAY17_DURATIONS,
  DAY18_DURATIONS,
  DAY19_DURATIONS,
  DAY20_DURATIONS,
  DAY21_DURATIONS,
  DAY22V1_DURATIONS,
  DAY22V2_DURATIONS,
  DAY23_DURATIONS,
  DAY24_DURATIONS,
  DAY25_DURATIONS,
  DAY26_DURATIONS,
  DAY27_DURATIONS,
  DAY28_DURATIONS,
  DAYB15_DURATIONS,
  DAYB16_DURATIONS,
  DAYB17_DURATIONS,
  DAYB18_DURATIONS,
  DAYB19_DURATIONS,
  DAYB20_DURATIONS,
  DAYB21_DURATIONS,
  DAYB22_DURATIONS,
  DAYB23_DURATIONS,
  DAYB24_DURATIONS,
  DAYB25_DURATIONS,
  DAYB26_DURATIONS,
  DAYB27_DURATIONS,
  DAYB28_DURATIONS,
  DAYC15_DURATIONS,
  DAYC16_DURATIONS,
  DAYC17_DURATIONS,
  DAYC18_DURATIONS,
  DAYC19_DURATIONS,
  DAYC20_DURATIONS,
  DAYC21_DURATIONS,
  DAYC22_DURATIONS,
  DAYC23_DURATIONS,
  DAYC24_DURATIONS,
  DAYC25_DURATIONS,
  DAYC26_DURATIONS,
  DAYC27_DURATIONS,
  DAYC28_DURATIONS,
} from "./bootcamp/bootcampConfig";

// Promo video
// Scene frames: 135 + 420 + 330 + 330 + 315 + 300 + 330 + 300 + 300 = 2760
// Transitions: 20*7 + 30 = 170 overlap frames
// Effective: 2760 - 170 = 2590 frames ≈ 86 seconds at 30fps (~1:26)
const PROMO_DURATION = 2594;

// Script video (full script, word-for-word)
// Scene frames: 240 + 330 + 270 + 270 + 300 + 240 + 270 + 270 + 270 + 330 + 300 = 3090
// Transitions: 8*20 + 2*30 = 220 overlap frames
// Effective: 3090 - 220 = 2870 frames ≈ 96 seconds at 30fps (~1:36)
const SCRIPT_DURATION = 2870;

// What Are LLMs? explainer
// Scene frames: 300 + 360 + 360 + 360 + 330 + 330 + 360 + 300 = 2700
// Transitions: 6*20 + 30 = 150 overlap frames
// Effective: 2700 - 150 = 2550 frames ≈ 85 seconds at 30fps (~1:25)
const LLM_EXPLAINER_DURATION = 2550;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AIBootcampPromo"
        component={AIBootcampPromo}
        durationInFrames={PROMO_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="AIBootcampScript"
        component={AIBootcampScript}
        durationInFrames={SCRIPT_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="WhatAreLLMs"
        component={WhatAreLLMs}
        durationInFrames={LLM_EXPLAINER_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="WhatAreAIAgents"
        component={WhatAreAIAgents}
        durationInFrames={AGENT_TOTAL_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />

      <Folder name="Bootcamp">
      <Composition
        id="Bootcamp-Day01V1-Welcome"
        component={Day01V1Welcome}
        durationInFrames={computeTotalDuration(DAY01V1_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Bootcamp-Day01V2-WhatIsAI"
        component={Day01V2WhatIsAI}
        durationInFrames={computeTotalDuration(DAY01V2_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Bootcamp-Day02-ExploringTools"
        component={Day02ExploringTools}
        durationInFrames={computeTotalDuration(DAY02_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Bootcamp-Day03-WhyPromptingMatters"
        component={Day03WhyPromptingMatters}
        durationInFrames={computeTotalDuration(DAY03_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Bootcamp-Day04-TalkingWithAI"
        component={Day04TalkingWithAI}
        durationInFrames={computeTotalDuration(DAY04_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Bootcamp-Day05V1-DeepResearch"
        component={Day05V1DeepResearch}
        durationInFrames={computeTotalDuration(DAY05V1_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Bootcamp-Day05V2-ValidatingIdea"
        component={Day05V2ValidatingIdea}
        durationInFrames={computeTotalDuration(DAY05V2_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Bootcamp-Day06-IdeaCollaboration"
        component={Day06IdeaCollaboration}
        durationInFrames={computeTotalDuration(DAY06_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Bootcamp-Day08-RefiningMVP"
        component={Day08RefiningMVP}
        durationInFrames={computeTotalDuration(DAY08_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Bootcamp-Day09-StressTesting"
        component={Day09StressTesting}
        durationInFrames={computeTotalDuration(DAY09_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Bootcamp-Day10-BasicCoding"
        component={Day10BasicCoding}
        durationInFrames={computeTotalDuration(DAY10_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Bootcamp-Day11-LearningThroughIdea"
        component={Day11LearningThroughIdea}
        durationInFrames={computeTotalDuration(DAY11_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Bootcamp-Day12-WritingSpec"
        component={Day12WritingSpec}
        durationInFrames={computeTotalDuration(DAY12_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Bootcamp-Day13-MVPSpecProject"
        component={Day13MVPSpecProject}
        durationInFrames={computeTotalDuration(DAY13_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      </Folder>

      <Folder name="Track-A">
      <Composition
        id="TrackA-Day15V1-WhatIsAnAgent"
        component={Day15V1WhatIsAnAgent}
        durationInFrames={computeTotalDuration(DAY15V1_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackA-Day15V2-BuildFirstAgent"
        component={Day15V2BuildFirstAgent}
        durationInFrames={computeTotalDuration(DAY15V2_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackA-Day16-TestBreakImprove"
        component={Day16TestBreakImprove}
        durationInFrames={computeTotalDuration(DAY16_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackA-Day17-ClaudeProjectsToCode"
        component={Day17ClaudeProjectsToCode}
        durationInFrames={computeTotalDuration(DAY17_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackA-Day18-ContextUpgrade"
        component={Day18ContextUpgrade}
        durationInFrames={computeTotalDuration(DAY18_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackA-Day19-ReliabilityGuardrails"
        component={Day19ReliabilityGuardrails}
        durationInFrames={computeTotalDuration(DAY19_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackA-Day20-RealWorldRun"
        component={Day20RealWorldRun}
        durationInFrames={computeTotalDuration(DAY20_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackA-Day21-PrepForToolsWeek"
        component={Day21PrepForToolsWeek}
        durationInFrames={computeTotalDuration(DAY21_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackA-Day22V1-AgentsWithTools"
        component={Day22V1AgentsWithTools}
        durationInFrames={computeTotalDuration(DAY22V1_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackA-Day22V2-AgentLandscape"
        component={Day22V2AgentLandscape}
        durationInFrames={computeTotalDuration(DAY22V2_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackA-Day23-GatherRealInputs"
        component={Day23GatherRealInputs}
        durationInFrames={computeTotalDuration(DAY23_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackA-Day24-BuildSprint"
        component={Day24BuildSprint}
        durationInFrames={computeTotalDuration(DAY24_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackA-Day25-StressTest"
        component={Day25StressTest}
        durationInFrames={computeTotalDuration(DAY25_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackA-Day26-ShipLaunchAgent"
        component={Day26ShipLaunchAgent}
        durationInFrames={computeTotalDuration(DAY26_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackA-Day27-RealUsageDay"
        component={Day27RealUsageDay}
        durationInFrames={computeTotalDuration(DAY27_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackA-Day28-YouBuiltSomethingReal"
        component={Day28YouBuiltSomethingReal}
        durationInFrames={computeTotalDuration(DAY28_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      </Folder>

      <Folder name="Track-B">
      <Composition
        id="TrackB-Day15-AIWebBuildersLandscape"
        component={DayB15AIWebBuildersLandscape}
        durationInFrames={computeTotalDuration(DAYB15_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackB-Day16-RiskScan"
        component={DayB16RiskScan}
        durationInFrames={computeTotalDuration(DAYB16_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackB-Day17-BuildSprintIDE"
        component={DayB17BuildSprintIDE}
        durationInFrames={computeTotalDuration(DAYB17_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackB-Day18-BreakItOnPurpose"
        component={DayB18BreakItOnPurpose}
        durationInFrames={computeTotalDuration(DAYB18_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackB-Day19-FromMVPToModernApp"
        component={DayB19FromMVPToModernApp}
        durationInFrames={computeTotalDuration(DAYB19_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackB-Day20-FriendTest"
        component={DayB20FriendTest}
        durationInFrames={computeTotalDuration(DAYB20_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackB-Day21-PrepForLaunchWeek"
        component={DayB21PrepForLaunchWeek}
        durationInFrames={computeTotalDuration(DAYB21_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackB-Day22-DebuggingWithAI"
        component={DayB22DebuggingWithAI}
        durationInFrames={computeTotalDuration(DAYB22_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackB-Day23-SoloImprovement"
        component={DayB23SoloImprovement}
        durationInFrames={computeTotalDuration(DAYB23_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackB-Day24-FinalFeatureSprint"
        component={DayB24FinalFeatureSprint}
        durationInFrames={computeTotalDuration(DAYB24_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackB-Day25-NewUserWalkthrough"
        component={DayB25NewUserWalkthrough}
        durationInFrames={computeTotalDuration(DAYB25_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackB-Day26-ShipLaunchDay"
        component={DayB26ShipLaunchDay}
        durationInFrames={computeTotalDuration(DAYB26_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackB-Day27-TinyLaunchMoment"
        component={DayB27TinyLaunchMoment}
        durationInFrames={computeTotalDuration(DAYB27_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackB-Day28-V2Roadmap"
        component={DayB28V2Roadmap}
        durationInFrames={computeTotalDuration(DAYB28_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      </Folder>

      <Folder name="Track-C">
      <Composition
        id="TrackC-Day15-DataForRealPeople"
        component={DayC15DataForRealPeople}
        durationInFrames={computeTotalDuration(DAYC15_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackC-Day16-CollectYourDataset"
        component={DayC16CollectYourDataset}
        durationInFrames={computeTotalDuration(DAYC16_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackC-Day17-BuildSprintDashboardV0"
        component={DayC17BuildSprintDashboardV0}
        durationInFrames={computeTotalDuration(DAYC17_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackC-Day18-InsightDiscovery"
        component={DayC18InsightDiscovery}
        durationInFrames={computeTotalDuration(DAYC18_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackC-Day19-DataStorytelling"
        component={DayC19DataStorytelling}
        durationInFrames={computeTotalDuration(DAYC19_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackC-Day20-RealWorldUseTest"
        component={DayC20RealWorldUseTest}
        durationInFrames={computeTotalDuration(DAYC20_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackC-Day21-PrepForDashboardV2"
        component={DayC21PrepForDashboardV2}
        durationInFrames={computeTotalDuration(DAYC21_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackC-Day22-TrustworthyDashboards"
        component={DayC22TrustworthyDashboards}
        durationInFrames={computeTotalDuration(DAYC22_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackC-Day23-AddOneNewDataPoint"
        component={DayC23AddOneNewDataPoint}
        durationInFrames={computeTotalDuration(DAYC23_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackC-Day24-BuildSprintDashboardV1"
        component={DayC24BuildSprintDashboardV1}
        durationInFrames={computeTotalDuration(DAYC24_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackC-Day25-PortfolioCareerTranslation"
        component={DayC25PortfolioCareerTranslation}
        durationInFrames={computeTotalDuration(DAYC25_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackC-Day26-ShipPublishShowcase"
        component={DayC26ShipPublishShowcase}
        durationInFrames={computeTotalDuration(DAYC26_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackC-Day27-WeeklyHabitSystem"
        component={DayC27WeeklyHabitSystem}
        durationInFrames={computeTotalDuration(DAYC27_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TrackC-Day28-WhatsNextTrackReplay"
        component={DayC28WhatsNextTrackReplay}
        durationInFrames={computeTotalDuration(DAYC28_DURATIONS)}
        fps={30}
        width={1920}
        height={1080}
      />
      </Folder>
    </>
  );
};
