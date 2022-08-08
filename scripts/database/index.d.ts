/**
 * Database
 */
export declare class Database {
    protected readonly data: Map<string, any>;
    /**
     * The name of the database
     */
    readonly name: string;
    /**
     * Create a new database!
     */
    constructor(name: string);
    /**
     * The length of the database
     */
    get length(): number;
    /**
     * Set a value from a key
     * @param {string} key Key to set
     * @param {any} value The value
     */
    set(key: string, value: any): void;
    /**
     * Get a value from a key
     * @param {string} key Key to get
     * @returns {any} The value that was set for the key (or undefined)
     */
    get(key: string): any;
    /**
     * Test for whether or not the database has the key
     * @param {string} key Key to test for
     * @returns {boolean} Whether or not the database has the key
     */
    has(key: string): boolean;
    /**
     * Delete a key from the database
     * @param {string} key Key to delete from the database
     */
    delete(key: string): void;
    /**
     * Get an array of all keys in the database
     * @returns {string[]} An array of all keys in the database
     */
    keys(): string[];
    /**
     * Get an array of all values in the database
     * @returns {any[]} An array of all values in the database
     */
    values(): any[];
    /**
     * Clears all values in the database
     */
    clear(): void;
    /**
     * Loop through all keys and values of the database
     * @param {(key: string, value: any) => void} callback Code to run per loop
     */
    forEach(callback: (key: string, value: any) => void): void;
    [Symbol.iterator](): IterableIterator<[string, any]>;
}
