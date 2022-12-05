import { world, system, Player } from "@minecraft/server";

/**
 * get latency between scripting api and command block (Dimension.runCommandAsync)
 * @param {(latency: number) => void} callback
 */
export function getServerLatency (callback) {
  const startTime = Date.now();
  const id = "latency:test";
  const onScriptEventReceive = system.events.scriptEventReceive.subscribe((event) => {
    if (event.id === id) {
      system.events.scriptEventReceive.unsubscribe(onScriptEventReceive);
      callback(Date.now() - startTime);
    };
  });
  world.getDimension("overworld").runCommandAsync("scriptevent " + id)
                                 .catch(console.error);
};

/**
 * get latency between scripting api and player
 * @param {Player} player
 * @param {(latency: number) => void} callback
 */
export function getPlayerLatency (player, callback) {
  const startTime = Date.now();
  const id = "latency:test";
  const onScriptEventReceive = system.events.scriptEventReceive.subscribe((event) => {
    if (event.id === id) {
      system.events.scriptEventReceive.unsubscribe(onScriptEventReceive);
      callback(Date.now() - startTime);
    };
  });
  player.runCommandAsync("scriptevent " + id)
        .catch(console.error);
};