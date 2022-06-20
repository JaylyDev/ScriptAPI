# Dimension

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/Dimension

## Code structure

```ts
class Dimension {
  createExplosion(
    location: Location,
    radius: number,
    explosionOptions: ExplosionOptions
  ): void;

  getBlock(location: BlockLocation): Block;

  getBlockFromRay(
    location: Location,
    direction: Vector,
    options?: BlockRaycastOptions
  ): Block;

  getEntities(getEntities?: EntityQueryOptions): EntityIterator;

  getEntitiesAtBlockLocation(location: BlockLocation): Entity[];

  getEntitiesFromRay(
    location: Location,
    direction: Vector,
    options?: EntityRaycastOptions
  ): Entity[];

  getPlayers(getPlayers?: EntityQueryOptions): EntityIterator;

  isEmpty(location: BlockLocation): boolean;

  runCommand(commandString: string): any;
  
  spawnEntity(
    identifier: string,
    location: BlockLocation | Location
  ): Entity;
}
```


> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:
```js
for (let entity of world.getDimension('overworld').getEntities()) {
  entity.runCommand(`Coords: ${entity.location.x}, ${entity.location.y}, ${entity.location.z}`);
}
```