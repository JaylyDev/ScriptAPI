var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * @license MIT
 * @author JaylyMC
 * @link https://github.com/JaylyDev/GameTestDB
 */
import { world, Vector } from "@minecraft/server";
import "@minecraft/server-gametest"; // import "@minecraft/server-gametest" native module to support Simulated Players
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
var Player = /** @class */ (function () {
    /**
     * @remarks
     * Manually assign some player property to the new player class
     * before failed to get property due to GameTest can't fetch
     * despawned entities.
     * @param {MinecraftPlayer} player
     */
    function Player(player) {
        // PRIVATE PROPERTIES
        // This properties should not be used by public
        try {
            this.__PlayerBlockFromViewDirection = player.getBlockFromViewDirection();
        }
        catch (_a) { }
        ;
        try {
            this.__PlayerEntitiesFromViewDirection = player.getEntitiesFromViewDirection();
        }
        catch (_b) { }
        ;
        this.__PlayerComponents = cloneJSON(player.getComponents());
        this.__PlayerTags = player.getTags();
        // PUBLIC PROPERTIES
        this.dimension = player.dimension;
        this.headLocation = player.headLocation;
        this.id = player.id;
        this.isSneaking = player.isSneaking;
        this.location = player.location;
        this.name = player.name;
        this.nameTag = player.nameTag;
        this.rotation = player.rotation;
        this.scoreboard = player.scoreboard;
        this.selectedSlot = player.selectedSlot;
        this.target = player.target;
        this.velocity = player.velocity;
        this.viewDirection = new Vector(player.viewDirection.x, player.viewDirection.y, player.viewDirection.z);
    }
    /**
     * @remarks
     * Gets the first block that intersects with the vector of the
     * view of this entity.
     * @throws This function can throw errors.
     */
    Player.prototype.getBlockFromViewDirection = function () {
        return this.__PlayerBlockFromViewDirection;
    };
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
    Player.prototype.getComponent = function (componentId) {
        return this.__PlayerComponents.find(function (component) {
            if (!componentId.startsWith("minecraft:"))
                componentId = "minecraft:" + componentId;
            if (component.id === componentId)
                return true;
        });
    };
    ;
    /**
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     */
    Player.prototype.getComponents = function () {
        return this.__PlayerComponents;
    };
    ;
    /**
     * @remarks
     * Gets the first entity that intersects with the vector of the
     * view of this entity.
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    Player.prototype.getEntitiesFromViewDirection = function () {
        return this.__PlayerEntitiesFromViewDirection;
    };
    ;
    /**
     * @remarks
     * Returns all tags associated with an entity.
     * @throws This function can throw errors.
     */
    Player.prototype.getTags = function () {
        return this.__PlayerTags;
    };
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
    Player.prototype.hasComponent = function (componentId) {
        var componentIndex = this.__PlayerComponents.findIndex(function (entityComponent) { return entityComponent.id === componentId; });
        if (componentIndex < 0)
            return false;
        else
            return true;
    };
    ;
    /**
     * @remarks
     * Tests whether an entity has a particular tag.
     * @param tag
     * Identifier of the tag to test for.
     * @throws This function can throw errors.
     */
    Player.prototype.hasTag = function (tag) {
        var tagIndex = this.__PlayerTags.findIndex(function (playerTag) { return playerTag === tag; });
        if (tagIndex < 0)
            return false;
        else
            return true;
    };
    ;
    ;
    return Player;
}());
;
/**
 * Contains information regarding a player that has left the
 * world.
 */
var PlayerLeaveEvent = /** @class */ (function () {
    function PlayerLeaveEvent(player) {
        this.player = player;
    }
    ;
    return PlayerLeaveEvent;
}());
export { PlayerLeaveEvent };
;
/**
 * Manages callbacks that are connected to a player leaving the
 * world.
 */
var PlayerLeaveEventSignal = /** @class */ (function () {
    function PlayerLeaveEventSignal() {
    }
    /**
     * @remarks
     * Adds a callback that will be called when a player leaves the
     * world.
     * @param {(arg: PlayerLeaveEvent) => void} callback
     * @return {(arg: PlayerLeaveEvent) => void}
     */
    PlayerLeaveEventSignal.prototype.subscribe = function (callback) {
        callback["playerLeave"] = true;
        var players = __spreadArray([], world.getPlayers(), true).map(function (pl) { return new Player(pl); });
        var executedPlayers = [];
        var TickEventCallback = world.events.tick.subscribe(function () {
            if (callback["playerLeave"] !== true)
                world.events.tick.unsubscribe(TickEventCallback);
            // Change from player class to custom player class
            var currentPlayers = __spreadArray([], world.getPlayers(), true);
            var _loop_1 = function (player) {
                var executedPlayerIndex = executedPlayers.findIndex(function (executedPlayer) { return comparePlayer(executedPlayer, player); });
                if (!currentPlayers.find(function (pl) { return comparePlayer(pl, player); }) && executedPlayerIndex < 0) {
                    executedPlayers.push(player);
                    var onPlayerSpawn_1 = world.events.playerSpawn.subscribe(function (playerJoinEvent) {
                        var playerIndex = executedPlayers.findIndex(function (pl) { return comparePlayer(pl, playerJoinEvent.player); });
                        if (playerIndex >= 0) {
                            executedPlayers.splice(playerIndex);
                            world.events.playerSpawn.unsubscribe(onPlayerSpawn_1);
                        }
                        ;
                    });
                    callback(new PlayerLeaveEvent(player));
                }
                ;
            };
            for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
                var player = players_1[_i];
                _loop_1(player);
            }
            ;
            players = [];
            players = __spreadArray([], world.getPlayers(), true).map(function (pl) { return new Player(pl); });
        });
        return callback;
    };
    ;
    /**
     * @remarks
     * Removes a callback from being called when a player leaves
     * the world.
     * @param {(arg: PlayerLeaveEvent) => void} callback
     */
    PlayerLeaveEventSignal.prototype.unsubscribe = function (callback) {
        callback["playerLeave"] = false;
    };
    ;
    return PlayerLeaveEventSignal;
}());
export { PlayerLeaveEventSignal };
;
