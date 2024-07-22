import { EntityHealthComponent, system, world } from "@minecraft/server";

system.runInterval(() => {
  for (const player of world.getPlayers()) {
    const health = player.getComponent(EntityHealthComponent.componentId);
    player.onScreenDisplay.setActionBar(`Name: ${player.name} | Health: ${health.currentValue.toFixed()} / ${health.effectiveMax}`);
  }
}, 5000);