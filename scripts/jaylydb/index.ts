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
  const a = str();
  const b = str();
  return a.slice(0, 8) + '-' + a.slice(8, 12) + '-4' + a.slice(13) + '-a' + b.slice(1, 4) + '-' + b.slice(4);
};

/**
 * an insecure but simple text cipher/decipher utility.
 */
const cipher = {
  cipher(salt: string): (text: string) => string {
    const textToChars = (text: string) => text.split('').map(c => c.charCodeAt(0));
    const byteHex = (n: any) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code: any) => textToChars(salt).reduce((a,b) => a ^ b, code);

    return (text: string) => text.split('')
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join('');
  },
    
  decipher(salt: string): (encoded: string) => string {
    const textToChars = (text: string) => text.split('').map((c: string) => c.charCodeAt(0));
    const applySaltToChar = (code: any) => textToChars(salt).reduce((a: number,b: number) => a ^ b, code);
    return (encoded): string => encoded.match(/.{1,2}/g)
      .map(hex => parseInt(hex, 16))
      .map(applySaltToChar)
      .map(charCode => String.fromCharCode(charCode))
      .join('');
  }
}

/**
 * Parse and stringify scoreboard display name
 * @beta
 */
const DisplayName = new (class DisplayName {
  [Symbol.toStringTag]: string = DisplayName.name;
  parse(text: string, salt: string): Record<string, string | number | boolean> {
    try {
      const d = cipher.decipher(salt);
      const c = d(text);
      const a = JSON.parse(`"${c}"`); // "key":"value"
      const b = JSON.parse(`{${a}}`); // {"key":"value"}
      return b;
    } catch (error) {
      console.error(error);
      return {};
    }
  }
  stringify(value: any, salt: string): string {
    const d = cipher.cipher(salt);
    const rawtext = JSON.stringify(JSON.stringify(value).slice(1, -1)).slice(1, -1);
    return d(rawtext);
  }
})();

/**
 * Database using scoreboard
 * @beta
 */
class JaylyDB implements Map<string, string | number | boolean> {
  constructor (id: string) {
    this.objective = world.scoreboard.getObjective(`jaylydb:` + id) ?? world.scoreboard.addObjective(`jaylydb:` + id, uuid());
  };
  private objective: ScoreboardObjective;
  private getParticipant(key: string): ScoreboardIdentity | undefined {
    return this.objective.getParticipants().find(participant => 
      participant.type === ScoreboardIdentityType.fakePlayer
      && key in DisplayName.parse(participant.displayName, this.objective.displayName)
    );
  };
  clear(): void {
    this.objective.getParticipants().forEach(this.objective.removeParticipant);
  }
  delete(key: string): boolean {
    const participant = this.getParticipant(key);
    if (!participant) return;
    return this.objective.removeParticipant(participant);
  }
  forEach(callbackfn: (value: string | number | boolean, key: string, map: Map<string, string | number | boolean>) => void): void {
    for (const [key, value] of this.entries()) {
      callbackfn(value, key, this);
    }
  }
  get(key: string): string | number | boolean {
    const participant = this.getParticipant(key);
    return DisplayName.parse(participant.displayName, this.objective.displayName)[key];
  }
  has(key: string): boolean {
    const participant = this.getParticipant(key);
    return !!participant;
  }
  set(key: string, value: string | number | boolean): this {
    const allowedTypes = ["string", "number", "boolean"];
    if (!allowedTypes.includes(typeof(value))) throw TypeError("JaylyDB::set only accepts value of string, number, or boolean.");

    // throws error if string value is over 32767
    if (typeof(value) === "string" && value.length > 32767) throw RangeError("JaylyDB::set only accepts string value of length less than 32767.");

    this.delete(key);
    world.getDimension("overworld").runCommand(`scoreboard players set "${DisplayName.stringify({ [key]: value }, this.objective.displayName)}" ${this.objective.id} 0`);
    return this;
  }
  get size(): number {
    return this.objective.getParticipants().length;
  };
  *entries(): IterableIterator<[string, string | number | boolean]> {
    const values = this.objective.getParticipants();
    for (const value of values) {
      const valueObject = DisplayName.parse(value.displayName, this.objective.displayName);
      const valueLength = DisplayName.stringify(valueObject, this.objective.displayName).length;
      if (valueLength > 0) yield [Object.keys(valueObject)[0], Object.values(valueObject)[0]];
    }
  }
  *keys(): IterableIterator<string> {
    for (const [key] of this.entries()) {
      yield key;
    }
  }
  *values(): IterableIterator<string | number | boolean> {
    for (const [, value] of this.entries()) {
      yield value;
    }
  }
  [Symbol.iterator](): IterableIterator<[string, string | number | boolean]> {
    return this.entries();
  }
  [Symbol.toStringTag]: string = JaylyDB.name;
};

export { JaylyDB };