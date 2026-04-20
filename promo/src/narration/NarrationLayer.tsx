import React from "react";
import { Audio, Sequence, staticFile } from "remotion";
import { SCENE_NARRATIONS, SCENE_COMPOSITION_OFFSETS } from "./narrationConfig";

export const NarrationLayer: React.FC = () => {
  return (
    <>
      {SCENE_NARRATIONS.map((scene, i) => {
        const startFrame =
          SCENE_COMPOSITION_OFFSETS[i] + scene.narrationStartFrame;
        return (
          <Sequence key={scene.sceneId} from={startFrame}>
            <Audio src={staticFile(`audio/${scene.sceneId}.mp3`)} />
          </Sequence>
        );
      })}
    </>
  );
};
