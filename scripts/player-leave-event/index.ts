// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { world, Player as MinecraftPlayer, Dimension, Entity, EntityComponent, ScoreboardIdentity, Vector2, Vector3, PlayerSpawnAfterEvent, system, BlockRaycastHit, EntityRaycastHit } from "@minecraft/server";
import "@minecraft/server-gametest"; // import "@minecraft/server-gametest" native module to support Simulated Players
import { Vector3Builder } from "@minecraft/math";

/**
 * @license MIT
 * @author JaylyMC
 * @link https://github.com/JaylyDev/GametestDB/tree/main/scripts/json-stringify
 */
function cloneJSON (obj: object): any {
  if (obj === null || obj === undefined || typeof obj !== "object") {
    return obj;
  }
  if (obj instanceof Array) {
    var cloneA = [];
    for (var i = 0; i < obj.length; ++i) {
      cloneA[i] = cloneJSON(obj[i]);
    }
    return cloneA;
  }
  var cloneO = {};
  for (var e in obj) {
    cloneO[e] = cloneJSON(obj[e]);
  }
  return cloneO;
};

/**
 * Compare 2 player object to detect if they're the same player
 * @param playerA 
 * @param playerB 
 * @returns {boolean}
 */
function comparePlayer (playerA: Player | MinecraftPlayer, playerB: Player | MinecraftPlayer): boolean {
  return playerA.id === playerB.id &&
         playerA.name === playerB.name && 
         playerA.dimension === playerB.dimension;
};

/**
 * Player wrapper to save as much data into a new object.
 * 
 * Keeping this class private to avoid confusion between
 * Player class from "@minecraft/server" module.
 */
class Player {
  private '__PlayerBlockFromViewDirection': BlockRaycastHit;
  private '__PlayerComponents': EntityComponent[];
  private '__PlayerEntitiesFromViewDirection': EntityRaycastHit[];
  private '__PlayerTags': string[];
  /**
   * Dimension that the entity is currently within.
   * @throws This property can throw when used.
   */
  public readonly 'dimension': Dimension;
  /**
   * Location of the center of the head component of the player.
   * @throws This property can throw when used.
   */
  public readonly 'headLocation': Vector3;
  /**
   * Identifier for the player.
   * @throws This property can throw when used.
   */
  public readonly 'id': string;
  /**
   * True if the player is currently using a sneaking movement.
   */
  public readonly 'isSneaking': boolean;
  /**
   * Current location of the player.
   * @throws This property can throw when used.
   */
  public readonly 'location': Vector3;
  /**
   * Name of the player.
   * @throws This property can throw when used.
   */
  public readonly 'name': string;
  /**
   * Optional name tag of the player.
   */
  public readonly 'nameTag': string;
  /**
   * Main rotation of the entity.
   * @throws This property can throw when used.
   */
  public readonly 'rotation': Vector2;
  /**
   * Returns a scoreboard identity that represents this entity.
   * @throws This property can throw when used.
   */
  public readonly 'scoreboard': ScoreboardIdentity;
  /**
   * Manages the selected slot in the player's hotbar.
   */
  public readonly 'selectedSlotIndex': number;
  /**
   * Retrieves or sets an entity that is used as the target of
   * AI-related behaviors, like attacking. For players, which
   * don't use any AI semantics, this property does not do
   * anything.
   */
  public readonly 'target': Entity;
  /**
   * Current speed of the player across X, Y, and Z dimensions.
   * @throws This property can throw when used.
   */
  public readonly 'velocity': Vector3Builder;
  /**
   * Vector of the current view of the player.
   * @throws This property can throw when used.
   */
  public readonly 'viewDirection': Vector3Builder;
  readonly typeId: string;
  /**
   * @remarks
   * Gets the first block that intersects with the vector of the
   * view of this entity.
   * @throws This function can throw errors.
   */
  public getBlockFromViewDirection(): BlockRaycastHit {
    return this.__PlayerBlockFromViewDirection;
  };
  /**
   * @remarks
   * Gets a component (that represents additional capabilities)
   * for an entity.
   * @param componentId
   * The identifier of the component (e.g., 'minecraft:rideable')
   * to retrieve. If no namespace prefix is specified,
   * 'minecraft:' is assumed. If the component is not present on
   * the entity, undefined is returned.
   */
  getComponent(componentId: string): EntityComponent {
    return this.__PlayerComponents.find(function (component: EntityComponent) {
      if (!componentId.startsWith("minecraft:")) componentId = "minecraft:" + componentId;
      if (component.typeId === componentId) return true;
    });
  };
  /**
   * @remarks
   * Returns all components that are both present on this entity
   * and supported by the API.
   */
  public getComponents(): EntityComponent[] {
    return this.__PlayerComponents;
  };
  /**
   * @remarks
   * Gets the first entity that intersects with the vector of the
   * view of this entity.
   * Additional options for processing this raycast query.
   * @throws This function can throw errors.
   */
  public getEntitiesFromViewDirection(): EntityRaycastHit[] {
    return this.__PlayerEntitiesFromViewDirection;
  };
  /**
   * @remarks
   * Returns all tags associated with an entity.
   * @throws This function can throw errors.
   */
  public getTags(): string[] {
    return this.__PlayerTags;
  };
  /**
   * @remarks
   * Returns true if the specified component is present on this
   * entity.
   * @param componentId
   * The identifier of the component (e.g., 'minecraft:rideable')
   * to retrieve. If no namespace prefix is specified,
   * 'minecraft:' is assumed.
   */
  public hasComponent(componentId: string): boolean {
    let componentIndex = this.__PlayerComponents.findIndex((entityComponent: any) => entityComponent.id === componentId);

    if (componentIndex < 0) return false;
    else return true;
  };
  /**
   * @remarks
   * Tests whether an entity has a particular tag.
   * @param tag
   * Identifier of the tag to test for.
   * @throws This function can throw errors.
   */
  public hasTag(tag: string): boolean {
    let tagIndex = this.__PlayerTags.findIndex(playerTag => playerTag === tag);

    if (tagIndex < 0) return false;
    else return true;
  };
  /**
   * @remarks
   * Manually assign some player property to the new player class
   * before failed to get property due to GameTest can't fetch
   * despawned entities.
   * @param {MinecraftPlayer} player 
   */
  public constructor (player: MinecraftPlayer) {
    // PRIVATE PROPERTIES
    // This properties should not be used by public
    try { this.__PlayerBlockFromViewDirection = player.getBlockFromViewDirection(); } catch {};
    try { this.__PlayerEntitiesFromViewDirection = player.getEntitiesFromViewDirection(); } catch {};
    this.__PlayerComponents = cloneJSON(player.getComponents());
    this.__PlayerTags = player.getTags();

    // PUBLIC PROPERTIES
    const velocity = player.getVelocity();
    this.dimension = player.dimension;
    this.headLocation = player.getHeadLocation();
    this.id = player.id;
    this.typeId = player.typeId;
    this.isSneaking = player.isSneaking;
    this.location = player.location;
    this.name = player.name;
    this.nameTag = player.nameTag;
    this.rotation = player.getRotation();
    this.scoreboard = player.scoreboardIdentity;
    this.selectedSlotIndex = player.selectedSlotIndex;
    this.target = player.target;
    this.velocity = new Vector3Builder(velocity);
    this.viewDirection = new Vector3Builder(player.getViewDirection());
  };
};

/**
 * Contains information regarding a player that has left the
 * world.
 */
export class PlayerLeaveEvent {
  player: Player;

  constructor (player: Player) {
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
  subscribe (callback: (arg: PlayerLeaveEvent) => void): (arg: PlayerLeaveEvent) => void {
    callback["playerLeave"] = true;

    let players: Player[] = [...world.getPlayers()].map(pl => new Player(pl));
    let executedPlayers: Player[] = [];

    let TickEventCallback = system.runInterval(() => {
      if (callback["playerLeave"] !== true) system.clearRun(TickEventCallback);

      // Change from player class to custom player class
      let currentPlayers: MinecraftPlayer[] = [...world.getPlayers()];

      for (let player of players) {
        let executedPlayerIndex = executedPlayers.findIndex(executedPlayer => comparePlayer(executedPlayer, player));
        if (!currentPlayers.find(pl => comparePlayer(pl, player)) && executedPlayerIndex < 0) {
          executedPlayers.push(player);

          let onPlayerSpawn: (arg: PlayerSpawnAfterEvent) => void = world.afterEvents.playerSpawn.subscribe((playerJoinEvent) => {
            let playerIndex = executedPlayers.findIndex(pl => comparePlayer(pl, playerJoinEvent.player));
            if (playerIndex >= 0) {
              executedPlayers.splice(playerIndex);
              world.afterEvents.playerSpawn.unsubscribe(onPlayerSpawn);
            };
          });
          
          callback(new PlayerLeaveEvent(player));
        };
      };

      players = [];
      players = [...world.getPlayers()].map(pl => new Player(pl));
    });

    return callback;
  };

  /**
   * @remarks
   * Removes a callback from being called when a player leaves
   * the world.
   * @param {(arg: PlayerLeaveEvent) => void} callback
   */
  unsubscribe (callback: (arg: PlayerLeaveEvent) => void): void {
    callback["playerLeave"] = false;
  };
};