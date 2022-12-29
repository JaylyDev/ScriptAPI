import { PlayerExistEventSignal } from "./PlayerExistEvent_old.js";
// @ts-ignore
import { MessageFormData } from "mojang-minecraft-ui";

let playerExist = new PlayerExistEventSignal();

let callback = playerExist.subscribe(({player, timeTaken}) => {
  player.runCommandAsync("say I just joined this world, and it only took me " + timeTaken + " milliseconds");

  new MessageFormData()
  .title("Welcome")
  .body(`Welcome to this Minecraft world.\nYou joined this world in ${timeTaken / 1000} seconds . . .`)
  .button1("Welcome")
  .button2("Welcome")
  .show(player);

  // callback function
  playerExist.unsubscribe(callback); // unsubscribes
});