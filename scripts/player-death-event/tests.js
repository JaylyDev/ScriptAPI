import { PlayerDeathEventSignal } from "./index";

let playerDeath = new PlayerDeathEventSignal();

let callback = playerDeath.subscribe(({player}) => {
  // callback function
  playerDeath.unsubscribe(callback); // unsubscribes
});