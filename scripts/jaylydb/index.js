// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
var _a, _b, _c;
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
    const a = str();
    const b = str();
    return a.slice(0, 8) + '-' + a.slice(8, 12) + '-4' + a.slice(13) + '-a' + b.slice(1, 4) + '-' + b.slice(4);
};
/**
 * an insecure but simple text cipher/decipher utility.
 */
const cipher = {
    cipher(salt) {
        const textToChars = (text) => text.split('').map(c => c.charCodeAt(0));
        const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
        const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
        return (text) => text.split('')
            .map(textToChars)
            .map(applySaltToChar)
            .map(byteHex)
            .join('');
    },
    decipher(salt) {
        const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
        const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
        return (encoded) => encoded.match(/.{1,2}/g)
            .map(hex => parseInt(hex, 16))
            .map(applySaltToChar)
            .map(charCode => String.fromCharCode(charCode))
            .join('');
    }
};
/**
 * Parse and stringify scoreboard display name
 * @beta
 */
const DisplayName = new (_b = class DisplayName {
        constructor() {
            this[_a] = DisplayName.name;
        }
        parse(text, salt) {
            try {
                const d = cipher.decipher(salt);
                const c = d(text);
                const a = JSON.parse(`"${c}"`); // "key":"value"
                const b = JSON.parse(`{${a}}`); // {"key":"value"}
                return b;
            }
            catch (error) {
                console.error(error);
                return {};
            }
        }
        stringify(value, salt) {
            const d = cipher.cipher(salt);
            const rawtext = JSON.stringify(JSON.stringify(value).slice(1, -1)).slice(1, -1);
            return d(rawtext);
        }
    },
    _a = Symbol.toStringTag,
    _b)();
/**
 * Database using scoreboard
 * @beta
 */
class JaylyDB {
    constructor(id) {
        var _b;
        this[_c] = JaylyDB.name;
        this.objective = (_b = world.scoreboard.getObjective(`jaylydb:` + id)) !== null && _b !== void 0 ? _b : world.scoreboard.addObjective(`jaylydb:` + id, uuid());
    }
    ;
    getParticipant(key) {
        return this.objective.getParticipants().find(participant => participant.type === ScoreboardIdentityType.fakePlayer
            && key in DisplayName.parse(participant.displayName, this.objective.displayName));
    }
    ;
    clear() {
        this.objective.getParticipants().forEach(this.objective.removeParticipant);
    }
    delete(key) {
        const participant = this.getParticipant(key);
        if (!participant)
            return;
        return this.objective.removeParticipant(participant);
    }
    forEach(callbackfn) {
        for (const [key, value] of this.entries()) {
            callbackfn(value, key, this);
        }
    }
    get(key) {
        const participant = this.getParticipant(key);
        return DisplayName.parse(participant.displayName, this.objective.displayName)[key];
    }
    has(key) {
        const participant = this.getParticipant(key);
        return !!participant;
    }
    set(key, value) {
        const allowedTypes = ["string", "number", "boolean"];
        if (!allowedTypes.includes(typeof (value)))
            throw TypeError("JaylyDB::set only accepts value of string, number, or boolean.");
        // throws error if string value is over 32767
        if (typeof (value) === "string" && value.length > 32767)
            throw RangeError("JaylyDB::set only accepts string value of length less than 32767.");
        this.delete(key);
        world.getDimension("overworld").runCommand(`scoreboard players set "${DisplayName.stringify({ [key]: value }, this.objective.displayName)}" ${this.objective.id} 0`);
        return this;
    }
    get size() {
        return this.objective.getParticipants().length;
    }
    ;
    *entries() {
        const values = this.objective.getParticipants();
        for (const value of values) {
            const valueObject = DisplayName.parse(value.displayName, this.objective.displayName);
            const valueLength = DisplayName.stringify(valueObject, this.objective.displayName).length;
            if (valueLength > 0)
                yield [Object.keys(valueObject)[0], Object.values(valueObject)[0]];
        }
    }
    *keys() {
        for (const [key] of this.entries()) {
            yield key;
        }
    }
    *values() {
        for (const [, value] of this.entries()) {
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
}
_c = Symbol.toStringTag;
;
export { JaylyDB };
