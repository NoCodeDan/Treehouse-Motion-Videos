export interface SceneNarration {
  sceneId: string;
  text: string;
  narrationStartFrame: number;
}

export const SCENE_NARRATIONS: SceneNarration[] = [
  {
    sceneId: "scene-1-opening",
    text: "Learn AI in 30 Days with Treehouse.",
    narrationStartFrame: 35,
  },
  {
    sceneId: "scene-2-whyai",
    text: "AI Is Moving Fast, but this program fixes that by helping you go from curious to building real applications in 30 days. AI agents are transforming how we work. Companies need AI talent, and those who learn now will lead.",
    narrationStartFrame: 20,
  },
  {
    sceneId: "scene-3-programoverview",
    text: "4 Weeks to Become AI-Native. In weeks one and two, everyone learns the same foundations. In weeks three and four, you choose your track and build your project.",
    narrationStartFrame: 45,
  },
  {
    sceneId: "scene-4-foundations",
    text: "We start with the essentials that will help you think and prompt effectively, use AI tools the right way, and think like a builder.",
    narrationStartFrame: 45,
  },
  {
    sceneId: "scene-5-choosetrack",
    text: "The choice is yours. You can build your own agent, build your own app, and even build your own data dashboard. Let's look at each track.",
    narrationStartFrame: 45,
  },
  {
    sceneId: "scene-6-trackagent",
    text: "Build Your Own Agent. Design an agent with a clear job. Add tools, context and real inputs. Build AI that actually works for you.",
    narrationStartFrame: 25,
  },
  {
    sceneId: "scene-7-trackapp",
    text: "Build Your Own App. Build a working web app with AI. Add real features, auth, APIs and more. Launch live with a shareable URL.",
    narrationStartFrame: 25,
  },
  {
    sceneId: "scene-8-trackdashboard",
    text: "Build Your Own Data Dashboard. Use AI to analyze your data. Build a simple, visual dashboard. Generate insights you can act on.",
    narrationStartFrame: 25,
  },
  {
    sceneId: "scene-9-cta",
    text: "Don't Just Learn AI. Build With It. Try the first 7 days free. teamtreehouse.com slash ai-bootcamp.",
    narrationStartFrame: 50,
  },
];

// Absolute frame where each scene starts in the full timeline
// Accounts for 20-frame transition overlaps (30 for the last transition)
export const SCENE_COMPOSITION_OFFSETS: number[] = [
  0,    // Scene 1
  119,  // Scene 2
  519,  // Scene 3
  829,  // Scene 4
  1139, // Scene 5
  1434, // Scene 6
  1714, // Scene 7
  2024, // Scene 8
  2294, // Scene 9
];
