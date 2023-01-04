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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
import { Dimension, Entity, world } from "@minecraft/server";
/**
 * Main class for custom command functions, with the player that execute
 * this command with additional arguments split in an iterable iterator
 * string array.
 */
var Command = /** @class */ (function () {
    function Command(argv, player) {
        this.argv = (function () { var _i, argv_1, arg; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, argv_1 = argv;
                    _a.label = 1;
                case 1:
                    if (!(_i < argv_1.length)) return [3 /*break*/, 4];
                    arg = argv_1[_i];
                    return [4 /*yield*/, arg];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        }); })();
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
                switch (_a.label) {
                    case 0:
                        if (!(target instanceof Dimension || Entity)) return [3 /*break*/, 2];
                        return [4 /*yield*/, target.runCommandAsync(commandString)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: throw TypeError("Native type conversion failed");
                }
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
                    arg.sender.tell("\u00A7c".concat(statusMessage));
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
