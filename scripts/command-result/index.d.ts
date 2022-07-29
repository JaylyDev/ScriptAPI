/**
 * @license MIT
 * @author JaylyMC
 * @project https://github.com/JaylyDev/GametestDB/
 */
/**
 * Command result that returns when using runCommand function
 * according to {@link [CommandComponent.md by FrankyRay](https://github.com/FrankyRay/The-Explorance-Lite-Addon/blob/main/docs/CommandComponent.md)}.
 */
export interface CommandResult {
  /**
   * Number of success commands run. Used in runCommandAsync function
   */ 
  readonly 'successCount'?: 1;
  /**
   * Code number that indicates the response of the command.
   */
  readonly 'statusCode'?: 0 | -2147352576 | -2147483648;
  /**
   * Message that indicates the response of the command.
   */
  readonly 'statusMessage'?: string;
  /**
   * Players that have been affected by the command.
   * Used in the following commands:
   * - `/ability`
   * - `/camerashake`
   * - `/clear`
   * - `/effect`
   * - `/gamemode`
   */
  readonly 'player'?: string[];
  /**
   * The value of ability to the player.
   * Used in `/ability` command.
   */
  readonly 'value'?: boolean;
  /**
   * Players that met the testfor command requirement.
   * Used in `/testfor` command
   */
  readonly 'victim'?: string[];
  /**
   * Items that are removed from the player.
   * Used in `/clear` command
   */
  readonly 'itemsRemoved'?: `${number}`[];
  /**
   * When testing is the item on the player using
   * `/clear [player: target] [itemName: Item] [data: int] [maxCount: 0]`
   */
  readonly 'playerTest'?: string[];
  /**
   * Returns how many blocks are cloned.
   * Used in `/clone` command
   */
  readonly 'count'?: number;
  /**
   * Returns players that took damage from `/damage` command.
   */
  readonly 'hurtActors'?: string[];
  /**
   * Returns players that did not take damage from `/damage` command.
   */
  readonly 'unhurtActors'?: string[];
  /**
   * Difficulty that is set to when using `/difficulty` command
   */
  readonly 'difficulty'?: 'PEACEFUL' | 'EASY' | 'NORMAL' | 'HARD';
  /**
   * The effect amplifier / level, start from 0.
   * Used in `/effect` command.
   */
  readonly 'amplifier'?: number;
  /**
   * Minecraft effect that is given to players.
   * Used in `/effect` command.
   */
  readonly 'effect'?: 'empty' | 'speed' | 'slowness' | 'haste' | 'mining_fatigue' | 'strength' | 'instant_health' | 'instant_damage' | 'jump_boost' | 'nausea' | 'regeneration' | 'resistance' | 'fire_resistance' | 'water_breathing' | 'invisibility' | 'blindness' | 'night_vision' | 'hunger' | 'weakness' | 'poison' | 'wither' | 'health_boost' | 'absorption' | 'saturation' | 'levitation' | 'fatal_poison' | 'conduit_power' | 'slow_falling' | 'bad_omen' | 'village_hero' | 'darkness';
  /**
   * Effect duration.
   * Used in `/effect` command.
   */
  readonly 'seconds'?: number;
  /**
   * Players that the `/enchant` command is executed on.
   */
  readonly 'playerNames'?: string[];
  /**
   * The block name that used to fill the area successfully.
   * Used in `/fill` command.
   */
  readonly 'blockName'?: string;
  /**
   * The amount of blocks are filled with `/fill` command.
   */
  readonly 'fillCount'?: number;
  /**
   * The gamemode the command set the players to.
   * Used in `/gamemode` command.
   */
  readonly 'gamemode'?: `%createWorldScreen.gameMode.${'creative' | 'survival' | 'adventure' | 'serverDefault' | 'spectator'}`;
}