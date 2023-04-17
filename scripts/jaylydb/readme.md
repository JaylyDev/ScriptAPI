# Jayly Database

A Minecraft Database that uses scoreboard to save/load data. _Well if Mojang don't nerve it's scoreboard API._

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
const db = new JaylyDB("my_database");
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

# Credits

Made by [Jayly](https://github.com/JaylyDev)
