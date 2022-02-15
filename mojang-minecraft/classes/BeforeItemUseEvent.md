# BeforeItemUseEvent

Description:

- BeforeItemUseEvent: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BeforeItemUseEvent
- beforeItemUseEventSignal: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/beforeItemUseEventSignal

## Response

```ts
class BeforeItemUseEvent {
  "cancel": boolean;
  "item": ItemStack;
  readonly "source": Entity;
}
```

```ts
class beforeItemUseEventSignal {
  subscribe(
    callback: (arg: BeforeItemUseEvent) => void
  ): (arg: BeforeItemUseEvent) => void;

  unsubscribe(
    callback: (arg: BeforeItemUseEvent) => void
  ): void;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

Subscribe to events without unsubscribing:

```js
import { world } from "mojang-minecraft";

world.events.beforeItemUse.subscribe((data) => {
  data.cancel = true;
  
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
