// Author: bot174 <https://github.com/bot174>
// Project: https://github.com/bot174/ScriptAPI
import { world, ScoreboardObjective } from "@minecraft/server";
import { MinecraftDimensionTypes } from "@minecraft/vanilla-data";

function createScoreboardIdentity (objective: ScoreboardObjective, displayName: string) {
  world.getDimension(MinecraftDimensionTypes.Overworld).runCommand(`scoreboard players add "${displayName}" "${objective.id}" 0`);
  const participant = objective.getParticipants().find(participant => participant.displayName === displayName);
  return participant;
};

export default createScoreboardIdentity;
