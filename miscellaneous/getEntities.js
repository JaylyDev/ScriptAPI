// https://github.com/jaylydev

import { world } from "mojang-minecraft";

try {
  let Entities = world.getDimension("overworld").getEntities();
  for (let entity of Entities) {
    world.getDimension("overworld").runCommand(`say "${entity}" `);
  }
} catch (error) {
  world.getDimension("overworld").runCommand(`say "${error}" `);
}
