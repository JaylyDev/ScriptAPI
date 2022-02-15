# Player

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/Player

## Response

```ts
class Player extends Entity {

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
import { world, Vector, Location } from "mojang-minecraft";

for (let player of world.getPlayers()) {
  const rotation = player.bodyRotation;

  const playerDimension = player.dimension;

  const headLocation = player.headLocation;

  const id = player.id;

  console.player.log(player.isSneaking);

  const location = player.location;

  const name = player.name;

  /**
   * @description
   * This changes player's name tag to pizza,
   * meaning players can only execute commands
   * using player's nametag
   * e.g. /execute pizza ~~~ say hi
   */
  player.nameTag = "pizza";

  console.player.log(player.selectedSlot);

  console.player.log(player.target);

  const velocity = player.velocity;

  const viewVector = player.viewVector;

  player.addEffect('invisibility', 15, 15);

  player.addTag('newTag');

  player.getBlockFromViewVector();

  /**
   * @param
   * The identifier of the component (e.g., 'minecraft:rideable')
   * to retrieve. If no namespace prefix is specified,
   * 'minecraft:' is assumed. If the component is not present on
   * the entity, undefined is returned.
   */
  let getComponent = player.getComponent('minecraft:rideable');

  let playerEffect = player.getEffect().displayName; // see more in "Effect" class

  /**
   * @returns
   * [Entity]
   */
  player.getEntitiesFromViewVector(options?: EntityRaycastOptions);

  player.runCommand(player.getItemCooldown('minecraft:chorus_fruit'));

  let hasComponent = player.hasComponent('minecraft:rideable');

  player.hasTag("rickAstley");

  /**
   * @returns
   * Kills player in any gamemode (including creative)
   */
  player.kill();

  player.removeTag("rickAstley");

  player.runCommand("say You got a new high score!");
  player.runCommand("scoreboard players set @s score 10");

  player.setVelocity(new Vector(10, 10, 10));

  player.startItemCooldown('chorusfruit', 15); // needs testing

  player.teleport(new Location(30, 30, 30), player.dimension, 0, 0);

  player.teleportFacing(new Location(30, 30, 30), player.dimension, new Location(100, 10, 300));

  player.triggerEvent("minecraft:trigger_raid");
}
```
