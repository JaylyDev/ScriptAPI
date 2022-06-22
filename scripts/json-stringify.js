/**
 * Native JSON stringify function
 * @type {(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string}
 */
const __stringify = JSON.stringify;

/**
 * Clone the object using iteration
 * @param {object} obj 
 * @returns {object}
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
  for (var i in obj) {
    cloneO[i] = cloneJSON(obj[i]);
  }
  return cloneO;
};

/**
 * Modified JSON stringify function.
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 * 
 * @param {any} value A JavaScript value, usually an object or array, to be converted.
 * @param {(this: any, key: string, value: any) => any} replacer A function that transforms the results.
 * @param {string | number} space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 * 
 * @returns {string} JavaScript Object Notation (JSON) string.
 */
function JSONStringify (value, replacer, space) {
  return __stringify(cloneJSON(value), replacer, space);
};

JSON.stringify = JSONStringify;