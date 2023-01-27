import { tick } from "tick-event";

tick.subscribe((event) => {
  console.log(event.currentTick, event.deltaTime);
})