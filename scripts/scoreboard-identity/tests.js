import { world } from "@minecraft/server";
import createScoreboardIdentity from "./index";
const objective = world.scoreboard.addObjective("HelloWorld", "HelloWorld");
const participant = createScoreboardIdentity(objective, "My Helo");
console.warn(participant.displayName);
participant.removeFromObjective(objective);
