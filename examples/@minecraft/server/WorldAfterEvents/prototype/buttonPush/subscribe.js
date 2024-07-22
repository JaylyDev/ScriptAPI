import { world } from "@minecraft/server";

world.afterEvents.buttonPush.subscribe((event) => {
  console.log('Button: ', event.block.typeId);
  console.log('Dimension: ', event.dimension.id);
  console.log('Source: ', event.source.typeId);
})