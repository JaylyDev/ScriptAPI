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
