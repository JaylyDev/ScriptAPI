import { BlockComponentStepOnEvent, BlockCustomComponent, BlockPermutation, world } from "@minecraft/server";

class TurnToAirComponent implements BlockCustomComponent {
  onStepOn(data: BlockComponentStepOnEvent) {
    data.block.setPermutation(BlockPermutation.resolve("minecraft:emerald_block"));
  }
}

world.beforeEvents.worldInitialize.subscribe(event => {
  event.blockComponentRegistry.registerCustomComponent('jayly:custom_block', new TurnToAirComponent());
});