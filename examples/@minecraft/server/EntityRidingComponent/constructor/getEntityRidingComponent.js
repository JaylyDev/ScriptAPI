import { world } from "@minecraft/server";

for (const entity of world.getDimension("overworld").getEntities()) {
  const riding = entity.getComponent("riding");
  if (!riding) continue;
  riding.entityRidingOn;
  riding.isValid();
}
