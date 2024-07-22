import { world } from "@minecraft/server";

for (const entity of world.getDimension('overworld').getEntities()) {
  entity.clearDynamicProperties();
}
