var _a;
// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { ScoreboardIdentityType, world } from "@minecraft/server";
const version = "1.0.5";
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
    console.log("[JaylyDB] Failed to " + action + " JSON data.", "\nVersion: " + version, "\nData: " + data, "\nSalt: " + salt, "\nError: " + error.message, "\n" + error.stack);
    throw new Error(`Failed to ${action} data. Please check content log file for more info.\n`);
};
/**
 * Parse and stringify scoreboard display name
 * @beta
 */
const DisplayName = {
    parse(text, salt) {
        try {
            const a = JSON.parse(`"${salt ? decrypt(text, salt) : text}"`);
            return JSON.parse(`{${a}}`);
        }
        catch (error) {
            CreateCrashReport("load", text, error, salt);
        }
    },
    stringify(value, salt) {
        try {
            const a = JSON.stringify(JSON.stringify(value).slice(1, -1)).slice(1, -1);
            return salt ? encrypt(a, salt) : a;
        }
        catch (error) {
            CreateCrashReport("save", JSON.stringify(value), error, salt);
        }
    }
};
const overworld = world.getDimension("overworld");
/**
 * A simple database for storing data in a Minecraft world, using scoreboard.
 */
class JaylyDB {
    /** @internal */
    get salt() {
        return this.encrypted ? this.objective.displayName : undefined;
    }
    ;
    /** @internal */
    updateParticipants() {
        this.participants.clear();
        for (const participant of this.objective.getParticipants()) {
            if (participant.type !== ScoreboardIdentityType.fakePlayer)
                continue;
            this.participants.set(Object.keys(DisplayName.parse(participant.displayName, this.salt))[0], participant);
        }
    }
    /**
     * @param id An identifier for the database
     * @param encrypted whether this database is encrypted or not, note that encryption state cannot be changed after creation
     */
    constructor(id, encrypted = false) {
        /** @internal */
        this.participants = new Map();
        /** @internal */
        this.displayDataCache = new Map();
        this[_a] = JaylyDB.name;
        this.objective = world.scoreboard.getObjective("jaylydb:" + id) ?? world.scoreboard.addObjective("jaylydb:" + id, uuid());
        this.encrypted = encrypted;
        this.updateParticipants();
    }
    /**
     * @returns the number of elements in the database.
     */
    get size() {
        return this.participants.size;
    }
    /**
     * Clears every element in the database.
     */
    clear() {
        this.participants.forEach(this.objective.removeParticipant);
        this.updateParticipants();
    }
    /**
     * @returns — true if an element in the database exists and has been removed, false otherwise.
     */
    delete(key) {
        const participant = this.participants.get(key);
        if (!participant)
            return false;
        const success = this.objective.removeParticipant(participant);
        this.participants.delete(key);
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
     * @param reloadCache If set to true, the database object reloads cache before returning the element. This is made for when the database is modified from a external source.
     * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
     */
    get(key, reloadCache = false) {
        if (!reloadCache && this.displayDataCache.has(key))
            return this.displayDataCache.get(key);
        const participant = this.participants.get(key);
        if (!participant)
            return undefined;
        const displayName = participant.displayName;
        const displayData = DisplayName.parse(displayName, this.salt);
        this.displayDataCache.set(key, displayData[key]);
        return displayData[key];
    }
    has(key) {
        return this.participants.has(key);
    }
    /**
     * Adds a new element with a specified key and value to the database. If an element with the same key already exists, the element will be updated.
     */
    set(key, value) {
        if (!allowedTypes.includes(typeof value))
            throw new TypeError("JaylyDB::set only accepts a value of string, number, or boolean.");
        const str = DisplayName.stringify({ [key]: value }, this.salt);
        if (str.length > 32767)
            throw new RangeError("JaylyDB::set only accepts a string value less than 32767 characters.");
        if (this.displayDataCache.has(key)) {
            const displayData = this.displayDataCache.get(key);
            if (displayData[key] === value)
                return this;
        }
        ;
        this.delete(key);
        overworld.runCommand(`scoreboard players set "${str}" ${this.objective.id} 0`);
        this.displayDataCache.set(key, value);
        this.updateParticipants();
        return this;
    }
    *entries() {
        for (const [, { displayName }] of this.participants) {
            const valueObject = DisplayName.parse(displayName, this.salt);
            const [entryKey, entryValue] = Object.entries(valueObject)[0];
            yield [entryKey, entryValue];
        }
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
