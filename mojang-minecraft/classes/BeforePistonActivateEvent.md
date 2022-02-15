# BeforePistonActivateEvent

Description:

- BeforePistonActivateEvent: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BeforePistonActivateEvent
- BeforePistonActivateEventSignal: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BeforePistonActivateEventSignal

## Code structure

```ts
/**
 * Contains information related to changes before a piston
 * expands or retracts.
 */
class BeforePistonActivateEvent extends BlockEvent {
  readonly "block": Block;

  "cancel": boolean;

  readonly "dimension": Dimension;

  readonly "isExpanding": boolean;

  readonly "piston": BlockPistonComponent;
}
```

```ts
class BeforePistonActivateEventSignal {
  subscribe(
    callback: (arg: BeforePistonActivateEvent) => void
  ): (arg: BeforePistonActivateEvent) => void;

  unsubscribe(callback: (arg: BeforePistonActivateEvent) => void): void;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

Subscribe to events without unsubscribing:

```js
import { world } from "mojang-minecraft";

world.events.beforePistonActivate.subscribe((data) => {
  data.cancel = true;

  console.log(data.block.dimension);
  console.log(data.block.id);
  console.log(data.block.isEmpty);
  data.block.isWaterlogged = false;
  console.log(data.block.location.x)
  console.log(data.block.location.y)
  console.log(data.block.location.z)
  console.log(data.block.permutation.type);
  console.log(data.block.permutation.clone());
  console.log(data.block.permutation.getAllProperties());
  console.log(data.block.permutation.getProperty(propertyName)); // propertyName needs to be declared
  console.log(data.block.permutation.getTags());
  console.log(data.block.permutation.hasTag('your mother'));
  console.log(data.block.type)
  console.log(data.block.x + data.block.y + data.block.z)

  data.block.getComponent(componentName: string)

  data.block.getTags()

  data.block.hasTag(tag: string)

  data.block.setPermutation(permutation: BlockPermutation)

  data.block.setType(blockType: BlockType)
});
```

Subscribe and unsubscribe events:

```js
import { world } from "mojang-minecraft";

let beforePistonActivate = world.events.beforePistonActivate.subscribe(() => {});
world.events.beforePistonActivate.unsubscribe(beforePistonActivate);
```
