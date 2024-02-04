Replicate Commands class that was in the `Minecraft` module (renamed as `@minecraft/server`)

## Usage

### Commands.run

Runs a particular command from the context.

```ts
Commands.run(commandString: string, target?: Dimension | Entity): CommandResult
```

```js
import { Commands } from "./index.js";
import { world } from "@minecraft/server";

// original Commands.run command
Commands.run("scoreboard players add @a score 1");

let player = [...world.getPlayers()][0];
Commands.run("say Hello World", player); // execute command as the player
```

### Commands.runAsync

Runs a particular command asynchronously from the context. Where possible - and especially for long-running operations - you should use runCommandAsync over runCommand.

```ts
import * as server from "@minecraft/server";
Commands.runAsync(commandString: string, target?: Dimension | Entity): Promise<CommandResult>
```

```js
import { Commands } from "./index.js";

// original Commands.run command
Commands.runAsync("scoreboard players add @a score 1");
```

### Commands.register

> :warning: Deprecated. Use https://www.npmjs.com/package/chatsend instead.
