// Script example for ScriptAPI
// Author: Nperma <https://github.com/nperma>
// Project: https://github.com/JaylyDev/ScriptAPI


import { world, system, World } from "@minecraft/server";

const DATABASE_PREFIX = '\u0235\u0235';

const {
	getDynamicProperty: GET,
	setDynamicProperty: SET,
	getDynamicPropertyIds: IDS
} = World.prototype;

class QuickDB {

    #identifier;
    __cache;

    /**
     * @param {string} id - Unique database identifier.
     */
    constructor(id) {
        if (typeof id !== "string" || !id.trim()) {
            throw new Error("Invalid database ID");
        }
        this.#identifier = `${DATABASE_PREFIX}${id}${DATABASE_PREFIX}`;
        this.__cache = {};

        for (const keyFull of this.getIds()) {
            const key = keyFull.replace(this.#identifier, "");
            let value;
            system.run(() => {
                value = GET.call(world, keyFull);
            });
            this.__cache[key] = JSON.parse(value);
        }
    }

    /** @returns {number} */
    get size() {
        return this.keys().length;
    }

    /** @returns {string[]} */
    keys() {
        return Object.keys(this.__cache);
    }

    /** @returns {any[]} */
    values() {
        return Object.values(this.__cache);
    }

    /** @returns {[string, any][]} */
    entries() {
        return Object.entries(this.__cache);
    }

    /**
     * Stores a key-value pair.
     * @param {string} key
     * @param {any} value
     * @returns {void}
     */
    set(key, value) {
        if (typeof key !== "string" || !key.trim())
            throw new Error("Key must be a non-empty string");
        system.run(() =>
            SET.call(world, this.#identifier + key, JSON.stringify(value))
        );
        this.__cache[key] = value;
    }

    /**
     * Deletes a key.
     * @param {string} key
     * @returns {boolean}
     */
    delete(key) {
        if (!this.has(key)) return false;
        system.run(() => SET.call(world, this.#identifier + key));
        delete this.__cache[key];
        return true;
    }

    /**
     * Retrieves a value.
     * @param {string} key
     * @returns {any}
     */
    get(key) {
        if (typeof key !== "string" || !key.trim())
            throw new Error("Key must be a non-empty string");
        return this.__cache[key];
    }

    /**
     * Checks if a key exists.
     * @param {string} key
     * @returns {boolean}
     */
    has(key) {
        return key in this.__cache;
    }

    /** @returns {string[]} */
    static get ids() {
        let keys;
        system.run(() => {
            keys = IDS.call(world)
                .filter((id) => id.startsWith(DATABASE_PREFIX))
                .map(
                    (k) =>
                        k
                            .slice(DATABASE_PREFIX.length)
                            .split(DATABASE_PREFIX)[0]
                );
        });
        return [...new Set(keys)];
    }

    /** @returns {string[]} */
    getIds() {
        let result;
        system.run(() => {
            result = IDS.call(world).filter((id) =>
                id.startsWith(this.#identifier)
            );
        });
        return result;
    }

    /** Clears the database. */
    clear() {
        for (const key of this.keys()) {
            this.delete(key);
        }
        this.__cache = {};
    }

    /** Clears all databases globally. */
    static clearAll() {
        let keys;
        system.run(() => {
            keys = IDS.call(world).filter((id) =>
                id.startsWith(DATABASE_PREFIX)
            );
        });
        for (const real_id of keys) {
            system.run(() => SET.call(world, real_id));
        }
    }
=======
	#identifier;
	__cache = {};

	/**
	 * @param {string} id - Unique database identifier.
	 */
	constructor(id) {
		if (typeof id !== 'string' || !id.trim()) {
			throw new Error('Invalid database ID');
		}
		this.#identifier = `${DATABASE_PREFIX}${id}${DATABASE_PREFIX}`;

		for (const keyFull of this.getIds()) {
			const key = keyFull.replace(this.#identifier, '');
			let value;system.run(()=>{value=GET.call(world, keyFull);})
			this.__cache[key] = JSON.parse(value);
		}
	}

	/** @returns {number} */
	get size() {
		return this.keys().length;
	}

	/** @returns {string[]} */
	keys() {
		return Object.keys(this.__cache);
	}

	/** @returns {any[]} */
	values() {
		return Object.values(this.__cache);
	}

	/** @returns {[string, any][]} */
	entries() {
		return Object.entries(this.__cache);
	}

	/**
	 * Stores a key-value pair.
	 * @param {string} keyh
	 * @param {any} value
	 * @returns {void}
	 */
	set(key, value) {
		if (typeof key !== 'string' || !key.trim()) throw new Error('Key must be a non-empty string');
		system.run(()=>SET.call(world, this.#identifier + key, JSON.stringify(value)));
		this.__cache[key] = value;
	}

	/**
	 * Deletes a key.
	 * @param {string} key
	 * @returns {boolean}
	 */
	delete(key) {
		if (!this.has(key)) return false;
		system.run(()=>SET.call(world, this.#identifier + key));
		delete this.__cache[key];
		return true;
	}

	/**
	 * Retrieves a value.
	 * @param {string} key
	 * @returns {any}
	 */
	get(key) {
		if (typeof key !== 'string' || !key.trim()) throw new Error('Key must be a non-empty string');
		return this.__cache[key];
	}

	/**
	 * Checks if a key exists.
	 * @param {string} key
	 * @returns {boolean}
	 */
	has(key) {
		return key in this.__cache;
	}

	/** @returns {string[]} */
	static get ids() {
	  let keys;
	  system.run(() =>{
	    keys=IDS.call(world)
				.filter((id) => id.startsWith(DATABASE_PREFIX))
				.map((k) => k.slice(DATABASE_PREFIX.length).split(DATABASE_PREFIX)[0]);
	  });
		return [...new Set(
			keys
		)];
	}

	/** @returns {string[]} */
	getIds() {
	  let result;system.run(()=>{result=IDS.call(world).filter((id) => id.startsWith(this.#identifier));});
		return result;
	}

	/** Clears the database. */
	clear() {
		for (const key of this.keys()) {
			this.delete(key);
		}
		this.__cache = {}

	/** Clears all databases globally. */
	static clearAll() {
	  let keys;system.run(()=>{keys=IDS.call(world).filter((id) => id.startsWith(DATABASE_PREFIX))});
		for (const real_id of keys) {
			system.run(()=>SET.call(world, real_id));
		}

}

export default QuickDB;
export { QuickDB };
