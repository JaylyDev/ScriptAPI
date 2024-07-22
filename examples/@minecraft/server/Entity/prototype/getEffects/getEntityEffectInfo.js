import { world } from "@minecraft/server";
for (const entity of world.getDimension("overworld").getEntities()) {
  const effect = entity.getEffect("invisibility");
  effect.amplifier;
  effect.duration;
}
