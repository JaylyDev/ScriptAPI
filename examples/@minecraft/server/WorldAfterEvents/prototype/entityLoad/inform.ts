import { world } from "@minecraft/server";

// Subscribe to the EntityLoadAfterEvent
const entityLoadSubscription = world.afterEvents.entityLoad.subscribe((event) => {
  // Handle the entity load event
  world.sendMessage(`Entity loaded: ${event.entity.typeId}`);
  // Unsubscribe so the message doesn't appear after fired
  world.afterEvents.entityLoad.unsubscribe(entityLoadSubscription);
  
});
