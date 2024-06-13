// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { world, system } from "@minecraft/server";
import "@minecraft/server-gametest"; // import "@minecraft/server-gametest" native module to support Simulated Players
import { Vector3Builder } from "@minecraft/math";
/**
 * @license MIT
 * @author JaylyMC
 * @link https://github.com/JaylyDev/GametestDB/tree/main/scripts/json-stringify
 */
function cloneJSON(obj) {
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
}
;
/**
 * Compare 2 player object to detect if they're the same player
 * @param playerA
 * @param playerB
 * @returns {boolean}
 */
function comparePlayer(playerA, playerB) {
    return playerA.id === playerB.id &&
        playerA.name === playerB.name &&
        playerA.dimension === playerB.dimension;
}
;
/**
 * Player wrapper to save as much data into a new object.
 *
 * Keeping this class private to avoid confusion between
 * Player class from "@minecraft/server" module.
 */
class Player {
    /**
     * @remarks
     * Gets the first block that intersects with the vector of the
     * view of this entity.
     * @throws This function can throw errors.
     */
    getBlockFromViewDirection() {
        return this.__PlayerBlockFromViewDirection;
    }
    ;
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
    getComponent(componentId) {
        return this.__PlayerComponents.find(function (component) {
            if (!componentId.startsWith("minecraft:"))
                componentId = "minecraft:" + componentId;
            if (component.typeId === componentId)
                return true;
        });
    }
    ;
    /**
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     */
    getComponents() {
        return this.__PlayerComponents;
    }
    ;
    /**
     * @remarks
     * Gets the first entity that intersects with the vector of the
     * view of this entity.
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getEntitiesFromViewDirection() {
        return this.__PlayerEntitiesFromViewDirection;
    }
    ;
    /**
     * @remarks
     * Returns all tags associated with an entity.
     * @throws This function can throw errors.
     */
    getTags() {
        return this.__PlayerTags;
    }
    ;
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     */
    hasComponent(componentId) {
        let componentIndex = this.__PlayerComponents.findIndex((entityComponent) => entityComponent.id === componentId);
        if (componentIndex < 0)
            return false;
        else
            return true;
    }
    ;
    /**
     * @remarks
     * Tests whether an entity has a particular tag.
     * @param tag
     * Identifier of the tag to test for.
     * @throws This function can throw errors.
     */
    hasTag(tag) {
        let tagIndex = this.__PlayerTags.findIndex(playerTag => playerTag === tag);
        if (tagIndex < 0)
            return false;
        else
            return true;
    }
    ;
    /**
     * @remarks
     * Manually assign some player property to the new player class
     * before failed to get property due to GameTest can't fetch
     * despawned entities.
     * @param {MinecraftPlayer} player
     */
    constructor(player) {
        // PRIVATE PROPERTIES
        // This properties should not be used by public
        try {
            this.__PlayerBlockFromViewDirection = player.getBlockFromViewDirection();
        }
        catch { }
        ;
        try {
            this.__PlayerEntitiesFromViewDirection = player.getEntitiesFromViewDirection();
        }
        catch { }
        ;
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
    }
    ;
}
;
/**
 * Contains information regarding a player that has left the
 * world.
 */
export class PlayerLeaveEvent {
    constructor(player) {
        this.player = player;
    }
    ;
}
;
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
    subscribe(callback) {
        callback["playerLeave"] = true;
        let players = [...world.getPlayers()].map(pl => new Player(pl));
        let executedPlayers = [];
        let TickEventCallback = system.runInterval(() => {
            if (callback["playerLeave"] !== true)
                system.clearRun(TickEventCallback);
            // Change from player class to custom player class
            let currentPlayers = [...world.getPlayers()];
            for (let player of players) {
                let executedPlayerIndex = executedPlayers.findIndex(executedPlayer => comparePlayer(executedPlayer, player));
                if (!currentPlayers.find(pl => comparePlayer(pl, player)) && executedPlayerIndex < 0) {
                    executedPlayers.push(player);
                    let onPlayerSpawn = world.afterEvents.playerSpawn.subscribe((playerJoinEvent) => {
                        let playerIndex = executedPlayers.findIndex(pl => comparePlayer(pl, playerJoinEvent.player));
                        if (playerIndex >= 0) {
                            executedPlayers.splice(playerIndex);
                            world.afterEvents.playerSpawn.unsubscribe(onPlayerSpawn);
                        }
                        ;
                    });
                    callback(new PlayerLeaveEvent(player));
                }
                ;
            }
            ;
            players = [];
            players = [...world.getPlayers()].map(pl => new Player(pl));
        });
        return callback;
    }
    ;
    /**
     * @remarks
     * Removes a callback from being called when a player leaves
     * the world.
     * @param {(arg: PlayerLeaveEvent) => void} callback
     */
    unsubscribe(callback) {
        callback["playerLeave"] = false;
    }
    ;
}
;
