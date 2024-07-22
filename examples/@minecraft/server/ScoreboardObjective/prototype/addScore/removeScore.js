import { world } from "@minecraft/server";

const money = world.scoreboard.getObjective("money");
const player = world.getPlayers()[0];
const currentScore = money.addScore(player, -100);
player.sendMessage(`Your current score is ${currentScore}`);