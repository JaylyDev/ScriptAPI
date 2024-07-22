import { world } from "@minecraft/server";

for (const entity of world.getDimension("overworld").getEntities()) {
  const flyingSpeed = entity.getComponent("flying_speed");
  flyingSpeed.value;
}
