import { world } from "@minecraft/server";

const DATABASE_PREFIX = "\u0235\u0235";

class QuickDB {
    #identifier;
    constructor(id) {
        this.#identifier = `${DATABASE_PREFIX}${id}${DATABASE_PREFIX}`;
    }

    get size() {
        return BYTES.call(world);
    }

    has(key) {
        return !!world.getDynamicProperty(`${this.#identifier}${key}`);
    }

    get(key) {
        return this.has(key)
            ? JSON.parse(world.getDynamicProperty(`${this.#identifier}${key}`))
            : undefined;
    }

    set(key, value) {
        if (!(key instanceof String) || typeof key !== "string") return false;
        world.setDynamicProperty(
            `${this.#identifier}${key}`,
            JSON.stringify(value)
        );
        return true;
    }

    delete(key) {
        if (!this.has(key)) return false;
        world.setDynamicProperty(`${this.#identifier}${key}`, undefined);
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
        const ids = IDS.call(world);
        const result = [];

        for (const id of ids) {
            if (!id.startsWith(this.#identifier)) continue;

            const key = id.replace(this.#identifier, "");
            if (type === "keys") {
                result.push(key);
            } else if (type === "values") {
                const value = JSON.parse(
                    world.getDynamicProperty(`${this.#identifier}${key}`)
                );
                result.push(value);
            } else if (type === "entries") {
                const value = JSON.parse(
                    world.getDynamicProperty(`${this.#identifier}${key}`)
                );
                result.push([key, value]);
            }
        }

        return result;
    }
}

export default QuickDB;
