import * as GameTest from "mojang-gametest";
import { world, BlockLocation } from "mojang-minecraft";

/**
 * @license MIT
 * @author JaylyMC
 * @remarks
 * Spawn simulated player
 * @param {BlockLocation} blockLocation 
 * @param {string} playerName 
 * @param {string} testClassName 
 * @param {string} testName 
 */
export function SpawnSimulatedPlayer (blockLocation, playerName = 'Player', testClassName = 'SimulatedPlayer', testName = 'spawn_player') {
  GameTest.register(testClassName, testName, (test) => {
    const spawnLoc = new BlockLocation(1, 2, 1);
    const landLoc = new BlockLocation(1, 10000, 1);
    const player = test.spawnSimulatedPlayer(spawnLoc, playerName);
    test.assertEntityPresent("player", spawnLoc);
    test.succeedWhen(() => {
      test.assertEntityPresent("player", landLoc);
    });
    // @ts-ignore
    if (player.getComponent("health").current <= 0) {
      test.removeSimulatedPlayer(player)
    }
  }).tag(GameTest.Tags.suiteDefault)
    .structureName("ComponentTests:platform")
    .maxTicks(0x7fffffff);

  world.getDimension("overworld").runCommandAsync(`gametest run ${blockLocation.x} ${blockLocation.y} ${blockLocation.z}`);
};