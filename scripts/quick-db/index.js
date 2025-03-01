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

class QuickDB {
  #identifier;
  constructor(id) {
    this.#identifier = `${DATABASE_PREFIX}${id}${DATABASE_PREFIX}`;

    const IDDS = this.getIds();
    let length_ = IDDS.length;
    this.__cache = {};
    while (length_--) {
      const key = IDDS[length_].replace(this.#identifier, "");
      let value = GET.call(world, this.#identifier + key);
      if (typeof value == "string" && value.startsWith("obj"))
        this.__cache[key] = JSON.parse(value.slice(3));
      this.__cache[key] = value;
    }
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
    if (!key) throw new Error("pls type the key!!");
    if (value.length > 0 || value !== undefined || value !== undefined)
      SET.call(world, this.#identifier + String(key), JSON.stringify(value));
    else SET.call(world, this.#identifier + String(key));
    return true;
  }

  delete(key) {
    if (!this.has(key)) return false;
    SET.call(world, `${this.#identifier}${String(key)}`);
    return true;
  }

  get(key) {
    if (!key) throw new Error("pls type the key!!");
    return this.__cache?.[key];
  }

  has(key) {
    return !!this.get(key);
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
    let length_ = this.size;
    while (length_--) this.delete(this.keys()[length_]);
    this.__cache = {};
  }

  static clearAll() {
    for (const real_id of IDS.call(world).filter((id) =>
      id.startsWith(DATABASE_PREFIX)
    ))
      SET.call(world, real_id);
  }
}

export default QuickDB;
export { QuickDB };
