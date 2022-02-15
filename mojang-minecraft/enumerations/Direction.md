# Direction

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/direction

## Code structure

```ts
enum Direction {
  down = 0,
  up = 1,
  north = 2,
  south = 3,
  west = 4,
  east = 5
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts)

## Code examples:

<!--
Direction variable is available to:
BeforeItemUseOnEventSignal: BeforeItemUseOnEvent,
ItemUseOnEventSignal: ItemUseOnEvent,
BlockProperties
-->

```js
import { world } from "mojang-minecraft";

world.events.beforeItemUseOn.subscribe((data) => {
  direction = data.direction;
});
```

```js
import { world } from "mojang-minecraft";

world.events.itemUseOn.subscribe((data) => {
  direction = data.direction;
});
```