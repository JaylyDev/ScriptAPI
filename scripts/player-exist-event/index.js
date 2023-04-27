// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player, world } from "@minecraft/server";

/**
 * @type {((arg: PlayerExistEvent) => void)[]}
 */
const callbacks = [];

export class PlayerExistEvent {
  /**
   * If true, this is the initial spawn of a player after joining
   * the game.
   * @type {boolean}
   * @readonly
   */
  initialSpawn;
  /**
   * Object that represents the player that joined the game.
   * @type {Player}
   * @readonly
   */
  player;
  /**
   * Opaque string identifier of the player that joined the game.
   * @type {string}
   * @readonly
   */
  playerId;
  /**
   * Name of the player that has joined.
   * @type {string}
   * @readonly
   */
  playerName;
  /**
   * @param {boolean} initialSpawn
   * @param {Player} player
   * @param {string} playerId
   * @param {string} playerName
   */
  constructor (initialSpawn, player, playerId, playerName) {
    this.initialSpawn = initialSpawn;
    this.player = player;
    this.playerId = playerId;
    this.playerName = playerName;
  };
};

// backend
world.afterEvents.playerJoin.subscribe((event) => {
  const { playerId, playerName } = event;

  const onPlayerSpawn = world.afterEvents.playerSpawn.subscribe((event) => {
    const { player, initialSpawn } = event;

    if (player.name === playerName && player.id === playerId && initialSpawn === true) {
      world.afterEvents.playerSpawn.unsubscribe(onPlayerSpawn);

      for (const callback of callbacks) {        
        callback(new PlayerExistEvent(initialSpawn, player, playerId, playerName));
      };
    };
  });
});


/**
 * Manages callbacks that are connected to when an entity dies.
 */
class PlayerExistEventSignal {
  /**
   * @remarks
   * Adds a callback that will be called when an entity dies.
   * @param {(arg: PlayerExistEvent) => void} callback
   * @param {import("@minecraft/server").EntityEventOptions} options
   * @returns {(arg: PlayerExistEvent) => void}
   */
  subscribe(callback, options = {}) {
    callbacks.push(callback);
    return callback;
  };
  /**
   * @remarks
   * Removes a callback from being called when an entity dies.
   * @param {(arg: PlayerExistEvent) => void} callback
   * @throws This function can throw errors.
   */
  unsubscribe(callback) {
    const index = callbacks.findIndex((value) => value === callback);
    callbacks.splice(index);
  };
}

const playerExist = new PlayerExistEventSignal();

export { playerExist, PlayerExistEventSignal };