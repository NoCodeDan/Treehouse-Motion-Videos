import "dotenv/config";
import { ElevenLabsClient } from "elevenlabs";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AUDIO_DIR = path.join(__dirname, "..", "public", "audio", "agents");
const force = process.argv.includes("--force");

const apiKey = process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
  console.error("Missing ELEVENLABS_API_KEY in .env");
  process.exit(1);
}

const client = new ElevenLabsClient({ apiKey });
fs.mkdirSync(AUDIO_DIR, { recursive: true });

// Generate 10 x 22s segments to cover ~30 min of video
const SEGMENTS = [
  {
    id: "bg-music-1",
    text: "Subtle upbeat corporate background music, light and optimistic, gentle electronic beat with soft synth pads, suitable for a tech explainer video, minimal and clean",
    duration: 22,
  },
  {
    id: "bg-music-2",
    text: "Continuation of subtle upbeat corporate background music, light electronic beat, optimistic and inspiring tone, soft synth melody, tech explainer style",
    duration: 22,
  },
  {
    id: "bg-music-3",
    text: "Subtle upbeat corporate background music, building energy, light electronic beat with gentle percussion, optimistic and motivating, tech explainer style",
    duration: 22,
  },
  {
    id: "bg-music-4",
    text: "Subtle upbeat corporate background music, warm and steady, light electronic beat with ambient pads, educational video style",
    duration: 22,
  },
  {
    id: "bg-music-5",
    text: "Subtle upbeat corporate background music, gentle build, light electronic beat, soft piano accents, optimistic tone, tech explainer style",
    duration: 22,
  },
  {
    id: "bg-music-6",
    text: "Subtle upbeat corporate background music, steady groove, light electronic beat with soft strings, positive and encouraging, educational style",
    duration: 22,
  },
  {
    id: "bg-music-7",
    text: "Subtle upbeat corporate background music, light electronic beat, rising energy, soft synth arpeggios, tech product demo style",
    duration: 22,
  },
  {
    id: "bg-music-8",
    text: "Subtle upbeat corporate background music, mellow section, light electronic beat with ambient textures, reflective and warm, educational video style",
    duration: 22,
  },
  {
    id: "bg-music-9",
    text: "Subtle upbeat corporate background music, building toward finale, light electronic beat with gentle drums, optimistic and inspiring, tech explainer style",
    duration: 22,
  },
  {
    id: "bg-music-10",
    text: "Subtle upbeat corporate background music reaching a gentle climax then winding down, light electronic beat, optimistic and inspiring finale, tech explainer style",
    duration: 22,
  },
];

async function generateSegment(segment: (typeof SEGMENTS)[number]) {
  const outPath = path.join(AUDIO_DIR, `${segment.id}.mp3`);

  if (!force && fs.existsSync(outPath)) {
    console.log(`  Skipping ${segment.id} (already exists)`);
    return;
  }

  console.log(`  Generating ${segment.id} (${segment.duration}s)...`);

  const audioStream = await client.textToSoundEffects.convert({
    text: segment.text,
    duration_seconds: segment.duration,
    prompt_influence: 0.4,
    output_format: "mp3_44100_128",
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
    `Generating ${SEGMENTS.length} background music segments for AI Agents explainer...`
  );
  if (force) console.log("  (--force: regenerating all)");

  for (const segment of SEGMENTS) {
    await generateSegment(segment);
  }

  console.log("Done! Background music segments saved to public/audio/agents/");
}

main().catch((err) => {
  console.error("Error generating music:", err);
  process.exit(1);
});
