import { world } from "@minecraft/server";

const money = world.scoreboard.getObjective("money");
const player = world.getPlayers()[0];
money.setScore(player, 0);
player.sendMessage(`Your score has been reset.`);