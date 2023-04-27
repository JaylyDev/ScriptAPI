// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Block, Entity, EntityHitAfterEvent, Player, world } from "@minecraft/server";

/**
 * @implements {Omit<EntityHitAfterEvent, "entity">}
 */
export class EntityCriticalHitAfterEvent {
  /**
   * @param {Entity} entity
   * @param {Block} hitBlock
   * @param {Entity} hitEntity
   */
  constructor(entity, hitBlock, hitEntity) {
    if (!(entity instanceof Player)) {
      console.log("Failed to call function EntityCriticalHitAfterEvent, entity is not a player");
      return;
    };
    
    this.player = entity;
    this.hitBlock = hitBlock;
    this.hitEntity = hitEntity;
  };
  /**
   * @remarks
   * Entity that made a hit/melee attack.
   * @readonly
   * @type {Player}
   */
  player;
  /**
   * @remarks
   * Block that was hit by the attack, or undefined if the hit
   * attack did not hit a block. If both hitEntity and hitBlock
   * are undefined, then the entity basically swiped into the
   * air.
   * @readonly
   * @type {Block | undefined}
   */
  hitBlock;
  /**
   * @remarks
   * Entity that was hit by the attack, or undefined if the hit
   * attack did not hit an entity. If both hitEntity and hitBlock
   * are undefined, then the entity basically swiped into the
   * air.
   * @readonly
   * @type {Entity | undefined}
   */
  hitEntity;
};

export class EntityCriticalHitAfterEventSignal {
  /**
   * @private
   * @readonly
   * @type {((event: EntityCriticalHitAfterEvent) => void)[]}
   */
  handlers = [];
  /**
   * @param {(event: EntityCriticalHitAfterEvent) => void} callback
   */
  subscribe(callback) {
    this.handlers.push(callback);
    return callback;
  }
  /**
   * @param {(event: EntityCriticalHitAfterEvent) => void} callback
   */
  unsubscribe(callback) {
    this.handlers.splice(this.handlers.findIndex(v => v === callback));
  }
  /**
   * @private
   * @param {EntityHitAfterEvent} event 
   */
  trigger(event) {
    this.handlers.forEach((callback) => callback(new EntityCriticalHitAfterEvent(event.entity, event.hitBlock, event.hitEntity)));
  }
  constructor() {
    world.afterEvents.entityHit.subscribe((event) => {
      // checks if entity has a critical hit and is a player
      if (event.entity instanceof Player && !!event.hitEntity && event.entity.getVelocity().y !== 0) this.trigger(event);
    }); 
  }
}

export const entityCriticalHit = new EntityCriticalHitAfterEventSignal();
