import {ScoreboardObjective, ScoreboardIdentity, Entity} from "@minecraft/server";
//////////////////////////////////////
// NBT-SERIALIZER.D.TS
//////////////////////////////////////

type StringBase = 16|8|32;
type IStreamType = number | number | {buffer: ArrayBuffer};
declare class Stream extends DataView{
    constructor(buffer: ArrayBuffer | number, offset?: number)
    protected __offset__: number
    readonly offset: number
    readonly size: number
    readonly EndOfStream: boolean
    setOffset(num: number): void
    static fromString(text: string, options?: {bufferLength?: number, base?:StringBase},...params: any): Stream
    /**@param {Stream} stream @param {8|16|32} base*/
    static toString(stream: Stream, base?: StringBase): string
    toString(base?: StringBase): string
}
declare class BinaryStreamWriter extends Stream{
    constructor(stream: IStreamType)
    writeBytes(buffer: ArrayBuffer,length?:number ): number
    writeString(text: string, base?: StringBase): number
    writeByte(num: number): number
    writeUint8(num: number): number
    writeInt8(num: number): number
    writeInt16(num: number): number
    writeUint16(num: number): number
    writeInt32(num: number): number
    writeUint32(num: number): number
    writeFloat32(num: number): number
    writeFloat64(num: number): number
    static fromString(text: string, options?: {bufferLength?: number, base?:StringBase},...params: any): BinaryStreamWriter
}
declare class BinaryStreamReader extends Stream{
    constructor(stream: IStreamType)
    readBytes(length?: number): Uint8Array
    readString(length: number, base?: StringBase):string
    readByte():number
    readUint8():number
    readInt8():number
    readInt16():number
    readUint16():number
    readInt32():number
    readUint32():number
    readFloat32():number
    readFloat64():number
    static fromString(text: string, options?: {bufferLength?: number, base?:StringBase},...params: any): BinaryStreamReader
}
declare class EndOfStreamError extends Error{}
declare enum NBTTypes {
    "EndOfCompoud"=0,
    "Compoud"=1,
    "Array"=2,
    "TypedArray"=3,
    "Uint8"=4,
    "Uint16"=5,
    "Int32"=6,
    "Double"=7,
    "String"=8,
    "Empty"=9,
    "Boolean"=10
}
declare class NBTStreamWriter extends BinaryStreamWriter{
    constructor(stream: IStreamType, options?: object | NBTStreamWriter)
    protected __options__: NBTWriterOptions;
    writeTypedArray<t>(array: Array<t>): number
    writeBoolean(bool: boolean):number
    writeString(text: string): number
    writeArray(array: any[]): number
    writeCompoud(object: object): number
    writeEmpty(): number
    writeType(type: NBTTypes): number
    static fromString(text: string, options?: {bufferLength?: number, base?:StringBase},...params: any): NBTStreamWriter
}
declare class NBTStreamReader extends BinaryStreamReader{
    constructor(stream: IStreamType, options?: object | NBTReaderOptions)
    protected __options__: NBTReaderOptions;
    readTypedArray(): Array<any>
    readBoolean(): boolean
    readString(): string
    readArray(): any[]
    readCompoud(): object
    readEmpty(): undefined
    readType(): NBTTypes
    static fromString(text: string, options?: {bufferLength?: number, base?:StringBase},...params: any): NBTStreamReader
}
declare const NBT: {
    ReadNBT(stream: NBTStreamReader): any
    WriteNBT(data: any, stream: NBTStreamWriter, type?: NBTTypes): number
    getType(data: any): NBTTypes
    stringify(object:any, options?: NBTWriterOptions): string
    parse(string: string, options?: NBTReaderOptions): any
    createNewWriters<t extends Partial<typeof defaultWriters>>(object?: t): t & typeof defaultWriters
    createNewReaders<t extends Partial<typeof defualtReaders>>(object?: t): t & typeof defualtReaders
}
type WriterCall = (stream: NBTStreamWriter, data: any)=>number
type ReaderCall = (stream: NBTStreamReader)=>any
declare const defaultWriters: {
    [NBTTypes.Compoud]:WriterCall,
    [NBTTypes.Empty]:WriterCall,
    [NBTTypes.Array]:WriterCall,
    [NBTTypes.String]:WriterCall,
    [NBTTypes.Boolean]:WriterCall,
    [NBTTypes.Uint8]:WriterCall,
    [NBTTypes.Uint16]:WriterCall,
    [NBTTypes.Int32]:WriterCall,
    [NBTTypes.Double]:WriterCall,
    [NBTTypes.TypedArray]:WriterCall
}
declare const defualtReaders: {
    [NBTTypes.Compoud]:ReaderCall,
    [NBTTypes.Empty]:ReaderCall,
    [NBTTypes.Array]:ReaderCall,
    [NBTTypes.String]:ReaderCall,
    [NBTTypes.Boolean]:ReaderCall,
    [NBTTypes.Uint8]:ReaderCall,
    [NBTTypes.Uint16]:ReaderCall,
    [NBTTypes.Int32]:ReaderCall,
    [NBTTypes.Double]:ReaderCall,
    [NBTTypes.TypedArray]:ReaderCall
}
declare class NBTStreamOptions{
    nbtTypes: object & NBTTypes
    getType:(data: any)=>NBTStreamOptions["nbtTypes"][keyof NBTStreamOptions["nbtTypes"]]
}
declare class NBTWriterOptions extends NBTStreamOptions{
    writers: ReturnType<typeof NBT["createNewWriters"]>;
}
declare class NBTReaderOptions extends NBTStreamOptions{
    readers: ReturnType<typeof NBT["createNewReaders"]>;
}




//////////////////////////////////////
// DATABASE.JS
//////////////////////////////////////
export enum DatabaseSavingModes {
    OneTimeSave="OneTimeSave",
    EndTickSave="EndTickSave",
    TickInterval="TickInterval"
}
export enum ChangeAction {
    Change=0,
    Remove=1
}
/**@extends {Map<string,any>}*/
declare class ScoreboardDatabaseManager extends Map<string,any>{
    private _saveMode_: DatabaseSavingModes;
    private hasChanges: boolean;
    readonly maxLength: number;
    private readonly _scoreboard_: ScoreboardObjective;
    protected readonly _source_: Map<string,string|ScoreboardIdentity|Entity>;
    protected readonly _parser_: {stringify:(data: any)=>string,parse:(data: string)=>any};
    readonly savingMode: DatabaseSavingModes;
    constructor(objective, saveMode: DatabaseSavingModes);
    constructor(objective, saveMode: DatabaseSavingModes.EndTickSave, interval?: number);
    /**@inheritdoc */
    set(key: string, value: any): this
    /**@inheritdoc */
    delete(key: string): boolean
    clear(): void
    load(): this
    loadAsync(): Promise<this>
    rebuild(): this;
    rebuildAsync(): Promise<this>;
    readonly objective: ScoreboardObjective
    readonly id: string;
    readonly loaded: boolean;
}
export class JsonDatabase extends ScoreboardDatabaseManager{}
export class NBTDatabase extends ScoreboardDatabaseManager{}
export class CustomDatabase extends ScoreboardDatabaseManager{
    constructor(parser: {parse:(data:string)=>any,stringify:(data: any)=>string}, objective: string | ScoreboardObjective, saveMode: DatabaseSavingModes);
    constructor(parser: {parse:(data:string)=>any,stringify:(data: any)=>string}, objective: string | ScoreboardObjective, saveMode: DatabaseSavingModes.EndTickSave, interval?: number);
}