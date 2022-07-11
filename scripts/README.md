# Contents

### [Form inside a form](./FrankyRay/another-form.js)

### [Commands class](./JaylyDev/commands.ts)

### [Removes 100 HP when player hits](./MajestikButter/entityHit.js)

### [Get score from scoreboard](./iBlqzed/GametestExamples/javascript/getScore.js)

### [JSON stringify](./JaylyDev/json-stringify.js)

### [Sell items](./iBlqzed/sell-items.js)

### [CPS Counter](./JaylyDev/cps_counter.js)

### [Timers Module](./JaylyDev/timers/)

### [mojang-net-auth](./JaylyDev/mojang-net-auth/)

### [Command Handler](./JaylyDev/commandHandler.js)

### [Compass Prompt](./compass-prompt.js)

### [/help](./JaylyDev/help_command.js)

### [Shop UI](./shopui.js)

### [Scoreboard level up](./JaylyDev/scoreboard/levelup.js)

### [Player death event signal](./JaylyDev/PlayerDeathEvent.js)

```js
import { PlayerDeathEventSignal } from "./PlayerDeathEvent.js";

let playerDeath = new PlayerDeathEventSignal();

let callback = playerDeath.subscribe(({player}) => {
  // callback function
  playerDeath.unsubscribe(callback); // unsubscribes
});
```