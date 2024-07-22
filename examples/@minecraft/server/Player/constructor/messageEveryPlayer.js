import { world } from "@minecraft/server";

for (const player of world.getAllPlayers()) {
  player.sendMessage(`Hello, ${player.name}!`);
}