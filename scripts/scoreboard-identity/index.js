// Script example for ScriptAPI
// Author: bot174 <https://github.com/bot174>
// Project: https://github.com/bot174/ScriptAPI
import { world, MinecraftDimensionTypes } from "@minecraft/server";
function createScoreboardIdentity(objective, displayName) {
    world.getDimension(MinecraftDimensionTypes.overworld).runCommand(`scoreboard players add "${displayName}" "${objective.id}" 0`);
    const participant = objective.getParticipants().find(participant => participant.displayName === displayName);
    return participant;
}
;
export default createScoreboardIdentity;
