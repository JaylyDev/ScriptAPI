import { world, system, Entity } from "@minecraft/server";

const eventId = "minecraft:entity_spawned"

system.runInterval(() => {
  for (let player of world.getAllPlayers()) {
    let [entityRaycaseHit] = player.getEntitiesFromViewDirection({ maxDistance: 150 });
    if (!entityRaycaseHit) continue;
    let entity = entityRaycaseHit.entity;

    if (entity?.typeId === "minecraft:sheep") {
      listenTo(entity);
      entity.triggerEvent(eventId)
    }
  }
});

function listenTo(entity: Entity) {
  const callback = world.afterEvents.dataDrivenEntityTrigger.subscribe((data) => {
    world.afterEvents.dataDrivenEntityTrigger.unsubscribe(callback);

    data.getModifiers().forEach((modifier) => {
      console.log('ComponentGroupsToAdd:', modifier.addedComponentGroups);
      console.log('ComponentGroupsToRemove:', modifier.removedComponentGroups);
      console.log('Triggers:', modifier.triggers);
    });
  }, { entities: [entity], eventTypes: [eventId] });
};