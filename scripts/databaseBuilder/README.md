# Database Builder

A class for interacting with a database.

## Class: databaseBuilder

### Description

The `databaseBuilder` class provides methods for interacting with a database in a Minecraft server environment.

### Constructor

#### `constructor()`

Constructs a new `databaseBuilder` instance.

### Methods

#### `set(key, value)`

Sets a dynamic property in the Minecraft server world.

- Parameters:
  - `key` (type: `string`) - The key for the dynamic property.
  - `value` (type: `number|boolean|string`) - The value to be stored.

#### `get(key)`

Gets the value of a dynamic property from the Minecraft server world.

- Parameters:
  - `key` (type: `string`) - The key for the dynamic property.

- Returns:
  - `number|boolean|string|null` - The value of the dynamic property, or `null` if it doesn't exist.

#### `delete(key)`

Deletes a dynamic property from the Minecraft server world.

- Parameters:
  - `key` (type: `string`) - The key for the dynamic property.

## Usage Example

```javascript
databaseBuild.set('key123', 'My string');
databaseBuild.get('key123');
databaseBuild.delete('key123');
```

## Credits

These scripts were written by [defowler2005](https://github.com/defowler2005).
