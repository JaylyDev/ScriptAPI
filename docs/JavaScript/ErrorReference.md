# JavaScript error reference

These errors can be a helpful debugging your code, but the reported problem isn't always immediately clear. The pages below will provide additional details about these errors. This includes native implemented JavaScript errors by Minecraft.

<!--
  These strings are dumped from quickjs.c (https://github.com/bellard/quickjs/blob/master/quickjs.c)
  then they're verified in Minecraft by checking if the string exist in the game executable.
-->

### InternalError: string too long

- Occurs when length of string is over `((1 << 30) - 1)`.
- This error should not occur if `script-watchdog-memory-limit` has not been modified.

### InternalError: out of memory

- This error occurs when the combined memory usage exceeds 250 megabytes.
- This saves and shuts down the world by Watchdog termination and cannot be canceled using `BeforeWatchdogTerminateEvent`.
- The memory limit can be adjusted in `server.properities` by modifying `script-watchdog-memory-limit`. (Setting this value to 0 disables the limit.)

### InternalError: stack overflow

- Occurs when there is a recursive function (a function that calls itself) without an exit point.

Example code:

```js
function loop(x) {
  // The base case is missing
  loop(x + 1); // Recursive call
}
loop(0);
// InternalError: stack overflow
```

### InternalError: interrupted
 
- Occurs when runtime has a negligible cost.

### InternalError: invalid index for append

- There was an unexpected assignment somewhere.
- Click [**here**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side) for more infomation.

<!-- ### InternalError: invalid ret value -->

<!-- ### InternalError: iterator_close_return -->

### InternalError: too many local variables

- When the local variable indexes reaches above 16 bits.

### InternalError: too many arguments

- When the local variable indexes reaches above 16 bits.

<!-- ### InternalError: unexpected ellipsis token -->

<!-- ### InternalError: too many closure variables -->

<!-- ### InternalError: invalid digit -->

<!-- ### InternalError: out of memory in regexp execution -->

### RangeError: invalid array length

- Occurs when specifying an array length that is either negative, a floating number or exceeds the maximum supported by the platform. [**Source**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)

<!-- ### RangeError: invalid array index -->

### RangeError: radix must be between 2 and 36

- This occurs when the optional radix parameter of the `Number.prototype.toString()` method was specified and is not between 2 and 36. [**Source**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Bad_radix)

<!-- ### RangeError: invalid number of digits -->

<!-- ### RangeError: invalid code point -->

<!-- ### RangeError: invalid repeat count -->

<!-- ### RangeError: bad normalization form -->

### RangeError: Date value is NaN

- This exception occurs when the Date object contains an invalid date. [**Source**](https://stackoverflow.com/a/54462335)

```js
new Date('undefined').toISOString()
```

<!-- ### RangeError: invalid offset -->

<!-- ### RangeError: invalid length -->

<!-- ### RangeError: invalid byteOffset -->

<!-- ### RangeError: invalid byteLength -->

<!-- ### RangeError: out of bound -->

<!-- ### ReferenceError: unsupported reference to 'super' -->

<!-- ### ReferenceError: 'this' can be initialized only once -->

<!-- ### SyntaxError: unparenthesized unary expression can't appear on the left-hand side of 'any' -->

### SyntaxError: invalid regular expression flags

- Occurs when the flags in a regular expression contain any flag.
- Click [**here**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Bad_regexp_flag) for more infomation.

<!-- ### TypeError: unsupported operation -->

### TypeError: invalid object type

<!-- ### TypeError: not an object -->

<!-- ### TypeError: not a symbol -->

<!-- ### TypeError: object is not extensible -->

<!-- ### TypeError: circular prototype chain -->

<!-- ### TypeError: operand 'prototype' property is not an object -->

<!-- ### TypeError: invalid 'instanceof' right operand -->

<!-- ### TypeError: expecting \<brand> private field -->

<!-- ### TypeError: invalid brand on object -->

### TypeError: no setter for property

- This occurs when trying to set a new value to a property, for which only a getter is defined.
- This is common when attempting to set property on native objects from native modules.

### TypeError: could not delete property

- Click [**here**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Non_configurable_array_element) for more infomation.

### TypeError: toPrimitive

- Click [**here**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) for more infomation.

Example code:

```js
import("@minecraft/server").then(res => String(res))
                           .catch(console.error);
```

### TypeError: cannot convert symbol to number

- occurs when attempting to convert a Symbol, to a number.

### TypeError: cannot convert symbol to string

- occurs when attempting to convert a Symbol, to a string.

<!-- ### TypeError: null or undefined are forbidden -->

<!-- ### TypeError: invalid 'in' operand -->

<!-- ### TypeError: invalid property access -->

### TypeError: value is not iterable

- This occurs when an iteration happens over a value that is not an iterable object.
- Click [**here**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/is_not_iterable) for more infomation.

<!-- ### TypeError: iterator must return an object -->

<!-- ### TypeError: parent class must be constructor -->

<!-- ### TypeError: parent prototype must be an object or null -->

### TypeError: must be called with new

- You must use `new` to create an instance of a user-defined object type or of one of the built-in object types that has a constructor function. [**Source**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)

### TypeError: not a function

- This occurs when there was an attempt to call a value from a function, but the value is not actually a function. [**Source**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function)

<!-- ### TypeError: derived class constructor must return an object or undefined -->

### TypeError: class constructors must be invoked with 'new'

- You must use `new` to create an instance of a user-defined object type or of one of the built-in object types that has a constructor function. [**Source**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)

<!-- ### TypeError: iterator does not have a throw method -->

### TypeError: value has no property

- This occurs when you attempt to access properties of `null` and `undefined`. They don't have any. [**Source**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/No_properties)

### TypeError: not a constructor

- The value is not a class.
- Read [**here**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_constructor) for more infomation.

<!-- ### TypeError: not a generator -->

<!-- ### TypeError: cannot invoke a running generator -->

<!-- ### TypeError: not an AsyncGenerator object -->

<!-- ### TypeError: import.meta not supported in this context -->

<!-- ### TypeError: no function filename for import -->

<!-- ### TypeError: bytecode function expected -->

<!-- ### TypeError: eval is not supported -->

### TypeError: circular reference

- This occurs when object references to itself in a property. `JSON.stringify()` doesn't try to solve them and fails accordingly.

<!-- ### TypeError: cannot convert to object -->

<!-- ### TypeError: invalid getter

### TypeError: invalid setter -->

---

If you can't find the errors you want, put it in a search engine.