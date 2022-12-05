import { world, system } from "@minecraft/server";

/**
 * @param {(number) => void} callback
 */
export async function getLatency (callback) {
  const startTime = Date.now();
  const id = "latency.test";
  const event = system.events.scriptEventReceive.subscribe(() => {
    if (event.id === id) {
      system.events.scriptEventReceive.unsubscribe(event);
      callback(Date.now() - startTime);
    };
  });
  world.getDimension("overworks").runCommandAsync("scriptevent " + id + " message");
};
