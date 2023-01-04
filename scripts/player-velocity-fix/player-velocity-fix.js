// @ts-nocheck
// This file is auto-generated, if the file is not up to date
// please compile the index.ts file yourself
/**
 * @license MIT
 * @author JaylyMC
 * @project https://github.com/JaylyDev/GametestDB/
 */
import { Player, Location, MinecraftEntityTypes, MinecraftEffectTypes } from "@minecraft/server";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
import { Dimension, Entity, world } from "@minecraft/server";
/**
 * Main class for custom command functions, with the player that execute
 * this command with additional arguments split in an iterable iterator
 * string array.
 */
var Command = /** @class */ (function () {
    function Command(argv, player) {
        this.argv = (function () {
            var argv_1, argv_1_1, arg, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        argv_1 = __values(argv), argv_1_1 = argv_1.next();
                        _b.label = 1;
                    case 1:
                        if (!!argv_1_1.done) return [3 /*break*/, 4];
                        arg = argv_1_1.value;
                        return [4 /*yield*/, arg];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        argv_1_1 = argv_1.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (argv_1_1 && !argv_1_1.done && (_a = argv_1.return)) _a.call(argv_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        })();
        this.__player = player;
    }
    Object.defineProperty(Command.prototype, "player", {
        get: function () { return this.__player; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "argv0", {
        get: function () { return this.argv.next().value; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    return Command;
}());
export { Command };
;
/**
 * Contains a method that lets you run console commands within
 * Minecraft.
 */
// tslint:disable-next-line:no-unnecessary-class
var Commands = /** @class */ (function () {
    function Commands() {
    }
    /**
     * @remarks
     * Runs a particular command from the context.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @param target
     * Target to be used as context for the command to run
     * within.
     * @returns For commands that return data, returns a JSON structure with command response values.
     * @throws This function can throw errors.
     * @example commands.js
     * ```typescript
     *        Commands.run("say You got a new high score!");
     *        Commands.run("scoreboard players set @p score 10", world.getDimension("overworld"));
     * ```
     */
    Commands.run = function (commandString, target) {
        if (target === void 0) { target = world.getDimension("overworld"); }
        if (target instanceof Dimension || Entity)
            return target.runCommandAsync(commandString);
        else
            throw TypeError("Native type conversion failed");
    };
    ;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context.
     * Where possible - and especially for
     * long-running operations - you should use runCommandAsync
     * over runCommand.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @param target
     * Target to be used as context for the command to run
     * within.
     * @returns
     * For commands that return data, returns a CommandResult with
     * an indicator of command results.
     * @throws This function can throw errors.
     */
    Commands.runAsync = function (commandString, target) {
        if (target === void 0) { target = world.getDimension("overworld"); }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (target instanceof Dimension || Entity)
                    return [2 /*return*/, target.runCommandAsync(commandString)];
                else
                    throw TypeError("Native type conversion failed");
                return [2 /*return*/];
            });
        });
    };
    ;
    /**
     * @remarks
     * Registers a new custom command. This command will become
     * available in Minecraft via [prefix][command].
     * @param prefix
     * The prefix of this specific command. (Case sensitive)
     * @param command
     * Name of this specific command. (Case sensitive)
     * @param commandFunction
     * Implementation of the command function.
     * @throws
     * This function can throw error: You are not allow to register a new slash command.
     * @example example1.js
     * ```typescript
     *          Commands.register("!", "test", function (arg) {
     *              arg.player.runCommandAsync(`say ${arg.argv0} ${JSON.stringify([...arg.argv])}`);
     *          });
     * ```
     */
    Commands.register = function (prefix, command, commandFunction) {
        if (prefix.startsWith("/"))
            throw Error("Unable to register slash commands.");
        world.events.beforeChat.subscribe(function (arg) {
            var argv = arg.message.split(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g).filter(function (e) { return e.trim().length > 0; });
            if (argv[0] === "".concat(prefix).concat(command)) {
                arg.cancel = true;
                try {
                    commandFunction(new Command(argv, arg.sender));
                }
                catch (err) {
                    var statusMessage = JSON.parse(err).statusMessage;
                    console.error(err);
                    // @ts-ignore
                    !!arg.sender.tell ? arg.sender.tell("\u00A7c".concat(statusMessage)) : arg.sender.runCommandAsync("tellraw @s {\"rawtext\":[{\"text\": \"\u00A7c".concat(statusMessage, "\"}]}"));
                }
                ;
            }
            ;
        });
    };
    ;
    return Commands;
}());
export { Commands };
;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
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
 * @project https://github.com/JaylyDev/GametestDB/
 */
/**
 * The `timer` module exposes a global API for scheduling functions to
 * be called at some future period of time.
 *
 * The timer functions within this script implement a similar API as the timers API
 * provided by Web Browsers and Node.js but use a different internal implementation that is
 * built for QuickJS, specifically for Minecraft Bedrock Edition script APIs (experimental).
 */
/**
 * Internal timer class that can be used to reference
 * the set Timeout or Interval object.
 */
var Timer = /** @class */ (function () {
    function Timer(idleTimeout, idleStart, onTimeout, repeat, destroyed) {
        var args = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            args[_i - 5] = arguments[_i];
        }
        var _this = this;
        this._idleTimeout = idleTimeout;
        this._idleStart = idleStart;
        this._onTimeout = onTimeout;
        this._repeat = repeat;
        this._destroyed = destroyed;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var executionTime, executionTime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(repeat === true)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._destroyed];
                    case 2:
                        if ((_a.sent()) === true)
                            return [2 /*return*/];
                        executionTime = idleStart + idleTimeout;
                        if (new Date().getTime() >= executionTime) {
                            this._onTimeout.apply(this, __spreadArray([], __read(args), false));
                            this._idleStart = idleStart = new Date().getTime();
                        }
                        ;
                        return [3 /*break*/, 1];
                    case 3:
                        ;
                        return [3 /*break*/, 8];
                    case 4:
                        executionTime = idleStart + idleTimeout;
                        _a.label = 5;
                    case 5:
                        if (!(new Date().getTime() < executionTime)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this._destroyed];
                    case 6:
                        if ((_a.sent()) === true)
                            return [2 /*return*/];
                        return [3 /*break*/, 5];
                    case 7:
                        ;
                        this._onTimeout.apply(this, __spreadArray([], __read(args), false));
                        _a.label = 8;
                    case 8:
                        ;
                        return [2 /*return*/];
                }
            });
        }); })();
    }
    ;
    return Timer;
}());
;
var Timeout = /** @class */ (function (_super) {
    __extends(Timeout, _super);
    function Timeout(idleTimeout, idleStart, onTimeout, repeat, destroyed) {
        var args = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            args[_i - 5] = arguments[_i];
        }
        var _this = _super.apply(this, __spreadArray([idleTimeout, idleStart, onTimeout, repeat, destroyed], __read(args), false)) || this;
        _this._idleTimeout = idleTimeout;
        _this._idleStart = idleStart;
        _this._onTimeout = onTimeout;
        _this._repeat = repeat;
        _this._destroyed = destroyed;
        return _this;
    }
    ;
    return Timeout;
}(Timer));
;
/**
 * Internal timer class that can be used to reference
 * the set Immediate object.
 */
var Immediate = /** @class */ (function () {
    function Immediate(onImmediate) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _this = this;
        this._destroyed = false;
        this._onImmediate = onImmediate;
        this._argv = args;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._destroyed];
                    case 1:
                        if ((_a.sent()) === true)
                            return [2 /*return*/];
                        return [4 /*yield*/, this._onImmediate.apply(this, __spreadArray([], __read(args), false))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })();
    }
    ;
    return Immediate;
}());
;
function Validation(parameter, instance) {
    if (parameter instanceof instance)
        return;
    throw TypeError("Native type conversion failed");
}
;
/**
 * @param callback a function to execute as its first argument
 * @param ms the millisecond delay defined as a number as the second argument.
 * @param args Additional arguments may also be included and these will be passed on to the function.
 *
 * @example
 * ```js
 * function myFunc(arg) {
 *   console.log(`arg was => ${arg}`);
 * }
 *
 * setTimeout(myFunc, 1500, 'funky');
 * ```
 */
// @ts-ignore
function setTimeout(callback, ms) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    Validation(callback, Function);
    var idleTime = typeof ms === "number" ? ms : 1;
    var startTime = new Date().getTime();
    // @ts-ignore
    return new (Timeout.bind.apply(Timeout, __spreadArray([void 0, idleTime, startTime, callback, false, false], __read(args), false)))();
}
;
/**
 * By passing said object into the respective clear function,
 * execution of that object will be halted completely.
 * @param timeoutId Timeout object returned by `setTimeout()`
 */
// @ts-ignore
function clearTimeout(timeoutId) {
    if (!(timeoutId instanceof Timeout))
        return;
    timeoutId._destroyed = true;
    timeoutId._onTimeout = function () { };
}
;
/**
 * @param callback Takes a function argument that will run an infinite number of times
 * @param ms A given millisecond delay as the second argument
 * @param args Just like `setTimeout()`, additional arguments can be added beyond the delay,
 * and these will be passed on to the function call.
 * @example
 * ```js
 * function intervalFunc() {
 *   console.log('Cant stop me now!');
 * }
 *
 * setInterval(intervalFunc, 1500);
 * ```
 */
// @ts-ignore
function setInterval(callback, ms) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    Validation(callback, Function);
    var idleTime = typeof ms === "number" ? ms : 1;
    var startTime = new Date().getTime();
    // @ts-ignore
    return new (Timer.bind.apply(Timer, __spreadArray([void 0, idleTime, startTime, callback, true, false], __read(args), false)))();
}
;
/**
 * By passing said object into the respective clear function,
 * execution of that object will be halted completely.
 * @param intervalId Interval object returned by `setInterval()`
 */
// @ts-ignore
function clearInterval(intervalId) {
    if (!(intervalId instanceof Timer))
        return;
    intervalId._destroyed = true;
    intervalId._onTimeout = function () { };
}
;
/**
 * @param callback The function to execute
 * @param args Any subsequent arguments will be passed to the function when it is executed.
 *
 * @example
 * ```js
 * console.log('before immediate');
 *
 * setImmediate((arg) => {
 *   console.log(`executing immediate: ${arg}`);
 * }, 'so immediate');
 *
 * console.log('after immediate');
 * ```
 */
// @ts-ignore
function setImmediate(callback) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    Validation(callback, Function);
    // @ts-ignore
    return new (Immediate.bind.apply(Immediate, __spreadArray([void 0, callback], __read(args), false)))();
}
;
/**
 * By passing said object into the respective clear function,
 * execution of that object will be halted completely.
 * @param immediateId Immediate object returned by `setImmediate()`
 */
// @ts-ignore
function clearImmediate(immediateId) {
    if (!(immediateId instanceof Immediate))
        return;
    immediateId._destroyed = true;
    immediateId._onImmediate = function () { };
}
;
/**
 * Timers function are exported so developers
 * can choose which set of functions they want to
 * withdraw from the `timers` module.
 */
export { setTimeout, clearTimeout, setInterval, clearInterval, setImmediate, clearImmediate };
function trunc(x, decimal) {
    var y = Math.pow(10, decimal);
    return Math.trunc(x * y) / y;
}
;
/**
 * @remarks
 * Sets a velocity for the entity to move with.
 * Fixes GameTest native player.setVelocity
 * @param {Vector} velocity
 * @param {Player} player
 * @throws This function can throw errors.
*/
export function setVelocity(velocity, player) {
    if (!(player instanceof Player))
        throw TypeError("Native type conversion failed.");
    var entity = player.dimension.spawnEntity(MinecraftEntityTypes.minecart.id, player.location);
    entity.triggerEvent('minecraft:ageable_grow_up'); // Make them adult
    entity.triggerEvent('minecraft:on_saddled'); // Add saddle to pig
    var health = entity.getComponent('health');
    var movement = entity.getComponent('movement');
    var rideable = entity.getComponent('rideable');
    entity.addEffect(MinecraftEffectTypes.invisibility, 0x7fff, 255, false); // makes the entity invisible
    entity.addEffect(MinecraftEffectTypes.resistance, 0x7fff, 255, false); // makes the entity invisible
    entity.setVelocity(velocity);
    var onInterval = setInterval(function (isEntityMoving) {
        try {
            var _a = isEntityMoving.velocity, x = _a.x, y = _a.y, z = _a.z;
            if (trunc(x, 2) === 0 && trunc(y, 1) === 0 && trunc(z, 2) === 0) {
                clearInterval(onInterval); // clear timer
                rideable === null || rideable === void 0 ? void 0 : rideable.ejectRider(player); // eject rider
                // teleport entity to void to avoid mob loot drops
                var location_1 = entity.location;
                entity.teleport(new Location(location_1.x, -100, location_1.z), entity.dimension, 0, 0);
                entity.kill();
            }
            else {
                // Force the player to ride the entity until the entity lands
                Commands.runAsync("ride \"".concat(player.name, "\" start_riding @s teleport_rider"), entity);
                movement === null || movement === void 0 ? void 0 : movement.setCurrent(0);
                health === null || health === void 0 ? void 0 : health.resetToMaxValue();
            }
            ;
        }
        catch (error) {
            console.error(error);
        }
    }, 10, entity);
}
;
