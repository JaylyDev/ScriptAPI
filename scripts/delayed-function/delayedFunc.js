import { system } from "@minecraft/server";

function delayedFunc(player, func, tickDelay = 1) {
    const sched_ID = system.runInterval(()=>{
        system.clearRun(sched_ID);
        func(player);
    }, tickDelay);
};