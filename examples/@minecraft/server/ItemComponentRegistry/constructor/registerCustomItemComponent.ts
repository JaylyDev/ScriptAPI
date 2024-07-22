import { world } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe((initEvent) => {
  initEvent.itemComponentRegistry.registerCustomComponent("custom:item", {
    onBeforeDurabilityDamage(event) {
        const { attackingEntity, durabilityDamage, hitEntity, itemStack } = event;
        // Your code here
    },
    onCompleteUse(event) {
        const { itemStack, source } = event;
        // Your code here
    },
    onConsume(event) {
        const { itemStack, source } = event;
        // Your code here
    },
    onHitEntity(event) {
        const { attackingEntity, hadEffect, hitEntity, itemStack } = event;
        // Your code here
    },
    onMineBlock(event) {
        const { block, itemStack, minedBlockPermutation, source } = event;
        // Your code here
    },
    onUse(event) {
        const { itemStack, source } = event;
        // Your code here
    },
    onUseOn(event) {
        const { source, usedOnBlockPermutation } = event;
        // Your code here
    }
  })
});
