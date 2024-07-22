import { world } from "@minecraft/server";

for (const entity of world.getDimension('overworld').getEntities()) {
  const components = entity.getComponents();
  console.log(`Number of components: ${components.length}: ${components.map(component => component.typeId)}`);
}