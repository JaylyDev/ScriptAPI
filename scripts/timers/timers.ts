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
class Timer {
    _idleTimeout: number;
    _idleStart: number;
    _onTimeout: (...args: any) => void;
    _repeat: boolean;
    _destroyed: boolean;

    constructor(idleTimeout: number, idleStart: number, onTimeout: (...args: any) => void, repeat: boolean, destroyed: boolean, ...args: any) {
        this._idleTimeout = idleTimeout;
        this._idleStart = idleStart;
        this._onTimeout = onTimeout;
        this._repeat = repeat;
        this._destroyed = destroyed;

        (async (): Promise<void> => {
            if (repeat === true) {     
                while (true) {
                    if (await this._destroyed === true) return;
    
                    const executionTime = idleStart + idleTimeout;
                    if (new Date().getTime() >= executionTime) {
                        this._onTimeout(...args);
                        this._idleStart = idleStart = new Date().getTime();
                    };
                };
            } else {
                const executionTime = idleStart + idleTimeout;
                while (new Date().getTime() < executionTime) {
                    if (await this._destroyed === true) return;
                };
                
                this._onTimeout(...args);
            };
        })();
    };
};

class Timeout extends Timer {
    _idleTimeout: number;
    _idleStart: number;
    _onTimeout: (...args: any) => void;
    _repeat: boolean;
    _destroyed: boolean;

    constructor(idleTimeout: number, idleStart: number, onTimeout: (...args: any) => void, repeat: boolean, destroyed: boolean, ...args: any) {
        super(idleTimeout, idleStart, onTimeout, repeat, destroyed, ...args);
        
        this._idleTimeout = idleTimeout;
        this._idleStart = idleStart;
        this._onTimeout = onTimeout;
        this._repeat = repeat;
        this._destroyed = destroyed;
    };
};

/**
 * Internal timer class that can be used to reference
 * the set Immediate object.
 */
class Immediate {
    _onImmediate: (...args: any) => void;
    _argv: any[];
    _destroyed: boolean = false;

    constructor(onImmediate: (...args: any) => void, ...args: any) {
        this._onImmediate = onImmediate;
        this._argv = args;

        (async (): Promise<void> => {
            if (await this._destroyed === true) return;
            await this._onImmediate(...args);
        })();
    };
};

function Validation (parameter: any, instance: any) {
    if (parameter instanceof instance) return;
    throw TypeError("Native type conversion failed");
};

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
function setTimeout (callback: (...args: any) => void, ms?: number, ...args: any): Timeout {
    Validation(callback, Function);
    const idleTime: number = typeof ms === "number" ? ms : 1;
    const startTime: number = new Date().getTime();

    // @ts-ignore
    return new Timeout(idleTime, startTime, callback, false, false, ...args);
};

/**
 * By passing said object into the respective clear function,
 * execution of that object will be halted completely.
 * @param timeoutId Timeout object returned by `setTimeout()`
 */
// @ts-ignore
function clearTimeout (timeoutId: Timeout | undefined): void {
    if (!(timeoutId instanceof Timeout)) return;
    timeoutId._destroyed = true;
    timeoutId._onTimeout = () => {};
};

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
function setInterval (callback: (...args: any) => void, ms?: number, ...args: any): Timer {
    Validation(callback, Function);
    const idleTime: number = typeof ms === "number" ? ms : 1;
    const startTime: number = new Date().getTime();

    // @ts-ignore
    return new Timer(idleTime, startTime, callback, true, false, ...args);
};

/**
 * By passing said object into the respective clear function,
 * execution of that object will be halted completely.
 * @param intervalId Interval object returned by `setInterval()`
 */
// @ts-ignore
function clearInterval (intervalId: Timer | undefined): void {
    if (!(intervalId instanceof Timer)) return;
    intervalId._destroyed = true;
    intervalId._onTimeout = () => {};
};

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
function setImmediate (callback: (args: void) => void, ...args: any): Immediate {
    Validation(callback, Function);
    // @ts-ignore
    return new Immediate(callback, ...args);
};

/**
 * By passing said object into the respective clear function,
 * execution of that object will be halted completely.
 * @param immediateId Immediate object returned by `setImmediate()`
 */
// @ts-ignore
function clearImmediate (immediateId: Immediate | undefined): void {
    if (!(immediateId instanceof Immediate)) return;
    immediateId._destroyed = true;
    immediateId._onImmediate = () => {};
};

/**
 * Timers function are exported so developers
 * can choose which set of functions they want to 
 * withdraw from the `timers` module.
 */
export {
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
    setImmediate,
    clearImmediate
};