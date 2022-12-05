# JavaScript error reference

These errors can be a helpful debugging your code, but the reported problem isn't always immediately clear. The pages below will provide additional details about these errors. This includes native implemented JavaScript errors by Minecraft.

<!--
  These strings are dumped from quickjs.c (https://github.com/bellard/quickjs/blob/master/quickjs.c)
  then they're verified in Minecraft by checking if the string exist in the game executable.
-->

### InternalError: string too long

### InternalError: out of memory

- This error occurs when the combined memory usage exceeds 250 megabytes.
- This saves and shuts down the world by Watchdog termination and cannot be canceled using `BeforeWatchdogTerminateEvent`.
- The memory limit can be adjusted in `server.properities` by modifying `script-watchdog-memory-limit`. (Setting this value to 0 disables the limit.)

### InternalError: stack overflow

- Occurs when there is a recursive function (a function that calls itself) without an exit point.

- Example code:

```js
function loop(x) {
  // The base case is missing
  loop(x + 1); // Recursive call
}
loop(0);
// InternalError: stack overflow
```

### InternalError: interrupted

### InternalError: invalid index for append

### InternalError: invalid ret value

### InternalError: iterator_close_return

### InternalError: too many local variables

### InternalError: too many arguments

### InternalError: unexpected ellipsis token

### InternalError: too many closure variables

### InternalError: invalid digit

### InternalError: out of memory in regexp execution

### RangeError: invalid array length
- Occurs when specifying an array length that is either negative, a floating number or exceeds the maximum supported by the platform. [**Source**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)

### RangeError: invalid array index

### RangeError: radix must be between 2 and 36

### RangeError: invalid number of digits

### RangeError: invalid code point

### RangeError: invalid repeat count

### RangeError: bad normalization form

### RangeError: Date value is NaN

### RangeError: invalid array buffer length

### RangeError: invalid offset

### RangeError: invalid length

### RangeError: invalid byteOffset

### RangeError: invalid byteLength

### RangeError: out of bound

### ReferenceError: unsupported reference to 'super### ReferenceError: 'this' can be initialized only once

### SyntaxError: unparenthesized unary expression can't appear on the left-hand side of ### SyntaxError: invalid regular expression flags

### TypeError: unsupported operation

### TypeError: invalid object type

### TypeError: not an object

### TypeError: not a symbol

### TypeError: object is not extensible

### TypeError: circular prototype chain

### TypeError: operand 'prototype' property is not an object

### TypeError: invalid 'instanceof' right operand

### TypeError: expecting \<brand> private field

### TypeError: invalid brand on object

### TypeError: no setter for property

### TypeError: could not delete property

### TypeError: toPrimitive

### TypeError: cannot convert symbol to number

### TypeError: cannot convert symbol to string

### TypeError: null or undefined are forbidden

### TypeError: invalid 'in' operand

### TypeError: invalid property access

### TypeError: value is not iterable

### TypeError: iterator must return an object

### TypeError: parent class must be constructor

### TypeError: parent prototype must be an object or null

### TypeError: must be called with new

### TypeError: not a function

### TypeError: derived class constructor must return an object or undefined

### TypeError: class constructors must be invoked with 'new### TypeError: iterator does not have a throw method

### TypeError: value has no property

### TypeError: not a constructor

### TypeError: not a generator

### TypeError: cannot invoke a running generator

### TypeError: not an AsyncGenerator object

### TypeError: import.meta not supported in this context

### TypeError: no function filename for import### TypeError: bytecode function expected

### TypeError: eval is not supported

### TypeError: circular reference

### TypeError: cannot convert to object

### TypeError: invalid getter

### TypeError: invalid setter

### TypeError: cannot have setter/getter and value or writable

### TypeError: not a prototype

### TypeError: proxy preventExtensions handler returned false

### TypeError: not a object

### TypeError: Array loo long

### TypeError: empty array

### TypeError: Array too long

### TypeError: not a number

### TypeError: not a boolean

### TypeError: not a string

### TypeError: regex not supported

### TypeError: regexp must have the 'g' flag

### TypeError: string expected

### TypeError: flags must be undefined

### TypeError: RegExp exec method must return an object or null

### TypeError: revoked proxy

### TypeError: proxy: inconsistent prototype

### TypeError: proxy: bad prototype

### TypeError: proxy: inconsistent isExtensible

### TypeError: proxy: inconsistent preventExtensions

### TypeError: proxy: inconsistent has

### TypeError: proxy: inconsistent get

### TypeError: proxy: inconsistent set

### TypeError: proxy: cannot set property

### TypeError: proxy: inconsistent getOwnPropertyDescriptor

### TypeError: proxy: defineProperty exception

### TypeError: proxy: inconsistent defineProperty

### TypeError: proxy: inconsistent deleteProperty

### TypeError: proxy: properties must be strings or symbols

### TypeError: proxy: duplicate property

### TypeError: proxy: target property must be present in proxy ownKeys

### TypeError: proxy: property not present in target were returned by non extensible proxy

### TypeError: set/add is not a function

### TypeError: promise self resolution

### TypeError: resolving function already set

### TypeError: not an Async-from-Sync Iterator

### TypeError: not a Date object

### TypeError: invalid hint

### TypeError: object needs toISOString method

### TypeError: ArrayBuffer is detached

### TypeError: cannot use identical ArrayBuffer

### TypeError: new ArrayBuffer is too small

### TypeError: TypedArray length is too small

### TypeError: cannot be called

### URIError: expecting %%

### URIError: expecting hex digit

### URIError: malformed UTF-8

### URIError: invalid character

### URIError: expecting surrogate pair
