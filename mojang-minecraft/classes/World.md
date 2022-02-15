# World

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/World

## Code structure

```ts
class World {
  readonly "events": Events;

  getDimension(dimensionName: "overworld" | "nether" | "the end"): Dimension;
  
  getPlayers(options?: EntityQueryOptions): EntityIterator;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts)

## Code examples:

### Events

Subscribe to events without unsubscribing:

```js
import { world } from "mojang-minecraft";

world.events.tick.subscribe(() => {});
```

> Check out [**Events**](https://github.com/jaylydev/gametest-example/tree/main/mojang-minecraft/classes/Events.md) class for more infomation

### getDimension

Version 1.18.10 or above

```js
import { world } from "mojang-minecraft";

world.getDimension().runCommand("say hello");
```

> Check out [**Dimension**](https://github.com/jaylydev/gametest-example/tree/main/mojang-minecraft/classes/Dimension.md) class for more infomation
