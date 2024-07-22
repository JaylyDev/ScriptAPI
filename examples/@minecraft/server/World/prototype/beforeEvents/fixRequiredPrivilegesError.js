// Check out how BeforeEvents privilege system work:
// https://wiki.bedrock.dev/scripting/script-server.html#beforeevents-privilege-system
import { world, system, TimeOfDay } from "@minecraft/server";

// Use system.run()
world.beforeEvents.chatSend.subscribe(event => {
	event.cancel = true;
  // setTime changes world state, must be run after its execution by a tick
	system.run(() => {
		world.setTimeOfDay(TimeOfDay.Night);
	});
});

/**
 * @param {number} ticks
 */
function sleep(ticks) {
  return new Promise((resolve) => {
    system.runTimeout(() => resolve(), ticks);
  });
};

// Or execute function at a later tick using async functions
world.beforeEvents.chatSend.subscribe(async (event) => {
	// synchronous code
	event.cancel = true;

	// asynchronous code
	await sleep(10); // Pretend you have a sleep function that returns a promise that resolves in 10 ticks
	world.setTimeOfDay(TimeOfDay.Night);
});
