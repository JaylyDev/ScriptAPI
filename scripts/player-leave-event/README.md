`PlayerLeaveEvent`

The goal of this PlayerLeaveEvent is to return the player object instead of player name like GameTest native.

> [!CAUTION]
> This package has been deprecated. Please use `@minecraft/server.PlayerLeaveBeforeEvent`

```js
import { world } from "@minecraft/server";
world.beforeEvents.playerLeave.subscribe(({ player }) => {
  world.sendMessage(`[${new Date().toISOString()}]` + player.name + "left the server");
});
```