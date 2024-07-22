import { system, world } from "@minecraft/server";

system.runInterval(() => {
    const players = world.getPlayers();
    for (const player of players) {
      const health = player.getComponent("health");
      player.onScreenDisplay.setActionBar(`Health: ${health.currentValue} / ${health.effectiveMax}`);
    }
});
