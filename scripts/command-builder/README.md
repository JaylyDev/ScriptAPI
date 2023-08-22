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
        const commands = commandBuild.getAllCommands(args[0]).map(cmd => cmd.name).join(', ');
        if (args[0] === 'true') player.sendMessage(`Staff commands: ${commands}`);
        else if (args[0] === 'false') player.sendMessage(`Non-staff commands: ${commands}`);
        else player.sendMessage(`All commands: ${commands ? commands : 'None'}`);
    },
    (player, args) => {
        const commands = commandBuild.getAllCommands(args[0]).map(cmd => cmd.name).join(', ');
        if (args[0] === 'true') player.sendMessage(`Staff commands: ${commands}`);
        else if (args[0] === 'false') player.sendMessage(`Non-staff commands: ${commands}`);
        else player.sendMessage(`All commands: ${commands ? commands : 'None'}`);
    }
);
```

## Credits

These scripts were written by [defowler2005](https://github.com/defowler2005).
