import { world } from "@minecraft/server";
import { getScore } from './index';

getScore('TestPlayer', 'status');

world.events.beforeChat.subscribe(({sender}) => {
    const score = getScore(sender, 'chats');
    sender.runCommandAsync(`scoreboard players set @s chats ${score + 1}`);
});

world.events.entityHit.subscribe(({entity}) => {
    const score = getScore(sender, 'hit');
    sender.runCommandAsync(`scoreboard players set @s hit ${score + 1}`);
})