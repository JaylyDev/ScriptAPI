// Script examples for ScriptAPI
// Author: iBlqzed <https://github.com/iBlqzed>

import { Database } from "./index.js";

const myDatabase = new Database("thing")
myDatabase.set("key", "value")
myDatabase.get("key") //Should return "value"