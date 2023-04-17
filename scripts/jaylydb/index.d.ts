/**
 * Database using scoreboard
 * @beta
 */
declare class JaylyDB implements Map<string, string | number | boolean> {
    constructor(id: string);
    private objective;
    private getParticipant;
    clear(): void;
    delete(key: string): boolean;
    forEach(callbackfn: (value: string | number | boolean, key: string, map: Map<string, string | number | boolean>) => void): void;
    get(key: string): string | number | boolean;
    has(key: string): boolean;
    set(key: string, value: string | number | boolean): this;
    get size(): number;
    entries(): IterableIterator<[string, string | number | boolean]>;
    keys(): IterableIterator<string>;
    values(): IterableIterator<string | number | boolean>;
    [Symbol.iterator](): IterableIterator<[string, string | number | boolean]>;
    [Symbol.toStringTag]: string;
}
export { JaylyDB };
