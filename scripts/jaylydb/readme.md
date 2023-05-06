# Jayly Database

A Minecraft Database that uses scoreboard to save/load data. _Well if Mojang doesn't nerf their scoreboard API._

Benefits:

- Easy to use
- Encryption support (not as secure as crypto but you get the idea)

# Usage

Import Database class

```js
import { JaylyDB } from "./JaylyDB";
```

Create a new JaylyDB object with the scoreboard objective 'my_database'

```js
import { JaylyDB } from "./index";
const db = new JaylyDB("my_database");
```

To enable encryption in database in favor of better performance, set 2nd parameter to `true`. By default encryption is disabled in databases:

```js
import { JaylyDB } from "./index";
const db = new JaylyDB("my_database", false);
```

Set some values in the database

```js
db.set("foo", "bar");
db.set("baz", 42);
```

Get a value from the database

```js
const value = db.get("foo");
console.log(value); // Output: 'bar'
```

Check if a key exists in the database

```js
const hasKey = db.has("baz");
console.log(hasKey); // Output: true
```

Iterate over the entries in the database

```js
db.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

Remove an entry from the database

```js
db.delete("baz");
```

Clear all entries from the database

```js
db.clear();
```

Compatible with 1.19.80+, unless `runCommand` is removed again.

# Performance

This database is benchmarked using [`tests.js`](./tests.js). The test file records the time taken to `set`, `get`, `has` and `delete` **100 elements** with different content length and difference between whether the data is encoded or not.

Here are the corrected tables with the values rounded to two decimal places:

Unencrypted

| Encryption | Content Length | `set` speed` (KB/s) | `get` speed (KB/s) | `delete` speed (KB/s) |
| ---------- | -------------- | ------------------- | ------------------- | ---------------------- |
| ❌         | 10,000 bytes   | 654.88              | 6896.55             | 4608.29                 |
| ❌         | 20,000 bytes   | 473.71              | 9756.10             | 7633.59                 |
| ❌         | 30,000 bytes   | 353.98              | 10752.69            | 7518.80                 |

Encrypted

| Encryption | Content Length | `set` speed` (KB/s) | `get` speed (KB/s) | `delete` speed (KB/s) |
| ---------- | -------------- | ------------------- | ------------------- | ---------------------- |
| ✔️         | 10,000 bytes   | 43.08               | 8000.00             | 6289.31                 |
| ✔️         | 20,000 bytes   | 21.60               | 341.82              | 323.31                  |
| ✔️         | 30,000 bytes   | 13.90               | 198.22              | 202.24                  |

> Note: Encryption significantly decrease performance, meaning when dealing with large amounts of data, it's important to consider whether encryption is necessary or not.

# Credits

Made by [Jayly](https://github.com/JaylyDev)
