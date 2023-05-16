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

This database is benchmarked using [`tests.js`](./tests.js). The test file records the time taken to `get` and `set` **100 elements** with different content length and difference between whether the data is encoded or not.

Using cache:

| Content Length | `get` time | `set` time | `set` time (encrypted) |
| -------------- | ---------- | ---------- | ---------------------- |
| 0 bytes        | 0 ms       | 80 ms      | 100 ms                 |
| 10,000 bytes   | 0 ms       | 1,232 ms   | 21,757 ms              |
| 20,000 bytes   | 0 ms       | 2,673 ms   | 44,191 ms              |
| 30,000 bytes   | 0 ms       | 4,881 ms   | 65,813 ms              |

Cache reload (every get operation), encryption disabled:

| Content Length | `get` time | `set` time |
| -------------- | ---------- | ---------- |
| 0 bytes        | 1 ms       | 101 ms     |
| 10,000 bytes   | 11 ms      | 1,225 ms   |
| 20,000 bytes   | 20 ms      | 2,625 ms   |
| 30,000 bytes   | 30 ms      | 4,830 ms   |

Cache reload (every get operation), encrypted:

| Content Length | `get` time | `set` time |
| -------------- | ---------- | ---------- |
| 0 bytes        | 2 ms       | 106 ms     |
| 10,000 bytes   | 413 ms     | 21,537 ms   |
| 20,000 bytes   | 771 ms     | 41,996 ms   |
| 30,000 bytes   | 1,181 ms   | 65,456 ms   |


> Note: Encryption and cache reload significantly decrease performance, it's important to consider whether encryption or reload cache are necessary or not.

# Credits

Made by [Jayly](https://github.com/JaylyDev)
