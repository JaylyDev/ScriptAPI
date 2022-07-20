/**
 * @license MIT
 * @author JaylyMC
 */
import { EntityHealthComponent, world, Entity } from "mojang-minecraft";

/**
 * Contains information related to an entity death.
 */
export class EntityDeathEvent {
  /**
   * @param {string} cause
   * @param {number} damage
   * @param {Entity} damagingEntity
   * @param {Entity} hurtEntity
   * @param {Entity} projectile
   */
  constructor (cause, damage, damagingEntity, hurtEntity, projectile) {
    this.cause = cause;
    this.damage = damage;
    this.damagingEntity = damagingEntity;
    this.deadEntity = hurtEntity;
    this.projectile = projectile;
  };
};

/**
 * Manages callbacks that are connected to when an entity dies.
 */
export class EntityDeathEventSignal {
  /**
   * Subscribe
   * @param {(arg: EntityDeathEvent) => void} arg 
   * @return {(arg: EntityDeathEvent) => void}
   */
  subscribe (arg) {
    arg["entityDeath"] = true;
    
    let callback = world.events.entityHurt.subscribe(function ({ cause, damage, damagingEntity, hurtEntity, projectile }) {
      if (arg["entityDeath"] !== true) world.events.entityHurt.unsubscribe(callback);
      /** @type {EntityHealthComponent} */
      // @ts-ignore
      const health = hurtEntity.getComponent("health");

      if (health.current <= 0) arg(new EntityDeathEvent(cause, damage, damagingEntity, hurtEntity, projectile));
    });

    return arg;
  };

  /**
   * Unsubscribe
   * @param {(arg: EntityDeathEvent) => void} arg 
   * @return {void}
   */
  unsubscribe (arg) {
    arg["entityDeath"] = false;
  };
};