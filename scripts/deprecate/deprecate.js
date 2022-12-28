// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>

/**
 * @type {string[]}
 */
const emittedIds = [];
/**
 * The `deprecate()` method wraps `fn` (which may be a function or class) in
 * such a way that it is marked as deprecated.
 *
 * ```js
 * exports.obsoleteFunction = deprecate(() => {
 *   // Do something here.
 * }, 'obsoleteFunction() is deprecated. Use newShinyFunction() instead.');
 * ```
 *
 * When called, `deprecate()` will return a function that will emit a`DeprecationWarning` using the `'warning'` event. The warning will
 * be emitted and printed to `stderr` the first time the returned function is
 * called. After the warning is emitted, the wrapped function is called without
 * emitting a warning.
 *
 * If the same optional `id` is supplied in multiple calls to `deprecate()`,
 * the warning will be emitted only once for that `id`.
 *
 * ```js
 * const fn1 = deprecate(someFunction, someMessage, 'DEP0001');
 * const fn2 = deprecate(someOtherFunction, someOtherMessage, 'DEP0001');
 * fn1(); // Emits a deprecation warning with id DEP0001
 * fn2(); // Does not emit a deprecation warning because it has the same id
 * ```
 *
 *
 * @template {Function} T
 * @param {T} fn The function that is being deprecated.
 * @param {string} msg A warning message to display when the deprecated function is invoked.
 * @param {string} [id] A deprecation id. See the `list of deprecated APIs` for a list of ids.
 * @return {T} The deprecated function wrapped to emit a warning.
 */
export function deprecate(fn, msg, id) {
  let deprecationMessage = "";
  if (typeof id === "string") {
    if (emittedIds.includes(id)) return fn;
    emittedIds.push(id);
    deprecationMessage += `[${id}] `;
  }
  deprecationMessage += `DeprecationWarning: ${msg}`;

  function deprecated() {
    console.warn(deprecationMessage);
    return fn.call(this, arguments);
  }

  // @ts-ignore
  return deprecated;
}
