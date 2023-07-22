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

As you may have already noticed, when you `JSON.stringify()` native objects, the properties that this native object has are not displayed, this has the consequence that the `JSON.stringify()` function only returns an empty object `{}`.
Why is it like this?
The answer is quite obvious, native class instances have no properties, therefore they cannot be displayed, native classes have getters that are always called from the prototype of that instance, and J`JSON.stringify()` does not include prototypes, that's all, but this does not apply to interfaces, they do not have native prototypes therefore it is possible to display them as, for example, a `Vector3` interface.

A workaround is to deep copy the JSON object. Highly recommend using this package to display class insatnce properties.
- https://github.com/zxdong262/deep-copy

## Learn more

Resources are obtained from here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
