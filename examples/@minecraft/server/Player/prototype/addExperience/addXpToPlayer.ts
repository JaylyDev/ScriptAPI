import { Player, world } from "@minecraft/server";

// Command equivalent to /xp player 100
function addExperience(player: Player) {
  const xpAdded = player.addExperience(100);
  console.log(`Player ${player.name} now has ${xpAdded} experience points.`);
}

for (const player of world.getPlayers()) {
  addExperience(player);
}