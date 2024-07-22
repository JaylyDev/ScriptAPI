import { world } from "@minecraft/server";

const healthChangedSubscription = world.afterEvents.entityHealthChanged.subscribe(
    (event) => {
        console.log("Entity:", event.entity);
        console.log("Old Health:", event.oldValue);
        console.log("New Health:", event.newValue);

        // Your custom handling for entity health change event
        // Example: Display a message, update UI, etc.
    },
    {
        // Optionally provide EntityEventOptions to filter entities or entity types
        entities: [/* Array of specific Entity instances */],
        entityTypes: ["minecraft:player", "minecraft:zombie"], // Array of entity type IDs
    }
);

// Later, you can unsubscribe when needed
world.afterEvents.entityHealthChanged.unsubscribe(healthChangedSubscription);
