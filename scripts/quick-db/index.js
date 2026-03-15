import { world, Scoreboard, ScoreboardObjective, ScoreboardIdentity } from "@minecraft/server";

const KEY_4NO = "⧉⧉";



interface DBAdapter<T> {

  set(key: string, value: T): void

  get(key: string): T | undefined

  has(key: string): boolean

  delete(key: string): boolean

  keys(): string[]

  values(): T[]

  entries(): [string, T][]
}

export class ScoreboardDB<T = unknown> implements DBAdapter<T> {
  #identifier: string;
  readonly #keyacc: string = '⟡⟡';
  readonly #obj;
  #participantNames: Record<string, string>;
  #participants: ScoreboardIdentity[];
  #cache: Record<string, T> = {}

  constructor(name: string) {
    this.#identifier = `${KEY_4NO
      }${name}${KEY_4NO}`
    this.#obj = world.scoreboard.getObjective(this.#identifier) ??
      world.scoreboard.addObjective(this.#identifier)
    this.#participantNames = {}
    this.#participants = (this.#obj as ScoreboardObjective).getParticipants()
    let iteration = this.#participants.length;
    while (iteration--) {
      const participantName = this.#participants[iteration]?.displayName
      const [key, rawValue] = participantName.split(this.#keyacc)
      const value = rawValue.startsWith('num:') ? Number(rawValue.slice('num:'.length)) : rawValue.startsWith('bool:') ? Boolean(rawValue.slice('bool:'.length)) : JSON.parse(rawValue)
      this.#participantNames[key] = participantName
      this.#cache[key] = value
    }
  }

  set(key: string, value?: T) {
    if (key in this.#cache && value == null) this.delete(key)
    const valueFormatting = typeof value == 'number' ? `num:${value}` : typeof value == 'boolean' ? `bool:${value}` : value;
    const participantName = `${key}${this.#keyacc}${JSON.stringify(valueFormatting)}`;
    (this.#obj as ScoreboardObjective).setScore(participantName, 1)
    this.#participantNames[key] = participantName;
    this.#cache[key] = value
  }

  get(key: string) {
    return this.#cache[key]
  }

  has(key: string) {
    return !!this.#cache
  }

  delete(key: string) {
    if (!(key in this.#cache)) return false;
    (this.#obj as ScoreboardObjective).removeParticipant(this.#participantNames[key])
    delete this.#participantNames[key]
    delete this.#cache[key]
    return true
  }

  keys() {
    return Object.keys(this.#cache)
  }

  values() {
    return Object.values(this.#cache)
  }

  entries() {
    return Object.entries(this.#cache)
  }

}

export class DynamicDB<T = unknown> implements DBAdapter<T> {
  #identifier: string;
  #cache: Record<string, T> = {};
  static size: number = world.getDynamicPropertyTotalByteCount()


  constructor(name: string) {
    this.#identifier = `${KEY_4NO
      }${name}${KEY_4NO}`

    const ids = world.getDynamicPropertyIds()
    let i = ids.length

    while (i--) {
      const id = ids[i]
      if (!id.startsWith(this.#identifier)) continue

      const raw = world.getDynamicProperty(id)
      const key = id.slice(this.#identifier.length)

      const value =
        typeof raw === "string"
          ? JSON.parse(raw)
          : (raw as T)

      this.#cache[key] = value
    }
  }

  set(key: string, value?: T): void {
    const id = this.#identifier + key
    if (key in this.#cache && value == null) { this.delete(key); return; }

    const data =
      typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean"
        ? value
        : JSON.stringify(value)

    world.setDynamicProperty(id, data)
    this.#cache[key] = value
  }

  get(key: string): T | undefined {
    return this.#cache[key]
  }

  has(key: string): boolean {
    return key in this.#cache
  }

  delete(key: string): boolean {
    if (!(key in this.#cache)) return false;

    world.setDynamicProperty(this.#identifier + key, undefined)
    delete this.#cache[key]
    return true
  }

  keys(): string[] {
    return Object.keys(this.#cache)
  }

  values(): T[] {
    return Object.values(this.#cache)
  }

  entries(): [string, T][] {
    return Object.entries(this.#cache) as [string, T][]
  }
}

export default class QuickDB<T = unknown> implements DBAdapter<T> {
  #db;
  constructor(
    name: string,
    storage: "local" | "dynamic" | "global" | "scoreboard" = "local"
  ) {
    this.#db =
      storage === "scoreboard" || storage === "global"
        ? new ScoreboardDB<T>(name)
        : new DynamicDB<T>(name)
  }

  set(key: string, value?: T): void {
    this.#db.set(key, value)
  }

  get(key: string): T | undefined {
    return this.#db.get(key)
  }

  has(key: string): boolean {
    return this.#db.has(key)
  }

  delete(key: string): boolean {
    return this.#db.delete(key)
  }

  keys(): string[] {
    return this.#db.keys()
  }

  values(): T[] {
    return this.#db.values()
  }

  entries(): [string, T][] {
    return this.#db.entries()
  }
}
