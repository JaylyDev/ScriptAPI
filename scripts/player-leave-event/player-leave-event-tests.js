import { PlayerLeaveEventSignal } from "./PlayerLeaveEvent";

let playerLeave = new PlayerLeaveEventSignal();

let callback = playerLeave.subscribe(({player}) => {
  console.warn(player.name);
  playerLeave.unsubscribe(callback);
});