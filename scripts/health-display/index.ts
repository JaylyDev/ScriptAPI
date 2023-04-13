import { EntityHealthComponent, system, world } from "@minecraft/server";

system.runInterval(() => {
  for (const player of world.getPlayers()) {
    const health = player.getComponent(EntityHealthComponent.componentId) as EntityHealthComponent;
    player.nameTag = `${player.name}\n§c❤️ ${health.current.toFixed(1)}`;
  }
});
