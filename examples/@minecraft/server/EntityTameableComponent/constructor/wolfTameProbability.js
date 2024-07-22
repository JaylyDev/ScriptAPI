import { world } from "@minecraft/server";

const wolf = world.getDimension("overworld").spawnEntity("minecraft:wolf", { x: 0, y: 0, z: 0 });
const tameable = wolf.getComponent("tameable");
tameable.probability;
tameable.tame(world.getAllPlayers()[0]);
