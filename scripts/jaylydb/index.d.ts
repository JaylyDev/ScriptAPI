/**
 * A simple database for storing data in a Minecraft world, using scoreboard.
 */
declare class JaylyDB implements Map<string, string | number | boolean> {
    /**
     * @param id An identifier for the database
     * @param encrypted whether this database is encrypted or not, note that encryption state cannot be changed after creation
     */
    constructor(id: string, encrypted?: boolean);
    /**
     * @returns the number of elements in the database.
     */
    get size(): number;
    /**
     * Clears every element in the database.
     */
    clear(): void;
    /**
     * @returns — true if an element in the database exists and has been removed, false otherwise.
     */
    delete(key: string): boolean;
    /**
     * Executes a provided function once per each key/value pair in the database, in insertion order.
     */
    forEach(callbackfn: (value: string | number | boolean, key: string, jaylydb: this) => void): void;
    /**
     * Returns a specified element from the database.
     * @param key The key of the element to return.
     * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
     */
    get(key: string): string | number | boolean | undefined;
    has(key: string): boolean;
    /**
     * Adds a new element with a specified key and value to the database. If an element with the same key already exists, the element will be updated.
     */
    set(key: string, value: string | number | boolean): this;
    entries(): IterableIterator<[string, string | number | boolean]>;
    /**
     * Returns an iterable of keys in the database
     */
    keys(): IterableIterator<string>;
    /**
     * Returns an iterable of values in the map
     */
    values(): IterableIterator<string | number | boolean>;
    [Symbol.iterator](): IterableIterator<[string, string | number | boolean]>;
    [Symbol.toStringTag]: string;
}
export { JaylyDB };
