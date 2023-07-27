/**
* The `setInterval()` method, repeatedly calls a function, with a fixed time delay between each call.
* This method returns an ID which uniquely identifies the interval, so you can remove it later by calling `clearInterval()`.
*/
declare function setInterval(handler: () => void, timeout?: number): number;
/**
* The `setTimeout()` method sets a timer which executes a function or specified piece of code once the timer expires.
*/
declare function setTimeout(handler: () => void, timeout?: number): number;
/**
* The `clearInterval()` method cancels a timed, repeating action which was previously established by a call to `setInterval()`.
*/
declare function clearInterval(id: number | undefined): void;
/**
* The `clearTimeout()` method cancels a timeout previously established by calling `setTimeout()`.
*/
declare function clearTimeout(id: number | undefined): void;

export { setInterval, setTimeout, clearInterval, clearTimeout };
