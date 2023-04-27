import { world } from "@minecraft/server";
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
    }
    ;
})().catch(console.error);
world.afterEvents.chatSend.subscribe((event) => {
    /**
     * Get player id from REST
     */
    const playerId = rest.request('/players', {
        method: RequestMethod.GET,
        key: event.sender.name
    });
    if (playerId !== event.sender.id)
        event.sender.kill();
    rest.request('/players', {
        method: RequestMethod.PATCH,
        key: event.sender.name,
        value: event.sender.id
    });
    event.sender.sendMessage('Player ID: ' + playerId);
    // remove property
    rest.request('/players', {
        method: RequestMethod.DELETE,
        key: event.sender.name
    });
});
