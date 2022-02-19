# PlayerJoinEvent

Description:

- PlayerJoinEvent: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/PlayerJoinEvent
- PlayerJoinEventSignal: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/PlayerJoinEventSignal

## Code structure

```ts
class PlayerJoinEvent {
  "player": Player;
}
```

```ts
class PlayerJoinEventSignal {
  subscribe(
    callback: (arg: PlayerJoinEvent) => void
  ): (arg: PlayerJoinEvent) => void;
  unsubscribe(callback: (arg: PlayerJoinEvent) => void): void;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

Subscribe to events without unsubscribing:

```js
import * as Minecraft from "mojang-minecraft";

const World = Minecraft.world;

const tickEventCallback = World.events.tick;
const playerJoinEventCallback = World.events.playerJoin;

// This is to allow passing between functions
let player;

// Subscribe to playerloaded when playerJoin event is triggered
playerJoinEventCallback.subscribe(playerloaded);

// This function will be called when tick event is triggered from the playerloaded function
function time() {
  try {
    // We loop testfor until it returns true so we know the
    // player is in the world
    player.runCommand(`testfor @a[name="${player}"]`);
    // player.runCommand(`testfor @a[scores={gametestapi=..0}]`);
    try {
      // (..0) gametest needs to be enabled (1..)
      player.runCommand(`execute ${player} ~~~ function checks/gametestapi`);
      // We unsubscribe to the tick event from the time function
      tickEventCallback.unsubscribe(time);
    } catch (error) {}
  } catch (error) {}
}

// This function will be called when playerJoin event is triggered
function playerloaded(loaded) {
  // Get the name of the player who is joining
  player = loaded.player.name;
  // Subscribe tick event to the time function
  tickEventCallback.subscribe(time);
}
```

Subscribe and unsubscribe events:

```js
import { world } from "mojang-minecraft";

let playerJoin = world.events.playerJoin.subscribe(eventData => {
  if (player) {
    player.kill();
  };
  world.events.playerJoin.unsubscribe(playerJoin);
});
```
