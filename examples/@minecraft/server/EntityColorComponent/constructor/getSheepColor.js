import { system, world } from "@minecraft/server";

system.runInterval(() => {
    const players = world.getAllPlayers();
    for (const player of players) {
      const hits = player.getEntitiesFromViewDirection({ type: 'minecraft:sheep' });
      for (const hit of hits) {
        const color = hit.entity.getComponent('color');
        player.sendMessage(`Sheep Color value: ${color.value}`);
      }
    }
}, 1000);