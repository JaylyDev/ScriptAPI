# Command builder

## Description

This is a command builder, It is used for creating and rgistering commands, It is simple and easy to use! First enter a name: `test` description: `My first test command` is_staff:  `false` object: `(args, sender) => {}` code will begin execution as expected.
## example

`commandBuilder.js`

```js
import { commandBuilder } from './index.js';

commandBuild.create(
    {
        name: 'test',
        description: 'A test command',
        is_staff: false,
    }, (sender, args) => {
        sender.sendMessage(`Test command executed by ${sender.name} with args: ${args.join(', ')}`);
    }
);
```

- class `commandBuilder`
  Execute code from command

## Credits

These scripts were written by defowler2005.
