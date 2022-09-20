import { world } from "mojang-minecraft";
import { getGamemode } from "./index";

world.events.leverActivate.subscribe(({player}) => {
  let gamemode = getGamemode(player);

  player.tell(`Your game mode is ${gamemode}`);
});