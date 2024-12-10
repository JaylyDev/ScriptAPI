/**
 * # QUICK DB  @DATABASE
 *
 * @format
 * @author @Nperma fomo datang (jaskiding) use like map method: set(), delete(), get(), keys(), values(), entries()
 * @example const db = new QuickDB("user");
 *
 *
 * @param {key: string} @param {value: any} @returns {boolean} //set item
 * db.set("FomoKiwor", {money:20000})
 *
 * @param {key} @returns {value} // log: {money:20000}
 * db.get("FomoKiwor")
 *
 * @param {key} @returns {boolean} // log: true
 * db.has("FomoKiwor")
 * // log: false
 * db.has("Lope387")
 *
 * @param {key} @returns {boolean} //delete item
 * db.delete("FomoKiwor")
 *
 * // log: false
 * db.has("FomoKiwor")
 *
 * @returns {keys[]} get all key on db
 * db.keys()
 * @returns {values[]} get all value on db
 * db.values();
 *
 * @returns {entries[key,value]} get all key and value on db
 * db.entries();
 */

import { world,World} from "@minecraft/server";

const DATABASE_PREFIX = "\u0235\u0235";

const {getDynamicProperty:GET,setDynamicProperty:SET,getDynamicPropertyIds:IDS,getDynamicPropertyTotalByteCount:BYTES}=World.prototype;

class QuickDB {
    #identifier;
    constructor(id) {
        this.#identifier = `${DATABASE_PREFIX}${id}${DATABASE_PREFIX}`;
    }
    
    get size(){return BYTES.call(world)}
    
    has(key){return !!GET.call(world, key)}
    
    get(key){
      return this.has(key)?JSON.parse(GET.call(world,key)):undefined
    }
    
    set(key,value){
      if(!(key instanceof String)||typeof key!=="string") return false;
      SET.call(world,key,JSON.stringify(value))
      return true;
    }
    
    delete(key){
      if(!this.has(key)) return false;
      SET.call(world,key,undefined);
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

  /**
   * Helper method to iterate through database properties
   * @param {"keys" | "values" | "entries"} type
   * @returns {Array}
   */
  #UIDX(type) {
    const ids = IDS.call(world);
    const result = [];

    for (const id of ids) {
      if (!id.startsWith(this.#identifier)) continue;

      const key = id.replace(this.#identifier, "");
      if (type === "keys") {
        result.push(key);
      } else if (type === "values") {
        const value = JSON.parse(GET.call(world, id));
        result.push(value);
      } else if (type === "entries") {
        const value = JSON.parse(GET.call(world, id));
        result.push([key, value]);
      }
    }

    return result;
  }
}

export default QuickDB
