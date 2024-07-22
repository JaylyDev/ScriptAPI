import { world } from "@minecraft/server";

for (const entity of world.getDimension('overworld').getEntities()) {
  const tags = entity.getTags();
  const jaylyTag = tags.find(tag => tag.startsWith('jayly:'));
  if (jaylyTag) {
    world.sendMessage(`${entity.id}: ${jaylyTag}`);
  }
}