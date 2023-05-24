// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
/**
 * Indicates the failure of an assertion. All errors thrown by the `assert` function
 * will be instances of the `AssertionError` class.
 */
export class AssertionError extends Error {
    constructor(options) {
        if (typeof options.message !== "object" && typeof options.message !== "undefined")
            throw new Error('The "options" argument must be an object.' + "\n");
        super();
        this.code = "ERR_ASSERTION";
        this.name = AssertionError.name;
        this.generatedMessage = !options.message;
        this.actual = this.generatedMessage ? options.actual : false;
        this.expected = this.generatedMessage ? options.expected : true;
        this.operator = this.generatedMessage ? options.operator : "==";
        this.message = this.generatedMessage ? `${JSON.stringify(this.actual)} ${this.operator} ${JSON.stringify(this.expected)}` + "\n" : options.message + "\n";
    }
}
/**
 * Tests if `value` is equal to true, an `AssertionError` is thrown otherwise.
 */
export function assert(value, message) {
    let error;
    if (typeof message === "string")
        error = new AssertionError({ message });
    else if (message instanceof Error)
        error = message;
    else
        error = new AssertionError({ actual: false, expected: true, operator: "!=" });
    if (!value)
        throw error;
}
