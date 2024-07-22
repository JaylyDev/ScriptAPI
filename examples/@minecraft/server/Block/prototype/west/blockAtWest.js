import { world } from "@minecraft/server";

// Block at (0, 0, 0)
const block = world.getDimension("overworld").getBlock({ x: 0, y: 0, z: 0 });
const blockAtWest = block.west(10);
