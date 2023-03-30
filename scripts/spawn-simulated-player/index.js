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
import { SimulatedPlayer } from "../simulated-player/index";
/**
 * Spawns a simulated player
 * @param target The player the simulated player is going to spawn at
 * @param callback Implementation of the simulated player
 */
export function SpawnSimulatedPlayer(target, callback) {
    const testClassName = "Jayly";
    const testName = "SpawnSimulatedPlayer";
    if (!(target instanceof MinecraftServer.Player))
        throw new TypeError("Native type conversion failed.");
    GameTest.registerAsync(testClassName, testName, async function (test) {
        let simulatedplayer = test.spawnSimulatedPlayer({
            x: 0,
            y: 1,
            z: 0
        });
        callback(new SimulatedPlayer(simulatedplayer, test));
    }).structureName("DebugTests:always_succeed")
        .tag(GameTest.Tags.suiteDefault)
        .maxTicks(0x7fffffff);
    target.runCommandAsync(`gametest run ${testClassName}:${testName}`);
}
;
