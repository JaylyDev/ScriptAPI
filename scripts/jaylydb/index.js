// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
var _a;
/*!
 * Copyright (c) Jayly. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
import { ScoreboardIdentityType, system, world } from "@minecraft/server";
const version = "1.1.1";
const str = () => ('00000000000000000' + (Math.random() * 0xffffffffffffffff).toString(16)).slice(-16);
/**
 * A rough mechanism for create a random uuid. Not as secure as uuid without as much of a guarantee of uniqueness,
 * but reasonable for non-secure and non-persistent use cases. It should be revisited in case it is possible to
 * support the crypto library in QuickJS.
 * @beta
 */
const uuid = () => {
    const [a, b] = [str(), str()];
    return `${a.slice(0, 8)}-${a.slice(8, 12)}-4${a.slice(13)}-a${b.slice(1, 4)}-${b.slice(4)}`;
};
const allowedTypes = ["string", "number", "boolean"];
const encrypt = (data, salt) => {
    const encryptedChars = [];
    for (let i = 0; i < data.length; i++) {
        const charCode = data.charCodeAt(i) + salt.charCodeAt(i % salt.length);
        encryptedChars.push(charCode);
    }
    return String.fromCharCode(...encryptedChars);
};
const decrypt = (encrypted, salt) => {
    const decryptedChars = [];
    for (let i = 0; i < encrypted.length; i++) {
        const charCode = encrypted.charCodeAt(i) - salt.charCodeAt(i % salt.length);
        decryptedChars.push(charCode);
    }
    return String.fromCharCode(...decryptedChars);
};
const CreateCrashReport = (action, data, error, salt) => {
    console.warn("[JaylyDB] Failed to " + action + " JSON data.", "\nVersion: " + version, "\nData: " + data, "\nSalt: " + salt, "\nError: " + error.message, "\n" + error.stack);
};
/**
 * Parse and stringify scoreboard display name
 * @beta
 */
const DisplayName = {
    parse(text, salt) {
        try {
            const a = salt ? decrypt(text, salt) : text;
            return JSON.parse(`{${a}}`);
        }
        catch (error) {
            if (!(error instanceof Error))
                throw error;
            CreateCrashReport("load", text, error, salt);
            throw new Error(`Failed to load data. Please check content log file for more info.\n`);
        }
    },
    stringify(value, salt) {
        try {
            const a = JSON.stringify(value).slice(1, -1);
            return salt ? encrypt(a, salt) : a;
        }
        catch (error) {
            if (!(error instanceof Error))
                throw error;
            CreateCrashReport("save", JSON.stringify(value), error, salt);
            throw new Error(`Failed to save data. Please check content log file for more info.\n`);
        }
    }
};
;
/**
 * A simple database for storing data in a Minecraft world, using scoreboard.
 */
class JaylyDB {
    /**
     * Sync between objective and local state
     * @internal
     */
    updateParticipants() {
        this.localState.clear();
        for (const participant of this.objective.getParticipants()) {
            if (participant.type !== ScoreboardIdentityType.FakePlayer)
                continue;
            const data = DisplayName.parse(participant.displayName, this.salt);
            const key = Object.keys(data)[0];
            const value = data[key];
            this.localState.set(key, {
                identity: participant,
                encoded_value: participant.displayName,
                decoded_value: value
            });
        }
        ;
    }
    /**
     * @param id An identifier for the database
     * @param encrypted whether this database is encrypted or not, note that encryption state cannot be changed after creation
     */
    constructor(id, encrypted = false) {
        /** @internal */
        this.localState = new Map();
        /** @internal */
        this.SYNC_OK = true;
        this[_a] = JaylyDB.name;
        this.objective = world.scoreboard.getObjective("jaylydb:" + id) ?? world.scoreboard.addObjective("jaylydb:" + id, uuid());
        this.encrypted = encrypted;
        this.salt = this.encrypted ? this.objective.displayName : undefined;
        // Fetch all data when database initialize
        this.updateParticipants();
        system.runInterval(() => {
            const objective = world.scoreboard.getObjective("jaylydb:" + id);
            if (objective) {
                if (this.SYNC_OK === false) {
                    // Dump everything from local cache to objective
                    for (const [, value] of this.localState.entries())
                        this.objective.setScore(value.encoded_value, 0);
                    console.log(`[JaylyDB] Database '${objective.id.slice(6)}' is now synced.`);
                }
                else
                    this.updateParticipants();
                this.SYNC_OK = true;
            }
            else if (this.SYNC_OK === true) {
                console.error(`[JaylyDB] There is a sync issue with database '${id}'.`);
                this.SYNC_OK = false;
            }
        });
    }
    /**
     * @returns the number of elements in the database.
     */
    get size() {
        return this.localState.size;
    }
    /**
     * Clears every element in the database.
     */
    clear() {
        this.localState.forEach(participant => this.objective.removeParticipant(participant.identity));
        this.localState.clear();
    }
    /**
     * @returns — true if an element in the database exists and has been removed, false otherwise.
     */
    delete(key) {
        const participant = this.localState.get(key);
        if (!participant)
            return false;
        const success = this.objective.removeParticipant(participant.identity);
        this.localState.delete(key);
        return success;
    }
    /**
     * Executes a provided function once per each key/value pair in the database, in insertion order.
     */
    forEach(callbackfn) {
        for (const [key, value] of this.entries())
            callbackfn(value, key, this);
    }
    /**
     * Returns a specified element from the database.
     * @param key The key of the element to return.
     * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
     */
    get(key) {
        if (!this.localState.has(key))
            this.updateParticipants();
        return this.localState.get(key)?.decoded_value;
    }
    has(key) {
        return this.localState.has(key);
    }
    /**
     * Adds a new element with a specified key and value to the database. If an element with the same key already exists, the element will be updated.
     */
    set(key, value) {
        if (!allowedTypes.includes(typeof value))
            throw new TypeError("JaylyDB::set only accepts a value of string, number, or boolean.");
        if (this.localState.get(key)?.decoded_value === value)
            return this;
        const encoded = DisplayName.stringify({ [key]: value }, this.salt);
        if (encoded.length > 32767)
            throw new RangeError("JaylyDB::set only accepts a string value less than 32767 characters.");
        // push change to disk
        this.objective.setScore(encoded, 0);
        const data = {
            encoded_value: encoded,
            decoded_value: value,
            identity: this.objective.getParticipants().find(participant => participant.displayName === encoded),
        };
        this.localState.set(key, data);
        return this;
    }
    *entries() {
        for (const [key, data] of this.localState.entries())
            yield [key, data.decoded_value];
    }
    /**
     * Returns an iterable of keys in the database
     */
    *keys() {
        for (const [key] of this.entries())
            yield key;
    }
    /**
     * Returns an iterable of values in the map
     */
    *values() {
        for (const [, value] of this.entries())
            yield value;
    }
    [Symbol.iterator]() {
        return this.entries();
    }
}
_a = Symbol.toStringTag;
;
export { JaylyDB };
