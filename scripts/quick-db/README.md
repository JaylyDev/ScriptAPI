# QuickDB - A Lightweight Database for Minecraft Bedrock ScriptAPI

**QuickDB** is a simple and efficient database system designed for Minecraft Bedrock Edition ScriptAPI. It utilizes dynamic properties from the `@minecraft/server` module, allowing developers to store and manage key-value pairs in a way similar to JavaScript's `Map` object.  

---

## Features

- **CRUD Operations**: 
  - `set(key, value)` - Save a value to the database.
  - `get(key)` - Retrieve a value by its key.
  - `delete(key)` - Remove a key-value pair from the database.
  - `has(key)` - Check if a key exists in the database.

- **Iteration**:
  - `keys()` - Get all keys in the database.
  - `values()` - Retrieve all values stored in the database.
  - `entries()` - Retrieve all key-value pairs as an array of entries.

- **Database Size**:
  - `size` - Get the total byte count used by the dynamic properties.

---

## Installation

Import `QuickDB` into your ScriptAPI project. Ensure `QuickDB` is included in your `index.js` file for easy integration.

```javascript
import QuickDB from "./index.js";
```

---

## Documentation

### **Constructor**

```javascript
const db = new QuickDB("user");
```

- **Parameters**:
  - `id` *(string)*: A unique identifier for your database instance.

---

### **Methods**

#### `set(key, value)`
- **Description**: Stores a value associated with a key.
- **Parameters**:
  - `key` *(string)*: The key to store the value.
  - `value` *(any)*: The value to be stored.
- **Returns**: `boolean` - `true` if successful.

```javascript
db.set("FomoKiwor", { money: 20000 });
```

---

#### `get(key)`
- **Description**: Retrieves the value associated with a key.
- **Parameters**:
  - `key` *(string)*: The key to retrieve the value.
- **Returns**: `any` - The value associated with the key.

```javascript
const userData = db.get("FomoKiwor"); // { money: 20000 }
```

---

#### `has(key)`
- **Description**: Checks if a key exists in the database.
- **Parameters**:
  - `key` *(string)*: The key to check.
- **Returns**: `boolean` - `true` if the key exists.

```javascript
const exists = db.has("FomoKiwor"); // true
```

---

#### `delete(key)`
- **Description**: Removes a key-value pair from the database.
- **Parameters**:
  - `key` *(string)*: The key to remove.
- **Returns**: `boolean` - `true` if successful.

```javascript
db.delete("FomoKiwor");
```

---

#### `keys()`
- **Description**: Retrieves all keys in the database.
- **Returns**: `string[]` - An array of all keys.

```javascript
const allKeys = db.keys(); // ["key1", "key2"]
```

---

#### `values()`
- **Description**: Retrieves all values in the database.
- **Returns**: `any[]` - An array of all values.

```javascript
const allValues = db.values(); // [{ money: 20000 }, { items: [] }]
```

---

#### `entries()`
- **Description**: Retrieves all key-value pairs in the database.
- **Returns**: `Array<[string, any]>` - An array of key-value entries.

```javascript
const allEntries = db.entries(); // [["key1", { money: 20000 }], ["key2", { items: [] }]]
```

---

### **Property**

#### `size`
- **Description**: Gets the total byte count used by dynamic properties.
- **Returns**: `number` - The total byte count.

```javascript
console.log(db.size); // e.g., 512
```

---

## Example Usage

```javascript
import QuickDB from "./index.js";

const db = new QuickDB("user");

db.set("FomoKiwor", { money: 20000 });
console.log(db.get("FomoKiwor")); // { money: 20000 }

console.log(db.has("FomoKiwor")); // true
db.delete("FomoKiwor");
console.log(db.has("FomoKiwor")); // false

db.set("User1", { score: 100 });
db.set("User2", { score: 150 });

console.log(db.keys()); // ["User1", "User2"]
console.log(db.values()); // [{ score: 100 }, { score: 150 }]
console.log(db.entries()); // [["User1", { score: 100 }], ["User2", { score: 150 }]]
```

---

## License

MIT License

---

Developed by [Nperma](https://github.com/nperma)
