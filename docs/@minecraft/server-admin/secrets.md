# secrets

JSON format for `secrets.json`

```jsonc
{
    "mySecret": "Foo bar" // string to string only
}
```

The file is located in `config/<pack_id>/secrets.json`.

To load the secrets in Minecraft:

```js
import { secrets } from "mojang-minecraft-server-admin";

// A list of available, configured server secrets.
console.warn(secrets.names);

// Returns the value of secret that has been configured in a dedicated server configuration JSON file.
console.warn(secrets.get("mySecret"));
```

Example script: [secrets.js](./secrets.js)