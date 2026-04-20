import React from "react";
import { Audio, Sequence, staticFile } from "remotion";

const SEGMENT_DURATION_FRAMES = 22 * 30; // 22s at 30fps = 660 frames
const MUSIC_VOLUME = 0.15; // Subtle behind narration

const SEGMENTS = [
  "audio/bg-music-1.mp3",
  "audio/bg-music-2.mp3",
  "audio/bg-music-3.mp3",
  "audio/bg-music-4.mp3",
];

export const BackgroundMusic: React.FC = () => {
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
