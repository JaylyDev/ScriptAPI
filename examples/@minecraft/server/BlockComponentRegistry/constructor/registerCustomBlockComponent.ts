import { world } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe((initEvent) => {
  initEvent.blockComponentRegistry.registerCustomComponent("custom:block", {
    beforeOnPlayerPlace: (event) => {
      const { player, block, face, permutationToPlace, dimension } = event;
      event.cancel = true; // include this if canceling block placement
      // Your code here
    },
    onEntityFallOn: (event) => {
      const { entity, block, fallDistance, dimension } = event;
      // Your code here
    },
    onPlace: (event) => {
      const { block, dimension, previousBlock } = event;
      // Your code here
    },
    onPlayerDestroy: (event) => {
      const { player, block, dimension, destroyedBlockPermutation } = event;
      // Your code here
    },
    onPlayerInteract: (event) => {
      const { player, block, dimension, face, faceLocation } = event;
      // Your code here
    },
    onRandomTick: (event) => {
      const { block, dimension } = event;
      // Your code here
    },
    onStepOff: (event) => {
      const { entity, block, dimension } = event;
      // Your code here
    },
    onStepOn: (event) => {
      const { entity, block, dimension } = event;
      // Your code here
    },
    onTick: (event) => {
      const { block, dimension } = event;
      // Your code here
    },
  });
});
