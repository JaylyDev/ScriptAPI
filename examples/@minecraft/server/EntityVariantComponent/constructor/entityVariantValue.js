import { world } from "@minecraft/server";

for (const entity of world.getDimension("overworld").getEntities()) {
  const variant = entity.getComponent("variant");
  if (!variant) continue;
  variant.value;
  variant.isValid();
}
