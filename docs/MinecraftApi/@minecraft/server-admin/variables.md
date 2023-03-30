# variables

JSON format for `variables.json`

```jsonc
{
    "myVariable": "Foo bar", // string to any
    "myVariable2": {
        "bar": "baz"
    }
}
```

The file is located in `config/<pack_id>/variables.json`.

To load the variables in Minecraft:

```js
import { variables } from "@minecraft/server-admin";

// A list of available, configured server variables.
console.warn(variables.names);

// Returns the value of variable that has been configured in a dedicated server configuration JSON file.
console.warn(variables.get("motd"));
```

Example script: [secrets.js](./variables.js)