# BlockLocation

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BlockLocation

## Code structure

```ts
export class BlockLocation {
  
  "x": number;
  
  "y": number;
  
  "z": number;
  
  above(): BlockLocation;
  
  totalBlocksBetween(other: BlockLocation): BlockLocation[];
  
  constructor(x: number, y: number, z: number);
  
  equals(other: BlockLocation): boolean;
  
  offset(x: number, y: number, z: number): BlockLocation;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts)

## Code examples:

```js
import * as GameTest from "mojang-gametest";
import { BlockLocation } from "mojang-minecraft";

GameTest.register("APITests", "assert_is_waterlogged", (test) => {
  const waterChestLoc = new BlockLocation(5, 2, 1);
  const waterLoc = new BlockLocation(4, 2, 1);
  const chestLoc = new BlockLocation(2, 2, 1);
  const airLoc = new BlockLocation(1, 2, 1);

  test.assertIsWaterlogged(waterChestLoc, true);
  test.assertIsWaterlogged(waterLoc, false);
  test.assertIsWaterlogged(chestLoc, false);
  test.assertIsWaterlogged(airLoc, false);
  test.succeed();
}).tag(GameTest.Tags.suiteDefault);
```

> Credit: `vanilla_gametest/scripts/APITests.js`
