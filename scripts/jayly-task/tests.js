// Script examples for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>

import { task } from "./index";

task(
  "test1",
  ["say hello", 'tellraw @a {"rawtext":[{"text":"tellraw"}]}', "scoreboard objectives add test dummy"],
  false
);
task(
  "test1",
  ["say loop", 'tellraw @a {"rawtext":[{"text":"loop 1"}]}', "execute as @a run say loop 2"],
  true
);
