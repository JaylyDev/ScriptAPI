// https://github.com/ReallyFatYoshi

import { world, BlockLocation } from "mojang-minecraft";

function getHighestBlock(x, z, dimension) {
  let highest = null;
  for (let i = 0; i < 260; ++i) {
    const block = world
      .getDimension(dimension ?? "overworld")
      .getBlock(new BlockLocation(x, i, z));
    if (!block.isEmpty) {
      highest = i;
    }
  }
  return highest;
}
