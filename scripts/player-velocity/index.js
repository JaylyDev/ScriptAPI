import { Vector, ExplosionOptions, MinecraftEffectTypes, Player, EntityHealthComponent } from "mojang-minecraft";

/**
 * @remarks
 * Sets a velocity for the entity to move with.
 * Fixes GameTest native player.setVelocity
 * @param {Vector} velocity
 * @param {Player} player
 * @throws This function can throw errors.
*/
export function setVelocity (velocity, player) {
  if (!(player instanceof Player)) throw TypeError("Native type conversion failed.");

  velocity = Vector.add(velocity, new Vector(0, -1, 0));
  /** @type {EntityHealthComponent} */
  // @ts-ignore
  const health = player.getComponent("health");

  // log current hp and add instant health to prevent explosion view tension
  const currentHp = health.current;
  player.addEffect(MinecraftEffectTypes.instantHealth, 0, 255);

  const explosion = new ExplosionOptions();
  explosion.breaksBlocks = false;

  // create explosion & set velocity
  player.setVelocity(velocity);
  player.dimension.createExplosion(player.location, 0.001, explosion);
  player.runCommand("stopsound @s random.explode");
  
  // set health back to previous value before instant health
  health.setCurrent(currentHp);
}