# GameMode

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/GameMode

## Response

```ts
enum GameMode {
  survival = 0,
  creative = 1,
  adventure = 2
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts)

## Code examples:

```js
import { world, EntityQueryOptions, GameMode } from "mojang-minecraft";

world.getEntities(new EntityQueryOptions(gameMode=new GameMode.adventure));

world.getEntities(new EntityQueryOptions(excludeGameModes=[new GameMode.survival, new GameMode.creative]));
```