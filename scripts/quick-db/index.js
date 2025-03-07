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
	constructor(id) {
		this.#identifier = `${DATABASE_PREFIX}${id}${DATABASE_PREFIX}`;

		const IDDS = this.getIds();
		this.__cache = {};

		for (const keyFull of IDDS) {
			const key = keyFull.replace(this.#identifier, '');
			const rawValue = GET.call(world, keyFull);
			
			this.__cache[key] = this.#parseValue(rawValue);
		}
	}

	#parseValue(value) {
		if (typeof value === 'string') {
			if (value.startsWith('obj')) return JSON.parse(value.slice(3));
			if (value === 'null') return null;
			if (value === 'true') return true;
			if (value === 'false') return false;
			if (!isNaN(value)) return Number(value);
		}
		return value;
	}

	#stringifyValue(value) {
		if (typeof value === 'object' && value !== null) return 'obj' + JSON.stringify(value);
		if (typeof value === 'boolean' || value === null) return String(value);
		return value;
	}

	get size() {
		return this.keys().length;
	}

	keys() {
		return Object.keys(this.__cache);
	}

	values() {
		return Object.values(this.__cache);
	}

	entries() {
		return Object.entries(this.__cache);
	}

	set(key, value) {
		if (!key) throw new Error('pls type the key!!');
		const finalValue = this.#stringifyValue(value);
		SET.call(world, this.#identifier + String(key), finalValue);
		this.__cache[key] = value;
		return true;
	}

	delete(key) {
		if (!this.has(key)) return false;
		SET.call(world, this.#identifier + String(key));
		delete this.__cache[key];
		return true;
	}

	get(key) {
		if (!key) throw new Error('pls type the key!!');
		return this.__cache?.[key];
	}

	has(key) {
		return key in this.__cache;
	}

	static get ids() {
		return [
			...new Set(
				IDS.call(world)
					.filter((id) => id.startsWith(DATABASE_PREFIX))
					.map((k) => k.slice(DATABASE_PREFIX.length).split(DATABASE_PREFIX)[0])
			)
		];
	}

	getIds() {
		return IDS.call(world).filter((id) => id.startsWith(this.#identifier));
	}

	clear() {
		for (const key of this.keys()) {
			this.delete(key);
		}
		this.__cache = {};
	}

	static clearAll() {
		for (const real_id of IDS.call(world).filter((id) => id.startsWith(DATABASE_PREFIX))) {
			SET.call(world, real_id);
		}
	}
}

export default QuickDB;
export { QuickDB };
