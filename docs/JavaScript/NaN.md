# NaN

The global NaN property is a value representing Not-A-Number.

To tell if a value is NaN, use isNaN() to most clearly determine whether a value is NaN.

## Issue in Minecraft

**Testing against NaN**

In vanilla JavaScript, you are able to validate if a value equals NaN by doing `40 === NaN`.

This is not the case for Minecraft script engine, where NaN equals any integer.

For example,
```js
NaN === 4 // returns `true` instead of false.
```

A workaround is to use `isNaN()` or `Number.isNaN()`, since these functions are not broken.

```js
isNaN(40); // false
Number.isNaN(-60); // false
```

## Learn More

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
