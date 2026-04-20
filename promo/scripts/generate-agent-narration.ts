import "dotenv/config";
import { ElevenLabsClient } from "elevenlabs";
import { AGENT_SCENE_NARRATIONS } from "../src/explainers/agent-narration/agentNarrationConfig";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AUDIO_DIR = path.join(__dirname, "..", "public", "audio", "agents");
const force = process.argv.includes("--force");

const apiKey = process.env.ELEVENLABS_API_KEY;
const voiceId = process.env.ELEVENLABS_VOICE_ID;

if (!apiKey) {
  console.error("Missing ELEVENLABS_API_KEY in .env");
  process.exit(1);
}
if (!voiceId) {
  console.error("Missing ELEVENLABS_VOICE_ID in .env");
  process.exit(1);
}

const client = new ElevenLabsClient({ apiKey });

fs.mkdirSync(AUDIO_DIR, { recursive: true });

async function generateScene(sceneId: string, text: string) {
  const outPath = path.join(AUDIO_DIR, `${sceneId}.mp3`);

  if (!force && fs.existsSync(outPath)) {
    console.log(`  Skipping ${sceneId} (already exists)`);
    return;
  }

  console.log(`  Generating ${sceneId}...`);

  const audioStream = await client.textToSpeech.convert(voiceId!, {
    text,
    model_id: "eleven_multilingual_v2",
    output_format: "mp3_44100_128",
    voice_settings: {
      stability: 0.65,
      similarity_boost: 0.75,
    },
  });

  const chunks: Buffer[] = [];
  for await (const chunk of audioStream) {
    chunks.push(Buffer.from(chunk));
  }
  fs.writeFileSync(outPath, Buffer.concat(chunks));

  console.log(`  Saved ${outPath}`);
}

async function main() {
  console.log(
    `Generating narration for ${AGENT_SCENE_NARRATIONS.length} AI Agents scenes...`
  );
  if (force) console.log("  (--force: regenerating all)");

  for (const scene of AGENT_SCENE_NARRATIONS) {
    await generateScene(scene.sceneId, scene.text);
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error("Error generating narration:", err);
  process.exit(1);
});
