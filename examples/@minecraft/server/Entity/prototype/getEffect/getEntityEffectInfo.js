import { world } from "@minecraft/server";

const entities = world.getDimension('overworld').getEntities();
for (const entity of entities) {
  entity.getEffects().forEach(effect => {
    console.log(effect.typeId, effect.amplifier, effect.duration);
  })
}