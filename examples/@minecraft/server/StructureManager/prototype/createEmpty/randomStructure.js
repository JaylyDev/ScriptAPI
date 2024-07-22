import { BlockPermutation, StructureSaveMode, world } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
const structure = world.structureManager.createEmpty('mystructure:random', { x: 10, y: 10, z: 10 }, StructureSaveMode.World);
const concretes = [
  MinecraftBlockTypes.RedConcrete,
  MinecraftBlockTypes.YellowConcrete,
  MinecraftBlockTypes.BlueConcrete,
];

for (let x = 0; x < 10; x++) {
  for (let y = 0; y < 10; y++) {
    for (let z = 0; z < 10; z++) {
      const permutation = BlockPermutation.resolve(concretes[Math.floor(Math.random() * concretes.length)]);
      structure.setBlockPermutation({x, y, z}, permutation);
    }
  }  
}
// Run this command: /structure load mystructure:empty ~ ~ ~