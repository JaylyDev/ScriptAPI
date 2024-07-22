import { world } from "@minecraft/server";

// Subscribe to the ExplosionAfterEvent
const explosionSubscription = world.afterEvents.explosion.subscribe((event) => {
  console.log(`Explosion occurred in dimension ${event.dimension.id}`);

  if (event.source) {
      console.log(`Explosion source: ${event.source.typeId}`);
  } else {
      console.log(`Explosion source: None`);
  }

  const impactedBlocks = event.getImpactedBlocks();
  console.log(`Impacted blocks: ${JSON.stringify(impactedBlocks)}`);
});

// ... Later in your code, when you want to unsubscribe
world.afterEvents.explosion.unsubscribe(explosionSubscription);
