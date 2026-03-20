# QuickDB

QuickDB is a lightweight key-value database designed for Minecraft Bedrock Script API.  
It supports two storage backends:

- **Dynamic Properties**
- **Scoreboard**

Both storages share the same API, so you can switch storage types without changing your code.

---

# How Caching Works

When a database is created, it **loads all existing data into memory** (RAM).

Example process:

1. The database scans the storage (Scoreboard or Dynamic Property).
2. All matching keys are loaded into an internal cache.
3. Future operations read from this cache instead of scanning storage again.

Because of this:

- `get()` is **very fast**
- `has()` is **very fast**
- `keys()`, `values()`, `entries()` do not need to scan storage again

When data changes:

- `set()` updates **storage + cache**
- `delete()` removes **storage + cache**

This keeps both storage and cache synchronized.

---

# Storage Types

| Storage Type | Backend Used | Description                          |
| ------------ | ------------ | ------------------------------------ |
| `local`      | DynamicDB    | Stores data using dynamic properties |
| `dynamic`    | DynamicDB    | Same as local                        |
| `global`     | ScoreboardDB | Stores data using scoreboard         |
| `scoreboard` | ScoreboardDB | Same as global                       |

Example:

```ts
const db = new QuickDB("playerData"); // default using local or dynamic
const globalDB = new QuickDB("playerData", "global"); // global database, different cache with local or dynamic database, use this to sync database with other addons you wanna make like plugin structures
```

---

# Methods

| Method            | Description              | Example                |
| ----------------- | ------------------------ | ---------------------- |
| `set(key, value)` | Save or update a value   | `db.set("coins", 100)` |
| `get(key)`        | Get value from cache     | `db.get("coins")`      |
| `has(key)`        | Check if key exists      | `db.has("coins")`      |
| `delete(key)`     | Remove key from database | `db.delete("coins")`   |
| `keys()`          | Get all keys             | `db.keys()`            |
| `values()`        | Get all values           | `db.values()`          |
| `entries()`       | Get key-value pairs      | `db.entries()`         |

---

# Example Usage

```ts
const db = new QuickDB("coins");

db.set("player1", 100);

const coins = db.get("player1");

console.log(coins);
```

---

# Summary

QuickDB works by:

1. Loading data from storage
2. Storing it in an internal cache
3. Using the cache for fast access
4. Keeping storage and cache synchronized

This makes database operations **fast and efficient** for Minecraft Script API projects.
