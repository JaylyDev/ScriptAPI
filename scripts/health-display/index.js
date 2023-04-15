// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { EntityHealthComponent, system, world } from "@minecraft/server";
system.runInterval(() => {
    for (const player of world.getPlayers()) {
        const health = player.getComponent(EntityHealthComponent.componentId);
        player.nameTag = `${player.name}\n§c❤️ ${health.current.toFixed(1)}`;
    }
});
