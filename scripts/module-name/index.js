// Script examples for ScriptAPI
// Author: defowler2005#4812 <Jayly Discord>

import { world } from '@minecraft/server';

world.events.blockBreak.subscribe(({player, block, brokenBlockPermutation}) => {
    const block = brokenBlockPermutation;
    if (block.type.id.endsWith('_ore')) {
        player.runCommandAsync(`scoreboard players add ${player.name} ${block.type.id.replaceAll('minecraft:', '').replaceAll('deepslate_', '')} 1`)
    }
});