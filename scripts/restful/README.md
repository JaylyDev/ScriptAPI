# Restful (REST)

A Minecraft scripting api port of REST APIs are used to access and manipulate data using a common set of stateless operations.

This package is experimental.

## Example

```js
import { world } from "@minecraft/server";
import { RequestMethod, REST } from "./index";

const rest = new REST("demo"); // id is demo, lower case

(async () => {
  await rest.request("/players", { method: RequestMethod.POST }); // create a route

  // save data for all players into a table
  for (const player of world.getAllPlayers()) {
    await rest.request("/players", {
      method: RequestMethod.PUT,
      key: player.name,
      value: player.id,
    });
  }
})().catch(console.error);

world.events.chatSend.subscribe((event) => {
  /**
   * Get player id from REST
   */
  const playerId = rest.request("/players", {
    method: RequestMethod.GET,
    key: event.sender.name,
  });
  event.sender.tell("Player ID: " + playerId);
});
```
