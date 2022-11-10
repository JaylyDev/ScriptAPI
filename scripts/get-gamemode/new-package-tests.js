import { world } from "@minecraft/server";
import { getGamemode } from "./index";

world.events.leverActivate.subscribe(({player}) => {
  let gamemode = getGamemode(player);

  player.tell(`Your game mode is ${gamemode}`);
});