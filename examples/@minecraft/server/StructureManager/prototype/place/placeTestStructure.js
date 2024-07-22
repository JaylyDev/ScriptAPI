import { world } from "@minecraft/server";
const player = world.getPlayers()[0];
world.structureManager.place('mystructure:test', player.dimension, player.location)