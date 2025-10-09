# command-builder

## Description

Simple command system

## Example usage

```js
commandBuild.register(
    {
        name: 'help',
        description: 'Provide help on a command or show all available commands registered',
        for_staff: false,
        usage: [
            'help',
            'help <command name>'
        ],
        aliases: [],
        examples: [
            'help',
        ]
    },
    (data, args) => {
        const sender = data.sender;
        const isStaff = sender.hasTag('someTag');
        let allCommands = [
            ...commandBuild.getAllCommands(false),
            ...(isStaff ? commandBuild.getAllCommands(true) : []),
        ];

        let text = [];

        if (args.length < 1) {
            text.push(`Command prefix: §c!`);

            if (allCommands.length < 1)
                text.push(`§8[§cNo${isStaff ? '' : 'player'} commands are registered§8]`);
            else
                text.push(`All commands available: §c${allCommands.map((cmd) => cmd.name).sort().join(', ')}`);
        }
        else {
            const cmdInQuestion = commandBuild.getCommand(args[0]);

            if (cmdInQuestion) {
                text.push(`Command name: §c${cmdInQuestion.name}`);
                text.push(`Command description: §c${cmdInQuestion.description}`);
                text.push(`Command usage: §c[ ${cmdInQuestion.usage.length < 1 ? 'none' : cmdInQuestion.usage.join(', ')} ]`);
                text.push(`Command aliases: §c[ ${cmdInQuestion.aliases.length < 1 ? 'none' : cmdInQuestion.aliases.join(', ')} ]`);
                text.push(`Command examples: §c[ ${cmdInQuestion.examples.length < 1 ? 'none' : cmdInQuestion.examples.join(', ')} ]`);
                text.push(`Command for staff: §c${cmdInQuestion.for_staff ? 'Yes' : 'No'}`);
            }
            else {
                text.push(`The command §c${args[0]}§d was not found`);
            };
        };

        sender.sendMessage(text.join('§r\n'));
    },
    (data, args) => { }
);
```

## Credits

These scripts were written by [undefined](https://github.com/undefined).
