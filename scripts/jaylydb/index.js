// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
var _a;
// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { ScoreboardIdentityType, world } from "@minecraft/server";
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
function encrypt(data, salt) {
    const encryptedChars = [];
    for (let i = 0; i < data.length; i++) {
        const charCode = data.charCodeAt(i) + salt.charCodeAt(i % salt.length);
        encryptedChars.push(charCode);
    }
    return String.fromCharCode(...encryptedChars);
}
function decrypt(encrypted, salt) {
    const decryptedChars = [];
    for (let i = 0; i < encrypted.length; i++) {
        const charCode = encrypted.charCodeAt(i) - salt.charCodeAt(i % salt.length);
        decryptedChars.push(charCode);
    }
    return String.fromCharCode(...decryptedChars);
}
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
            throw new Error(`Failed to parse JSON data: ${error.message}`);
        }
    },
    stringify(value, salt) {
        try {
            const a = JSON.stringify(JSON.stringify(value).slice(1, -1)).slice(1, -1);
            return salt ? encrypt(a, salt) : a;
        }
        catch (error) {
            throw new Error(`Failed to stringify JSON data: ${error.message}`);
        }
    }
};
const overworld = world.getDimension("overworld");
;
/**
 * Database using scoreboard
 * @beta
 */
class JaylyDB {
    get salt() {
        return this.encrypted ? this.objective.displayName : undefined;
    }
    ;
    findParticipant(key, getOptions) {
        let data;
        let participant;
        this.displayNames.find(displayName => {
            const displayData = DisplayName.parse(displayName, this.salt);
            if (!(key in displayData))
                return false;
            if (getOptions.data)
                data = displayData;
            if (getOptions.participant)
                participant = this.objective.getParticipants().find((participant) => participant.displayName === displayName);
            return true;
        });
        if (!data)
            return;
        return { data, participant };
    }
    ;
    updateParticipants() {
        this.participants = this.objective.getParticipants().filter((participant) => participant.type === ScoreboardIdentityType.fakePlayer);
        this.displayNames = this.participants.map((participant) => participant.displayName);
        this.displayKeys = this.displayNames.map((displayName) => Object.keys(DisplayName.parse(displayName, this.salt))[0]);
    }
    constructor(id, encrypted = false) {
        this[_a] = JaylyDB.name;
        this.objective = world.scoreboard.getObjective(`jaylydb:` + id) ?? world.scoreboard.addObjective(`jaylydb:` + id, uuid());
        this.encrypted = encrypted;
        this.updateParticipants();
    }
    get size() {
        return this.participants.length;
    }
    clear() {
        this.participants.forEach(this.objective.removeParticipant);
        this.updateParticipants();
    }
    delete(key) {
        const scoreboard = this.findParticipant(key, {
            participant: true,
            data: false
        });
        if (!scoreboard)
            return false;
        const success = this.objective.removeParticipant(scoreboard.participant);
        this.updateParticipants();
        return success;
    }
    forEach(callbackfn) {
        for (const [key, value] of this.entries())
            callbackfn(value, key, this);
    }
    get(key) {
        const scoreboard = this.findParticipant(key, {
            participant: false,
            data: true
        });
        if (!scoreboard)
            return;
        return scoreboard.data[key];
    }
    has(key) {
        return this.displayKeys.includes(key);
    }
    set(key, value) {
        if (!allowedTypes.includes(typeof (value)))
            throw TypeError("JaylyDB::set only accepts value of string, number, or boolean.");
        if (this.get(key) === value)
            return this; // No need to update if value hasn't changed
        // throws error if string value is over 32767
        const str = DisplayName.stringify({ [key]: value }, this.salt);
        if (str.length > 32767)
            throw RangeError("JaylyDB::set only accepts string value less than 32767 characters.");
        this.delete(key);
        overworld.runCommand(`scoreboard players set "${str}" ${this.objective.id} 0`);
        this.updateParticipants();
        return this;
    }
    *entries() {
        for (const displayName of this.displayNames) {
            const valueObject = DisplayName.parse(displayName, this.salt);
            yield [Object.keys(valueObject)[0], Object.values(valueObject)[0]];
        }
    }
    *keys() {
        for (const [key] of this.entries())
            yield key;
    }
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
