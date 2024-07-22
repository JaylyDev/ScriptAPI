import { Player, world } from "@minecraft/server";

// Command equivalent to /xp player 5L
function addLevels(player: Player) {
  const levels = player.addLevels(5);
  console.log(`Player ${player.name} now has ${levels} levels.`);
}
