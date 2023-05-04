// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { ScoreboardIdentity, ScoreboardIdentityType, ScoreboardObjective, world } from "@minecraft/server";
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

function encrypt(data: string, salt: string): string {
  const encryptedChars: number[] = [];
  for (let i = 0; i < data.length; i++) {
    const charCode = data.charCodeAt(i) + salt.charCodeAt(i % salt.length);
    encryptedChars.push(charCode);
  }
  return String.fromCharCode(...encryptedChars);
}

function decrypt(encrypted: string, salt: string): string {
  const decryptedChars: number[] = [];
  for (let i = 0; i < encrypted.length; i++) {
    const charCode = encrypted.charCodeAt(i) - salt.charCodeAt(i % salt.length);
    decryptedChars.push(charCode);
  }
  return String.fromCharCode(...decryptedChars);
}

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
      throw new Error(`Failed to parse JSON data: ${error.message}`);
    }
  },
  stringify(value: Record<string, string | number | boolean>, salt?: string): string {
    try {
      const a = JSON.stringify(JSON.stringify(value).slice(1, -1)).slice(1, -1);
      return salt ? encrypt(a, salt) : a;
    } catch (error) {
      throw new Error(`Failed to stringify JSON data: ${error.message}`);
    }
  }
};

const overworld = world.getDimension("overworld");

interface FindParticipantResult {
  data: Record<string, string | number | boolean>;
  participant: ScoreboardIdentity;
};

/**
 * Database using scoreboard
 * @beta
 */
class JaylyDB implements Map<string, string | number | boolean> {
  private readonly objective: ScoreboardObjective;
  private encrypted: boolean;
  private participants: ScoreboardIdentity[];
  private displayNames: string[];
  private displayKeys: string[];
  private get salt(): string | undefined {
    return this.encrypted ? this.objective.displayName : undefined
  };
  private findParticipant(key: string, getOptions: Record<keyof FindParticipantResult, boolean>): Partial<FindParticipantResult> | undefined {
    let data: Record<string, string | number | boolean> | undefined;
    let participant: ScoreboardIdentity | undefined;

    this.displayNames.find(displayName => {
      const displayData = DisplayName.parse(displayName, this.salt);
      if (!(key in displayData)) return false;

      if (getOptions.data) data = displayData;
      if (getOptions.participant) participant = this.objective.getParticipants().find((participant) => participant.displayName === displayName);
      return true;
    });

    if (!data) return;
    return { data, participant };
  };
  private updateParticipants() {
    this.participants = this.objective.getParticipants().filter((participant) => participant.type === ScoreboardIdentityType.fakePlayer);
    this.displayNames = this.participants.map((participant) => participant.displayName);
    this.displayKeys = this.displayNames.map((displayName) => Object.keys(DisplayName.parse(displayName, this.salt))[0]);
  }
  constructor(id: string, encrypted: boolean = false) {
    this.objective = world.scoreboard.getObjective(`jaylydb:` + id) ?? world.scoreboard.addObjective(`jaylydb:` + id, uuid());
    this.encrypted = encrypted;
    this.updateParticipants();
  }
  get size(): number {
    return this.participants.length;
  }
  clear(): void {
    this.participants.forEach(this.objective.removeParticipant);
    this.updateParticipants();
  }
  delete(key: string): boolean {
    const scoreboard = this.findParticipant(key, {
      participant: true,
      data: false
    });
    if (!scoreboard) return false;

    const success = this.objective.removeParticipant(scoreboard.participant);
    this.updateParticipants();
    return success;
  }
  forEach(callbackfn: (value: string | number | boolean, key: string, map: Map<string, string | number | boolean>) => void): void {
    for (const [key, value] of this.entries()) callbackfn(value, key, this);
  }
  get(key: string): string | number | boolean | undefined {
    const scoreboard = this.findParticipant(key, {
      participant: false,
      data: true
    });
    if (!scoreboard) return;
    return scoreboard.data[key];
  }
  has(key: string): boolean {
    return this.displayKeys.includes(key);
  }
  set(key: string, value: string | number | boolean): this {
    if (!allowedTypes.includes(typeof(value))) throw TypeError("JaylyDB::set only accepts value of string, number, or boolean.");
    if (this.get(key) === value) return this; // No need to update if value hasn't changed
  
    // throws error if string value is over 32767
    const str = DisplayName.stringify({ [key]: value }, this.salt);
    if (str.length > 32767) throw RangeError("JaylyDB::set only accepts string value less than 32767 characters.");
  
    this.delete(key);
    overworld.runCommand(`scoreboard players set "${str}" ${this.objective.id} 0`);
    this.updateParticipants();
  
    return this;
  }
  
  *entries(): IterableIterator<[string, string | number | boolean]> {
    for (const displayName of this.displayNames) {
      const valueObject = DisplayName.parse(displayName, this.salt);
      yield [Object.keys(valueObject)[0], Object.values(valueObject)[0]];
    }
  }
  *keys(): IterableIterator<string> {
    for (const [key] of this.entries()) yield key;
  }
  *values(): IterableIterator<string | number | boolean> {
    for (const [, value] of this.entries()) yield value;
  }
  [Symbol.iterator](): IterableIterator<[string, string | number | boolean]> {
    return this.entries();
  }
  [Symbol.toStringTag]: string = JaylyDB.name;
};
export { JaylyDB };