// By Aex66

import { world, MinecraftBlockTypes, BlockLocation } from "mojang-minecraft";

world.events.blockPlace.subscribe((ev) => {
  const { block, player, dimension } = ev;
  const { x, y, z } = block.location;

  let ilegalBlocks = [
    "minecraft:movingBlock",
    "minecraft:movingblock",
    "minecraft:glowingobsidian",
    "minecraft:glowingObsidian",
    "minecraft:reserved6",
    "minecraft:reserved2",
    "minecraft:reserved3",
    "minecraft:info_update",
    "minecraft:info_update2",
  ];

  if (ilegalBlocks.includes(block.id)) {
    dimension.runCommand(
      `say §cAlert! §7${player.nameTag} §cplaced ilegalBlock: §e${block?.id} in §c${x} ${y} ${z} §acoordinates`
    );
    dimension
      .getBlock(new BlockLocation(x, y, z))
      .setType(MinecraftBlockTypes.air);
  }
});
