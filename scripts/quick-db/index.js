// Script example for ScriptAPI
// Author: Nperma <https://github.com/nperma>
// Project: https://github.com/JaylyDev/ScriptAPI
import { world, World } from "@minecraft/server";

const DATABASE_PREFIX = "\u0235\u0235";

const {
    getDynamicProperty: GET,
    setDynamicProperty: SET,
    getDynamicPropertyIds: IDS
} = World.prototype;

//adapt code to JalyDev/scriptAPI
class QuickDB {
    #identifier;
    constructor(id) {
        this.#identifier = `${DATABASE_PREFIX}${id}${DATABASE_PREFIX}`;
    }

    get size() {
        return IDS.call(world).filter((id) => id.startsWith(this.#identifier))
            .length;
    }

    has(key) {
        return !!(
            GET.call(world, `${this.#identifier}${key}`) &&
            GET.call(world, `${this.#identifier}${key}`) !== undefined
        );
    }

    get(key) {
        return this.has(key)
            ? JSON.parse(GET.call(world, `${this.#identifier}${key}`))
            : undefined;
    }

    set(key, value) {
        if (typeof key !== "string") return false;
        SET.call(world, `${this.#identifier}${key}`, JSON.stringify(value));
        return true;
    }

    delete(key) {
        if (!this.has(key)) return false;
        SET.call(world, `${this.#identifier}${key}`, undefined);
        return true;
    }

    keys() {
        return Array.from(this.#UIDX("key"));
    }

    values() {
        return Array.from(this.#UIDX("value"));
    }

    entries() {
        return Array.from(this.#UIDX("entries"));
    }

    #UIDX(type) {
        const ids = this.getIds();
        let u_idx = 0;
        const len = ids.length;

        return function* () {
            while (u_idx < len) {
                const id = ids[u_idx];
                const key = id.split(this.#identifier)[1];
                const value = this.get(key);
                switch (type) {
                    case "key":
                        yield key;
                        break;
                    case "value":
                        yield this.has(key) ? JSON.parse(value) : undefined;
                        break;
                    case "entries":
                        yield [key, JSON.parse(value)];
                        break;
                }
                u_idx++;
            }
        }.bind(this)();
    }

    getIds() {
        return world
            .getDynamicPropertyIds()
            .filter((id) => id.startsWith(this.#identifier));
    }

    clear() {
        for (const id of this.getIds()) {
            this.delete(id.replace(this.#identifier,""));
        }
    }
}

export default QuickDB;
