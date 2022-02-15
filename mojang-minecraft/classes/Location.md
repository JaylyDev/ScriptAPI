# Location

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/Location

## Response

```ts
export class Location {

  "x": number;
  
  "y": number;
  
  "z": number;
  
  constructor(x: number, y: number, z: number);
  
  equals(other: Location): boolean;
  
  isNear(other: Location, epsilon: number): boolean;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

```js
import { world, Location } from "mojang-minecraft";

for (let player of world.getPlayers()) {
  player.teleport(new Location(30, 30, 30), player.dimension, 0, 0);

  player.teleportFacing(new Location(30, 30, 30), player.dimension, new Location(100, 10, 300));
}
```
