# BeforeExplosionEvent

Description:

- BeforeExplosionEvent: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BeforeExplosionEvent
- BeforeExplosionEventSignal: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BeforeExplosionEventSignal

## Code structure

```ts
class BeforeExplosionEvent {
  "cancel": boolean;
  readonly "dimension": Dimension;
  "impactedtotalBlocks": BlockLocation[];
  readonly "source": Entity;
}
```

```ts
class BeforeExplosionEventSignal {
  subscribe(
    callback: (arg: BeforeExplosionEvent) => void
  ): (arg: BeforeExplosionEvent) => void;
  unsubscribe(callback: (arg: BeforeExplosionEvent) => void): void;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

Subscribe to events without unsubscribing:

```js
import { world } from "mojang-minecraft";

world.events.beforeExplosion.subscribe((data) => {
  console.log(data.cancel);
  console.log(data.dimension);
  console.log(data.impactedtotalBlocks);
  console.log(data.source);
});
```

Subscribe and unsubscribe events:

```js
import { world } from "mojang-minecraft";

let beforeExplosion = world.events.beforeExplosion.subscribe(() => {});
world.events.beforeExplosion.unsubscribe(beforeExplosion);
```
