import { world, system } from '@minecraft/server';

// Script example for ScriptAPI
// Author: defowler2005 <https://github.com/defowler2005>
// Project: https://github.com/JaylyDev/ScriptAPI

/**
 * Minecraft Bedrock ScriptAPI Example
 * @author defowler2005
 * @version 1.0.0
 * ---------------------------------------------------------------------------
 * Add a commandBuilder to your world, Simple creation!
 * ---------------------------------------------------------------------------
 */

import { world, system } from '@minecraft/server';

/**
 * A class for regestering commands.
 * @class
 */
class commandBuilder {
    /**
     * Create a new instance of the commandBuilder class.
     */
    constructor() {
        /**
         * Array to store all registered commands.
         * @type {Array}
         */
        this.commands = [];
    }

    /**
     * Create a new command with provided information and callbacks.
     *
     * @param {Object} info - Information about the command.
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

    /**
     * Get a list of all commands based on whether they require staff privileges or not.
     * @param {boolean} staff - If true, Retrieves staff-only commands. If false, Retrieves non-staff commands. If undefined, retrieves all commands.
     * @returns {Array} - An array of commands that match the staff requirement.
     */
    getAllCommands(staff = false) {
        return this.commands.filter(cmd => cmd.is_staff === staff);
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
