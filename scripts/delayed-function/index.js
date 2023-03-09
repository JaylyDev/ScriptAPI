// Script example for ScriptAPI
// Author: GlitchyTurtle32 <https://github.com/GlitchyTurtle>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player, system } from "@minecraft/server";

/**
 * @param {Player} player
 * @param {(arg0: Player) => void} func
 */
export function delayedFunc(player, func, tickDelay = 1) {
    const sched_ID = system.runInterval(()=>{
        system.clearRun(sched_ID);
        func(player);
    }, tickDelay);
};