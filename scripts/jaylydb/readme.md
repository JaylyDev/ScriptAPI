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

| Encryption | Content Length | `set` time | `get` time | `has` time | `delete` time |
| ---------- | -------------- | ---------- | ---------- | ---------- | ------------- |
| ❌         | 0 bytes        | 130 ms     | 12 ms      | 0 ms       | 31 ms         |
| ❌         | 10,000 bytes   | 1,527 ms   | 145 ms     | 0 ms       | 217 ms        |
| ❌         | 20,000 bytes   | 4,222 ms   | 205 ms     | 0 ms       | 262 ms        |
| ❌         | 30,000 bytes   | 8,475 ms   | 279 ms     | 0 ms       | 399 ms        |

| Encryption | Content Length | `set` time | `get` time | `has` time | `delete` time |
| ---------- | -------------- | ---------- | ---------- | ---------- | ------------- |
| ✔️         | 0 bytes        | 249 ms     | 62 ms      | 0 ms       | 88 ms         |
| ✔️         | 10,000 bytes   | 23,213 ms  | 125 ms     | 0 ms       | 159 ms        |
| ✔️         | 20,000 bytes   | 92,600 ms  | 5,851 ms   | 0 ms       | 6,186 ms      |
| ✔️         | 30,000 bytes   | 215,828 ms | 15,135 ms  | 0 ms       | 14,834 ms     |

> Note: Encryption significantly decrease performance, meaning when dealing with large amounts of data, it's important to consider whether encryption is necessary or not.

# Credits

Made by [Jayly](https://github.com/JaylyDev)
