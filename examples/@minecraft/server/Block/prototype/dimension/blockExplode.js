import { world } from "@minecraft/server";

// Block explodes when player break block
world.afterEvents.playerBreakBlock.subscribe((event) => {
  event.block.dimension.createExplosion(event.block.location, 1);
})