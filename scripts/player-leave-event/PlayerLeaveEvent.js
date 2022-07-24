/**
 * @license MIT
 * @author JaylyMC
 */
import { world, Player } from "mojang-minecraft";
import "mojang-gametest";

/**
 * Contains information regarding a player that has left the
 * world.
 */
export class PlayerLeaveEvent {
  /**
   * @param {Player} player 
   */
  constructor (player) {
    this.player = player;
  };
};

/**
 * Manages callbacks that are connected to a player leaving the
 * world.
 */
export class PlayerLeaveEventSignal {
  /**
   * @remarks
   * Adds a callback that will be called when a player leaves the
   * world.
   * @param {(arg: PlayerLeaveEvent) => void} callback 
   * @return {(arg: PlayerLeaveEvent) => void}
   */
  subscribe (callback) {
    callback["playerLeave"] = true;

    let players = [...world.getPlayers()];
    let executedPlayers = [];
    let currentPlayers = [...world.getPlayers()];

    let TickEventCallback = world.events.tick.subscribe(() => {
      if (callback["playerLeave"] !== true) world.events.tick.unsubscribe(TickEventCallback);

      for (let player of players) {
        let executedPlayerIndex = executedPlayers.findIndex(executedPlayer => player === executedPlayer);
        if (!currentPlayers.includes(player) && executedPlayerIndex < 0) {
          executedPlayers.push(player);

          world.events.playerJoin.subscribe((playerJoinEvent) => {
            let playerIndex = executedPlayers.includes(playerJoinEvent.player);
            if (playerIndex >= 0) executedPlayers.splice(playerIndex);
          });
          
          // TODO: COPY AS MUCH PLAYER DATA AS POSSIBLY CAN BEFORE THEY DESPAWN
          callback(new PlayerLeaveEvent(player));
        };
      };

      players = [...world.getPlayers()];
    });

    return callback;
  };

  /**
   * @remarks
   * Removes a callback from being called when a player leaves
   * the world.
   * @param {(arg: PlayerLeaveEvent) => void} callback
   */
  unsubscribe (callback) {
    callback["playerLeave"] = false;
  };
};