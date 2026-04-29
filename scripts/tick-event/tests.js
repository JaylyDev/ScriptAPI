import { tick } from "../tick-event/index.js";

tick.subscribe((event) => {
  console.log(event.currentTick, event.deltaTime);
})