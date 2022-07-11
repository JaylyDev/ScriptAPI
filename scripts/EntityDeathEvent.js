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
   * @param {Entity} entity 
   */
  constructor (entity) {
    this.deadEntity = entity;
  };
};

/**
 * Manages callbacks that are connected to when an entity dies.
 */
export class EntityDeathEventSignal {
  /**
   * @type {(arg: import("mojang-minecraft").TickEvent) => void}
   * @protected
   */
  callback;
  /**
   * Subscribe
   * @param {(arg: EntityDeathEvent) => void} arg 
   * @return {(arg: EntityDeathEvent) => void}
   */
  subscribe (arg) {
    this.callback = world.events.tick.subscribe(() => {
      for (let entity of world.getDimension("overworld").getEntities()) {
        /**
         * @type {EntityHealthComponent}
         */
        // @ts-ignore
        let health = entity.getComponent("health");
        if (health.current === 0) {
          arg(new EntityDeathEvent(entity))
        };
      }
    });

    return arg;
  };

  /**
   * Unsubscribe
   * @return {void}
   */
  unsubscribe () {
    this.callback = () => {};
  };
};