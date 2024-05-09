import { Player, system, world } from "@minecraft/server";
import { RequestMethod, REST } from "./index";

const rest = new REST('demo'); // id is demo, lower case

(async () => {
  await rest.request('/players', { method: RequestMethod.POST }); // create a route

  // save data for all players into a table
  for (const player of world.getAllPlayers()) {
    await rest.request('/players', {
      method: RequestMethod.PUT,
      key: player.name,
      value: player.id
    });
  };
})().catch(console.error);

system.afterEvents.scriptEventReceive.subscribe((event) => {
  const { initiator } = event;
  if (!(initiator instanceof Player)) return;
  /**
   * Get player id from REST
   */
  const playerId = rest.request('/players', { 
    method: RequestMethod.GET,
    key: initiator.name
  });

  if (playerId !== initiator.id) initiator.kill();

  rest.request('/players', {
    method: RequestMethod.PATCH,
    key: initiator.name,
    value: initiator.id
  });

  initiator.sendMessage('Player ID: ' + playerId);

  // remove property
  rest.request('/players', {
    method: RequestMethod.DELETE,
    key: initiator.name
  });
});