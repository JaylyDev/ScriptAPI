# command-builder

## Description

A simple to use command creator,

**Parameters:**

- `info` (Object): An object containing the information about the command.
  - `name` (string): The name of the command.
  - `description` (string): The description of the command.
  - `is_staff` (boolean, default: false): Indicates if the command requires staff privileges.

## Example usage

```js
const commandBuild = new commandBuilder();

commandBuild.create(
    {
        name: 'test',
        description: 'Testing command',
        is_staff: false,
    },
    (player, args) => {
        console.warn(`${player.name} ${args}`);
    },
    (player, args) => {
        console.warn(`${player.name} ${args}`);
    }
);
```

## Credits

These scripts were written by [defowler2005](https://github.com/defowler2005).
