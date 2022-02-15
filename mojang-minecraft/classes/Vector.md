# Vector

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/Vector

## Code structure

```ts
export class Vector {

  "x": number;
  
  "y": number;
  
  "z": number;
  
  constructor(x: number, y: number, z: number);
  
  equals(other: Vector): boolean;
  
  isNear(other: Vector, epsilon: number): boolean;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

```js
import { world, Location, Vector } from "mojang-minecraft";

world.getDimension('overworld').getBlockFromRay(new Location(154, 120, -8956), new Vector(54, 0, -8))
```

```js
import { world, Vector } from "mojang-minecraft";

for (let entity of world.getDimension('overworld').getEntities()) {
  entity.setVelocity(new Vector(10, 10, 10));
}
```
