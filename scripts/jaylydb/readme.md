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

To disable encryption in database in favor of performance, set 2nd parameter to `false`:

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

This database is benchmarked using [`tests.js`](./tests.js). The test file records the time taken to execute an operation over a number of times.s

Two tests are conducted in benchmarking:

- set, get, has, delete 1000 items, with 10 bytes of content each.
- set, get, has, delete 10 items, with 1000 bytes of content each.

Here are the results:

Time taken to execute operations to assign 1000 bytes of content in 10 keys and values:

| Operation | Encryption | Items | Content Length | Time   |
| --------- | ---------- | ----- | -------------- | ------ |
| `set`     | ❌         | 10    | 1000           | 31 ms  |
| `get`     | ❌         | 10    | 1000           | 0 ms   |
| `has`     | ❌         | 10    | 1000           | 0 ms   |
| `delete`  | ❌         | 10    | 1000           | 0 ms   |
| `set`     | ☑️         | 10    | 1000           | 110 ms |
| `get`     | ☑️         | 10    | 1000           | 31 ms  |
| `has`     | ☑️         | 10    | 1000           | 0 ms   |
| `delete`  | ☑️         | 10    | 1000           | 0 ms   |


Time taken to execute operations to assign 10 bytes of content in 1000 keys and values:

| Operation | Encryption | Items | Content Length | Time     |
| --------- | ---------- | ----- | -------------- | -------- |
| `set`     | ❌         | 1000  | 10             | 6595 ms  |
| `get`     | ❌         | 1000  | 10             | 1281 ms  |
| `has`     | ❌         | 1000  | 10             | 0 ms     |
| `delete`  | ❌         | 1000  | 10             | 1273 ms  |
| `set`     | ☑️         | 1000  | 10             | 23124 ms |
| `get`     | ☑️         | 1000  | 10             | 9752 ms  |
| `has`     | ☑️         | 1000  | 10             | 16 ms    |
| `delete`  | ☑️         | 1000  | 10             | 1576 ms  |

Conclusion: Don't set too many items in a database, but rather store them in a item value.

# Credits

Made by [Jayly](https://github.com/JaylyDev)
