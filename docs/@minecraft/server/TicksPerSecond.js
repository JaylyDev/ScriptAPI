import { world } from "mojang-minecraft";

// get delta time from tick event
world.events.tick.subscribe(({
  deltaTime // Time since the last tick was fired.
}) => {
  // display on player using on screen display
  for (const player of world.getPlayers()) {
    player.onScreenDisplay.setActionBar(`${deltaTime.toFixed(2)}`);
  }
})