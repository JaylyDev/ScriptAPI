import { system, world } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe((event) => {
  const { id, message, sourceEntity, sourceType } = event;

  console.log(id); // wiki:test
  console.log(message); // Hello World
  console.log(sourceEntity); // Player object
  console.log(sourceType); // Entity
});

world.getPlayers().forEach(player => {
  player.runCommand('scriptevent wiki:test Hello World');
})