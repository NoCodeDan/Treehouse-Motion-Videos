/**
 * Duration configs for all 14 Bootcamp video compositions.
 * T = standard transition overlap (frames).
 */

export const T = 20; // standard transition duration
export const T_FINAL = 30; // final scene transition

// ── Video 1: Day 1 V1 — Welcome + How Bootcamp Works (~5 min) ──
export const DAY01V1_DURATIONS = [300, 420, 360, 420, 360, 360, 300, 300];
// 2820 - 6*20 - 30 = 2670

// ── Video 2: Day 1 V2 — What Is AI Today? (~6 min, 18 scenes) ──
export const DAY01V2_DURATIONS = [
  300,  // 1.  Title card
  600,  // 2.  Hook — "AI told everyone their idea was brilliant"
  720,  // 3.  Black box intro — "requires about 10 minutes of clear explanation"
  480,  // 4.  Core insight — "AI doesn't know things. It predicts them."
  840,  // 5.  The AI Umbrella + diagram — 3 branches
  570,  // 6.  Computer Vision — AI that can see
  570,  // 7.  Machine Learning — learns from data
  810,  // 8.  Large Language Models — ChatGPT, Claude, Gemini
  420,  // 9.  Checkpoint — "Now: which tools, and why they get things wrong"
  810,  // 10. What's Out There + LLMToolShowcase
  600,  // 11. Staying Current — ask AI, follow communities
  900,  // 12. Why AI Sounds Confident + PredictionVisual
  720,  // 13. Predicting, Not Knowing — generates what looks right
  600,  // 14. Confidently Wrong — "That's why it loves your ideas"
  720,  // 15. Knows vs Predicts comparison
  540,  // 16. Not a Flaw — "A reality to work with"
  660,  // 17. Outro — "Tomorrow is exploration day"
  360,  // 18. Closing — "See You on Day 2"
];
// 11220 - 16*20 - 30 = 10870 ≈ 362s ≈ 6:02

// ── Video 3: Day 2 — Exploring AI Tools (~2.5 min, 10 scenes) ──
export const DAY02_DURATIONS = [
  300,  // 1.  Title
  420,  // 2.  Hook — "You need experience, not opinions"
  540,  // 3.  Intro — hands-on day, no new concepts
  600,  // 4.  The Exercise + MultiToolComparison
  510,  // 5.  What to Watch For — differences in AI responses
  450,  // 6.  The Skill — learning to read AI output
  600,  // 7.  4 Questions + EvaluationChecklist
  420,  // 8.  No Best Tool — fits how you think
  450,  // 9.  Outro — bookmark your favorites, tomorrow: prompting
  300,  // 10. Closing
];
// 4590 - 8*20 - 30 = 4400 ≈ 147s ≈ 2:27

// ── Video 4: Day 3 — Why Prompting Matters (~5.5 min, 17 scenes) ──
export const DAY03_DURATIONS = [
  300,  // 1.  Title
  540,  // 2.  Hook — "The tool barely mattered. The prompt did."
  660,  // 3.  Blueprint metaphor — AI is a contractor
  450,  // 4.  Iterative, not perfect
  600,  // 5.  Garbage In, Garbage Out
  570,  // 6.  Context is the difference
  540,  // 7.  What AI needs: context, goal, constraints
  750,  // 8.  Bad prompt demo + PromptTransformation visual
  600,  // 9.  Better prompt — adds format, quantity, topic
  660,  // 10. Strong prompt — night and day
  420,  // 11. Checkpoint — "The tool didn't change. The thinking did."
  750,  // 12. Five Moves intro + FiveMovesChecklist visual
  660,  // 13. Moves 1-2: context + goal
  720,  // 14. Moves 3-5: interview, example prompts, example outputs
  480,  // 15. The pattern — write, see, refine
  600,  // 16. Outro — tomorrow: practice day
  330,  // 17. Closing
];
// 9630 - 15*20 - 30 = 9300 ≈ 310s ≈ 5:10

// ── Video 5: Day 4 — Talking With AI (~2.5 min, 10 scenes) ──
export const DAY04_DURATIONS = [
  300,  // 1.  Title
  480,  // 2.  Hook — "AI agrees with everything. That's a trap."
  540,  // 3.  Intro — AI trained to be helpful = agreeable
  390,  // 4.  Three exercises overview
  660,  // 5.  Exercise 1 — Catch AI being agreeable + YesMachineVisual
  600,  // 6.  Exercise 2 — Let AI interview you
  600,  // 7.  Exercise 3 — Let AI improve your prompt
  510,  // 8.  The productive loop — rough → feedback → refined
  450,  // 9.  Outro — habit of refining, tomorrow: picking your idea
  330,  // 10. Closing
];
// 4860 - 8*20 - 30 = 4670 ≈ 156s ≈ 2:36

// ── Video 6: Day 5 V1 — Deep Research (~6 min, 14 scenes) ──
export const DAY05V1_DURATIONS = [
  300,  // 1.  Title
  780,  // 2.  Hook — "Too many ideas, no system"
  900,  // 3.  Four C's intro — narrow down early, commit to one
  900,  // 4.  Why research matters — skip = discover others built it
  1020, // 5.  Demo: Setting up research conversation + ResearchFunnel
  720,  // 6.  What comes back — landscape, market gaps
  480,  // 7.  Checkpoint — "You've got the landscape"
  960,  // 8.  Pros and Cons Framework prompt
  720,  // 9.  Competitor count — more isn't bad, signals demand
  720,  // 10. Your X factor — what makes yours different
  720,  // 11. Audience specificity — narrower = easier
  720,  // 12. How to make the decision — research + gut
  600,  // 13. Outro — validation next
  360,  // 14. Closing
];
// 9900 - 12*20 - 30 = 9630 ≈ 321s ≈ 5:21

// ── Video 7: Day 5 V2 — Validating the Idea (~5.5 min, 13 scenes) ──
export const DAY05V2_DURATIONS = [
  300,  // 1.  Title
  840,  // 2.  Hook — "Picking and knowing are two different things"
  900,  // 3.  Four C's intro — one question: real problem, specific person
  930,  // 4.  Four Questions overview + ValidationFlow
  810,  // 5.  Q1: Who is this for?
  810,  // 6.  Q2: What problem do they have?
  810,  // 7.  Q3: Why does the problem matter?
  810,  // 8.  Q4: What would a simple solution look like?
  480,  // 9.  Checkpoint — four questions, four answers
  780,  // 10. The Learning Loop — ask → try → refine
  600,  // 11. "If idea intact and sharper" — ready or questions = progress
  570,  // 12. Outro — research done, validation done
  360,  // 13. Closing
];
// 9000 - 11*20 - 30 = 8750 ≈ 292s ≈ 4:52

// ── Video 8: Day 6-7 — Idea Collaboration Project (~2.5 min, 9 scenes) ──
export const DAY06_DURATIONS = [
  300,  // 1.  Title
  540,  // 2.  Hook — "You've spent the week thinking. Now you build."
  600,  // 3.  Intro — project not lesson, activity is the content
  540,  // 4.  Step 1: Settle on your idea
  660,  // 5.  Step 2: Define it with AI + ProjectMilestone
  540,  // 6.  Define details — user, problem, simple solution
  510,  // 7.  Fallback idea — a real option
  480,  // 8.  Outro — Week 1 deliverable, foundation for everything
  330,  // 9.  Closing
];
// 4500 - 7*20 - 30 = 4330 ≈ 144s ≈ 2:24

// ── Video 9: Day 8 — Refining Your Idea / MVP (~5.5 min, 13 scenes) ──
export const DAY08_DURATIONS = [
  300,  // 1.  Title
  840,  // 2.  Hook — "Cut it in half. Then cut it in half again."
  900,  // 3.  Intro — scope too broad, narrowing = making it possible
  900,  // 4.  What MVP actually means — smallest viable version
  810,  // 5.  Why MVP matters for AI — clear problem = better result
  690,  // 6.  Smaller = you can finish — fewer features, less breakage
  480,  // 7.  Checkpoint — small, focused, viable
  960,  // 8.  How to find your 3 features + FeatureCards
  690,  // 9.  Need vs Cool — "need is core, cool is version 2"
  750,  // 10. Problem statement check — specific enough to build from?
  780,  // 11. Sharpen it + MVPFunnel visual
  630,  // 12. Outro — stress-test tomorrow
  360,  // 13. Closing
];
// 9090 - 11*20 - 30 = 8840 ≈ 295s ≈ 4:55

// ── Video 10: Day 9 — Stress-Testing (~2.5 min, 9 scenes) ──
export const DAY09_DURATIONS = [
  300,  // 1.  Title
  630,  // 2.  Hook — "Features look great. Do they survive reality?"
  630,  // 3.  Intro — find weak spots before they become problems
  750,  // 4.  Exercise 1 — Challenge your features + StressTestVisual
  570,  // 5.  Exercise 1 detail — don't defend, listen, write gaps
  750,  // 6.  Exercise 2 — Key prompt pattern for each feature
  480,  // 7.  "Soft spots caught now cost nothing"
  540,  // 8.  Outro — features sharper, tomorrow: coding knowledge
  330,  // 9.  Closing
];
// 4980 - 7*20 - 30 = 4810 ≈ 160s ≈ 2:40

// ── Video 11: Day 10 — Basic Coding Knowledge (~6 min, 13 scenes) ──
export const DAY10_DURATIONS = [
  300,  // 1.  Title
  900,  // 2.  Hook — "Why a code video in a no-code bootcamp?"
  960,  // 3.  Intro — knowing pieces = better director
  1020, // 4.  4 Parts of Every App + AppArchitectureDiagram
  810,  // 5.  Front End — the storefront
  810,  // 6.  Back End — the kitchen
  870,  // 7.  APIs — the waiter / restaurant metaphor
  810,  // 8.  Database — storage, CRUD
  510,  // 9.  Checkpoint — four parts working together
  870,  // 10. Better Prompter — specific vs vague bug reports
  750,  // 11. Two questions pattern — explain + apply to my app
  660,  // 12. Outro — tomorrow: map concepts to your app
  390,  // 13. Closing
];
// 9660 - 11*20 - 30 = 9410 ≈ 314s ≈ 5:14

// ── Video 12: Day 11 — Learning Through Your Idea (~2.5 min, 8 scenes) ──
export const DAY11_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — "Which ones live inside your app"
  660,  // 3.  Intro — AI as thinking partner, three exercises
  750,  // 4.  Exercise 1 — Map concepts + ConceptMappingVisual
  660,  // 5.  Exercise 2 — Learn what you don't know
  630,  // 6.  Exercise 3 — Reflect on what sharpened thinking
  570,  // 7.  Outro — tomorrow is spec day
  330,  // 8.  Closing
];
// 4500 - 6*20 - 30 = 4350 ≈ 145s ≈ 2:25

// ── Video 13: Day 12 — How to Write a Spec (~6.5 min, 14 scenes) ──
export const DAY12_DURATIONS = [
  300,  // 1.  Title
  900,  // 2.  Hook — "No spec = same wall"
  960,  // 3.  Intro — spec is the blueprint, writing it WITH AI
  1020, // 4.  What a Spec Is + SpecBlueprintVisual — blueprint metaphor
  540,  // 5.  ChatPRD mention — structured spec tool
  1020, // 6.  Six Components overview + SixComponentBreakdown
  1020, // 7.  Components 1-3: Summary, Problem Statement, Target User
  1020, // 8.  Components 4-6: Feature List, User Flows, Success Definition
  540,  // 9.  Checkpoint — six components, now write it
  1020, // 10. Demo: Spec Prompt Pattern — "ask me questions one at a time"
  690,  // 11. Save as markdown — paste into AI tools later
  600,  // 12. Optional additions — user stories, tech stack, phased rollout
  720,  // 13. Outro — Days 13-14 project days
  420,  // 14. Closing
];
// 10770 - 12*20 - 30 = 10500 ≈ 350s ≈ 5:50

// ── Video 14: Day 13-14 — MVP Spec Project + Teaser (~5 min, 11 scenes) ──
export const DAY13_DURATIONS = [
  300,  // 1.  Title
  900,  // 2.  Hook — "Two weeks ago, idea. Now, everything."
  900,  // 3.  Intro — this produces something you'll actually use
  960,  // 4.  What You're Producing — 6 sections + SixComponentBreakdown
  870,  // 5.  How to Approach — Spec Prompt Pattern
  780,  // 6.  Share in Discord — get feedback, read others' specs
  750,  // 7.  End-of-Week Teaser — Week 3 preview
  930,  // 8.  Building tools + ProgressTimeline — Cursor, Lovable, Bolt
  870,  // 9.  Demo preview + BrowserMockup — working apps
  690,  // 10. "You have the idea. You have the spec."
  450,  // 11. Closing — "Week 3 starts now"
];
// 8400 - 9*20 - 30 = 8190 ≈ 273s ≈ 4:33

// ══════════════════════════════════════════════════════════════
// TRACK A — Build Your Own AI Agent (Days 15–28)
// ══════════════════════════════════════════════════════════════

// ── Video 15a: Day 15 V1 — What Is an Agent? (~6 min, 19 scenes) ──
export const DAY15V1_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — demo, task in result out
  600,  // 3.  Four C's — stop using AI the hard way
  540,  // 4.  Four C's — compass + core learning
  660,  // 5.  The problem with prompts — works until it doesn't
  720,  // 6.  Colleague analogy — prompt vs hiring someone
  660,  // 7.  Prompt vs Agent comparison — same AI, different structure
  540,  // 8.  Three things that make an agent — overview diagram
  600,  // 9.  Trait #1: Inputs → Processing → Outputs
  660,  // 10. Trait #2: Guardrails — what it should NOT do
  480,  // 11. Trait #3: Single Responsibility — one thing well
  600,  // 12. Example: Content Idea Generator + AgentFlowVisual
  540,  // 13. Example: Meeting Prep Assistant
  540,  // 14. Example: Email Drafter
  540,  // 15. The Agent Pattern diagram
  660,  // 16. Pause Here — direct to camera, think of a task
  540,  // 17. Write It Down — your agent's first job
  420,  // 18. Outro — "A Job, A Structure, Rules"
  330,  // 19. Closing
];
// 10530 - 17*20 - 30 = 10160 ≈ 339s ≈ 5:39

// ── Video 15b: Day 15 V2 — Build Your First Agent (~8 min, 22 scenes) ──
export const DAY15V2_DURATIONS = [
  300,  // 1.  Title
  540,  // 2.  Hook — "No code, no terminal, no complicated setup"
  480,  // 3.  Callout — "Building AI sounds technical — not anymore"
  540,  // 4.  Credibility — foundational skill that transfers everywhere
  540,  // 5.  Compass — working agent by end of video
  600,  // 6.  Core Learning — Claude Projects is a persistent workspace
  810,  // 7.  Regular Chat vs Claude Projects comparison
  540,  // 8.  Key Insight — first real agent because it's consistent
  600,  // 9.  Landscape — Zapier, Make, n8n, Voiceflow (Week 4 preview)
  540,  // 10. Step 1: Create + Name — "name it like a role"
  720,  // 11. Step 2: Write Custom Instructions + AgentDefinitionVisual
  660,  // 12. Step 2 detail — role, job, format, guardrail examples
  600,  // 13. Step 3: Upload Knowledge File — context specific to YOU
  540,  // 14. Step 4: Run With Real Input
  660,  // 15. The Difference — fresh chat vs your project comparison
  540,  // 16. Checkpoint diagram — name, instructions, knowledge, test run
  480,  // 17. "You're ahead of most people" — stuck on tools, you're past that
  660,  // 18. Agent Definition Sheet — name, job, I/O, guardrails, knowledge
  600,  // 19. Agent job examples — content, meeting, email, planning, proposal
  540,  // 20. Build steps summary diagram — 4 steps to working agent
  480,  // 21. Outro — "Now do it with YOUR job"
  330,  // 22. Closing
];
// 12300 - 20*20 - 30 = 11870 ≈ 396s ≈ 6:36

// ── Video 16: Day 16 — Test, Break, Improve (~4.5 min, 15 scenes) ──
export const DAY16_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — "An agent that works once isn't an agent"
  540,  // 3.  Don't Skip — "most people skip ahead. Don't."
  540,  // 4.  Three Phases diagram
  600,  // 5.  Phase 1: Run 3 times with real inputs
  540,  // 6.  Phase 1 detail — watch consistency across runs
  720,  // 7.  Phase 2: Try to break it — 4 attacks
  600,  // 8.  Phase 2 detail — observe how it fails
  600,  // 9.  Phase 3: Fix one thing
  540,  // 10. Phase 3 detail — retest with same input
  600,  // 11. Reflection: Assumptions & Consistency
  600,  // 12. Reflection: Questions & Biggest Impact
  540,  // 13. Deliverable — v1.1 + before/after
  480,  // 14. Discord Share — before/after comparison
  330,  // 15. Closing
];
// 8130 - 13*20 - 30 = 7840 ≈ 261s ≈ 4:21

// ── Video 17: Day 17 — Claude Projects → Claude Code (~7 min, 22 scenes) ──
export const DAY17_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — "Same agent. Same job. One wrote a file to your computer."
  660,  // 3.  Four C's — callout, credibility, compass, core learning
  540,  // 4.  Projects limitation — chat window is its world
  720,  // 5.  Read and write files — actual files on your computer
  600,  // 6.  Run commands — scripts, terminal, multi-step processes
  600,  // 7.  Multi-step autonomous — give it a goal, not just a prompt
  720,  // 8.  MCP — USB ports for AI, connect to other apps
  660,  // 9.  CLAUDE.md — persistent memory, instructions stick
  810,  // 10. Projects vs Code comparison
  660,  // 11. Accessibility — same conversation, different interface
  540,  // 12. Terminal isn't scary — you're not writing code
  600,  // 13. Installation — Mac, Linux, Windows, VS Code extension
  540,  // 14. First run — navigate to folder, type claude
  600,  // 15. Demo narration — same task, output saved to file
  660,  // 16. CLAUDE.md structure — Your Job, Instructions, Format, Rules
  540,  // 17. Checkpoint — installed, folder created, one test run
  600,  // 18. Exercise: rebuild in Claude Code
  540,  // 19. Compare outputs — run same 3 inputs from Day 16
  540,  // 20. Deliverable — working agent with CLAUDE.md, 3 consistent runs
  480,  // 21. Outro — "Bridged from concept to real environment"
  330,  // 22. Closing
];
// 12840 - 20*20 - 30 = 12410 ≈ 414s ≈ 6:54

// ── Video 18: Day 18 — Context Upgrade (~4 min, 14 scenes) ──
export const DAY18_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — right instinct, wrong approach
  600,  // 3.  Why this works — agent knows what it's missing
  660,  // 4.  The context interview exercise
  660,  // 5.  How to answer — comparison (don't vs do)
  540,  // 6.  After the interview diagram
  600,  // 7.  The permanent upgrade — find the one best question
  480,  // 8.  Reflection — surprise questions
  600,  // 9.  Reflection — wrong assumptions + growth since Day 15
  660,  // 10. Mid-week check-in — take stock
  540,  // 11. If you're questioning the job — pivot now
  600,  // 12. Deliverable + Discord share
  420,  // 13. Outro
  330,  // 14. Closing
];
// 7590 - 12*20 - 30 = 7320 ≈ 244s ≈ 4:04

// ── Video 19: Day 19 — Three Things That Make an Agent Reliable (~8 min, 21 scenes) ──
export const DAY19_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — agent with vague prompt, inconsistent output
  540,  // 3.  The problem — works sometimes, structural not luck
  600,  // 4.  Four C's — credibility + compass
  480,  // 5.  Core Learning — reliable = clearer, not smarter
  660,  // 6.  "Almost working" looks like — confident but untrustable
  600,  // 7.  Three Fixes overview + ThreeFixesVisual
  720,  // 8.  Fix 1: Output Format comparison — vague vs precise
  540,  // 9.  Fix 1 detail — every guess is a deviation
  600,  // 10. Fix 2: Add Guardrails — what it doesn't do
  540,  // 11. Fix 2 detail — two rules every agent needs
  660,  // 12. Fix 3: Input Template — garbage in, garbage out
  540,  // 13. Fix 3 detail — the template structure
  540,  // 14. Checkpoint — three fixes recap
  480,  // 15. Quick Recap diagram
  600,  // 16. Exercise: Polish and Package
  540,  // 17. HOW-TO-RUN.md — documentation structure
  540,  // 18. The Test — run 3 times
  480,  // 19. Compare Day 15 to today
  540,  // 20. Outro — reliable, documented, repeatable
  330,  // 21. Closing
];
// 11390 - 19*20 - 30 = 10980 ≈ 366s ≈ 6:06

// ── Video 20: Day 20 — Real-World Run (~5 min, 15 scenes) ──
export const DAY20_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Framing — "Most important day of the week"
  540,  // 3.  This is where it gets real — not practice, not a test
  600,  // 4.  Goal: honest data, not perfect results
  600,  // 5.  Step 1: Pick a real task — top options
  540,  // 6.  Step 1 continued — more task ideas
  600,  // 7.  Step 2: Use your input template from Day 19
  480,  // 8.  Step 3: The process diagram — run it, use it
  600,  // 9.  Key rule: actually use the output
  600,  // 10. Comparison: reading output vs using output
  600,  // 11. Reflection questions — time saved + quality
  600,  // 12. Reflection questions — input gaps + score + reuse
  540,  // 13. Deliverable + Discord share
  480,  // 14. Outro — honest data over perfect results
  330,  // 15. Closing
];
// 7610 - 13*20 - 30 = 7320 ≈ 244s ≈ 4:04

// ── Video 21: Day 21 — Prep for Week 4 (~4.5 min, 15 scenes) ──
export const DAY21_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Framing — Week 3 was about proving the concept
  540,  // 3.  The Higher Bar — bootcamp agent vs weekly-use agent
  480,  // 4.  Today's Goal — one clear improvement, grounded in reality
  540,  // 5.  Step 1: Look at Day 20 reflection
  660,  // 6.  Step 2: Pick ONE upgrade category
  720,  // 7.  Upgrade Details — when to use each category
  540,  // 8.  The Focus Rule — pick one, not two
  600,  // 9.  Step 3: Write your Agent v2 Plan
  540,  // 10. Catch-up minimum for Week 4
  480,  // 11. "You don't need polished — you need something running"
  600,  // 12. Reflection prompts — twice as useful, frustrated, right job
  540,  // 13. Deliverable + Discord share
  480,  // 14. Outro — one focused upgrade
  330,  // 15. Closing
];
// 7950 - 13*20 - 30 = 7660 ≈ 255s ≈ 4:15

// ── Video 22a: Day 22 V1 — Agents With Tools (~5.5 min, 19 scenes) ──
export const DAY22V1_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — agent is smart but limited
  600,  // 3.  Four C's — callout + credibility
  540,  // 4.  Compass + core learning
  660,  // 5.  What "tools" means — overview
  660,  // 6.  File access + web search detail
  540,  // 7.  MCP — USB-C for AI
  540,  // 8.  Human-in-the-loop
  480,  // 9.  Live demo — adding file integration diagram
  540,  // 10. Step 1 — create reference folder
  540,  // 11. Step 2 — update CLAUDE.md
  600,  // 12. Step 3 — the difference (comparison)
  600,  // 13. The one rule — one integration at a time
  600,  // 14. Integration options — choose one
  480,  // 15. Checkpoint diagram
  540,  // 16. Reliability before complexity
  420,  // 17. Outro
  420,  // 18. Stay for Video 2
  330,  // 19. Closing
];
// 9990 - 17*20 - 30 = 9620 ≈ 321s ≈ 5:21

// ── Video 22b: Day 22 V2 — The Agent Landscape (~6 min, 18 scenes) ──
export const DAY22V2_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — "what are all those other tools?"
  720,  // 3.  Five categories overview + AgentLandscapeVisual
  600,  // 4.  No-code automation — Zapier AI, Make, n8n
  540,  // 5.  No-code automation — when it shines
  600,  // 6.  Agent platforms — Relevance AI, Dify, Voiceflow
  540,  // 7.  Agent platforms — the sweet spot
  600,  // 8.  Code frameworks — LangChain, CrewAI
  540,  // 9.  Vibe coding tools — Lovable, Bolt, Cursor
  600,  // 10. Claude Code — where you are now
  600,  // 11. Why Claude Code — foundational skill
  540,  // 12. Why Claude Code — most capable path
  600,  // 13. When to explore others — decision guide
  480,  // 14. Decision framework diagram
  600,  // 15. Comparison — Claude Code vs others
  420,  // 16. "One path well"
  420,  // 17. "You have the map"
  330,  // 18. Closing
];
// 9630 - 16*20 - 30 = 9280 ≈ 309s ≈ 5:09

// ── Video 23: Day 23 — Gather Real Inputs (~4 min, 15 scenes) ──
export const DAY23_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — clean data vs messy reality
  600,  // 3.  Built vs Used comparison
  540,  // 4.  Adapting, not breaking — this isn't Day 16
  600,  // 5.  Step 1: Collect 3 real inputs — emails, agendas, content
  540,  // 6.  Step 1 continued — briefs, notes, tasks + don't clean up
  540,  // 7.  Step 2: Run all three diagram
  660,  // 8.  Step 3: Pay attention to format — comparison
  600,  // 9.  Format questions — what to note for each run
  540,  // 10. Step 4: Update your Day 19 input template
  600,  // 11. Reflection — best format, unexpected confusion
  540,  // 12. Reflection — CLAUDE.md updates, worst case
  540,  // 13. Deliverable + Discord share
  480,  // 14. Outro — address the worst case
  330,  // 15. Closing
];
// 8010 - 13*20 - 30 = 7720 ≈ 257s ≈ 4:17

// ── Video 24: Day 24 — Build Sprint: Agent v2 (~4.5 min, 15 scenes) ──
export const DAY24_DURATIONS = [
  300,  // 1.  Title
  540,  // 2.  Framing — tested, reflected, gathered, planned. Now build.
  600,  // 3.  One upgrade, not three tweaks — philosophy
  480,  // 4.  Focus. Build. Test. — today's mantra
  660,  // 5.  v2 Build Checklist overview
  540,  // 6.  Implement your upgrade — Day 21 plan or adjusted
  540,  // 7.  Update CLAUDE.md — keep it clean
  600,  // 8.  Add a validation step — self-check before output
  540,  // 9.  Validation prompt example (split visual)
  600,  // 10. Run on all 3 real inputs from Day 23
  600,  // 11. Comparison — Day 23 vs Day 24 outputs
  540,  // 12. Reflection prompts
  600,  // 13. Mid-week check-in
  480,  // 14. Outro — better than Day 23
  330,  // 15. Closing
];
// 7950 - 13*20 - 30 = 7660 ≈ 255s ≈ 4:15

// ── Video 25: Day 25 — Stress Test (~5 min, 17 scenes) ──
export const DAY25_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Framing — you've been feeding it good inputs
  540,  // 3.  Your future self won't be careful
  480,  // 4.  The goal — fail gracefully, not silently
  600,  // 5.  Test 1: Missing context — does it ask or guess?
  600,  // 6.  Test 2: Contradictory input — flags or ignores?
  540,  // 7.  Test 3: Messy text — stream-of-consciousness notes
  540,  // 8.  Test 4: Out of scope — does it refuse clearly?
  540,  // 9.  Test 5: Input overload — 5x normal info
  600,  // 10. How it fails matters — comparison
  600,  // 11. The fix: add guardrails for each failure
  540,  // 12. Guardrail format — If [situation], then [behavior]
  540,  // 13. Guardrail examples — specific beats vague
  540,  // 14. Reflection — which failure surprised you most?
  540,  // 15. Deliverable + Discord share
  480,  // 16. Outro — at least 3 new guardrails
  330,  // 17. Closing
];
// 8910 - 15*20 - 30 = 8580 ≈ 286s ≈ 4:46

// ── Video 26: Day 26 — Ship: Launch Your Agent (~7 min, 22 scenes) ──
export const DAY26_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — "Do you use it next week?"
  540,  // 3.  Callout — working agent that doesn't get used
  600,  // 4.  Credibility — two weeks ago you didn't know what an agent was
  480,  // 5.  Compass + Core Learning — shipping checklist + four things
  720,  // 6.  Shipping checklist overview + ShipChecklistVisual
  600,  // 7.  Check 1: Reliability — run 3 times, all usable
  600,  // 8.  Check 2: Documentation — future-you in two weeks
  600,  // 9.  Check 3: Input System — template, folder, structured doc
  540,  // 10. Check 4: Output Destination — loop is closed
  600,  // 11. Check 5: Scheduled Moment — recurring reminder
  540,  // 12. Comparison: Completed Exercise vs Shipped Tool
  660,  // 13. What's Next: CLAUDE.md as persistent memory
  600,  // 14. What's Next: Triggers — cron, webhooks, email forwarding
  480,  // 15. Simple is sustainable — weekly reminder does the job
  660,  // 16. The Essential Test — "Would you miss it?"
  600,  // 17. If not yet — iterate, try a different job
  600,  // 18. Demo Format — how to talk about what you built
  540,  // 19. Five Things Diagram — recap
  540,  // 20. Checkpoint — not perfect, reliable and useful
  480,  // 21. Outro — you built an agent, you shipped it
  330,  // 22. Closing — see you on Day 27
];
// 12210 - 20*20 - 30 = 11780 ≈ 393s ≈ 6:33

// ── Video 27: Day 27 — Real Usage Day Round 2 (~4.5 min, 14 scenes) ──
export const DAY27_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Framing — same concept, different agent
  660,  // 3.  Day 20 vs Day 27 comparison
  540,  // 4.  The honest measure — experience, not code
  480,  // 5.  The exercise diagram — 4 steps
  600,  // 6.  Step 1: Real task, different than Day 20
  600,  // 7.  Step 2: Actually use the output
  600,  // 8.  Reflect: experience and quality (1-10 scale)
  540,  // 9.  Reflect: input system + timing
  600,  // 10. Most important question — run it next week?
  480,  // 11. Deliverable — output + comparative reflection
  540,  // 12. Discord share — progress story
  420,  // 13. Outro — your progress story
  330,  // 14. Closing
];
// 6890 - 12*20 - 30 = 6620 ≈ 221s ≈ 3:41

// ── Video 28: Day 28 — You Built Something Real (~5.5 min, 17 scenes) ──
export const DAY28_DURATIONS = [
  300,  // 1.  Title
  660,  // 2.  Your journey + ProgressJourneyVisual
  600,  // 3.  "Not a bootcamp project — a tool you built"
  540,  // 4.  Ran the whole loop — comparison
  600,  // 5.  Celebrate — what did your agent do this week?
  540,  // 6.  Celebrate — hardest moment + what you'd tell Day 1 you
  600,  // 7.  v2 Roadmap — what would v2 do?
  540,  // 8.  v2 Roadmap — upgrade options
  600,  // 9.  The essential test — would you miss it?
  540,  // 10. A second agent — you know how now
  600,  // 11. Bigger picture — where to go from here
  540,  // 12. Bigger picture — Claude API + Tracks B and C
  480,  // 13. "Now you understand what you're choosing between"
  540,  // 14. What you built diagram
  540,  // 15. Deliverable — v2 roadmap + My Agent Story
  480,  // 16. "That's a tool you built"
  360,  // 17. Final closing — share your story
];
// 9060 - 15*20 - 30 = 8730 ≈ 291s ≈ 4:51

// ══════════════════════════════════════════════════════════════
// TRACK B — Build Your MVP with AI (Days 15–28)
// ══════════════════════════════════════════════════════════════

// ── Day B15 — AI Web Builders Landscape (~6 min, 20 scenes) ──
export const DAYB15_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — paste a spec, app appears
  600,  // 3.  Four C's — callout + credibility
  540,  // 4.  Four C's — compass + core learning
  660,  // 5.  What AI builders actually do — two modes
  600,  // 6.  What AI builds well — UI, layouts, forms, nav
  540,  // 7.  What AI doesn't do — business logic, edge cases
  600,  // 8.  Your spec matters — specificity = better output
  720,  // 9.  The Four Tools overview + BuilderToolsVisual
  600,  // 10. Lovable — visual-first, plain language
  540,  // 11. v0 — clean UI components
  540,  // 12. Bolt.new — full-stack in browser
  540,  // 13. Replit — full dev environment
  660,  // 14. How to pick — match your work style
  600,  // 15. Pick one, commit — switching costs time
  600,  // 16. Your first session diagram
  540,  // 17. Checkpoint — name your project
  600,  // 18. Deliverable — paste spec, share screenshot
  480,  // 19. Outro — spec to skeleton, foundation for Weeks 3-4
  330,  // 20. Closing — see you on Day 16
];
// 10650 - 18*20 - 30 = 10260 ≈ 342s ≈ 5:42

// ── Day B16 — Risk Scan (~4.5 min, 15 scenes) ──
export const DAYB16_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — "You have a scaffold. Don't skip past this."
  600,  // 3.  Framing — knowing where hard parts are = smarter decisions
  540,  // 4.  What a Risk Scan is — surface what slows you down
  600,  // 5.  The Exercise diagram — 6-step flow
  540,  // 6.  Step 1-2: Open AI tool + share your spec
  660,  // 7.  Step 3: The prompt — ask for 3 hardest parts
  600,  // 8.  Step 4: Read for patterns — dependencies + hidden complexity
  720,  // 9.  Step 5: Two lists — Build Now vs Park for Later (comparison)
  600,  // 10. Step 6: Core loop in one sentence — example
  540,  // 11. Reflection — postponing isn't giving up, it's how you ship
  540,  // 12. Reflection — simplest version of your core loop
  540,  // 13. Deliverable — two-column list + one sentence
  480,  // 14. Outro — see what other builders are prioritizing
  330,  // 15. Closing
];
// 8190 - 13*20 - 30 = 7900 ≈ 263s ≈ 4:23

// ── Day B17 — Build Sprint: IDE Setup (~6.5 min, 21 scenes) ──
export const DAYB17_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — "That's not an app. That's a demo."
  600,  // 3.  Four C's — callout + credibility
  540,  // 4.  Core Learning — three layers of every real app
  660,  // 5.  Unlock 1: Why you need an IDE
  540,  // 6.  Three IDEs worth knowing
  600,  // 7.  IDE mental model — builder vs IDE comparison
  660,  // 8.  Unlock 2: The version control problem
  720,  // 9.  GitHub + Vercel pipeline + DeployPipelineVisual
  540,  // 10. Checkpoint diagram — three things you know
  480,  // 11. Checkpoint narration — tools connect together
  660,  // 12. Unlock 3: The database problem — refresh and it's gone
  600,  // 13. Why databases matter — with vs without comparison
  600,  // 14. Three database options — Convex, Supabase, Firebase
  600,  // 15. Records and fields — the starting model
  480,  // 16. Key insight — you don't need engineering knowledge
  540,  // 17. Three Unlocks recap diagram
  600,  // 18. Deliverable — pick database, define one record
  540,  // 19. Outro — you just unlocked real infrastructure
  420,  // 20. Teaser — your app has real infrastructure
  330,  // 21. Closing — see you on Day 18
];
// 11610 - 19*20 - 30 = 11200 ≈ 373s ≈ 6:13

// ── Day B18 — Break It on Purpose (~4.5 min, 16 scenes) ──
export const DAYB18_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — your app is running, now find where it falls apart
  540,  // 3.  Framing — be the bad user, stress-testing
  660,  // 4.  Bugs found now vs later — comparison
  540,  // 5.  Exercise overview diagram — 6-step flow
  540,  // 6.  Step 1: Open app as a stranger
  600,  // 7.  Step 2: Try weird inputs — symbols, empty, huge text
  540,  // 8.  Step 3: Test empty states — no data, first visit
  540,  // 9.  Step 4: Confuse the navigation — back button, refresh
  600,  // 10. Step 5: Log everything — what happened, expected, blocker?
  600,  // 11. Step 6: Bring bugs to AI — paste description, ask for fix
  480,  // 12. Bug fix flow diagram
  540,  // 13. Reflection — surprises and confused new users
  540,  // 14. Deliverable — bug log + Discord share
  480,  // 15. Outro — bug logs are your backlog
  330,  // 16. Closing
];
// 8430 - 14*20 - 30 = 8120 ≈ 271s ≈ 4:31

// ── Day B19 — From MVP to Modern App (~6.5 min, 22 scenes) ──
export const DAYB19_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — real products vs prototypes
  540,  // 3.  Callout — who this is for
  600,  // 4.  Credibility — every app is assembled
  480,  // 5.  Compass — what you'll learn today
  600,  // 6.  Core Loop — tighten what you have first
  540,  // 7.  Core Loop walkthrough — fix before adding
  660,  // 8.  Packages intro — pre-built superpowers
  720,  // 9.  Auth deep dive — Clerk example
  600,  // 10. Payments + more packages — Stripe, uploads, forms
  540,  // 11. The real skill — knowing what exists
  600,  // 12. AI workflow — describe, AI sets up
  480,  // 13. Checkpoint — packages unlock superpowers
  660,  // 14. APIs explained — bridges to external services
  720,  // 15. AI models — OpenAI, Gemini, Claude via API
  600,  // 16. Electricity analogy — you plug in, not generate
  600,  // 17. AI features you can build — single API call
  540,  // 18. What you need — API key + description
  540,  // 19. Comparison — Build vs Assemble
  540,  // 20. Pick your upgrade — three options
  480,  // 21. Outro — your MVP just leveled up
  330,  // 22. Closing — see you on Day 20
];
// 12330 - 20*20 - 30 = 11900 ≈ 397s ≈ 6:37

// ── Day B20 — Friend Test (~3.75 min, 14 scenes) ──
export const DAYB20_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — you know your app too well
  540,  // 3.  The fix — borrow someone else's eyes
  480,  // 4.  The exercise overview diagram
  540,  // 5.  Step 1 — find your tester
  480,  // 6.  Step 2 — set it up without setup
  600,  // 7.  Step 3 — watch without interrupting
  540,  // 8.  Step 4 — note what you see
  540,  // 9.  Step 5 — ask two questions after
  600,  // 10. Builder eyes vs. fresh eyes comparison
  540,  // 11. Reflection — do they understand your app?
  480,  // 12. Deliverable — three observations
  480,  // 13. Discord share — post your field notes
  330,  // 14. Closing
];
// 7050 - 12*20 - 30 = 6780 ≈ 226s ≈ 3:46

// ── Day B21 — Prep for Launch Week (~4 min, 14 scenes) ──
export const DAYB21_DURATIONS = [
  300,  // 1.  Title
  540,  // 2.  Framing — Week 3 is done
  600,  // 3.  Week 4 is different (ComparisonScene)
  600,  // 4.  Not everything makes the cut
  540,  // 5.  Step 1: Review your Week 3 materials
  540,  // 6.  Step 2: Write your Top 3 list
  600,  // 7.  The litmus test (ComparisonScene)
  540,  // 8.  Step 3: Prioritize ruthlessly
  480,  // 9.  v1 checklist (DiagramScene)
  600,  // 10. Step 4: Write your Week 4 sentence
  540,  // 11. Reflection — name the gap
  480,  // 12. Reflection — let go
  540,  // 13. Deliverable
  330,  // 14. Closing
];
// 7230 - 12*20 - 30 = 6960 ≈ 232s ≈ 3:52

// ── Day B22 — Debugging with AI (~5 min, 17 scenes) ──
export const DAYB22_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — "Something broke. You don't know why."
  540,  // 3.  Callout — "If you've hit a bug and felt like stopping"
  600,  // 4.  Credibility — bugs are information, not failure
  540,  // 5.  Compass — what you'll learn today
  600,  // 6.  Bugs are information — every error tells you something
  540,  // 7.  Stop before changing code
  660,  // 8.  Three-part bug description + BugReportVisual
  600,  // 9.  Bug description examples
  540,  // 10. AI response — explanation matters
  600,  // 11. Reading code without panic
  540,  // 12. Two things that help — ask AI + test immediately
  480,  // 13. Mindset — no badge for solving it alone
  600,  // 14. The full framework recap
  540,  // 15. Deliverable — fix one real bug
  480,  // 16. Bugs are checkpoints — outro
  330,  // 17. Closing — See You on Day 23
];
// 9090 - 15*20 - 30 = 8760 ≈ 292s ≈ 4:52

// ── Day B23 — Solo Improvement Sprint (~4.5 min, 16 scenes) ──
export const DAYB23_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Framing — less scaffolding, more independence
  540,  // 3.  Why this feels different — intentional discomfort
  600,  // 4.  Confidence that demos can't build
  540,  // 5.  The only rule — start small, finish it
  600,  // 6.  Step 1: Choose one improvement from Top 3
  540,  // 7.  Good picks vs not yet
  600,  // 8.  Step 2: State what you're building
  540,  // 9.  Step 3: Build it with AI
  600,  // 10. Use Day 22's debugging framework
  540,  // 11. Step 4: Test against your core loop
  600,  // 12. The full process diagram
  540,  // 13. Reflection — understanding after doing
  480,  // 14. Deliverable — one completed improvement
  420,  // 15. Outro
  330,  // 16. Closing
];
// 8370 - 14*20 - 30 = 8060 ≈ 269s ≈ 4:29

// ── Day B24 — Final Feature Sprint (~4 min, 14 scenes) ──
export const DAYB24_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Framing — build day of launch week
  540,  // 3.  App v1 definition — complete core loop + one integration
  600,  // 4.  Stop putting it off — auth or DB, today is the day
  660,  // 5.  Persistence path — database saves and loads
  660,  // 6.  Auth path — sign up, log in, tied to data
  540,  // 7.  Already done both? Tighten the implementation
  600,  // 8.  Tighten main flow — walk the core loop start to finish
  540,  // 9.  Deploy checklist — GitHub, Vercel, URL
  600,  // 10. Day 21 Top 3 — check off your list
  540,  // 11. Scope cuts — conscious decisions vs running out of time
  540,  // 12. Define done — what v1 means for your app
  480,  // 13. Deliverable — deployed URL, share in Discord
  330,  // 14. Closing
];
// 7530 - 12*20 - 30 = 7260 ≈ 242s ≈ 4:02

// ── Day B25 — New User Walkthrough (~4 min, 14 scenes) ──
export const DAYB25_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Framing — "Tomorrow you ship"
  540,  // 3.  Why fresh eyes matter
  540,  // 4.  The exercise — open as a stranger
  600,  // 5.  Full user journey diagram
  600,  // 6.  User journey deep dive — sign up, core loop, persistence
  540,  // 7.  Log friction — what to look for
  600,  // 8.  Friction examples — dead ends, confusion, slowness
  540,  // 9.  Triage your list
  600,  // 10. Fix before launch vs ship as-is (comparison)
  480,  // 11. Fix the blockers — the rest ships tomorrow
  540,  // 12. Reflection prompts
  540,  // 13. Deliverable + Discord share
  330,  // 14. Closing
];
// 7350 - 12*20 - 30 = 7080 ≈ 236s ≈ 3:56

// ── Day B26 — Ship: Launch Day (~6 min, 20 scenes) ──
export const DAYB26_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — "You have a URL. A real one."
  600,  // 3.  Four C's — Callout + Credibility
  540,  // 4.  Four C's — Compass + Core Learning
  600,  // 5.  Deploy It — push, confirm, test
  540,  // 6.  Deploy diagram — Push → Verify → Test
  600,  // 7.  It's Live — "That URL exists on a server"
  660,  // 8.  Real App Trinity intro — three building blocks
  600,  // 9.  Packages — auth, payments, uploads
  600,  // 10. APIs — AI models, external services
  600,  // 11. Database — memory, persistence
  540,  // 12. Reflection — "Where are the packages in YOUR app?"
  600,  // 13. Document It — four questions
  540,  // 14. How to Talk About It — elevator pitch
  540,  // 15. Portfolio — "First entry in your portfolio"
  600,  // 16. Journey recap — Spec → Scaffold → Integrate → Ship
  540,  // 17. Fourteen Days Ago — "You had a spec. Today you have an app."
  540,  // 18. Deliverable — share your URL in Discord
  420,  // 19. See You on Day 27
  330,  // 20. Closing — "You Shipped It."
];
/// 10890 - 18*20 - 30 = 10500 ≈ 350s ≈ 5:50

// ── Day B27 — Tiny Launch Moment (~4 min, 15 scenes) ──
export const DAYB27_DURATIONS = [
  300,  // 1.  Title
  540,  // 2.  Framing — your app is live, now do one thing
  600,  // 3.  Why sharing matters — shipping in private kills momentum
  600,  // 4.  Comparison — ship private vs. share early
  540,  // 5.  Real feedback you can't get any other way
  600,  // 6.  Step 1 — pick where to share
  600,  // 7.  Step 2 — write one sentence
  540,  // 8.  What it does, not what it is
  480,  // 9.  Step 3 — post it or send it
  540,  // 10. Step 4 — note what happens
  540,  // 11. The steps diagram
  540,  // 12. Reflection prompts
  480,  // 13. Deliverable + Discord share
  420,  // 14. Outro
  330,  // 15. Closing
];
// 7650 - 13*20 - 30 = 7360 ≈ 245s ≈ 4:05

// ── Day B28 — V2 Roadmap (~4.5 min, 16 scenes) ──
export const DAYB28_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — "Twenty-eight days ago, you had no app"
  540,  // 3.  Your 28-day journey + BootcampJourneyVisual
  600,  // 4.  Last day — v1 done, v2 starts now
  660,  // 5.  Step 1 — List 3-5 next feature ideas
  540,  // 6.  Step 2 — Prioritize one feature
  600,  // 7.  Step 3 — Think about the next track
  600,  // 8.  Step 4 — Would YOU use it weekly?
  540,  // 9.  Reflection prompts — capture your ideas
  480,  // 10. Deliverable — share in Discord
  600,  // 11. Comparison — v1 vs v2 mindset
  540,  // 12. What you know how to do — diagram
  600,  // 13. A note — what you've gained
  420,  // 14. That's yours now
  480,  // 15. What you build next
  360,  // 16. Final closing
];
// 8460 - 14*20 - 30 = 8150 ≈ 272s ≈ 4:32

// ══════════════════════════════════════════════════════════════
// TRACK C — Build Your Own Data Dashboard (Days 15–19)
// ══════════════════════════════════════════════════════════════

// ── Day C15 — Data for Real People (~5:43, 20 scenes) ──
export const DAYC15_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — data you already have
  600,  // 3.  Not a data person? Perfect.
  600,  // 4.  Four C's intro — what you will learn
  360,  // 5.  Core learning — dashboard is answers
  660,  // 6.  What data actually is (ComparisonScene)
  720,  // 7.  Data is organized observations
  540,  // 8.  Data table visual (SplitVisualScene + DataTableVisual)
  600,  // 9.  Without a question it is just a list
  660,  // 10. What a dashboard actually is
  600,  // 11. Spreadsheet vs dashboard (ComparisonScene)
  660,  // 12. Questions that drive dashboards
  540,  // 13. No technical training required
  600,  // 14. The reframe — perfection is not the goal
  600,  // 15. The dashboard question formula (DiagramScene)
  600,  // 16. Example dashboard questions
  540,  // 17. Checkpoint
  540,  // 18. Deliverable — write your dashboard question
  420,  // 19. Outro
  330,  // 20. Closing
];
/// 10670 - 18*20 - 30 = 10280 ≈ 343s ≈ 5:43

// ── Day C16 — Collect Your Dataset (~3:44, 14 scenes) ──
export const DAYC16_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Framing — yesterday a question, today the data
  600,  // 3.  The rule — one source, ten entries, something real
  540,  // 4.  Step 1 — personal life data sources
  540,  // 5.  Step 1 — business or work data sources
  540,  // 6.  Step 2 — gather at least 10 entries
  600,  // 7.  Step 3 — label columns clearly (comparison)
  540,  // 8.  Step 4 — save it somewhere accessible
  480,  // 9.  The full process (diagram)
  540,  // 10. Reflection — what patterns do you suspect?
  480,  // 11. Reflection — what's missing?
  540,  // 12. Deliverable — your dataset
  360,  // 13. Your data is ready
  330,  // 14. Closing
];
// 6990 - 12*20 - 30 = 6720 ≈ 224s ≈ 3:44

// ── Day C17 — Build Sprint: Dashboard v0 (~4 min, 14 scenes) ──
export const DAYC17_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Framing — today you build
  540,  // 3.  Visibility not perfection — rough is fine
  540,  // 4.  Comparison — 1 working chart vs 5 unfinished
  480,  // 5.  Step 1: Open your tool
  600,  // 6.  Step 2: Share data + prompt template
  540,  // 7.  Step 2b: Pick 1-2 suggestions
  600,  // 8.  Step 3: Build one chart (SplitVisualScene + DashboardMockupVisual)
  540,  // 9.  Tool options — Sheets, Claude Code, Datawrapper
  600,  // 10. Step 4: Don't polish
  540,  // 11. Reflection prompts
  480,  // 12. Deliverable — screenshot + Discord share
  420,  // 13. Outro
  330,  // 14. Closing
];
// 7110 - 12*20 - 30 = 6840 ≈ 228s ≈ 3:48

// ── Day C18 — Insight Discovery (~4 min, 14 scenes) ──
export const DAYC18_DURATIONS = [
  300,  // 1.  Title
  540,  // 2.  Framing — chart to meaning
  600,  // 3.  The step most people skip
  600,  // 4.  The frame — AI vs You comparison
  600,  // 5.  Step 1: Share your chart or data
  600,  // 6.  Step 2: Run the insight prompt
  540,  // 7.  Step 3: Push further (diagram)
  540,  // 8.  Step 3 follow-up prompts
  540,  // 9.  Step 4: Write one insight
  480,  // 10. Example insight
  600,  // 11. Reflection prompts
  540,  // 12. Deliverable + Discord share
  420,  // 13. Reflection
  330,  // 14. Closing
];
// 7230 - 12*20 - 30 = 6960 ≈ 232s ≈ 3:52

// ── Day C19 — Data Storytelling (~6 min, 20 scenes) ──
export const DAYC19_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — a chart without context is just a shape
  540,  // 3.  The real problem — charts don't speak for themselves
  600,  // 4.  Four C's — what you will learn
  660,  // 5.  Same data, different dashboard (before/after)
  600,  // 6.  The three communication tools (overview)
  600,  // 7.  Tool 1 — a title that states the question
  540,  // 8.  Tool 1 — before/after title examples
  600,  // 9.  Tool 2 — labels that eliminate confusion
  540,  // 10. Tool 2 — label anti-patterns
  600,  // 11. Tool 3 — the "What this means" section
  600,  // 12. Tool 3 — the three insight questions
  540,  // 13. The recommendation sentence
  540,  // 14. "Based on this, I will ___" template
  600,  // 15. Checkpoint — context beats charts
  540,  // 16. Where you are now
  600,  // 17. Your task — upgrade dashboard v0
  540,  // 18. Deliverable — shareable dashboard draft
  420,  // 19. Outro
  330,  // 20. Closing
];
// 10950 - 18*20 - 30 = 10560 ≈ 352s ≈ 5:52

// ── Day C20 — Real-World Use Test (~3.5 min, 14 scenes) ──
export const DAYC20_DURATIONS = [
  300,  // 1.  Title
  540,  // 2.  Framing — today you use it
  600,  // 3.  Why most dashboards fail
  600,  // 4.  Find out now, not later (ComparisonScene)
  540,  // 5.  Step 1: Open your dashboard
  600,  // 6.  Step 2 scenarios: time, spending, content
  540,  // 7.  Step 2 scenarios: clients, habits
  540,  // 8.  Make the decision
  540,  // 9.  Step 3: Write it down
  540,  // 10. Step 4: Note what was harder
  600,  // 11. Reflection: Did it help? (ComparisonScene)
  480,  // 12. What would make it more useful?
  540,  // 13. Deliverable + Discord
  330,  // 14. Closing
];
// 7290 - 12*20 - 30 = 7020 ≈ 234s ≈ 3:54

// ── Day C21 — Prep for Dashboard v2 (~4 min, 14 scenes) ──
export const DAYC21_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Week 3 recap — what you built
  600,  // 3.  Week 4 framing — better and repeatable
  540,  // 4.  Today's goal — plan one upgrade
  540,  // 5.  Step 1 — review Day 20 notes
  600,  // 6.  Step 2 — five upgrade options (first three)
  540,  // 7.  Step 2 cont — last two options
  480,  // 8.  Step 3 — write your upgrade plan (diagram)
  540,  // 9.  Three-sentence format
  600,  // 10. Reflection — useful vs impressive
  540,  // 11. Reflection — smallest change, biggest difference
  540,  // 12. Deliverable — post your plan
  420,  // 13. Outro
  330,  // 14. Closing
];
// 7170 - 12*20 - 30 = 6900 ≈ 230s ≈ 3:50

// ── Day C22 — Trustworthy Dashboards (~5.5 min, 19 scenes) ──
export const DAYC22_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — most dashboards reflect what you already believed
  540,  // 3.  Callout — who this is for
  600,  // 4.  Credibility — dangerous dashboards mislead with confidence
  540,  // 5.  Compass — what you'll learn today
  480,  // 6.  Core Learning — "What should I do differently now?"
  660,  // 7.  Why good charts mislead
  600,  // 8.  Correlation example — views + posting frequency
  540,  // 9.  Correlation vs causation comparison
  600,  // 10. Ask before acting — the Tuesday pattern
  540,  // 11. Three signs overview
  600,  // 12. Sign 1: Non-zero baseline + MisleadingChartVisual
  540,  // 13. Sign 2: Short time period
  540,  // 14. Sign 3: Small sample size
  600,  // 15. Decision Section — "Based on this data, I will ___"
  540,  // 16. Decoration vs Tool
  600,  // 17. Checkpoint — where you are now
  480,  // 18. Outro — next steps
  330,  // 19. Closing
];
// 10290 - 17*20 - 30 = 9920 ≈ 331s ≈ 5:31

// ── Day C23 — Add One New Data Point (~2.5 min, 8 scenes) ──
export const DAYC23_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Framing — your dashboard works, now make it more complete
  600,  // 3.  Key insight — see vs explain (SplitVisual)
  540,  // 4.  The rule — one thing, not five
  600,  // 5.  Option 1 — five more rows
  600,  // 6.  Option 2 — one new column
  540,  // 7.  Option 3 — one extra import
  540,  // 8.  Step 2 — add to your dataset
  540,  // 9.  Step 3 — update your chart
  600,  // 10. Step 4 — check your insight (Comparison)
  600,  // 11. Reflection — right addition vs wrong
  540,  // 12. What would you track next?
  480,  // 13. Deliverable + Discord share
  360,  // 14. Closing
];
// 7440 - 12*20 - 30 = 7170 ≈ 239s ≈ 3:59

// ── Day C24 — Build Sprint: Dashboard v1 Upgrade (~4 min, 16 scenes) ──
export const DAYC24_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Framing — v0 was visibility, v1 is usability
  540,  // 3.  The clarity standard — 60-second decision test
  480,  // 4.  v0 vs v1 comparison
  600,  // 5.  Step 1: AI clarity check — the prompt
  480,  // 6.  Step 1 continued: reading and implementing suggestions
  600,  // 7.  Step 2: Improve layout — move most important chart up
  540,  // 8.  Step 2 continued: labels, context, decision sentence visible
  600,  // 9.  Step 3: Add one interaction — filter, dropdown, slicer
  480,  // 10. Step 3: when to skip it
  540,  // 11. Step 4: Second visualization — only if needed
  480,  // 12. Step 4: one chart, one question rule
  600,  // 13. Reflection — 60-second test
  540,  // 14. Reflection — what would you cut?
  540,  // 15. Deliverable + Discord share
  330,  // 16. Closing
];
// 7230 - 14*20 - 30 = 6920 ≈ 230s ≈ 3:50

// ── Day C25 — Portfolio + Career Translation (~2.5 min, 8 scenes) ──
export const DAYC25_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Framing — you built something, now explain it
  600,  // 3.  Why this matters — recruiter perspective
  540,  // 4.  Career switcher unlock — comparison
  600,  // 5.  Step 1: Describe your dashboard to AI
  540,  // 6.  Step 1 detail: four questions to answer
  660,  // 7.  Step 2: Skills translation prompt
  540,  // 8.  Hidden skills — what AI reveals
  600,  // 9.  Step 3: Write your 1-paragraph case study
  480,  // 10. Case study structure diagram
  600,  // 11. Reflection: what skill does this demonstrate?
  540,  // 12. Reflection: what problem + what insight
  480,  // 13. Deliverable — post your case study
  330,  // 14. Closing
];
// 7410 - 12*20 - 30 = 7140 ≈ 238s ≈ 3:58

// ── Day C26 — Ship: Publish + Showcase (~5 min, 17 scenes) ──
export const DAYC26_DURATIONS = [
  300,  // 1.  Title
  540,  // 2.  Hook — ten days ago you weren't a data person
  600,  // 3.  Callout — career switchers, entrepreneurs, non-technical builders
  600,  // 4.  Credibility — shipping separates learners from builders
  540,  // 5.  Compass — shipping creates something larger
  660,  // 6.  What you actually built + DataJourneyVisual
  600,  // 7.  The chain — Question → Data → Chart → Insight → Decision
  540,  // 8.  Most people skip — guess vs system comparison
  600,  // 9.  Why small ships matter — ship before it's perfect
  540,  // 10. Your dashboard doesn't need to be polished
  600,  // 11. Ship formats — PDF, Notion, Sheets, Discord, LinkedIn
  600,  // 12. What to include in your share
  660,  // 13. What shipping does for you — identity shift
  600,  // 14. A habit of clarity — the system compounds
  480,  // 15. Checkpoint
  480,  // 16. Outro
  330,  // 17. Closing
];
/// 9270 - 15*20 - 30 = 8940 ≈ 298s ≈ 4:58

// ── Day C27 — Weekly Habit System (~4 min, 15 scenes) ──
export const DAYC27_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Framing — project vs system (comparison)
  600,  // 3.  Why dashboards get abandoned
  480,  // 4.  Today's goal (split visual)
  600,  // 5.  Step 1: Describe workflow to AI
  600,  // 6.  Step 2: AI prompt
  480,  // 7.  Step 3: Three components diagram
  600,  // 8.  When — vague vs specific (comparison)
  540,  // 9.  What — three exact actions
  480,  // 10. Where — same environment
  540,  // 11. Step 4: Write it down
  600,  // 12. Reflection — failure modes
  540,  // 13. Reflection — minimum viable ritual
  480,  // 14. Deliverable + Discord share
  330,  // 15. Closing
];
// 7770 - 13*20 - 30 = 7480 ≈ 249s ≈ 4:09

// ── Day C28 — What's Next + Track Replay (~4.5 min, 17 scenes) ──
export const DAYC28_DURATIONS = [
  300,  // 1.  Title
  600,  // 2.  Hook — "Two weeks ago, you weren't a data person"
  540,  // 3.  What data literacy actually is
  600,  // 4.  Step 1 — Look at what you built + DataJourneyVisual
  540,  // 5.  You made that from nothing in fourteen days
  600,  // 6.  Step 2 — Reflect forward: Dashboard v2
  540,  // 7.  Step 2 — What other part of your life could you track?
  600,  // 8.  Step 2 — Which track would you run next?
  480,  // 9.  Comparison: Track A vs B vs C
  540,  // 10. Step 3 — One sentence capture
  600,  // 11. Reflection prompts: What was harder?
  540,  // 12. Reflection prompts: What was more useful?
  480,  // 13. What you'll do differently — next two weeks
  540,  // 14. Deliverable + Discord share
  600,  // 15. What you take with you — diagram
  480,  // 16. That's yours now
  360,  // 17. Final closing — Track C Complete
];
// 8400 - 15*20 - 30 = 8070 ≈ 269s ≈ 4:29

/** Compute total duration for a video given its scene durations. */
export function computeTotalDuration(durations: number[]): number {
  const sceneTotal = durations.reduce((a, b) => a + b, 0);
  const numTransitions = durations.length - 1;
  // All transitions are T except the last which is T_FINAL
  const overlap = (numTransitions - 1) * T + T_FINAL;
  return sceneTotal - overlap;
}
