import React from "react";
import { Audio, Sequence, staticFile } from "remotion";

const SEGMENT_DURATION_FRAMES = 22 * 30; // 22s at 30fps = 660 frames
const MUSIC_VOLUME = 0.12; // Subtle behind narration

// 10 segments to cover ~30 min of video (220s per loop = 3.67 min, x ~8 loops)
const SEGMENTS = [
  "audio/agents/bg-music-1.mp3",
  "audio/agents/bg-music-2.mp3",
  "audio/agents/bg-music-3.mp3",
  "audio/agents/bg-music-4.mp3",
  "audio/agents/bg-music-5.mp3",
  "audio/agents/bg-music-6.mp3",
  "audio/agents/bg-music-7.mp3",
  "audio/agents/bg-music-8.mp3",
  "audio/agents/bg-music-9.mp3",
  "audio/agents/bg-music-10.mp3",
];

export const AgentBackgroundMusic: React.FC = () => {
  return (
    <>
      {SEGMENTS.map((file, i) => (
        <Sequence key={file} from={i * SEGMENT_DURATION_FRAMES}>
          <Audio src={staticFile(file)} volume={MUSIC_VOLUME} />
        </Sequence>
      ))}
    </>
  );
};
