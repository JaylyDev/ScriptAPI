# command-builder

## Description

A simple to use command creator.

**Parameters:**

- `info` (Object): An object containing the information about the command.
  - `name` (string): The name of the command.
  - `description` (string): The description of the command.
  - `is_staff` (boolean, default: false): Indicates if the command requires staff privileges.

## Example usage

```js
commandBuild.create(
    {
        name: 'getCommands',
        description: 'Get a list of all commands registered',
        is_staff: false
    },
    (player, args) => {
        if (args[0] === 'true') player.sendMessage(`Staff commands: ${commandBuild.getAllCommands(true).map(cmd => cmd.name).join(', ')}`);
        else if (args[0] === 'false') player.sendMessage(`Non-staff commands: ${commandBuild.getAllCommands(false).map(cmd => cmd.name).join(', ')}`);
        else player.sendMessage(`All commands: ${commandBuild.getAllCommands().map(cmd => cmd.name).join(', ')}`);
    },
    (player, args) => {
        if (args[0] === 'true') player.sendMessage(`Staff commands: ${commandBuild.getAllCommands(true).map(cmd => cmd.name).join(', ')}`);
        else if (args[0] === 'false') player.sendMessage(`Non-staff commands: ${commandBuild.getAllCommands(false).map(cmd => cmd.name).join(', ')}`);
        else player.sendMessage(`All commands: ${commandBuild.getAllCommands().map(cmd => cmd.name).join(', ')}`);
    }
);
```

## Credits

These scripts were written by [defowler2005](https://github.com/defowler2005).
