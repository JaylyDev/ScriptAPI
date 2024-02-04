// Script example for ScriptAPI
// Author: iBlqzed <https://github.com/iBlqzed>
// Project: https://github.com/JaylyDev/ScriptAPI

export declare class Database<V = any> {
    readonly name: string;
    private readonly defaultValue;
    static readonly databases: Database<any>[];
    private cache;
    constructor(name: string, defaultValue?: string);
    /**
     * Set a value from a key
     * @remarks Doesn't save instantly, call .save() or wait 1 minute to save automatically
     * @param {string} property Key to set
     * @param {V} value The value
     */
    set(property: string, value: V): void;
    /**
     * Get a value from a key
     * @param {string} property Key to get
     * @returns {V} The value that was set for the key (or undefined)
     */
    get(property: string): V;
    /**
     * Test for whether or not the database has the key
     * @param {string} property Key to test for
     * @returns {boolean} Whether or not the database has the key
     */
    has(property: string): boolean;
    /**
     * Delete a key from the database
     * @remarks Doesn't save instantly, call .save() or wait 1 minute to save automatically
     * @param {string} property Key to delete from the database
     * @returns {boolean} Whether the database had the key to begin with
     */
    delete(property: string): boolean;
    /**
     * Get an array of all keys in the database
     * @returns {string[]} An array of all keys in the database
     */
    keys(): string[];
    /**
     * Get an array of all values in the database
     * @returns {V[]} An array of all values in the database
     */
    values(): V[];
    /**
     * Clears all values in the database
     * @remarks Saves instantly
     */
    clear(): void;
    /**
     * Get an object with all keys and values
     * @remarks All changes will save
     * @returns {Record<string, V>} An object of all keys and values
     */
    getAll(): Record<string, V>;
    /**
     * Save the database instantly
     */
    save(): void;
    protected static save(): void;
    protected static getAll(name: string, defaultValue: string): Record<string, any>;
}
