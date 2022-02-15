# Commands (Discontinued)

# IMPORTANT

Commands class do not work in version 1.17.30 or abov
It has been replaced with

```js
/**
 * @requires
 * Minecraft version 1.17.30
 */
import { World } from "mojang-minecraft";

World.getDimension().runCommand();
```

```js
/**
 * @requires
 * Minecraft version 1.18.10
 */
import { world } from "mojang-minecraft";

world.getDimension().runCommand();
```

# Archives

Description: https://github.com/MicrosoftDocs/minecraft-creator/blob/c1a0f314a7ecc3c380591859f84f113a7362abf3/creator/ScriptAPI/mojang-minecraft/Commands.md

## Response

```ts
class Commands {
  static run(commandString: string, dimension: Dimension): any;
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
/**
 * @requires
 * Below Minecraft version 1.17.30
 * or
 * NPM @types/mojang-minecraft@0.1.1
 */
import { World, Commands } from "mojang-minecraft";

Commands.run("say You got a new high score!", World.getDimension("overworld"));
```
> Credit: [@types/mojang-minecraft@0.1.1/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/35960c602bd5661bb8461b221cad75bfb5a91fc5/types/mojang-minecraft/index.d.ts)

```js
/**
 * @requires
 * NPM @types/mojang-minecraft@0.1.0
 */
import { Commands } from "Minecraft";

Commands.run("say You got a new high score");
```
> Credit: [@types/mojang-minecraft@0.1.0/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/f3c14c3ee3063f5d21a03aae1aa18491e57add31/types/mojang-minecraft/index.d.ts)