# system.run

Runs a specified function at a future time.
Accepts 1 argument: the callback.

Normally, it runs the function in the next tick.

## Delay

We can implement a tick timeout using `system.run`.

Note that `delay=0` will probably(not always) execute the function at the end of current tick.

```javascript
function setTickTimeout(callback, delay = 1) {
  if (delay < 1) {
    Promise.resolve().then(callback);
    return;
  }
  if (!(Number.isFinite(delay))) {
    throw new Error("delay is not finite");
  }
  let i = Math.trunc(delay);
  (function tick() {
    i--;
    if (i > 0) {
      system.run(tick);
      return;
    }
    system.run(callback);
  })();
}
```

## Improve runCommandAsync

Imagine a moving entity that has ` velocity > 0.1 block/tick `:

```javascript
const { x, y, z } = entity.location;
entity.runCommandAsync(`testfor @s[rm=0.1,x=${x},y=${y},z=${z}]`);
```

It would fail, because `runCommandAsync` executes the command in the next tick (after the entity moves).

In `system.run`, `runCommandAsync` **in the sync part of callback** executes the command in the **same tick** (still next tick **not current tick**).
Other code in the sync part of callback executes before the command.

```javascript
// current tick
system.run(() => {
  const { x, y, z } = entity.location; // next tick
  const promise = entity.runCommandAsync(`testfor @s[rm=0.1,x=${x},y=${y},z=${z}]`); // next tick after other code
  console.warn("test started"); // next tick
});
// current tick
```
