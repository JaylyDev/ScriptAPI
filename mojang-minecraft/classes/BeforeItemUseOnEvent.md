# BeforeItemUseOnEvent

Description:

- BeforeItemUseOnEvent: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BeforeItemUseOnEvent
- BeforeItemUseOnEventSignal: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BeforeItemUseOnEventSignal

## Code structure

```ts
/**
 * Contains information related to an item being used on a
 * block.
 */
export class BeforeItemUseOnEvent {
  readonly "blockLocation": BlockLocation;

  "cancel": boolean;

  readonly "direction": number;

  readonly "faceLocationX": number;

  readonly "faceLocationY": number;

  "item": ItemStack;

  readonly "source": Entity;
}
```

```ts
/**
 * Manages callbacks that fire before an item being used on a
 * block event.
 */
export class BeforeItemUseOnEventSignal {
  subscribe(
    callback: (arg: BeforeItemUseOnEvent) => void
  ): (arg: BeforeItemUseOnEvent) => void;

  unsubscribe(callback: (arg: BeforeItemUseOnEvent) => void): void;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

Subscribe to events without unsubscribing:

```js
import { world } from "mojang-minecraft";

world.events.beforeItemUse.subscribe((data) => {
  console.log(data.blockLocation.x);
  console.log(data.blockLocation.y);
  console.log(data.blockLocation.z);

  data.cancel = false;

  console.log(data.direction);

  console.log(data.faceLocationX);

  console.log(data.faceLocationY);

  data.item.amount = 64;
  data.item.data = 0;

  console.log(data.source);
});
```

Subscribe and unsubscribe events:

```js
import { world } from "mojang-minecraft";

let beforeItemUse = world.events.beforeItemUse.subscribe(() => {});
world.events.beforeItemUse.unsubscribe(beforeItemUse);
```
