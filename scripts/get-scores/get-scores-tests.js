import { getScore, getScores } from "./index.js";
import { world } from "mojang-minecraft";

let player = [...world.getPlayers()][0];

getScores(player);

getScore(player, "myObjective");
