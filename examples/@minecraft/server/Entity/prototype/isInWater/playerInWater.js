import { system, world } from "@minecraft/server";

system.runInterval(() => {
  for (const player of world.getAllPlayers()) {
    player.sendMessage(`player in water: ${player.isInWater}`);
  }
});