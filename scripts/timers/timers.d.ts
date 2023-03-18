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
declare class Timer {
    _idleTimeout: number;
    _idleStart: number;
    _onTimeout: (...args: any) => void;
    _repeat: boolean;
    _destroyed: boolean;
    constructor(idleTimeout: number, idleStart: number, onTimeout: (...args: any) => void, repeat: boolean, destroyed: boolean, ...args: any);
}
declare class Timeout extends Timer {
    _idleTimeout: number;
    _idleStart: number;
    _onTimeout: (...args: any) => void;
    _repeat: boolean;
    _destroyed: boolean;
    constructor(idleTimeout: number, idleStart: number, onTimeout: (...args: any) => void, repeat: boolean, destroyed: boolean, ...args: any);
}
/**
 * Internal timer class that can be used to reference
 * the set Immediate object.
 */
declare class Immediate {
    _onImmediate: (...args: any) => void;
    _argv: any[];
    _destroyed: boolean;
    constructor(onImmediate: (...args: any) => void, ...args: any);
}
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
declare function setTimeout(callback: (...args: any) => void, ms?: number, ...args: any): Timeout;
/**
 * By passing said object into the respective clear function,
 * execution of that object will be halted completely.
 * @param timeoutId Timeout object returned by `setTimeout()`
 */
declare function clearTimeout(timeoutId: Timeout | undefined): void;
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
declare function setInterval(callback: (...args: any) => void, ms?: number, ...args: any): Timer;
/**
 * By passing said object into the respective clear function,
 * execution of that object will be halted completely.
 * @param intervalId Interval object returned by `setInterval()`
 */
declare function clearInterval(intervalId: Timer | undefined): void;
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
declare function setImmediate(callback: (args: void) => void, ...args: any): Immediate;
/**
 * By passing said object into the respective clear function,
 * execution of that object will be halted completely.
 * @param immediateId Immediate object returned by `setImmediate()`
 */
declare function clearImmediate(immediateId: Immediate | undefined): void;
/**
 * Timers function are exported so developers
 * can choose which set of functions they want to
 * withdraw from the `timers` module.
 */
export { setTimeout, clearTimeout, setInterval, clearInterval, setImmediate, clearImmediate };
