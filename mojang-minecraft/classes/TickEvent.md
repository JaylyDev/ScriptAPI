# TickEvent

Description:

- TickEvent: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/TickEvent
- TickEventSignal: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/TickEventSignal

## Response

```ts
class TickEvent {
  readonly "currentTick": number;
  readonly "deltaTime": number;
}
```

```ts
class TickEventSignal {
  subscribe(callback: (arg: TickEvent) => void): (arg: TickEvent) => void;

  unsubscribe(callback: (arg: TickEvent) => void): void;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

Subscribe to events without unsubscribing:

```js
import { world } from "mojang-minecraft";

world.events.tick.subscribe((data) => {
  /**
   * @description
   * The function executes code in the object every Minecraft tick
   */
  let currentTick = data.currentTick;
  let deltaTime = data.deltaTime
  world.getDimension('overworld').runCommand(`title @a actionbar Current Tick: ${currentTick} | Delta Time: ${deltaTime}`);
});
```

Subscribe and unsubscribe events:

```js
import { world } from "mojang-minecraft";

let tick = world.events.tick.subscribe(() => {});
world.events.tick.unsubscribe(tick);
```
