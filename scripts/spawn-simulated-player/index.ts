import * as mojangMinecraft from "mojang-minecraft";
import * as mojangGametest from "mojang-gametest";
import { SimulatedPlayer } from "../simulated-player/SimulatedPlayer.js";

/**
 * Spawns a simulated player
 * @param target The player the simulated player is going to spawn at
 * @param callback Implementation of the simulated player
 */
export function SpawnSimulatedPlayer (target: mojangMinecraft.Player, callback: (player: SimulatedPlayer) => void) {
  const testClassName = "Jayly";
  const testName = "SpawnSimulatedPlayer";

  if (!(target instanceof mojangMinecraft.Player)) throw new TypeError("Native type conversion failed.");

  mojangGametest.registerAsync(testClassName, testName, async function (test) {
    let simulatedplayer = test.spawnSimulatedPlayer(new mojangMinecraft.BlockLocation(0, 1, 0));
    callback(new SimulatedPlayer(simulatedplayer, test));
  }).structureName("DebugTests:always_succeed")
    .tag(mojangGametest.Tags.suiteDefault)
    .maxTicks(0x7fffffff);
  
  target.runCommand(`gametest run ${testClassName}:${testName}`);
};