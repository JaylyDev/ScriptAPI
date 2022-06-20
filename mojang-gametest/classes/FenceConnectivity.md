# FenceConnectivity

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-gametest/FenceConnectivity

Usage:

```ts
class FenceConnectivity {
  readonly "east": boolean;

  readonly "north": boolean;

  readonly "south": boolean;

  readonly "west": boolean;
}
```

Example:

```js
import { Test, register } from "mojang-gametest";
import { BlockLocation } from "mojang-minecraft";

register("ExampleTests", "alwaysFail", (test) => {
  test.getFenceConnectivity(new BlockLocation(0, 0, 0));
});
```

> Credit: [@types/mojang-gametest/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-gametest/index.d.ts)
