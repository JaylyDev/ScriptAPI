# Error
Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.

## Description
Runtime errors result in new Error objects being created and thrown.

## Error types
Besides the generic Error constructor, there are other core error constructors in JavaScript. 

> Learn more about each Error class in `MDN` by clicking the link below each error names.

- [`EvalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError)
  - Creates an instance representing an error that occurs regarding the global function `eval()`.
- [`RangeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
  - Creates an instance representing an error that occurs when a numeric variable or parameter is outside its valid range.
- [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
  - Creates an instance representing an error that occurs when de-referencing an invalid reference. In Minecraft Script Engine, there is a reference error with no clear reason of why this error triggers:
    - Native object bound to prototype does not exist.
- [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
  - Creates an instance representing a syntax error.
- [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
- [`URIError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError)
  - Creates an instance representing an error that occurs when `encodeURI", "encodeURI()` or `decodeURI", "decodeURI()` are passed invalid parameters.
- [`AggregateError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)
  - Creates an instance representing several errors wrapped in a single error when multiple errors need to be reported by an operation, for example by `Promise.any()`.
- [`InternalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError)
  - Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. In Minecraft JS, the errors are the following:
    - stack overflow
    - out of memory

## Debugging

Debugging allows you to find the exact point where you made a mistake on your JavaScript code. Minecraft has a built-in JavaScript debugger which you can enable by turning on Content Log GUI located in `Settings > Creator`.

### Logging level

- **[Scripting][Inform]**

  you can use `console.log()` or `console.info()` to display JavaScript values, however they are only displayed in [Content Log file](https://wiki.bedrock.dev/guide/troubleshooting.html#content-log-file), which you can see them [here](https://wiki.bedrock.dev/guide/troubleshooting.html#content-log-file).

  `00:00:00-[Scripting][Inform]-`: This text is triggered when `console.log()` or `console.info()` is used.

- **[Scripting][Warning]**

  This outputs a warning message in both Content Log GUI and Content log file. The following text is displayed when the function is triggered.

  `00:00:00-[Scripting][Warning]-`

- **[Scripting][Error]**

  This outputs an error message in both Content Log GUI and Content log file. The following text is displayed when the function is triggered.

  `00:00:00-[Scripting][Error]-`

### Stack trace

A stack trace is a list of the functions, in order, that lead to a breakpoint in a software program.

This is useful to find the cause of the problem in your code.

Example:

```
[Scripting][error]-SyntaxError: unexpected character
    at <anonymous> (index.js:16)
    at parse (native)
    at r (bundle.js)
    at <anonymous> (bundle.js)
```
- Error name: SyntaxError
- Error message: unexpected character
- Where the error cause: line 16 in file `index.js` 

## Learn More

https://wiki.bedrock.dev/guide/troubleshooting.html

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

