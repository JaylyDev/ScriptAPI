# world

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft#world

`world` is basically World class, the module exports World class as world since Minecraft 1.18.10

## Response:

```ts
class World {
  [native code]
}

export const world: World;
```

## Code example:

v1.18.10 and above

```js
import { world } from "mojang-minecraft";

world.getDimension("overworld");
```

v1.18.10 and below

```js
import { World } from "mojang-minecraft";

World.getDimension("overworld");
```
