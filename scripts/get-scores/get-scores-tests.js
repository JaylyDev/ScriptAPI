import { getScore, getScores } from "./index.js";
import { world } from "@minecraft/server";

let player = [...world.getPlayers()][0];

getScores(player);

getScore(player, "myObjective");
