# BeforeDataDrivenEntityTriggerEvent

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BeforeDataDrivenEntityTriggerEvent

-----
⚠ This page needs more infomation ⚠
-----
This page lacks class code structure and code examples

----

## Code structure

```ts
class BeforeDataDrivenEntityTriggerEvent {
  subscribe(
    callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void
  ): (arg: BeforeDataDrivenEntityTriggerEvent) => void;
  unsubscribe(callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void): void;
}
```

> Credit: [Microsoft docs/minecraft-creator](https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/beforedatadrivenentitytriggerevent);

## Code examples:

Subscribe to events without unsubscribing:

```js
import { world } from "mojang-minecraft";

world.events.beforeExplosion.subscribe((data) => {});
```

Subscribe and unsubscribe events:

```js
import { world } from "mojang-minecraft";

let beforeExplosion = world.events.beforeExplosion.subscribe(() => {});
world.events.beforeExplosion.unsubscribe(beforeExplosion);
```
