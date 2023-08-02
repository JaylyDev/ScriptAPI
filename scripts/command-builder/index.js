import { world, system } from '@minecraft/server';

/**
 * Represents a command builder.
 * @class
 */
class commandBuilder {

    /**
     * @constructor
     */
    constructor() {
        this.commands = [];
    }

    /**
     * Creates a new command with the provided information and callbacks.
     *
     * @param {Object} info - The information about the command.
     * @param {string} info.name - The name of the command.
     * @param {string} [info.description] - The description of the command.
     * @param {boolean} [info.is_staff=false] - Indicates if the command requires staff privileges.
     * @param {Function} callback - The callback function for the command.
     * @param {Function} callbackWM - The callback function for delayed code execution until the player moves after using the command.
     */
    create(info, callback, callbackWM) {
        const command = {
            name: info.name.split(' ')[0],
            description: info.description || '',
            is_staff: info.is_staff || false,
            callback,
            callbackWM,
        };
        this.commands.push(command);
    }
};

const commandBuild = new commandBuilder();

/**
 * Waits for the player to move and then executes a callback function.
 * @param {Object} target - The target player to monitor for movement.
 * @param {number} x - The initial X-coordinate of the target player.
 * @param {number} y - The initial Y-coordinate of the target player.
 * @param {number} z - The initial Z-coordinate of the target player.
 * @param {Function} callback - The callback function to execute after the player moves.
 */

function waitMove(target, x, y, z, callback) {
    const t = new Map();
    t.set(target, [x, y, z]);
    system.runInterval(() => {
        for (const [target, [xOld, yOld, zOld]] of t) {
            const { x: xc, y: yc, z: zc } = target.location;
            if (xOld !== xc || yOld !== yc || zOld !== zc) system.run(() => t.delete(target) || callback());
        }
    })
};

world.beforeEvents.chatSend.subscribe((data) => {
    const prefix = 'DF.'; //Replace this prefix to what you want!
    const player = data.sender;
    const message = data.message;
    const { x, y, z } = player.location;
    if (!message.startsWith(prefix)) return;
    data.cancel = true;
    const args = message.slice(prefix.length).split(/\s+/g);
    const cmd = args.shift();
    const command = commandBuild.commands.find((cmdName) => cmdName.name === cmd);
    if (!command) return player.sendMessage('Invalid command!');
    if (command.is_staff && !player.hasTag('hosen24576jg')) return player.sendMessage('Invalid permission!')
    system.run(() => command.callback(player, args) || waitMove(player, x, y, z, () => command.callbackWM(player, args)));
});

commandBuild.create(
    {
        name: 'test',
        description: 'Testing command',
        is_staff: true,
    },
    (player, args) => {
        console.warn(`${player.name} ${args}`)
    },
    (player, args) => {
        console.warn(`${player.name} ${args}`)
    }
);
