import { EntityHealthComponent, world } from "@minecraft/server";
import { PlayerLeaveEventSignal } from "./index";

let playerLeave = new PlayerLeaveEventSignal();

let callback = playerLeave.subscribe(({player}) => {
  console.warn(`[${new Date().toISOString()}]`, player.name, "left the server");

  /**
   * @type {EntityHealthComponent}
   */
  // @ts-ignore
  let health = player.getComponent("health");
  player.dimension.runCommandAsync(`say ${player.name} left the server with ${health.currentValue} HP`);
  player.dimension.runCommandAsync(`say ${player.name} Location: ${player.location.x} ${player.location.y} ${player.location.z}`);

  // unsubscribe
  playerLeave.unsubscribe(callback);
});


world.beforeEvents.playerLeave.subscribe(({ player }) => {
  world.sendMessage(`[${new Date().toISOString()}]` + player.name + "left the server");
});