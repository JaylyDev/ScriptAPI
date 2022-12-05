import { system, world } from "@minecraft/server";
import isHost from "is-host";

world.events.playerSpawn.subscribe(({player}) => {
  system.run(() => {
    if (isHost(player)) player.addTag('rank:Owner');
  });
});