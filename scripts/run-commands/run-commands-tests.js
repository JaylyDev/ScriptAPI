import { BlockLocation, world } from '@minecraft/server';
import { runCommands, runCommandsAsync } from './index.js';

// spawns a zombie then runs commands 
runCommands(
    world.getDimension('overworld').spawnEntity('minecraft:zombie', new BlockLocation(0, 64, 0)),
    'say Hello World!',
    'scoreboard players add @s zombies 1'
);

// run commands on a player
runCommands([...world.getPlayers()][0], 'clear @s stone');

// run commands on a dimension or script engine
runCommandsAsync(
    world.getDimension('overworld'),
    'teleport @a 0 64 0',
    'effect @e night_vision 10 0',
    'say Dimension'
);