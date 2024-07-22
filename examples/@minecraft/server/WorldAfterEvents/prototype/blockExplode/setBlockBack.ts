import { world, BlockExplodeAfterEvent } from "@minecraft/server";

world.afterEvents.blockExplode.subscribe((event: BlockExplodeAfterEvent) => {
    console.log("Block:", event.block);
    console.log("Dimension:", event.dimension);
    console.log("Exploded Block Permutation:", event.explodedBlockPermutation);
    console.log("Source:", event.source);
    
    // set block back
    event.block.setPermutation(event.explodedBlockPermutation);
});
