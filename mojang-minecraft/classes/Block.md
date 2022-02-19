# Block

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/Block

## Code structure

````ts
export class Block {
  
  readonly "dimension": Dimension;
  
  readonly "id": string;
  
  readonly "isEmpty": boolean;
  
  "isWaterlogged": boolean;
  
  readonly "location": BlockLocation;
  
  readonly "permutation": BlockPermutation;
  
  readonly "type": BlockType;
  
  readonly "x": number;
  
  readonly "y": number;
  
  readonly "z": number;
  
  getComponent(componentName: string): any;
  
  getTags(): string[];
  
  hasTag(tag: string): boolean;
  
  setPermutation(permutation: BlockPermutation): void;
  
  setType(blockType: BlockType): void;
}
````

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts)

## Code examples:

```js
import { world, Block } from "mojang-minecraft";

world.events.beforePistonActivate.subscribe((data) => {
  console.log(data.block.dimension);

  console.log(data.block.id);

  console.log(data.block.isEmpty);

  data.block.isWaterlogged = false;

  console.log(data.block.location.x + data.block.location.y + data.block.location.z);

  console.log(data.block.permutation.type);

  data.block.permutation.clone());

  data.block.permutation.getAllProperties());

  data.block.permutation.getProperty(propertyName)); // propertyName needs to be declared

  data.block.permutation.getTags());

  console.log(data.block.type);

  console.log(data.block.x + data.block.y + data.block.z);
}
```

`check_block_tags.js`
```js
import { world, Location } from "mojang-minecraft";

// Fetch the block

const block = world.getDimension("overworld").getBlock(new Location(1, 2, 3));

console.log(`Block is dirt: ${block.hasTag("dirt")}`);

console.log(`Block is wood: ${block.hasTag("wood")}`);

console.log(`Block is stone: ${block.hasTag("stone")}`);
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts)