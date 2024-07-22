import { world } from "@minecraft/server";

const effectAddSubscription = world.afterEvents.effectAdd.subscribe(
    (event) => {
        console.log("Effect:", event.effect);
        console.log("Entity:", event.entity);

        // Your custom handling for the effect added event
        // Example: Notify players, update UI, etc.
    },
    {
        // Optionally provide EntityEventOptions to filter entities or entity types
        entities: [/* Array of specific Entity instances */],
        entityTypes: ["minecraft:creeper", "minecraft:player"], // Array of entity type IDs
    }
);

// Later, you can unsubscribe when needed
world.afterEvents.effectAdd.unsubscribe(effectAddSubscription);