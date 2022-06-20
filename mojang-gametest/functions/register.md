# register

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest#register

Usage:
```ts
register(
  testClassName: string,
  testName: string,
  testFunction: (arg: Test) => void
): RegistrationBuilder
```

Example:
```js
GameTest.register("ExampleTests", "alwaysFail", (test) => {
  test.fail("This test, runnable via '/gametest run ExampleTests:alwaysFail', will always fail");
});
```
> Credit: [@types/mojang-gametest/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-gametest/index.d.ts)

```js
import * as GameTest from "mojang-gametest";
import GameTestExtensions from "./GameTestExtensions.js";
import {
  BlockLocation,
  Direction,
  ItemStack,
  Location,
  MinecraftBlockTypes,
  MinecraftItemTypes,
  world,
} from "mojang-minecraft";

function isNear(n1, n2) {
  return Math.abs(n1 - n2) < 0.01;
}

GameTest.register("SimulatedPlayerTests", "spawn_simulated_player", (test) => {
  const spawnLoc = new BlockLocation(1, 5, 1);
  const landLoc = new BlockLocation(1, 2, 1);
  const playerName = "Test Player";
  const player = test.spawnSimulatedPlayer(spawnLoc, playerName);
  test.assertEntityPresent("player", spawnLoc);
  test.assert(player.nameTag === playerName, "Unexpected name tag");
  test.succeedWhen(() => {
    test.assertEntityPresent("player", landLoc);
  });
})
  .tag(GameTest.Tags.suiteDefault);
```