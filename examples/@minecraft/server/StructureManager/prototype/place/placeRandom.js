import { world, StructureAnimationMode } from "@minecraft/server";

// Get structure from code example 'random_structure.js' @ StructureManager::createEmpty
const structure = world.structureManager.get('mystructure:random');
const player = world.getPlayers()[0];
world.structureManager.place(structure, player.dimension, player.location, { animationMode: StructureAnimationMode.Blocks, animationSeconds: 15 });