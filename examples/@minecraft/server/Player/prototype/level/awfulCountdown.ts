import { Player, system, world } from "@minecraft/server";

function countdownFromTen(player:Player) {
  player.addLevels(-10000);
  player.addLevels(11);
  const id = system.runInterval(() => {
    player.addExperience(Math.round(-player.totalXpNeededForNextLevel / 10));
    if (player.getTotalXp() === 0) {
      system.clearRun(id);
    }
    if (player.xpEarnedAtCurrentLevel == 0) {
      player.addLevels(-1);
      player.addExperience(player.totalXpNeededForNextLevel - 1);
    }
  }, 2);
}
for (const player of world.getPlayers()) {
  countdownFromTen(player);
}