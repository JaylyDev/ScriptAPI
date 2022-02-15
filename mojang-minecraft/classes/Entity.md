# Entity

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/Entity

## Response

```ts
class Entity {

  readonly "bodyRotation": number;

  readonly "dimension": Dimension;

  readonly "headLocation": Location;

  readonly "id": string;

  "isSneaking": boolean;

  readonly "location": Location;

  "nameTag": string;

  "target": Entity;

  readonly "velocity": Vector;

  readonly "viewVector": Vector;

  addEffect(effectType: EffectType, duration: number, amplifier: number): void;

  addTag(tag: string): boolean;

  getBlockFromViewVector(options?: BlockRaycastOptions): Block;

  getComponent(componentId: string): IEntityComponent;

  getComponents(): IEntityComponent[];

  getEffect(effectType: EffectType): Effect;

  getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[];

  getTags(): string[];

  hasComponent(componentId: string): boolean;

  hasTag(tag: string): boolean;

  kill(): void;

  removeTag(tag: string): boolean;

  runCommand(commandString: string): any;

  setVelocity(velocity: Vector): void;

  teleport(location: Location, dimension: Dimension, xRotation: number, yRotation: number): void;

  teleportFacing(location: Location, dimension: Dimension, facingLocation: Location): void;

  triggerEvent(eventName: string): void;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

```js
import { world } from "mojang-minecraft";

for (let entity of world.getDimension('overworld').getEntities()) {
  const rotation = entity.bodyRotation;

  const entityDimension = entity.dimension;

  const headLocation = entity.headLocation;

  const id = entity.id;

  console.entity.log(entity.isSneaking);

  const location = entity.location;

  const name = entity.name;

  /**
   * @description
   * This changes entity's name tag to pizza,
   * meaning entitys can only execute commands
   * using entity's nametag
   * e.g. /execute pizza ~~~ say hi
   */
  entity.nameTag = "pizza";

  console.entity.log(entity.selectedSlot);

  console.entity.log(entity.target);

  const velocity = entity.velocity;

  const viewVector = entity.viewVector;

  entity.addEffect('invisibility', 15, 15);

  entity.addTag('newTag');

  entity.getBlockFromViewVector();

  /**
   * @param
   * The identifier of the component (e.g., 'minecraft:rideable')
   * to retrieve. If no namespace prefix is specified,
   * 'minecraft:' is assumed. If the component is not present on
   * the entity, undefined is returned.
   */
  let getComponent = entity.getComponent('minecraft:rideable');

  let entityEffect = entity.getEffect().displayName; // see more in "Effect" class

  /**
   * @returns
   * [Entity]
   */
  entity.getEntitiesFromViewVector(options?: EntityRaycastOptions);

  entity.runCommand(entity.getItemCooldown('minecraft:chorus_fruit'));

  let hasComponent = entity.hasComponent('minecraft:rideable');

  entity.hasTag("rickAstley");

  /**
   * @returns
   * Kills entity in any gamemode (including creative)
   */
  entity.kill();

  entity.removeTag("rickAstley");

  entity.runCommand("say You got a new high score!");
  entity.runCommand("scoreboard entitys set @s score 10");

  entity.setVelocity(new Vector(10, 10, 10));

  entity.startItemCooldown('chorusfruit', 15); // needs testing

  entity.teleport(new Location(30, 30, 30), entity.dimension, 0, 0);

  entity.teleportFacing(new Location(30, 30, 30), entity.dimension, new Location(100, 10, 300));

  entity.triggerEvent("minecraft:trigger_raid");
}
```
