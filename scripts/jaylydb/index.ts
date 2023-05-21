// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI

/*!
 * Copyright (c) Jayly. All rights reserved.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import { ScoreboardIdentity, ScoreboardIdentityType, ScoreboardObjective, system, world } from "@minecraft/server";

const version = "1.0.7";
const str = () => ('00000000000000000' + (Math.random() * 0xffffffffffffffff).toString(16)).slice(-16);
/**
 * A rough mechanism for create a random uuid. Not as secure as uuid without as much of a guarantee of uniqueness,
 * but reasonable for non-secure and non-persistent use cases. It should be revisited in case it is possible to
 * support the crypto library in QuickJS.
 * @beta
 */
const uuid = () => {
  const [a, b] = [str(), str()];
  return `${a.slice(0, 8)}-${a.slice(8, 12)}-4${a.slice(13)}-a${b.slice(1, 4)}-${b.slice(4)}`;
};

const allowedTypes = ["string", "number", "boolean"];

const encrypt = (data: string, salt: string): string => {
  const encryptedChars: number[] = [];
  for (let i = 0; i < data.length; i++) {
    const charCode = data.charCodeAt(i) + salt.charCodeAt(i % salt.length);
    encryptedChars.push(charCode);
  }
  return String.fromCharCode(...encryptedChars);
};

const decrypt = (encrypted: string, salt: string): string => {
  const decryptedChars: number[] = [];
  for (let i = 0; i < encrypted.length; i++) {
    const charCode = encrypted.charCodeAt(i) - salt.charCodeAt(i % salt.length);
    decryptedChars.push(charCode);
  }
  return String.fromCharCode(...decryptedChars);
};

const CreateCrashReport = (action: "save" | "load", data: string, error: Error, salt?: string): never => {
  console.warn(
    "[JaylyDB] Failed to " + action + " JSON data.",
    "\nVersion: " + version,
    "\nData: " + data,
    "\nSalt: " + salt,
    "\nError: " + error.message, "\n" + error.stack
  );
  throw new Error(`Failed to ${action} data. Please check content log file for more info.\n`);
};

/**
 * Parse and stringify scoreboard display name
 * @beta
 */
const DisplayName = {
  parse(text: string, salt?: string): Record<string, string | number | boolean> {
    try {
      const a = JSON.parse(`"${salt ? decrypt(text, salt) : text}"`);
      return JSON.parse(`{${a}}`);
    } catch (error) {
      CreateCrashReport("load", text, error, salt);
    }
  },
  stringify(value: Record<string, string | number | boolean>, salt?: string): string {
    try {
      const a = JSON.stringify(JSON.stringify(value).slice(1, -1)).slice(1, -1);
      return salt ? encrypt(a, salt) : a;
    } catch (error) {
      CreateCrashReport("save", JSON.stringify(value), error, salt);
    }
  }
};

const overworld = world.getDimension("overworld");

/**
 * A simple database for storing data in a Minecraft world, using scoreboard.
 */
class JaylyDB implements Map<string, string | number | boolean> {
  /** @internal */
  private readonly objective: ScoreboardObjective;
  /** @internal */
  private readonly encrypted: boolean;
  /** @internal */
  private readonly participants = new Map<string, ScoreboardIdentity>();
  /** @internal */
  private readonly localCache = new Map<string, string | number | boolean>();
  /** @internal */
  private readonly salt: string | undefined;
  /** @internal */
  private warningSent = false;
  /**
   * Internal cache object to allow data to write from memory to scoreboard every tick interval.
   * This is done to prevent multiple values written to a same key to scoreboard each operation.
   * @internal
   */
  private readonly tempCache = new Map<string, string | number | boolean>();
  /** @internal */
  private updateParticipants() {
    const id = this.objective.id.substring(this.objective.id.indexOf(":") + 1);
    if (this.tempCache.size <= 0 && this.warningSent === true) {
      console.warn(`[JaylyDB] Database '${id}' has written data to world. It is now safe to exit the world.`);    
      this.warningSent = false;
    }
    else if (this.tempCache.size > 0 && this.warningSent === false) {
      console.warn(`[JaylyDB] Database '${id}' is writing data to world. Please wait until the process is completed before exiting the world.`);
      this.warningSent = true;
    };

    try {
      for (const [key, value] of this.tempCache.entries()) {
        overworld.runCommandAsync(`scoreboard players set "${value}" ${this.objective.id} 0`);
        this.tempCache.delete(key);
      };
    } catch (error) {
      if (error.message !== "Runtime failure, command queue is full.") throw error;
    };

    this.participants.clear();

    for (const participant of this.objective.getParticipants()) {
      if (participant.type !== ScoreboardIdentityType.fakePlayer) continue;
      this.participants.set(Object.keys(DisplayName.parse(participant.displayName, this.salt))[0], participant);
    };
  }
  /**
   * @param id An identifier for the database
   * @param encrypted whether this database is encrypted or not, note that encryption state cannot be changed after creation
   */
  constructor(id: string, encrypted: boolean = false) {
    this.objective = world.scoreboard.getObjective("jaylydb:" + id) ?? world.scoreboard.addObjective("jaylydb:" + id, uuid());
    this.encrypted = encrypted;
    this.salt = this.encrypted ? this.objective.displayName : undefined;

    // Fetch all data when database initialize
    this.updateParticipants();
    // This function queues the data to be written to the scoreboard every second interval.
    system.runInterval(() => this.updateParticipants());
  }
  /**
   * @returns the number of elements in the database.
   */
  get size(): number {
    return this.participants.size;
  }
  /**
   * Clears every element in the database.
   */
  clear(): void {
    this.participants.forEach(this.objective.removeParticipant);
    this.updateParticipants();
  }
  /**
   * @returns — true if an element in the database exists and has been removed, false otherwise.
   */
  delete(key: string): boolean {
    const participant = this.participants.get(key);
    if (!participant) return false;
  
    const success = this.objective.removeParticipant(participant);
    this.participants.delete(key);
    this.localCache.delete(key);

    return success;
  }  
  /**
   * Executes a provided function once per each key/value pair in the database, in insertion order.
   */
  forEach(callbackfn: (value: string | number | boolean, key: string, jaylydb: this) => void): void {
    for (const [key, value] of this.entries()) callbackfn(value, key, this);
  }
  /**
   * Returns a specified element from the database.
   * @param key The key of the element to return.
   * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
   */
  get(key: string): string | number | boolean | undefined {
    if (this.localCache.has(key)) return this.localCache.get(key)!;

    // local cache does not have element, fetch global participant
    const participant = this.participants.get(key);
    if (!participant) return undefined;

    const displayName = participant.displayName;
    const data = DisplayName.parse(displayName, this.salt);
    this.localCache.set(key, data[key]);

    return data[key];
  }
  has(key: string): boolean {
    return this.localCache.has(key);
  }
  /**
   * Adds a new element with a specified key and value to the database. If an element with the same key already exists, the element will be updated.
   */
  set(key: string, value: string | number | boolean): this {
    if (!allowedTypes.includes(typeof value)) throw new TypeError("JaylyDB::set only accepts a value of string, number, or boolean.");

    const encoded = DisplayName.stringify({ [key]: value }, this.salt);
    if (encoded.length > 32767) throw new RangeError("JaylyDB::set only accepts a string value less than 32767 characters.");
    if (this.localCache.get(key)! === value) return this; 

    // push change to temp cache
    this.participants.delete(key);
    this.tempCache.set(key, encoded);
    this.localCache.set(key, value);

    return this;
  }
  *entries(): IterableIterator<[string, string | number | boolean]> {
    for (const iterator of this.localCache.entries()) yield iterator;
  }
  /**
   * Returns an iterable of keys in the database
   */
  *keys(): IterableIterator<string> {
    for (const [key] of this.entries()) yield key;
  }
  /**
   * Returns an iterable of values in the map
   */
  *values(): IterableIterator<string | number | boolean> {
    for (const [, value] of this.entries()) yield value;
  }
  [Symbol.iterator](): IterableIterator<[string, string | number | boolean]> {
    return this.entries();
  }
  [Symbol.toStringTag]: string = JaylyDB.name;
};

export { JaylyDB };