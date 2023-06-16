// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Block, Entity, EntityHitEntityAfterEvent, Player, world } from "@minecraft/server";

/**
 * @implements {Omit<EntityHitEntityAfterEvent, "damagingEntity">}
 */
export class EntityCriticalHitAfterEvent {
  /**
   * @param {Entity} damagingEntity
   * @param {Entity} hitEntity
   */
  constructor(damagingEntity, hitEntity) {
    if (!(damagingEntity instanceof Player)) {
      console.log("Failed to call function EntityCriticalHitAfterEvent, damagingEntity is not a player");
      return;
    };
    
    this.player = damagingEntity;
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
   * Entity that was hit by the attack, or undefined if the hit
   * attack did not hit an damagingEntity. If both hitEntity and hitBlock
   * are undefined, then the damagingEntity basically swiped into the
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
   * @param {EntityHitEntityAfterEvent} event 
   */
  trigger(event) {
    this.handlers.forEach((callback) => callback(new EntityCriticalHitAfterEvent(event.damagingEntity, event.hitEntity)));
  }
  constructor() {
    world.afterEvents.entityHitEntity.subscribe((event) => {
      // checks if damagingEntity has a critical hit and is a player
      if (event.damagingEntity instanceof Player && !!event.hitEntity && event.damagingEntity.getVelocity().y !== 0) this.trigger(event);
    }); 
  }
}

export const damagingEntityCriticalHit = new EntityCriticalHitAfterEventSignal();
