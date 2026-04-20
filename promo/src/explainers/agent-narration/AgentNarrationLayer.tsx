import React from "react";
import { Audio, Sequence, staticFile } from "remotion";
import {
  AGENT_SCENE_NARRATIONS,
  AGENT_SCENE_COMPOSITION_OFFSETS,
} from "./agentNarrationConfig";

export const AgentNarrationLayer: React.FC = () => {
  return (
    <>
      {AGENT_SCENE_NARRATIONS.map((scene, i) => {
        const startFrame =
          AGENT_SCENE_COMPOSITION_OFFSETS[i] + scene.narrationStartFrame;
        return (
          <Sequence key={scene.sceneId} from={startFrame}>
            <Audio src={staticFile(`audio/agents/${scene.sceneId}.mp3`)} />
          </Sequence>
        );
      })}
    </>
  );
};
