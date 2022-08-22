Replicate Commands class that was in the `Minecraft` module (renamed as `mojang-minecraft`)

## Usage

### Commands.run
Runs a particular command from the context.

```ts
Commands.run(commandString: string, target?: Dimension | Entity): any
```

```js
import { Commands } from "./index.js";
import { world } from "mojang-minecraft";

// original Commands.run command
Commands.run("scoreboard players add @a score 1");

let player = [...world.getPlayers()][0];
Commands.run("say Hello World", player); // execute command as the player
```

### Commands.runAsync
Runs a particular command asynchronously from the context. Where possible - and especially for long-running operations - you should use runCommandAsync over runCommand.

```ts
import * as mojangminecraft from "mojang-minecraft";
Commands.runAsync(commandString: string, target?: Dimension | Entity): Promise<mojangminecraft.CommandResult>
```

```js
import { Commands } from "./index.js";

// original Commands.run command
Commands.runAsync("scoreboard players add @a score 1");
```

### Commands.register
Registers a new custom command. This command will become available in Minecraft via [prefix][command].

```ts
Commands.register(prefix: string, command: string, commandFunction: (arg: Command) => void): void
```

```js
import { Commands } from "./index.js";

// original Commands.run command
Commands.register("!", "testCommand", (data) => {
  data.player.addTag('hello');
  Commands.run(`say ${[...data.argv]}`, world.getDimension("overworld");
});
```
