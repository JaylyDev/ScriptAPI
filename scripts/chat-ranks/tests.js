import { system, world } from "@minecraft/server";
import isHost from "is-host/index";

world.events.playerSpawn.subscribe(({player}) => {
  system.run(() => {
    if (isHost(player)) player.addTag('rank:Owner');
  });
});