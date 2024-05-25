// Script example for ScriptAPI
// Author: JaylyDev <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import {
  world,
  system,
  BlockPermutation,
  BlockVolume,
} from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

const commandBlocks = [
  MinecraftBlockTypes.CommandBlock,
  MinecraftBlockTypes.ChainCommandBlock,
  MinecraftBlockTypes.RepeatingCommandBlock,
];

function DeleteCommandBlocks() {
  for (const player of world.getPlayers()) {
    for (let commandBlock of commandBlocks) {
      for (let index = 0; index < 384 / 32; index++) {
        const { x, z } = player.location;
        const y = index * 32 - 64;

        player.dimension.fillBlocks(
          new BlockVolume(
            {
              x: x - 15,
              y: y,
              z: z - 15,
            },
            {
              x: x + 16,
              y: y + 31,
              z: z + 16,
            }
          ),
          MinecraftBlockTypes.Air,
          {
            blockFilter: {
              includePermutations: [BlockPermutation.resolve(commandBlock)],
            },
          }
        );
      }
    }
  }
}

system.runInterval(DeleteCommandBlocks);
