// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
/**
 * @license MIT
 * @author JaylyMC
 * @project https://github.com/JaylyDev/GametestDB/
 */
import * as MinecraftServer from "@minecraft/server";
import * as GameTest from "@minecraft/server-gametest";

declare module "@minecraft/server-gametest" {
  interface SimulatedPlayer {
    /**
     * Despawn the simulated player
     */
    despawn(): void;
  }
};

/**
 * Spawns a simulated player
 * @param target The player the simulated player is going to spawn at
 * @param callback Implementation of the simulated player
 */
export function SpawnSimulatedPlayer (target: MinecraftServer.Player, callback: (player: GameTest.SimulatedPlayer) => void) {
  const testClassName = "Jayly";
  const testName = "SpawnSimulatedPlayer";

  if (!(target instanceof MinecraftServer.Player)) throw new TypeError("Native type conversion failed.");

  GameTest.registerAsync(testClassName, testName, async function (test) {
    let simulatedplayer = test.spawnSimulatedPlayer({ x: 0, y: 1, z: 0, });
    simulatedplayer.despawn = () => test.removeSimulatedPlayer(simulatedplayer);
    callback(simulatedplayer);
  })
    .structureName("DebugTests:always_succeed")
    .tag(GameTest.Tags.suiteDefault)
    .maxTicks(0x7fffffff);

  target.runCommandAsync(`gametest run ${testClassName}:${testName}`);
}
