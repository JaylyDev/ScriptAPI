// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>

/**
 * @license MIT
 * @author JaylyMC
 */
import { EntityHealthComponent, world, Player, system } from "@minecraft/server";
import { deprecate } from "deprecate/deprecate";

/**
 * Contains information related to an player death.
 * @deprecated
 */
export class PlayerDeathEvent {
  /**
   * @param {Player} player 
   */
  constructor (player) {
    this.player = player;
  };
};

/**
 * Manages callbacks that are connected to when an player dies.
 * @deprecated
 */
export class PlayerDeathEventSignal {
  /**
   * Subscribe
   * @param {(arg: PlayerDeathEvent) => void} arg 
   * @return {(arg: PlayerDeathEvent) => void}
   */
  subscribe (arg) {
    arg["playerDeath"] = true;
    /**
     * @type {Player[]}
     */
    const deadPlayers = [];
    let callback = system.runInterval(() => {
      for (let player of world.getPlayers()) {
        if (!player.hasComponent("health")) return;
        /**
         * @type {EntityHealthComponent}
         */
        // @ts-ignore
        let health = player.getComponent("health");
        if (health.current === 0 && arg["playerDeath"] === true) {
          const playerIndex = deadPlayers.findIndex(pl => pl.name === player.name);
          if (playerIndex < 0) {
            arg(new PlayerDeathEvent(player));
            deadPlayers.push(player);
            let playerDeathCallback = system.runInterval(() => {
              if (health.current > 0) {
                deadPlayers.splice(playerIndex, 1);
                system.clearRun(playerDeathCallback);
              };
            });
          }      
        } else if (arg["playerDeath"] === false) {
          system.clearRun(callback);
        };
      }
    });

    return arg;
  };

  /**
   * Unsubscribe
   * @param {(arg: PlayerDeathEvent) => void} arg 
   * @return {void}
   */
  unsubscribe (arg) {
    arg["playerDeath"] = false;
  };
};

PlayerDeathEventSignal.prototype.subscribe = deprecate(
  PlayerDeathEventSignal.prototype.subscribe,
  'PlayerDeathEvent.subscribe() is deprecated. Use EntityDeathEvent.subscribe() instead.',
);

PlayerDeathEventSignal.prototype.unsubscribe = deprecate(
  PlayerDeathEventSignal.prototype.unsubscribe,
  'PlayerDeathEvent.unsubscribe() is deprecated. Use EntityDeathEvent.unsubscribe() instead.'
);