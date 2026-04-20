import "dotenv/config";
import { ElevenLabsClient } from "elevenlabs";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AUDIO_DIR = path.join(__dirname, "..", "public", "audio");
const force = process.argv.includes("--force");

const apiKey = process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
  console.error("Missing ELEVENLABS_API_KEY in .env");
  process.exit(1);
}

const client = new ElevenLabsClient({ apiKey });
fs.mkdirSync(AUDIO_DIR, { recursive: true });

// Generate 4 x 22s segments to cover ~79s of video
const SEGMENTS = [
  {
    id: "bg-music-1",
    text: "Subtle upbeat corporate background music, light and optimistic, gentle electronic beat with soft synth pads, suitable for a tech promo video, minimal and clean",
    duration: 22,
  },
  {
    id: "bg-music-2",
    text: "Continuation of subtle upbeat corporate background music, light electronic beat, optimistic and inspiring tone, soft synth melody, tech promo style",
    duration: 22,
  },
  {
    id: "bg-music-3",
    text: "Subtle upbeat corporate background music, building energy, light electronic beat with gentle percussion, optimistic and motivating, tech promo style",
    duration: 22,
  },
  {
    id: "bg-music-4",
    text: "Subtle upbeat corporate background music reaching a gentle climax then winding down, light electronic beat, optimistic and inspiring finale, tech promo style",
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
  console.log(`Generating ${SEGMENTS.length} background music segments...`);
  if (force) console.log("  (--force: regenerating all)");

  for (const segment of SEGMENTS) {
    await generateSegment(segment);
  }

  console.log("Done! Background music segments saved to public/audio/");
}

main().catch((err) => {
  console.error("Error generating music:", err);
  process.exit(1);
});
