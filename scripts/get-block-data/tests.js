// Script examples for ScriptAPI
// Author: Leaftail <Bedrock Scripting API>

import { getBlockData } from "./index";
import { system, world } from "@minecraft/server";

system.runSchedule(() => {
    for (const player of world.getAllPlayers()) {
        const block = player.getBlockFromViewDirection();
        if (!block) continue;
        player.onScreenDisplay.setActionBar(`${block.typeId}:${getBlockData(block)}`);
    }
});