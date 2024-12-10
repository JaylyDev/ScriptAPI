import { world } from "@minecraft/server";

const DATABASE_PREFIX = "\u0235\u0235";

class QuickDB {
    #identifier;
    constructor(id) {
        this.#identifier = `${DATABASE_PREFIX}${id}${DATABASE_PREFIX}`;
    }

    get size() {
        return world.getDynamicPropertyIds()
            .filter((id) => id.startsWith(this.#identifier)).length;
    }

    has(key) {
        const dynamicKey = `${this.#identifier}${key}`;
        return !!world.getDynamicProperty(dynamicKey);
    }

    get(key) {
        const dynamicKey = `${this.#identifier}${key}`;
        return this.has(key) 
            ? JSON.parse(world.getDynamicProperty(dynamicKey)) 
            : undefined;
    }

    set(key, value) {
        if (typeof key !== "string") return false;
        const dynamicKey = `${this.#identifier}${key}`;
        world.setDynamicProperty(dynamicKey, JSON.stringify(value));
        return true;
    }

    delete(key) {
        const dynamicKey = `${this.#identifier}${key}`;
        if (!this.has(key)) return false;
        world.setDynamicProperty(dynamicKey, undefined);
        return true;
    }

    keys() {
        return this.#UIDX("keys");
    }

    values() {
        return this.#UIDX("values");
    }

    entries() {
        return this.#UIDX("entries");
    }

    #UIDX(type) {
        const ids = world.getDynamicPropertyIds();
        const result = [];

        for (const id of ids) {
            if (!id.startsWith(this.#identifier)) continue;

            const key = id.replace(this.#identifier, "");
            if (type === "keys") {
                result.push(key);
            } else if (type === "values") {
                const value = JSON.parse(world.getDynamicProperty(id));
                result.push(value);
            } else if (type === "entries") {
                const value = JSON.parse(world.getDynamicProperty(id));
                result.push([key, value]);
            }
        }

        return result;
    }
}

export default QuickDB;
