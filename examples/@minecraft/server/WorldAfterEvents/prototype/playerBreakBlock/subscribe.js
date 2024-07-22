import { world } from "@minecraft/server";

world.afterEvents.playerBreakBlock.subscribe((event) => {
  const { brokenBlockPermutation, player } = event;

  if (brokenBlockPermutation.type.id === "minecraft:grass") {
    player.sendMessage("You broke a grass block!");
  }

  if (brokenBlockPermutation.type.id === "minecraft:stone") {
    player.sendMessage("You broke a stone block!");
  }
});