import { world } from "@minecraft/server";

world.structureManager.getWorldStructureIds().forEach((id) => {
  const structure = world.structureManager.get(id);
  structure.isValid();
});