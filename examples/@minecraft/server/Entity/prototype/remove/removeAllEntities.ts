import { world } from "@minecraft/server";

// Note: You cannot despawn players via entity.remove()
const entities = world.getDimension('overworld').getEntities({ excludeTypes: ['minecraft:player']});

for (const entity of entities) {
  entity.remove()
}