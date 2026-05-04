import { system, world } from "@minecraft/server";
import isHost from "../is-host/index.js";

world.afterEvents.playerSpawn.subscribe(({player}) => {
  system.run(() => {
    if (isHost(player)) player.addTag('rank:Owner');
  });
});