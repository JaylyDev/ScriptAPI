# Command builder

## Description

There is one class in this script:

- function `commandBuilder`

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
