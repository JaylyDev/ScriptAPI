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
                            this._onTimeout.apply(this, args);
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
                        this._onTimeout.apply(this, args);
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
        var _this = _super.apply(this, __spreadArray([idleTimeout, idleStart, onTimeout, repeat, destroyed], args, false)) || this;
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
                        return [4 /*yield*/, this._onImmediate.apply(this, args)];
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
    return new (Timeout.bind.apply(Timeout, __spreadArray([void 0, idleTime, startTime, callback, false, false], args, false)))();
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
    return new (Timer.bind.apply(Timer, __spreadArray([void 0, idleTime, startTime, callback, true, false], args, false)))();
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
    return new (Immediate.bind.apply(Immediate, __spreadArray([void 0, callback], args, false)))();
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
