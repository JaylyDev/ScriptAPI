# ItemUseEvent

Description:

- ItemUseEvent: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/ItemUseEvent
- ItemUseEventSignal: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/ItemUseEventSignal

## Response

```ts
class ItemUseEvent {
  "item": ItemStack;
  readonly "source": Entity;
}
```

```ts
class ItemUseEventSignal {
  subscribe(
    callback: (arg: ItemUseEvent) => void
  ): (arg: ItemUseEvent) => void;
  unsubscribe(callback: (arg: ItemUseEvent) => void): void;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

Subscribe to events without unsubscribing:

```js
import { world } from "mojang-minecraft";

world.events.itemUse.subscribe((data) => {
  data.item.amount = 64;
  data.item.data = 0;
  console.warn(data.item.id);

  data.source.addEffect('invisibility', 15, 15);
});
```

Subscribe and unsubscribe events:

```js
import { world } from "mojang-minecraft";

let itemUse = world.events.itemUse.subscribe(() => {});
world.events.itemUse.unsubscribe(itemUse);
```
