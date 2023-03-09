// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI

import { EntityHealthComponent, EntityHurtEvent, world } from "@minecraft/server";

/**
 * @typedef EntityDeathCallback
 * @property {(arg: EntityHurtEvent) => void} callback
 * @property {import("@minecraft/server").EntityEventOptions} options
 */
/**
 * @type {EntityDeathCallback[]}
 */
const callbacks = [];

// backend
world.events.entityHurt.subscribe((event) => {
  const { hurtEntity } = event;

  if (!hurtEntity) return;

  /** @type {EntityHealthComponent} */
  // @ts-expect-error
  const health = hurtEntity.getComponent(EntityHealthComponent.componentId);

  if (health.current > 0) return;

  for (const callback of callbacks) {
    const { entities, entityTypes } = callback.options;
    if (entities instanceof Array && !entities?.includes(hurtEntity)) break;
    if (entityTypes instanceof Array && !entityTypes?.includes(hurtEntity.typeId)) break;
    callback.callback(event);
  };
});


/**
 * Manages callbacks that are connected to when an entity dies.
 */
class EntityDeathEventSignal {
  /**
   * @remarks
   * Adds a callback that will be called when an entity dies.
   * @param {(arg: EntityHurtEvent) => void} callback
   * @param {import("@minecraft/server").EntityEventOptions} options
   * @returns {(arg: EntityHurtEvent) => void}
   */
  subscribe(callback, options = {}) {
    callbacks.push({ options, callback });
    return callback;
  };
  /**
   * @remarks
   * Removes a callback from being called when an entity dies.
   * @param {(arg: EntityHurtEvent) => void} callback
   * @throws This function can throw errors.
   */
  unsubscribe(callback) {
    const index = callbacks.findIndex((value) => value.callback === callback);
    callbacks.splice(index);
  };
}

const entityDeath = new EntityDeathEventSignal();

export { entityDeath, EntityDeathEventSignal };
