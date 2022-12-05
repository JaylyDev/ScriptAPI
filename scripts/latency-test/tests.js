import { system, world } from "@minecraft/server";
import { getPlayerLatency, getServerLatency } from "latency-test";

getServerLatency((latency) => {
  world.say(`${latency}`);
});

system.events.scriptEventReceive.subscribe((event) => {
  const player = event.sourceEntity;
  if (event.id === 'player:latency' && player) {
    getPlayerLatency(player, (latency) => {
      player.tell(`Latency: ${latency} ms`);
    });
  };
});