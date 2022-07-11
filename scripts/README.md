# Contents

### [Form inside a form](./another-form.js)

### [Commands class](./commands.ts)

### [Removes 100 HP when player hits](./entityHit.js)

### [Get score from scoreboard](./getScore.js)

### [JSON stringify](./json-stringify.js)

### [Sell items](./sell-items.js)

### [CPS Counter](./cps_counter.js)

### [Timers Module](./timers)

### [mojang-net-auth](./mojang-net-auth/)

### [Command Handler](./commandHandler.js)

### [Compass Prompt](./compass-prompt.js)

### [/help](./help_command.js)

### [Shop UI](./shopui.js)

### [Scoreboard level up](./scoreboard/levelup.js)

### [Entity death event signal](./EntityDeathEvent.js)

Example Usage:
```js
import { EntityDeathEventSignal } from "./EntityDeathEvent.js";

let deathEvent = new EntityDeathEventSignal();

deathEvent.subscribe(function (evd) {
  evd.deadEntity.runCommand("say i'm dead");
});

deathEvent.unsubscribe();
```