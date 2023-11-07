// Script example for ScriptAPI
// Author: defowler2005 <https://github.com/defowler2005>
// Project: https://github.com/JaylyDev/ScriptAPI

/**
 * Minecraft Bedrock ScriptAPI Example
 * @author defowler2005
 * @version 1.0.0
 * ---------------------------------------------------------------------------
 * Add a databaseBuilder to your world, Simple creation!
 * ---------------------------------------------------------------------------
 */

import { world } from '@minecraft/server';

/**
 * A class for interacting with a database.
 * @class
 */

class databaseBuilder {
    /**
     * Constructs a new databaseBuilder instance.
     * @constructor
     */
    constructor() { }

    /**
     * Sets a dynamic property in the Minecraft server world.
     * @param {string} key - The key for the dynamic property.
     * @param {number|boolean|string} value - The value to be stored.
     */
    set(key, value) {
        world.setDynamicProperty(`${key}`, value);
    }

    /**
     * Gets the value of a dynamic property from the Minecraft server world.
     * @param {string} key - The key for the dynamic property.
     * @returns {number|boolean|string|null} The value of the dynamic property, or null if it doesn't exist.
     */
    get(key) {
        if (!world.getDynamicProperty(`${key}`)) {
            //console.warn(`Dynamic property: ${key} does not exist!`);
            return null;
        }
        return world.getDynamicProperty(`${key}`);
    }

    /**
     * Deletes a dynamic property from the Minecraft server world.
     * @param {string} key - The key for the dynamic property.
     */
    delete(key) {
        if (!world.getDynamicProperty(`${key}`)) return console.warn(`Dynamic property: ${key} does not exist!`);
        world.setDynamicProperty(`${key}`, undefined);
    }
};

export const databaseBuild = new databaseBuilder();
