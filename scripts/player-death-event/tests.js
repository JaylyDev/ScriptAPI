import { PlayerDeathEventSignal } from "./PlayerDeathEvent.js";

let playerDeath = new PlayerDeathEventSignal();

let callback = playerDeath.subscribe(({player}) => {
  // callback function
  playerDeath.unsubscribe(callback); // unsubscribes
});