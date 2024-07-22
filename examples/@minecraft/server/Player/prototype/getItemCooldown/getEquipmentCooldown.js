import { world } from "@minecraft/server";

const player = world.getAllPlayers()[0];
const cooldown = player.getItemCooldown("equipment");
console.log(`Cooldown for the equipment category: ${cooldown} seconds.`);