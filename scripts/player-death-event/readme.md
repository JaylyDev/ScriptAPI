# Deprecated

PlayerDeathEvent class is deprecated. Use [EntityDeathEvent](../entity-death-event) instead.

---
This package detects player death event

# Usage

```js
import { PlayerDeathEventSignal } from "./PlayerDeathEvent.js";

let playerDeath = new PlayerDeathEventSignal();

// event callback function
let callback = playerDeath.subscribe(({player}) => {
  // unsubscribe the callback function
  playerDeath.unsubscribe(callback);
});
```

# Typing
```ts
import { Player } from "mojang-minecraft";

export class PlayerDeathEvent {
  player: Player;
  private constructor (player: Player);
};

export class PlayerDeathEventSignal {
  subscribe (arg: (arg: PlayerDeathEvent) => void): (arg: PlayerDeathEvent) => void;
  unsubscribe (arg: (arg: PlayerDeathEvent) => void): void;
  constructor ()
};
```
