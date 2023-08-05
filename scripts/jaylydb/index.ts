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

const version = "1.1.2";
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

const CreateCrashReport = (action: "save" | "load", data: string, error: Error, salt?: string) => {
  console.warn(
    "[JaylyDB] Failed to " + action + " JSON data.",
    "\nVersion: " + version,
    "\nData: " + data,
    "\nSalt: " + salt,
    "\nError: " + error.message, "\n" + error.stack
  );
};

/**
 * Parse and stringify scoreboard display name
 * @beta
 */
const DisplayName = {
  parse(text: string, objective: ScoreboardObjective, salt?: string): Record<string, string | number | boolean> {
    try {
      const a = salt ? decrypt(text, salt) : text;
      return JSON.parse(`{${a}}`);
    } catch (error) {
      if (!(error instanceof Error)) throw error;
      // fallback to 1.0
      try {
        const a = JSON.parse(`"${salt ? decrypt(text, salt) : text}"`);
        const b = JSON.parse(`{${a}}`);
        // upgrade format
        objective.removeParticipant(text);
        objective.setScore(DisplayName.stringify(b, salt), 0);
        return b;
      } catch {
        CreateCrashReport("load", text, error, salt);
        throw new Error(`Failed to load data. Please check content log file for more info.\n`);
      }
    }
  },
  stringify(value: Record<string, string | number | boolean>, salt?: string): string {
    try {
      const a = JSON.stringify(value).slice(1, -1);
      return salt ? encrypt(a, salt) : a;
    } catch (error) {
      if (!(error instanceof Error)) throw error;
      CreateCrashReport("save", JSON.stringify(value), error, salt);
      throw new Error(`Failed to save data. Please check content log file for more info.\n`);
    }
  }
};

interface CacheData {
  identity: ScoreboardIdentity;
  encoded_value: string;
  decoded_value: string | number | boolean;
};

/**
 * A simple database for storing data in a Minecraft world, using scoreboard.
 */
class JaylyDB implements Map<string, string | number | boolean> {
  /** @internal */
  private readonly objective: ScoreboardObjective;
  /** @internal */
  private readonly encrypted: boolean;
  /** @internal */
  private readonly localState = new Map<string, CacheData>();
  /** @internal */
  private readonly salt: string | undefined;
  /** @internal */  
  private SYNC_OK: boolean = true;
  /**
   * Sync between objective and local state
   * @internal
   */
  private updateParticipants() {
    this.localState.clear();
    for (const participant of this.objective.getParticipants()) {
      if (participant.type !== ScoreboardIdentityType.FakePlayer) continue;
      const data = DisplayName.parse(participant.displayName, this.objective, this.salt);
      const key = Object.keys(data)[0];
      const value = data[key];
      this.localState.set(key, {
        identity: participant,
        encoded_value: participant.displayName,
        decoded_value: value
      });
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

    system.runInterval(() => {
      const objective = world.scoreboard.getObjective("jaylydb:" + id);

      if (objective) {
        if (this.SYNC_OK === false) {
          // Dump everything from local cache to objective
          for (const [, value] of this.localState.entries()) this.objective.setScore(value.encoded_value, 0);
          console.log(`[JaylyDB] Database '${objective.id.slice(6)}' is now synced.`);
        }
        else this.updateParticipants();
        this.SYNC_OK = true;
      }
      else if (this.SYNC_OK === true) {
        console.error(`[JaylyDB] There is a sync issue with database '${id}'.`);
        this.SYNC_OK = false;
      }
    });
  }
  /**
   * @returns the number of elements in the database.
   */
  get size(): number {
    return this.localState.size;
  }
  /**
   * Clears every element in the database.
   */
  clear(): void {
    this.localState.forEach(participant => this.objective.removeParticipant(participant.identity));
    this.localState.clear();
  }
  /**
   * @returns — true if an element in the database exists and has been removed, false otherwise.
   */
  delete(key: string): boolean {
    const participant = this.localState.get(key);
    if (!participant) return false;
  
    const success = this.objective.removeParticipant(participant.identity);
    this.localState.delete(key);

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
    if (!this.localState.has(key)) this.updateParticipants();
    return this.localState.get(key)?.decoded_value
  }
  /**
   * @returns boolean indicating whether an element with the specified key exists or not in jaylydb.
   */
  has(key: string): boolean {
    return this.localState.has(key);
  }
  /**
   * Adds a new element with a specified key and value to the database. If an element with the same key already exists, the element will be updated.
   */
  set(key: string, value: string | number | boolean): this {
    if (!allowedTypes.includes(typeof value)) throw new TypeError("JaylyDB::set only accepts a value of string, number, or boolean.");
    if (this.localState.get(key)?.decoded_value === value) return this; 

    const encoded = DisplayName.stringify({ [key]: value }, this.salt);
    if (encoded.length > 32767) throw new RangeError("JaylyDB::set only accepts a string value less than 32767 characters.");

    // push change to disk
    const participant = this.localState.get(key);
    if (participant) this.objective.removeParticipant(participant.identity);
    this.objective.setScore(encoded, 0);
    const data = {
      encoded_value: encoded,
      decoded_value: value,
      identity: this.objective.getParticipants().find(participant => participant.displayName === encoded)!,
    };
    this.localState.set(key, data);

    return this;
  }
  /**
   * Returns an iterable of key, value pairs for every entry in the database.
   */
  *entries(): IterableIterator<[string, string | number | boolean]> {
    for (const [key, data] of this.localState.entries()) yield [key, data.decoded_value];
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
