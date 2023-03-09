import { tick } from "tick-event/index";

tick.subscribe((event) => {
  console.log(event.currentTick, event.deltaTime);
})