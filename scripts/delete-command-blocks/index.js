import { world, MinecraftBlockTypes } from "mojang-minecraft";

async function DeleteCommandBlocks () {
  let CommandBlocks = MinecraftBlockTypes.getAllBlockTypes().filter(blockType => blockType.id.endsWith("command_block"));

  for (const player of world.getPlayers()) {
    for (let CommandBlock of CommandBlocks) {
      for (let index = 0; index < (384 / 32); index++) {      
        const { x, z } = player.location;
        const y = index * 32 - 64;
        
        player.runCommandAsync(`fill ${x - 15} ${y} ${z - 15} ${x + 16} ${y + 31} ${z + 16} air 0 replace ${CommandBlock.id}`);
      }
    };
  };
};

world.events.tick.subscribe(DeleteCommandBlocks);