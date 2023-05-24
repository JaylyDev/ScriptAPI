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

> Note: JaylyDB now writes data to the world asynchronously. Please check the Content Log to ensure that the data is successfully written to the scoreboard before exiting the world

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

This database is compatible with Minecraft 1.19.0 and above.

# Performance

This database is benchmarked using [`tests.js`](./tests.js). The test file records the time taken to execute `get`, `set`, `has` and `delete` operations with different content length and difference between whether the data is encoded or not.

| Content Length | `set` time | `set` time (encrypted) | `get` time | `has` time | `delete` time |
| -------------- | ---------- | ---------------------- | ---------- | ---------- | ------------- |
| 0 bytes        | 1 ms       | 2 ms                   | 0 ms       | 0 ms       | 0 ms          |
| 10,000 bytes   | 616 ms     | 914 ms                 | 0 ms       | 0 ms       | 0 ms          |
| 20,000 bytes   | 1502 ms    | 2144 ms                | 1 ms       | 0 ms       | 0 ms          |
| 30,000 bytes   | 2645 ms    | 3750 ms                | 0 ms       | 0 ms       | 0 ms          |

> Note: **100 elements** with different data length are inserted into individual database, and it doesn't record time taken to write data to world.

# Credits

Made by [Jayly](https://github.com/JaylyDev)
