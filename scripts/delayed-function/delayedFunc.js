import { system } from "@minecraft/server";

/**
 * Delays a function a certain number of ticks.
 * @param {Player} player The player entity the function will run at.
 * @param {Function} func The function ran after the delay.
 * @param {number} tickDelay The number of ticks delayed for. Default 1.
 */
export function delayedFunc(player, func, tickDelay = 1) {
    const sched_ID = system.runInterval(()=>{
        system.clearRun(sched_ID);
        func(player);
    }, tickDelay);
};