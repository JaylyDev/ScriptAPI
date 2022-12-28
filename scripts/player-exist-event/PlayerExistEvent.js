/**
 * @license MIT
 * @author JaylyMC
 */
import { world, Player } from "mojang-minecraft";

/**
 * Contains information related to an player death.
 */
export class PlayerExistEvent {
  /**
   * @param {Player} player
   * @param {number} timeStamp
   */
  constructor (player, timeStamp) {
    this.player = player;
    this.timeTaken = timeStamp;
  };
};

/**
 * Manages callbacks that are connected to when an player dies.
 */
export class PlayerExistEventSignal {
  /**
   * Subscribe
   * @param {(arg: PlayerExistEvent) => void} arg 
   * @return {(arg: PlayerExistEvent) => void}
   */
  subscribe (arg) {
    arg["playerExist"] = true;
    
    let onPlayerJoin = world.events.playerJoin.subscribe(({player}) => {
      if (arg["playerExist"] !== true) {
        world.events.playerJoin.unsubscribe(onPlayerJoin);
        return;
      };

      let startTime = new Date().getTime();

      let onTick = world.events.tick.subscribe(() => {
        if (!![...world.getPlayers()].find(pl => pl === player)) {
          world.events.tick.unsubscribe(onTick);

          let endTime = new Date().getTime();
          arg(new PlayerExistEvent(player, endTime - startTime));
        };
      });
    });

    return arg;
  };

  /**
   * Unsubscribe
   * @param {(arg: PlayerExistEvent) => void} arg 
   * @return {void}
   */
  unsubscribe (arg) {
    arg["playerExist"] = false;
  };
};