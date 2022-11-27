# Error
Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.

## Description
Runtime errors result in new Error objects being created and thrown.

## Error types
Besides the generic Error constructor, there are other core error constructors in JavaScript. 

- [`EvalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError)
  - Creates an instance representing an error that occurs regarding the global function `eval()`.
- [`RangeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
  - Creates an instance representing an error that occurs when a numeric variable or parameter is outside its valid range.
- [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
  - Creates an instance representing an error that occurs when de-referencing an invalid reference.
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