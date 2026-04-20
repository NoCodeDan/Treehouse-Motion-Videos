export interface AgentSceneNarration {
  sceneId: string;
  text: string;
  narrationStartFrame: number;
}

export const AGENT_SCENE_NARRATIONS: AgentSceneNarration[] = [
  {
    sceneId: "agents-01-title",
    text: "The Complete Beginner's Guide to AI Agents. Everything you need to actually understand what agents are, how they work, and where to start.",
    narrationStartFrame: 35,
  },
  {
    sceneId: "agents-02-hook",
    text: `You've seen "AI agents" everywhere. Every startup is building one. Every LinkedIn post is hyping one. Every VC is throwing money at one. But ask most people what an AI agent actually is and you get one of two answers: a vague wave — "it's like, autonomous AI?" — or a technical word salad that tells you nothing useful. This is the guide I wish existed six months ago. By the end, you'll know exactly what agents are, how they actually work under the hood, what tools exist to build them, and which path makes sense for you specifically. No jargon walls. No fluff. Let's go.`,
    narrationStartFrame: 20,
  },
  {
    sceneId: "agents-03-what-is-agent",
    text: `What even is an AI agent? Here's the cleanest definition I've found: an AI agent is software that perceives input, reasons about it, takes actions, and keeps going until a goal is met — without you babysitting every step. That last part is the key. A regular chatbot answers your question and stops. An agent gets a goal, figures out how to achieve it, executes steps, handles surprises, and loops until it's done. Think of it like the difference between asking a temp worker to "write a summary of this document" — single task, done — versus hiring a junior researcher and saying "monitor competitors and send me a weekly brief" — ongoing, multi-step, handles new situations.`,
    narrationStartFrame: 20,
  },
  {
    sceneId: "agents-04-autonomy-spectrum",
    text: `The Autonomy Spectrum. It helps to think of AI capabilities as a dial: Copilot, Assistant, Agent, Autonomous Agent. Copilot — Suggests, you decide. GitHub Copilot autocompletes your code, but you still press Enter. You're driving. Assistant — Completes tasks on demand. ChatGPT answers your question, drafts your email. One input, one output. Still waiting for you each time. Agent — Executes multi-step workflows. You say "research my three main competitors and write a report." The agent searches the web, reads pages, synthesizes findings, writes the report, and saves it to Google Docs. You come back to a finished product. Autonomous Agent — Runs ongoing workflows without being asked. Monitors your inbox, triages emails, drafts replies to routine stuff, escalates urgent things, schedules meetings — all while you're doing something else. Most of what people are building right now lives in that "agent" zone. Fully autonomous is emerging but still being figured out.`,
    narrationStartFrame: 20,
  },
  {
    sceneId: "agents-05-agent-vs-prompt",
    text: `What actually makes it an agent vs. just a prompt? A prompt is: "Summarize this article." One input, one output. An agent is: "Monitor TechCrunch for AI agent articles, summarize the best ones, and post to Slack every morning." That requires searching, reading, deciding what's relevant, formatting, posting — and doing it again tomorrow. The difference is loops, tools, and memory. Agents can use external tools — search, APIs, files — remember what happened in previous steps, and keep running until the job is done.`,
    narrationStartFrame: 25,
  },
  {
    sceneId: "agents-06-three-way-compare",
    text: `Agents vs. Chatbots vs. Automation — the comparison that makes it click. Three things constantly get confused. Here's how to think about them. Static automation — Zapier, Make: If-then logic. When email arrives, add to spreadsheet. Works perfectly for predictable, structured inputs. Completely breaks when anything unexpected happens. Zapier doesn't think — it routes. Chatbots: Good at scripted conversation. "What are your hours?" — scripted answer. But ask it something off-script and it either fails or escalates to a human. No memory between sessions, usually. Can't take actions outside the chat. AI agents: Goal-oriented. Uses tools to interact with the world. Adapts when things don't go as planned. Has memory. Can spawn sub-agents for parallel work. Concrete example: customer support. Say a customer says "I ordered the wrong size and I'm really frustrated." Static chatbot: Tries to match a keyword, finds "order," routes to FAQ, fails. Customer rage-quits. AI-enhanced chatbot: Can understand the message but probably still follows a script. "Let me find your order..." and either completes a simple exchange or escalates. AI agent: Understands frustration, looks up the order in the database via API, processes the exchange, sends confirmation email, flags the account for a follow-up discount — all in one shot. At 3am.`,
    narrationStartFrame: 20,
  },
  {
    sceneId: "agents-07-zapier-vs-agent",
    text: `Zapier vs. an agent. Zapier is incredible for: "When I get an email from my accountant, save the attachment to Dropbox and add a row to my spreadsheet." That works because the inputs are predictable and the logic is simple. An agent is for: "Monitor my email, identify anything requiring a decision, draft appropriate replies for the routine stuff, and flag the things that need me." That requires judgment — understanding context, adapting to unexpected inputs, making decisions. Zapier can't do that. An agent can.`,
    narrationStartFrame: 25,
  },
  {
    sceneId: "agents-08-how-agents-work",
    text: "How Agents Actually Work. You don't need to become an engineer to understand this. But knowing the basic mechanics helps you build better agents and debug when things go wrong.",
    narrationStartFrame: 35,
  },
  {
    sceneId: "agents-09-react-loop",
    text: `The loop: Perceive, Reason, Act, Remember, Repeat. Every agent runs some version of this cycle. Perceive — Takes in input: your message, an email, a file, API data, a webpage. Reason — Uses an LLM like Claude or GPT-4o to figure out what to do next. Act — Calls a tool, writes a file, sends a message, queries a database. Observe — Sees what happened. Did the tool call succeed? What did it return? Remember — Updates what it knows based on results. Repeat — Goes back to step 2 until the goal is met. The dominant pattern for this is called ReAct — Reasoning plus Acting. Here's a simplified example of what's actually happening inside an agent doing a travel search. Thought: I need to find flights from NYC to LA for March 15. Action: search web "flights NYC to LA March 15 2026". Observation: Cheapest is $189 Delta at 7am. Thought: Check if user has flight preferences stored. Action: memory lookup "flight preferences". Observation: User prefers morning flights, window seat, no Spirit. Thought: Delta 7am fits all preferences. Present this. Action: reply "Found a great option: Delta 7am, $189..." The LLM is the brain. It reads everything, decides what to do next, calls a tool, sees the result, and continues reasoning. It's not magic — it's a very fast, very capable decision loop.`,
    narrationStartFrame: 20,
  },
  {
    sceneId: "agents-10-tools",
    text: `Tools and function calling. Without tools, an LLM is just a very smart text generator stuck inside its training data. With tools, it can search the web in real time, read and write files, call any API — Slack, Gmail, Salesforce, Stripe — anything with an API, run code, control browsers, even take screenshots. Here's how it works: you give the model a list of available tools with descriptions. When the model decides it needs one, it outputs a structured request — "call this function with these arguments." Your framework executes the function and hands the result back. The model uses that result to keep reasoning. This is why MCP — Model Context Protocol — is a big deal right now. Anthropic launched it as an open standard for connecting AI models to tools and data — think of it as "USB for AI." Instead of every tool needing custom integration with every model, one MCP server works with all compatible models. LangChain, CrewAI, AutoGen, Claude, OpenAI — they all support it now.`,
    narrationStartFrame: 20,
  },
  {
    sceneId: "agents-11-memory",
    text: `Memory types. One of the things that makes agents powerful is memory. But "memory" in agents means several different things. In-context memory — The current conversation. Fast, free, but disappears when the session ends. External/RAG — A database of documents the agent can query. Think "company knowledge base the agent can search." Persists forever. Requires setup — vector databases like Pinecone, Chroma, Weaviate. Episodic — Specific past events. "Last Tuesday you asked me about pricing." Configurable. Semantic — Abstract facts about you or the world. "Dan prefers concise replies." Persists. Most production agents need both in-context memory for the current task and external memory for persistent knowledge. In-context alone means every session starts from scratch — fine for one-off tasks, useless for a personal assistant that should know you.`,
    narrationStartFrame: 20,
  },
  {
    sceneId: "agents-12-multi-agent",
    text: `Multi-agent systems. As tasks get complex, single agents hit limits. The solution: multiple specialized agents working together. A common pattern is an orchestrator — a manager — that receives the goal and delegates to specialist sub-agents. Orchestrator breaks down goal, assigns work. Research Agent searches, reads, extracts. Writer Agent drafts based on research. QA Agent reviews and improves. This is how frameworks like CrewAI are designed. You define "crews" of agents with specific roles, and they tackle complex tasks together. 100,000+ developers have gotten certified on CrewAI's platform — it's become the standard for Python-based multi-agent systems.`,
    narrationStartFrame: 20,
  },
  {
    sceneId: "agents-13-building-intro",
    text: "The Different Ways to Build One. Here's the honest breakdown of every building approach, who it's for, and when to use it.",
    narrationStartFrame: 35,
  },
  {
    sceneId: "agents-14-nocode",
    text: `No-code / Low-code: n8n, Relevance AI, Voiceflow, Botpress, Flowise. If you've never written code and want to build an agent, this is your lane. Visual drag-and-drop builders. You connect blocks — trigger, AI step, action, output — without touching code. Best tools: n8n — Open source workflow automation with AI nodes. Most powerful free option. Self-hostable. Relevance AI — Purpose-built for multi-agent workflows. No code, but genuinely sophisticated. Voiceflow — Best for customer-facing conversational agents. Botpress — Good free tier, built for chatbots with AI escalation. Flowise — Visual LangChain builder. Self-hostable. Who it's for: Business owners, marketers, non-technical founders. You want results without engineering a system from scratch. Honest limitation: You'll hit ceilings. Complex reasoning, custom integrations, or anything requiring real business logic will push you toward code. But for 80% of use cases, no-code is completely fine.`,
    narrationStartFrame: 25,
  },
  {
    sceneId: "agents-15-prompt-based",
    text: `Prompt-based quasi-agents: Claude Projects, ChatGPT GPTs, Gemini Gems. Not technically "agents" in the full sense, but more powerful than people realize. You give the AI persistent instructions, a persona, a knowledge base, and sometimes basic tool access. A well-built Claude Project with clear instructions, relevant documents, and specific capabilities can handle a huge amount of work. The limitation is it's still somewhat constrained — you're working within the platform's tool set, not building custom tools. Best for: Personal productivity workflows, content creators, quick internal tools. Setup time: Minutes. Seriously.`,
    narrationStartFrame: 25,
  },
  {
    sceneId: "agents-16-vibe-coding",
    text: `Vibe coding: Lovable, Bolt, Cursor, V0, Replit Agent. Andrej Karpathy coined the term in February 2025 and it took off fast. The idea: describe what you want in plain English, AI generates the actual code, you iterate through conversation. This unlocked something real for non-technical founders. Lovable hit 8 million users and $200M ARR. Bolt hit $40M ARR in 5 months. What this means for agents: You can now build a custom agent-powered app — with real authentication, a database, an API layer — without being a developer. You describe the agent's behavior, the app's interface, what it should do, and the tool builds it. Best tools: Lovable — Best for non-technical founders building full SaaS apps. Bolt — Most affordable entry for full-stack. Cursor — Best if you're already a developer and want to go 10x faster. V0 — Best for frontend/UI. Reality check: Complex custom logic still takes iteration. But as a starting point for building real agent-powered products? Game-changing.`,
    narrationStartFrame: 25,
  },
  {
    sceneId: "agents-17-frameworks",
    text: `Framework-based: Python — LangChain, CrewAI, AutoGen, LangGraph. Maximum control, maximum flexibility, maximum setup required. You're writing Python code that defines how your agents behave, what tools they have, how they coordinate. When to go this route: When no-code tools can't do what you need. When you're deploying to production at scale. When you need custom integrations with internal systems. When you're a developer who wants full control. Top frameworks: LangChain/LangGraph — The largest ecosystem. Most tutorials reference LangChain. LangGraph adds stateful graph-based workflows for complex orchestration. CrewAI — Best for multi-agent crews with clear roles. Intuitive role-based design. Huge community. AutoGen from Microsoft — Specializes in conversational multi-agent patterns. Strong for code-heavy workflows. Learning curve: Real. But the community resources are excellent.`,
    narrationStartFrame: 25,
  },
  {
    sceneId: "agents-18-personal-os",
    text: `Personal agent OS: OpenClaw. This is the category that most people don't know about, and it's the most interesting one. OpenClaw is open-source infrastructure you install on your own machine — a Mac mini, a Raspberry Pi, a VPS — that turns an AI model into a persistent, proactive personal agent. It connects to your messaging platforms — Discord, Telegram, WhatsApp — has permanent memory — it knows your projects, preferences, calendar, files — runs 24/7, proactively checks things on your behalf, and can spawn specialized sub-agents for tasks like coding. It's not a SaaS product. It's infrastructure. Think of it as building your own AI chief of staff that lives on your hardware and never forgets anything.`,
    narrationStartFrame: 25,
  },
  {
    sceneId: "agents-19-platform-table",
    text: `Platform-by-Platform Breakdown. Claude Projects — Prompt-based, no skill needed, $20/mo Pro. Best for quick personal agents. ChatGPT GPTs — Prompt-based, no skill needed, $20/mo Plus. Best for fast no-code agents. n8n — No-code, low skill, free self-host, $20/mo cloud. Best for automation and workflows. Botpress — No-code, low skill, $79/mo paid. Best for customer chatbots. Voiceflow — No-code, low skill, about $50/user/mo. Best for conversation design. Relevance AI — No-code, low skill, about $199/mo. Best for AI agent teams. Flowise — Low-code, low skill, free self-host, $35/mo cloud. Best for LangChain visually. Lovable — Vibe coding, $20/mo. Best for full-stack apps. Bolt — Vibe coding, $10/mo. Best for fast prototyping. Cursor — Vibe coding, high skill, $20/mo. Best for dev acceleration. LangChain/LangGraph — Framework, high skill, free open source. Best for custom Python agents. CrewAI — Framework, high skill, free open source. Best for multi-agent crews. OpenClaw — Personal OS, medium skill, free open source. Best for 24/7 personal agent.`,
    narrationStartFrame: 20,
  },
  {
    sceneId: "agents-20-selfhost-vs-managed",
    text: `Self-Hosting vs. Managed: The Real Tradeoffs. Go self-hosted when: Privacy isn't negotiable. Query volume is high enough that API costs become painful. You want to use open-source local models — Llama, Mistral, Qwen via Ollama. You're building for the long haul and want to control your stack. Go managed when: You need the best models right now — GPT-4o, Claude Sonnet, Gemini 2.5 — these aren't self-hostable. You want to ship fast without thinking about servers. Enterprise compliance requirements. You're non-technical or just time-constrained. The hybrid sweet spot: Self-host n8n or Flowise for your automation logic. Use managed API calls to Claude or GPT-4o for the reasoning brain. Use Ollama locally for speed-sensitive or privacy-critical tasks.`,
    narrationStartFrame: 25,
  },
  {
    sceneId: "agents-21-usecases-creators",
    text: `Use Cases by Persona: Content Creators and Solopreneurs. Content Creators — You're sitting on a goldmine of workflow automation. Three to build right now: Content repurposing agent — Write one piece of long-form content. Agent automatically creates a Twitter thread, LinkedIn post, Instagram caption, and email teaser. One input, five outputs. YouTube to SEO blog agent — Paste your video transcript. Agent extracts key points, generates an SEO-optimized blog post, and saves to your CMS draft. Performance analysis loop — Agent monitors engagement metrics across platforms and sends you a weekly brief. Solopreneurs — Agents are a staff augmentation play. Meeting prep agent — 30 minutes before each calendar event, agent researches the attendee and sends a briefing. Inbox triage agent — Reads email, categorizes by urgency, drafts responses for routine things. Lead qualification agent — New lead comes in, agent researches their company, scores against your ICP, and drafts a personalized intro.`,
    narrationStartFrame: 20,
  },
  {
    sceneId: "agents-22-usecases-builders",
    text: `No-Code Builders — Your advantage is speed. Customer support bot — Connects to your FAQ docs and product knowledge base. Handles 80% of common questions. Builds in n8n or Botpress in an afternoon. Invoice processing agent — Receives invoice emails, extracts data, logs to spreadsheet, sends payment reminders. Review response agent — Monitors Google and Yelp for new reviews, drafts contextually appropriate responses. Developers — The bigger opportunity is workflows that compound. AI code review pipeline — Agent reviews every PR for bugs, style issues, security vulnerabilities. Error to fix to PR agent — Sentry webhook fires, agent reads the stack trace, proposes a fix, and opens a draft PR. Docs agent — Reads codebase changes on every commit, updates relevant documentation automatically.`,
    narrationStartFrame: 20,
  },
  {
    sceneId: "agents-23-usecases-marketers",
    text: `Marketers — Data is everywhere, synthesis is the bottleneck. Competitive intelligence agent — Monitors competitor websites, LinkedIn posts, product launch announcements, and job postings. Weekly digest with what changed and why it matters. Campaign analysis agent — Pulls data from your ad platforms, synthesizes cross-channel performance, identifies what's working, and writes an optimization brief. Personalized outreach agent — Takes your prospect list, researches each one, writes personalized first-line outreach for each. Instacart used this pattern and doubled new meetings booked without adding headcount.`,
    narrationStartFrame: 20,
  },
  {
    sceneId: "agents-24-decision-tree",
    text: `Where to Start: The Decision Tree. Answer these three questions and follow the path. Question 1: Can you code? If no, go to Question 2. If yes, start with LangChain plus Claude API for full control, or Cursor plus Claude Code for coding-specific work. Question 2: Do you need a custom app, or are you connecting existing tools? Connecting existing tools — start with n8n, self-hosted free, the most powerful option. Building a new app — go to Question 3. Question 3: Do you want to ship something real, or explore quickly? Explore quickly — Claude Projects or ChatGPT GPTs. Ship something real — Lovable or Base44. The path I'd recommend for most people starting from zero: Spend 1 week with Claude Projects. Build a simple agent. See how it fails. Move to n8n for your first real automation. Once you have a real problem to solve, pick the right tool for that problem.`,
    narrationStartFrame: 20,
  },
  {
    sceneId: "agents-25-mistakes",
    text: `Common Mistakes and How to Avoid Them. Giving agents vague goals — "Improve my marketing" is not a goal. Agents need specificity. Skipping the manual walkthrough — Before automating anything, do it manually 3-5 times. Document every step. Infinite loops and cost blowouts — Always set explicit stopping conditions and cost alerts. Trusting too much, too fast — Start with the agent drafting, you reviewing. Ignoring failure modes — Build for failure. Every production agent needs retry logic, fallbacks, and error logging. Prompt injection — If your agent reads untrusted content, that content could contain malicious instructions. Separate trusted from untrusted inputs. Skipping observability — Production agents need logs. Set up logging before you deploy.`,
    narrationStartFrame: 20,
  },
  {
    sceneId: "agents-26-future",
    text: `Where This Is All Going. MCP becomes the universal layer — connecting a new tool to any agent will be as easy as installing an app. Agentic software becomes the default — software is being designed agent-first. Swarms get practical — multi-agent systems where dozens of specialized agents work in parallel will become normal. Personal AI agents for everyone — what OpenClaw does today for technical users will become accessible to non-technical users in the next 1-2 years. Guardian agents emerge — agents watching the agents for safety and compliance. The market numbers back the trajectory: AI agents were a $5.4B market in 2024. Projections put it at $47B by 2030. 40% of enterprise apps will include task-specific AI agents by end of 2026.`,
    narrationStartFrame: 20,
  },
  {
    sceneId: "agents-27-closing",
    text: `The One Thing to Take Away. Every agent is just software that can reason about what to do next and take action without waiting for you to tell it each step. The leverage is real. The tools are here. Pick one workflow you do manually and repeatedly. Map every step. Find the tool that fits your skill level. Build the simplest version that actually works. Then expand from there. Start small. Start now. The people figuring this out in 2026 will have a serious edge in everything they do.`,
    narrationStartFrame: 35,
  },
  {
    sceneId: "agents-28-cta",
    text: "Learn to build AI agents at teamtreehouse.com.",
    narrationStartFrame: 50,
  },
];

// Scene durations in frames at 30fps
// Calibrated from actual ElevenLabs narration durations + 60 frame buffer for animations
export const AGENT_SCENE_DURATIONS: number[] = [
  267,   // 01 title (6.9s + buffer)
  1019,  // 02 hook (32.0s + buffer)
  1219,  // 03 what-is-agent (38.6s + buffer)
  1928,  // 04 autonomy-spectrum (62.3s + buffer)
  1038,  // 05 agent-vs-prompt (32.6s + buffer)
  2673,  // 06 three-way-compare (87.1s + buffer)
  1001,  // 07 zapier-vs-agent (31.4s + buffer)
  312,   // 08 how-agents-work (8.4s + buffer)
  2751,  // 09 react-loop (89.7s + buffer)
  1814,  // 10 tools (58.5s + buffer)
  1618,  // 11 memory (52.0s + buffer)
  1312,  // 12 multi-agent (41.7s + buffer)
  245,   // 13 building-intro (6.2s + buffer)
  2042,  // 14 nocode (66.1s + buffer)
  1233,  // 15 prompt-based (39.1s + buffer)
  2035,  // 16 vibe-coding (65.9s + buffer)
  1783,  // 17 frameworks (57.4s + buffer)
  1316,  // 18 personal-os (41.9s + buffer)
  2478,  // 19 platform-table (80.6s + buffer)
  1435,  // 20 selfhost-vs-managed (45.8s + buffer)
  1939,  // 21 usecases-creators (62.6s + buffer)
  1613,  // 22 usecases-builders (51.8s + buffer)
  1107,  // 23 usecases-marketers (34.9s + buffer)
  1663,  // 24 decision-tree (53.5s + buffer)
  1577,  // 25 mistakes (50.6s + buffer)
  1457,  // 26 future (46.6s + buffer)
  929,   // 27 closing (29.0s + buffer)
  142,   // 28 cta (2.7s + buffer)
];

const T = 20; // standard transition duration in frames

// Calculate absolute frame offsets accounting for transition overlaps
export const AGENT_SCENE_COMPOSITION_OFFSETS: number[] = (() => {
  const offsets: number[] = [0];
  for (let i = 1; i < AGENT_SCENE_DURATIONS.length; i++) {
    offsets.push(offsets[i - 1] + AGENT_SCENE_DURATIONS[i - 1] - T);
  }
  return offsets;
})();

// Total duration: sum of durations minus transition overlaps
export const AGENT_TOTAL_DURATION =
  AGENT_SCENE_DURATIONS.reduce((a, b) => a + b, 0) -
  T * (AGENT_SCENE_DURATIONS.length - 1);
