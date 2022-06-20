# BlockBreakEvent

Description:

- BlockBreakEvent: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BlockBreakEvent
- BlockBreakEventSignal: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BlockBreakEventSignal

## Code structure

```ts
/**
 * Contains information regarding an event where a player
 * breaks a block.
 */
export class BlockBreakEvent extends BlockEvent {
  /**
   * Block broken in this event.
   */
  readonly "block": Block;
  /**
   * Returns permutation information about this block before it
   * was broken.
   */
  readonly "brokenBlockPermutation": BlockPermutation;
  /**
   * Dimension that contains the block that has been broken in
   * this event.
   */
  readonly "dimension": Dimension;
  /**
   * Player that broke the block for this event.
   */
  readonly "player": Player;
}
```

```ts
class BlockBreakEventSignal {
  subscribe(
    callback: (arg: BlockBreakEvent) => void
  ): (arg: BlockBreakEvent) => void;
  unsubscribe(callback: (arg: BlockBreakEvent) => void): void;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

Subscribe to events without unsubscribing:

```js
import { world } from "mojang-minecraft";

world.events.blockBreak.subscribe(() => {
  let dimension = data.block.dimension;
  let id = data.block.id;
  let isEmpty = data.block.isEmpty;
  data.block.isWaterlogged = false;
  let location = data.block.location.x + data.block.location.y + data.block.location.z);
  let blockType = data.block.permutation.type;
  data.block.permutation.clone();
  data.block.permutation.getAllProperties();
  data.block.permutation.getProperty(propertyName); // propertyName needs to be declared
  data.block.permutation.getTags();
  let type = data.block.type);
  let coords = `X: ${data.block.x} | Y: ${data.block.y} | Z: data.block.z`;

  // set bed color to green
  if (id == "minecraft:bed") {
    let bed = data.brokenBlockPermutation;
    bed.getProperty(BlockProperties.color).value = "green";
  }

  console.warn(data.dimension == world.getDimension('overworld'))
  // if event is in overworld then returns true
  // else false

  data.player.runCommand(`say I broke ${id}`);
})
```

Subscribe and unsubscribe events:

```js
import { world } from "mojang-minecraft";

let blockBreak = world.events.blockBreak.subscribe(() => {});
world.events.blockBreak.unsubscribe(blockBreak);
```
