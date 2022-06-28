# Timers module

`setTimeout()`, `setImmediate()`, and `setInterval()` simple replica for Minecraft Bedrock Edition script APIs (experimental).

## Usage

```js
import { setTimeout } from "./timers.js";

setTimeout(() => {
  console.log("Hello World");
}, 1000);
```

## Compile & Test

### Compile only

```
tsc
```

### Unit test (include tsc)

```
npm run test
```
