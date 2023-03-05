// Script example for ScriptAPI
// Author: iBlqzed <https://github.com/iBlqzed>
// Project: https://github.com/JaylyDev/ScriptAPI

import { world } from "@minecraft/server"

const names: string[] = []


/**
 * Database
 */
export class Database {
    protected readonly data: Map<string, any> = new Map()
    /**
     * The name of the database
     */
    readonly name: string
    /**
     * Create a new database!
     */
    constructor(name: string) {
        this.name = JSON.stringify(name).slice(1, -1).replaceAll(/"/g, '\\"')
        if (names.includes(this.name)) throw new Error(`You can't have 2 of the same databases`)
        if (this.name.includes('"')) throw new TypeError(`Database names can't include "!`)
        if (this.name.length > 13 || this.name.length === 0) throw new Error(`Database names can't be more than 13 characters long, and it can't be nothing!`)
        names.push(this.name)
        runCommand(`scoreboard objectives add "DB_${this.name}" dummy`)
        world.scoreboard.getObjective(`DB_${this.name}`).getParticipants().forEach(e => this.data.set(e.displayName.split("_")[0].replaceAll(/\\"/g, '"'), JSON.parse(e.displayName.split("_").filter((v, i) => i > 0).join("_").replaceAll(/\\"/g, '"'))))
    }
    /**
     * The length of the database
     */
    get length(): number {
        return this.data.size
    }
    /**
     * Set a value from a key
     * @param {string} key Key to set
     * @param {any} value The value
     */
    set(key: string, value: any): void {
        if (key.includes('_')) throw new TypeError(`Database keys can't include "_"`)
        if ((JSON.stringify(value).replaceAll(/"/g, '\\"').length + key.replaceAll(/"/g, '\\"').length + 1) > 32000) throw new Error(`Database setter to long... somehow`)
        if (this.data.has(key)) runCommand(`scoreboard players reset "${key.replaceAll(/"/g, '\\"')}_${JSON.stringify(this.data.get(key)).replaceAll(/"/g, '\\"')}" "DB_${this.name}"`)
        runCommand(`scoreboard players set "${key.replaceAll(/"/g, '\\"')}_${JSON.stringify(value).replaceAll(/"/g, '\\"')}" "DB_${this.name}" 0`)
        this.data.set(key, value)
    }
    /**
     * Get a value from a key
     * @param {string} key Key to get
     * @returns {any} The value that was set for the key (or undefined)
     */
    get(key: string): any {
        if (this.data.has(key)) return this.data.get(key)
        return undefined
    }
    /**
     * Test for whether or not the database has the key
     * @param {string} key Key to test for
     * @returns {boolean} Whether or not the database has the key
     */
    has(key: string): boolean {
        if (!this.data.has(key)) return false
        return true
    }
    /**
     * Delete a key from the database
     * @param {string} key Key to delete from the database
     */
    delete(key: string): void {
        if (!this.data.has(key)) return;
        runCommand(`scoreboard players reset "${key.replaceAll(/"/g, '\\"')}_${JSON.stringify(this.data.get(key)).replaceAll(/"/g, '\\"')}" "DB_${this.name}"`)
        this.data.delete(key)
    }
    /**
     * Get an array of all keys in the database
     * @returns {string[]} An array of all keys in the database
     */
    keys(): string[] {
        return [...this.data.keys()]
    }
    /**
     * Get an array of all values in the database
     * @returns {any[]} An array of all values in the database
     */
    values(): any[] {
        return [...this.data.values()]
    }
    /**
     * Clears all values in the database
     */
    clear(): void {
        runCommand(`scoreboard objectives remove "DB_${this.name}"`)
        runCommand(`scoreboard objectives add "DB_${this.name}" dummy`)
        this.data.clear()
    }
    /**
     * Loop through all keys and values of the database
     * @param {(key: string, value: any) => void} callback Code to run per loop
     */
    forEach(callback: (key: string, value: any) => void) {
        this.data.forEach((v, k) => callback(k, v))
    }
    *[Symbol.iterator](): IterableIterator<[string, any]> {
        yield* this.data.entries()
    }
}

/**
 * Run a command!
 * @param {string} cmd Command to run
 * @returns {{ error: boolean, data: any }} Whether or not the command errors, and command data
 * @example runCommand(`give @a diamond`)
 */
function runCommand(cmd: string): { error: boolean, data: any } {
    try { return { error: false, data: world.getDimension('overworld').runCommandAsync(cmd) } } catch { return { error: true, data: undefined } }
}