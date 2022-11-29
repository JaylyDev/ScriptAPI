# JSON.stringify

The **`JSON.stringify()`** method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

## Syntax

```js
JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)
```

### Return value

A JSON string representing the given value, or undefined.

#### Stringify native objects

Minecraft has modified `JSON.stringify` function so that when stringify a native object, it always return `{}`.

A workaround is to deep copy the JSON object. Highly recommend using this package to display native objects in string.
- https://github.com/zxdong262/deep-copy

## Learn more

Resources are obtained from here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
