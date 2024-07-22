import { world, BlockExplodeAfterEvent } from '@minecraft/server';

// Subscribe to the blockExplode event
world.afterEvents.blockExplode.subscribe((event: BlockExplodeAfterEvent) => {
    const { source, block, explodedBlockPermutation, dimension } = event;

    // Log details of the explosion event
    console.log(`Block exploded at position: ${block.location}`);
    console.log(`Block type: ${explodedBlockPermutation.type.id}`);
    console.log(`Dimension: ${dimension.id}`);
    if (source) {
        console.log(`Explosion caused by: ${source.id}`);
    } else {
        console.log(`Explosion caused by an unknown source`);
    }
    
    // Example: Create an explosion at the block location
    dimension.createExplosion(block.location, 5, { causesFire: true });
});
