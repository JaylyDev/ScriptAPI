// Script example for ScriptAPI
// Author: Nperma <https://github.com/nperma>
// Project: https://github.com/JaylyDev/ScriptAPI

import { world, World } from '@minecraft/server';

const DATABASE_PREFIX = '\u0235\u0235';

const {
	getDynamicProperty: GET,
	setDynamicProperty: SET,
	getDynamicPropertyIds: IDS
} = World.prototype;

class QuickDB {
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
			const rawValue = GET.call(world, keyFull);
			this.__cache[key] = this.#parseValue(rawValue);
		}
	}

	/**
	 * Parses stored string values into their appropriate types.
	 * @param {any} value
	 * @returns {any}
	 */
	#parseValue(value) {
		if (typeof value === 'string') {
			if (value.startsWith('obj')) return JSON.parse(value.slice(3));
			if (value === 'null') return null;
			if (value === 'true' || value === 'false') return value === 'true';
			const num = Number(value);
			if (!isNaN(num)) return num;
		}
		return value;
	}

	/**
	 * Converts values into a storable format.
	 * @param {any} value
	 * @returns {string}
	 */
	#stringifyValue(value) {
		if (typeof value === 'object' && value !== null) return 'obj' + JSON.stringify(value);
		if (typeof value === 'boolean' || value === null) return String(value);
		return String(value);
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
	 * @returns {boolean}
	 */
	set(key, value) {
		if (typeof key !== 'string' || !key.trim()) throw new Error('Key must be a non-empty string');
		const finalValue = this.#stringifyValue(value);
		SET.call(world, this.#identifier + key, finalValue);
		this.__cache[key] = value;
		return true;
	}

	/**
	 * Deletes a key.
	 * @param {string} key
	 * @returns {boolean}
	 */
	delete(key) {
		if (!this.has(key)) return false;
		SET.call(world, this.#identifier + key, undefined);
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
		return [...new Set(
			IDS.call(world)
				.filter((id) => id.startsWith(DATABASE_PREFIX))
				.map((k) => k.slice(DATABASE_PREFIX.length).split(DATABASE_PREFIX)[0])
		)];
	}

	/** @returns {string[]} */
	getIds() {
		return IDS.call(world).filter((id) => id.startsWith(this.#identifier));
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
		for (const real_id of IDS.call(world).filter((id) => id.startsWith(DATABASE_PREFIX))) {
			SET.call(world, real_id, undefined);
		}
	}
}

export default QuickDB;
export { QuickDB };
