import { system, world } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe((event) => {
  const { id, message, sourceType } = event;

  console.log(id); // wiki:test
  console.log(message); // Hello World
  console.log(sourceType); // Server
});

world.getDimension('overworld').runCommand('scriptevent wiki:test Hello World');