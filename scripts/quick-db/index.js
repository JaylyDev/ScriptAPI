// Author: unknown <https://github.com/unknown>
// @ts-nocheck
import { world } from "@minecraft/server";
const KEY_4NO = "⧉⧉";
export class ScoreboardDB {
    constructor(name) {
        this.keyacc = '⟡⟡';
        this.cache = {};
        this.identifier = `${KEY_4NO}${name}${KEY_4NO}`;
        this.obj = world.scoreboard.getObjective(this.identifier) ??
            world.scoreboard.addObjective(this.identifier);
        this.participantNames = {};
        this.participants = this.obj.getParticipants();
        let iteration = this.participants.length;
        while (iteration--) {
            const participantName = this.participants[iteration]?.displayName;
            const [key, rawValue] = participantName.split(this.keyacc);
            const value = rawValue.startsWith('num:') ? Number(rawValue.slice('num:'.length)) : rawValue.startsWith('bool:') ? Boolean(rawValue.slice('bool:'.length)) : JSON.parse(rawValue);
            this.participantNames[key] = participantName;
            this.cache[key] = value;
        }
    }
    set(key, value) {
        if (key in this.cache && value == null)
            this.delete(key);
        const valueFormatting = typeof value == 'number' ? `num:${value}` : typeof value == 'boolean' ? `bool:${value}` : value;
        const participantName = `${key}${this.keyacc}${JSON.stringify(valueFormatting)}`;
        this.obj.setScore(participantName, 1);
        this.participantNames[key] = participantName;
        this.cache[key] = value;
    }
    get(key) {
        return this.cache[key];
    }
    has(key) {
        return !!this.cache;
    }
    delete(key) {
        if (!(key in this.cache))
            return false;
        this.obj.removeParticipant(this.participantNames[key]);
        delete this.participantNames[key];
        delete this.cache[key];
        return true;
    }
    keys() {
        return Object.keys(this.cache);
    }
    values() {
        return Object.values(this.cache);
    }
    entries() {
        return Object.entries(this.cache);
    }
}
export class DynamicDB {
    constructor(name) {
        this.cache = {};
        this.identifier = `${KEY_4NO}${name}${KEY_4NO}`;
        const ids = world.getDynamicPropertyIds();
        let i = ids.length;
        while (i--) {
            const id = ids[i];
            if (!id.startsWith(this.identifier))
                continue;
            const raw = world.getDynamicProperty(id);
            const key = id.slice(this.identifier.length);
            const value = typeof raw === "string"
                ? JSON.parse(raw)
                : raw;
            this.cache[key] = value;
        }
    }
    set(key, value) {
        const id = this.identifier + key;
        if (key in this.cache && value == null) {
            this.delete(key);
            return;
        }
        const data = typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean"
            ? value
            : JSON.stringify(value);
        world.setDynamicProperty(id, data);
        this.cache[key] = value;
    }
    get(key) {
        return this.cache[key];
    }
    has(key) {
        return key in this.cache;
    }
    delete(key) {
        if (!(key in this.cache))
            return false;
        world.setDynamicProperty(this.identifier + key, undefined);
        delete this.cache[key];
        return true;
    }
    keys() {
        return Object.keys(this.cache);
    }
    values() {
        return Object.values(this.cache);
    }
    entries() {
        return Object.entries(this.cache);
    }
}
DynamicDB.size = world.getDynamicPropertyTotalByteCount();
export default class QuickDB {
    constructor(name, storage = "local") {
        this.db =
            storage === "scoreboard" || storage === "global"
                ? new ScoreboardDB(name)
                : new DynamicDB(name);
    }
    set(key, value) {
        this.db.set(key, value);
    }
    get(key) {
        return this.db.get(key);
    }
    has(key) {
        return this.db.has(key);
    }
    delete(key) {
        return this.db.delete(key);
    }
    keys() {
        return this.db.keys();
    }
    values() {
        return this.db.values();
    }
    entries() {
        return this.db.entries();
    }
}
