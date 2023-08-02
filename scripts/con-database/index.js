// Script example for ScriptAPI
// Author: ConMaster2112 <https://github.com/ConsoleTerm>
// Project: https://github.com/Con-JS-Development/Con-Database
//@ts-nocheck
import {world, ScoreboardObjective,ScoreboardIdentityType, ScoreboardIdentity,system, Entity} from "@minecraft/server";
///////////////////////////////////////////////////
// Binary-Writter.JS
///////////////////////////////////////////////////



class Stream extends DataView{
    /**@param {ArrayBuffer|number} buffer*/
    constructor(buffer, offset = 0){
        if(typeof buffer === "number") super(new ArrayBuffer(buffer));
        else super(buffer);
        this.__offset__ = offset;
        this.__size__ = offset;
    }
    /**@private */
    __size__;
    /**@private */
    __off_set__;
    /**@protected */
    get __offset__(){return this.__off_set__??0;};
    set __offset__(v){if(v>this.byteLength) throw new EndOfStreamError("Offset cant be out of Stream."); this.__off_set__ = v; if(v>this.__size__) this.__size__ = v;}
    /**@readonly */
    get offset(){return this.__offset__;}
    get size(){return this.__size__;}
    /**@readonly */
    get EndOfStream(){return this.__offset__ >= this.byteLength;}
    setOffset(num){
        if(num>this.byteLength) throw new EndOfStreamError("Offset cant be out of Stream.");
    }
    static fromString(text, options,...params){
        const {bufferLength = 32e+3, base=16}=options??{};
        const BYTES_PER_ELEMENT = base / 8, property ="setUint" + base;
        if(text.length * BYTES_PER_ELEMENT > bufferLength) throw new RangeError("Can't fit text to specified buffer, please increase buffer length");
        const typedArray = new DataView(new ArrayBuffer(bufferLength));
        if(!property in typedArray) throw new Error("Invalid base: " + base);
        for (let i = 0; i < text.length; i++) typedArray[property](i*BYTES_PER_ELEMENT,String.prototype.charCodeAt.call(text,i) - 1);
        const a = new this(typedArray.buffer,...params);
        a.__size__ = text.length * BYTES_PER_ELEMENT;
        return a;
    }
    /**@param {Stream} stream @param {8|16|32} base*/
    static toString(stream, base=16){
        const BYTES_PER_ELEMENT = base / 8, property ="getUint" + base;
        const codes = [];
        if(!property in stream) throw new Error("Invalid base: " + base);
        for (let i = 0; i < stream.size; i+=BYTES_PER_ELEMENT) codes.push(1 + stream[property](i));
        return String.fromCharCode.apply(String,codes);
    }
    toString(base = 16){
        return Stream.toString(this,base);
    }
}
class BinaryStreamWriter extends Stream{
    constructor(stream){
        if(typeof stream === "number") super(stream);
        else if(stream instanceof Stream) super(stream.buffer,stream.offset);
        else if("buffer" in stream) super(stream.buffer);
        else super(stream); 
    }
    writeBytes(buffer,length){
        const array = new Uint8Array(buffer);
        if(!length) length = array.length;
        for (var i = 0; i < length; i++) {
            this.writeByte(array[i]??0);
        }
        return i;
    }
    writeString(text, base = 8){
        const property = "writeUint" + base;
        if(!property in this) throw new Error("Invalid base: " + base);
        let out = 0;
        for (let i = 0; i < text.length; i++) out+= this[property](String.prototype.charCodeAt.call(text,i));
        return out;
    }
    /**@param {number} num */
    writeByte(num){return this.writeUint8(num);}
    /**@param {number} num */
    writeUint8(num){
        if(this.EndOfStream || this.__offset__ + 1 > this.byteLength) throw new EndOfStreamError("You cant write at end of the stream");
        this.setUint8(this.__offset__,num);
        this.__offset__+=1;
        return 1;
    }
    /**@param {number} num */
    writeInt8(num){
        if(this.EndOfStream || this.__offset__ + 1 > this.byteLength) throw new EndOfStreamError("You cant write at end of the stream");
        this.setInt8(this.__offset__,num);
        this.__offset__+=1;
        return 1;
    }

    /**@param {number} num */
    writeInt16(num){
        if(this.EndOfStream || this.__offset__ + 2 > this.byteLength) throw new EndOfStreamError("You cant write at end of the stream");
        this.setInt16(this.__offset__,num);
        this.__offset__+=2;
        return 2;
    }    
    /**@param {number} num */
    writeUint16(num){
        if(this.EndOfStream || (this.__offset__ + 2 > this.byteLength)) throw new EndOfStreamError("You cant write at end of the stream");
        this.setUint16(this.__offset__,num);
        this.__offset__+=2;
        return 2;
    }

    /**@param {number} num */
    writeInt32(num){
        if(this.EndOfStream || this.__offset__ + 4 > this.byteLength) throw new EndOfStreamError("You cant write at end of the stream");
        this.setInt32(this.__offset__,num);
        this.__offset__+=4;
        return 4;
    }    
    /**@param {number} num */
    writeUint32(num){
        if(this.EndOfStream || this.__offset__ + 4 > this.byteLength) throw new EndOfStreamError("You cant write at end of the stream");
        this.setUint32(this.__offset__,num);
        this.__offset__+=4;
        return 4;
    }
    
    /**@param {number} num */
    writeFloat32(num){
        if(this.EndOfStream || this.__offset__ + 4 > this.byteLength) throw new EndOfStreamError("You cant write at end of the stream");
        this.setFloat32(this.__offset__,num);
        this.__offset__+=4;
        return 4;
    }    
    /**@param {number} num */
    writeFloat64(num){
        if(this.EndOfStream || this.__offset__ + 8 > this.byteLength) throw new EndOfStreamError("You cant write at end of the stream");
        this.setFloat64(this.__offset__,num);
        this.__offset__+=8;
        return 8;
    }
}
class BinaryStreamReader extends Stream{
    constructor(stream){
        if(typeof stream === "number") super(stream);
        else if(stream instanceof Stream) super(stream.buffer,stream.offset);
        else if("buffer" in stream) super(stream.buffer);
        else super(stream); 
    }
    readBytes(length=0){
        if(length + this.offset > this.byteLength) length = this.byteLength - this.offset;
        const array = new Uint8Array(length);
        for (var i = 0; i < length; i++)  array[i] = this.readByte();
        return array;
    }
    readString(length=0, base = 8){
        const BYTES_PER_ELEMENT = base / 8, property = "readUint" + base;
        if((length*BYTES_PER_ELEMENT) + this.offset > this.byteLength) length = Math.floor((this.byteLength - this.offset)/BYTES_PER_ELEMENT);
        if(!property in this) throw new Error("Invalid base: " + base);
        let data = [];
        for (let i = 0; i < length; i++) data.push(this[property]());
        return String.fromCharCode.call(String,...data);
    }
    readByte(){return this.readUint8();}
    readUint8(){
        if(this.EndOfStream || this.__offset__ + 1 > this.byteLength) throw new EndOfStreamError("You cant read at end of the stream");
        const v = this.getUint8(this.__offset__);
        this.__offset__+=1;
        return v;
    }
    readInt8(){
        if(this.EndOfStream || this.__offset__ + 1 > this.byteLength) throw new EndOfStreamError("You cant write at end of the stream");
        const v = this.getInt8(this.__offset__);
        this.__offset__+=1;
        return v;
    }
    readInt16(){
        if(this.EndOfStream || this.__offset__ + 2 > this.byteLength) throw new EndOfStreamError("You cant read at end of the stream");
        const v = this.getInt16(this.__offset__);
        this.__offset__+=2;
        return v;
    }
    readUint16(){
        if(this.EndOfStream || this.__offset__ + 2 > this.byteLength) throw new EndOfStreamError("You cant read at end of the stream");
        const v = this.getUint16(this.__offset__);
        this.__offset__+=2;
        return v;
    }
    readInt32(){
        if(this.EndOfStream || this.__offset__ + 4 > this.byteLength) throw new EndOfStreamError("You cant read at end of the stream");
        const v = this.getInt32(this.__offset__);
        this.__offset__+=4;
        return v;
    }
    readUint32(){
        if(this.EndOfStream || this.__offset__ + 4 > this.byteLength) throw new EndOfStreamError("You cant read at end of the stream");
        const v = this.getUint32(this.__offset__);
        this.__offset__+=4;
        return v;
    }
    readFloat32(){
        if(this.EndOfStream || this.__offset__ + 4 > this.byteLength) throw new EndOfStreamError("You cant read at end of the stream");
        const v = this.getFloat32(this.__offset__);
        this.__offset__+=4;
        return v;
    }
    readFloat64(){
        if(this.EndOfStream || this.__offset__ + 8 > this.byteLength) throw new EndOfStreamError("You cant read at end of the stream");
        const v = this.getFloat64(this.__offset__);
        this.__offset__+=8;
        return v;
    }
}
class EndOfStreamError extends Error{}













///////////////////////////////////////////////////
// NBT-SERIALIZER.JS
///////////////////////////////////////////////////
const NBTTypes = {
    "EndOfCompoud":0,
    "Compoud":1,
    "Array":2,
    "TypedArray":3,
    "Uint8":4,
    "Uint16":5,
    "Int32":6,
    "Double":7,
    "String":8,
    "Empty":9,
    "Boolean":10,
    0:"EndOfCompoud",
    1:"Compoud",
    2:"Array",
    3:"TypedArray",
    4:"Uint8",
    5:"Uint16",
    6:"Int32",
    7:"Double",
    8:"String",
    9:"Empty",
    10:"Boolean"
}
function isUint8(n) {return Number.isInteger(n) && n >= 0 && n <= 255;}  
function isUint16(n) {return Number.isInteger(n) && n >= 0 && n <= 65535;}
function isInt32(n) {return Number.isInteger(n) && n >= -2147483648 && n <= 2147483647;}
const caller = Function.prototype.call;
class NBTStreamWriter extends BinaryStreamWriter{
    constructor(stream,options = new NBTWriterOptions()){
        super(stream);
        if(!(options instanceof NBTWriterOptions)) Object.setPrototypeOf(options,NBTWriterOptions.prototype);
        this.__options__ = options;
    }
    /**@readonly @private @type {NBTWriterOptions} */
    __options__;
    writeTypedArray(array){
        const typeOf = this.__options__.getType(array[0]);
        let bytes = this.writeType(typeOf);
        bytes += this.writeUint16(array.length);
        for (const data of array) bytes+=this.__options__.writers[typeOf](this,data);
        return bytes;
    }
    writeBoolean(bool){return this.writeByte(!!bool?1:0);}
    writeString(text){
        return this.writeUint16(text.length) + super.writeString(text,8);
    }
    writeArray(array){
        let bytes = this.writeUint16(array.length);
        for (const data of array) {
            const type = this.__options__.getType(data);
            if(!type) continue;
            bytes += this.writeType(type)
            + this.__options__.writers[type](this,data);
        }
        return bytes;
    }
    writeCompoud(object){
        let bytes = 0;
        for (const propertyName of Object.getOwnPropertyNames(object??{})) {
            const data = object[propertyName];
            const type = this.__options__.getType(data);
            if(!type) continue;
            bytes+=this.writeType(type) 
            + this.writeString(propertyName,8) 
            + this.__options__.writers[type](this,data);
        }
        bytes+=this.writeType(this.__options__.nbtTypes.EndOfCompoud);
        return bytes;
    }
    writeEmpty(){return 0;}
    writeType(type){return this.writeByte(typeof type==="string"?(this.__options__.nbtTypes[type]??0):type??0);}
}
class NBTStreamReader extends BinaryStreamReader{
    constructor(stream,options = new NBTReaderOptions()){
        super(stream);
        if(!(options instanceof NBTReaderOptions)) Object.setPrototypeOf(options,NBTReaderOptions.prototype);
        this.__options__ = options;
    }
    /**@readonly @private @type {NBTReaderOptions} */
    __options__;
    readTypedArray(){
        const typeOf = this.readType(),array=[];
        let length = this.readUint16();
        for (let i = 0; i < length; i++) array.push(this.__options__.readers[typeOf](this));
        return array;
    }
    readBoolean(){return !!this.readByte();}
    readString(){
        const length = this.readUint16();
        let text = super.readString(length,8);
        return text
    }
    readArray(){
        let length = this.readUint16();
        const array = [];
        for (let i = 0; i < length; i++) {
            const type = this.readType();
            array.push(this.__options__.readers[type](this));
        }
        return array;
    }
    readCompoud(){
        const object = {};
        while(true){
            const dataType = this.readType();
            if(dataType === this.__options__.nbtTypes.EndOfCompoud) break;
            const propertyName = this.readString();
            const data = this.__options__.readers[dataType](this);
            object[propertyName] = data;
        }
        return object;
    }
    readEmpty(){return undefined;}
    readType(){return this.readByte();}
}
class NBT{
    static ReadNBT(stream){
        let type = stream.readType();
        return stream.__options__.readers[type](stream);
    }
    static WriteNBT(data, stream, type = stream.__options__.getType(data)){
        let bytesWriten = stream.writeType(type);
        bytesWriten += stream.__options__.writers[type](stream,data);
        return bytesWriten;
    }
    static getType(object){
        switch (typeof object) {
            case "undefined":
                return NBTTypes.Empty;
            case "string":
                return NBTTypes.String;
            case "boolean":
                return NBTTypes.Boolean;
            case "object": 
                return Array.isArray(object)?NBTTypes.Array:NBTTypes.Compoud;
            case "number":
                if(isUint8(object)) return NBTTypes.Uint8;
                if(isUint16(object)) return NBTTypes.Uint16;
                if(isInt32(object)) return NBTTypes.Int32;
                return NBTTypes.Double;
            default:
                return undefined;
        }
    }
    /**@param {any} object @param {NBTWriterOptions?} options */
    static stringify(object,options){
        let o = new NBTStreamWriter(32e+3,options??new NBTWriterOptions());
        NBT.WriteNBT(object,o);
        return o.toString();
    }
    /**@param {any} object @param {NBTReaderOptions?} options */
    static parse(string,options){
        let stream = NBTStreamReader.fromString(string,null,options??new NBTReaderOptions());
        return NBT.ReadNBT(stream);
    }
    static createNewWriters(object){return object?Object.setPrototypeOf(object,defaultWriters):Object.create(defaultWriters);}
    static createNewReaders(object){return object?Object.setPrototypeOf(object,defualtReaders):Object.create(defualtReaders);}
}
const defaultWriters = {
    [NBTTypes.Compoud]:caller.bind(NBTStreamWriter.prototype.writeCompoud),
    [NBTTypes.Empty]:caller.bind(NBTStreamWriter.prototype.writeEmpty),
    [NBTTypes.Array]:caller.bind(NBTStreamWriter.prototype.writeArray),
    [NBTTypes.String]:caller.bind(NBTStreamWriter.prototype.writeString),
    [NBTTypes.Boolean]:caller.bind(NBTStreamWriter.prototype.writeBoolean),
    [NBTTypes.Uint8]:caller.bind(NBTStreamWriter.prototype.writeByte),
    [NBTTypes.Uint16]:caller.bind(NBTStreamWriter.prototype.writeUint16),
    [NBTTypes.Int32]:caller.bind(NBTStreamWriter.prototype.writeInt32),
    [NBTTypes.Double]:caller.bind(NBTStreamWriter.prototype.writeFloat64),
    [NBTTypes.TypedArray]:caller.bind(NBTStreamWriter.prototype.writeTypedArray)
}
const defualtReaders = {
    [NBTTypes.Compoud]:caller.bind(NBTStreamReader.prototype.readCompoud),
    [NBTTypes.Empty]:caller.bind(NBTStreamReader.prototype.readEmpty),
    [NBTTypes.Array]:caller.bind(NBTStreamReader.prototype.readArray),
    [NBTTypes.String]:caller.bind(NBTStreamReader.prototype.readString),
    [NBTTypes.Boolean]:caller.bind(NBTStreamReader.prototype.readBoolean),
    [NBTTypes.Uint8]:caller.bind(NBTStreamReader.prototype.readByte),
    [NBTTypes.Uint16]:caller.bind(NBTStreamReader.prototype.readUint16),
    [NBTTypes.Int32]:caller.bind(NBTStreamReader.prototype.readInt32),
    [NBTTypes.Double]:caller.bind(NBTStreamReader.prototype.readFloat64),
    [NBTTypes.TypedArray]:caller.bind(NBTStreamReader.prototype.readTypedArray)
}
class NBTStreamOptions{}
NBTStreamOptions.prototype.nbtTypes = NBTTypes;
NBTStreamOptions.prototype.getType = NBT.getType;
class NBTWriterOptions extends NBTStreamOptions{}
NBTWriterOptions.prototype.writers = defaultWriters;
class NBTReaderOptions extends NBTStreamOptions{}
NBTReaderOptions.prototype.readers = defualtReaders;











///////////////////////////////////////////////////
// DATABASE.JS
///////////////////////////////////////////////////
const {scoreboard} = world, {FakePlayer} = ScoreboardIdentityType;
const split = "\n_`Split`_\n";
function endTickCall(callback){
    system.run(()=>system.run(()=>system.run(callback)));
}
export const DatabaseSavingModes = {
    OneTimeSave:"OneTimeSave",
    EndTickSave:"EndTickSave",
    TickInterval:"TickInterval"
}
const ChangeAction = {
    Change:0,
    Remove:1
}
function run(thisClass,key,value,action){
    if(thisClass._source_.has(key)) thisClass._scoreboard_.removeParticipant(thisClass._source_.get(key));
    if(action === ChangeAction.Remove) thisClass._source_.delete(key);
    else{
        thisClass._source_.set(key,value);
        thisClass._scoreboard_.setScore(value,0);
    }
}
const SavingModes = {
    [DatabaseSavingModes.OneTimeSave](thisClass,key,value,action){
        run(thisClass,key,value,action);
    },
    /**@param {ScoreboardDatabaseManager} thisClass */
    [DatabaseSavingModes.EndTickSave](thisClass,key,value,action){
        if(!thisClass.hasChanges){
            endTickCall(()=>{
                for (const [k,{action,value}] of thisClass._changes_.entries()) {        
                    run(thisClass,k,value,action);
                }
                thisClass._changes_.clear();
                thisClass.hasChanges = false;
            });
        }
        thisClass.hasChanges = true;
        thisClass._changes_.set(key,{action,value});
    },
    /**@param {ScoreboardDatabaseManager} thisClass */
    [DatabaseSavingModes.TickInterval](thisClass,key,value,action){
        thisClass.hasChanges = true;
        thisClass._changes_.set(key,{action,value});
    }
}
/**@extends {Map<string,any>}*/
class ScoreboardDatabaseManager extends Map{
    /**@private */
    _loaded_ = false;
    /**@private */
    _saveMode_;
    /**@private */
    hasChanges = false;
    /**@readonly */
    get maxLength(){return 30e3;}
    /**@private @type {ScoreboardObjective}*/
    _scoreboard_;
    /**@protected @type {Map<string,string|ScoreboardIdentity|Entity>} */
    _source_;
    _onHandleLost_;
    /**@protected @readonly @type {{stringify:(data: any)=>string,parse:(data: string): any}} */
    get _parser_(){return JSON;}
    get savingMode(){return this._saveMode_;}
    /**@protected */
    constructor(objective, saveMode = DatabaseSavingModes.EndTickSave, interval=5){
        super();
        this._saveMode_ = saveMode;
        this._nameId_ = objective;
        this.interval = interval??5;
        if(!objective) throw new RangeError("Firt parameter si not valid: " + objective);
        if(typeof objective !== "string" && !objective instanceof ScoreboardObjective) throw new RangeError("Firt parameter si not valid: " + objective);
        this._scoreboard_ = typeof objective === "string"?(scoreboard.getObjective(objective)??scoreboard.addObjective(objective,objective)):objective;
        this._nameId_ = this.id;
        this._source_ = new Map();
        this._changes_ = new Map();
        if(this._saveMode_ === DatabaseSavingModes.TickInterval){
            system.runInterval(()=>{
                if(this.hasChanges){
                    endTickCall(()=>{
                        for (const [k,{action,value}] of this._changes_.entries()) run(this,k,value,action);
                        this._changes_.clear();
                        this.hasChanges = false;
                    })
                }
            },this.interval);
        }
    }
    load(){
        if(this._loaded_) return this;
        for (const participant of this._scoreboard_.getParticipants()) {
            const {displayName,type} = participant;
            if(type !== FakePlayer) continue;
            const [name,data] = displayName.split(split);
            this._source_.set(name,participant);
            super.set(name,this._parser_.parse(data));
        }
        this._loaded_=true;
        return this;
    }
    async loadAsync(){
        if(this._loaded_) return this;
        for (const participant of this._scoreboard_.getParticipants()) {
            const {displayName,type} = participant;
            if(type !== FakePlayer) continue;
            const [name,data] = displayName.split(split);
            this._source_.set(name,participant);
            super.set(name,this._parser_.parse(data));
        }
        this._loaded_=true;
        return this;
    }
    /**@inheritdoc */
    set(key, value){
        if(!this._loaded_) throw new ReferenceError("Database is not loaded");
        const newValue = `${key}${split}${this._parser_.stringify(value)}`;
        if(newValue.length > this.maxLength) throw new RangeError("Value is too large for one property");
        super.set(key,value);
        this._onChange_(key,newValue,ChangeAction.Change);
        return this;
    }
    /**@inheritdoc */
    delete(key){
        if(!this._loaded_) throw new ReferenceError("Database is not loaded");
        this._onChange_(key,null,ChangeAction.Remove);
        return super.delete(key);
    }
    clear(){
        if(!this._loaded_) throw new ReferenceError("Database is not loaded");
        super.clear();
        this._source_.clear();
        scoreboard.removeObjective(this.objective);
        this._scoreboard_ = scoreboard.addObjective(this._nameId_,this._nameId_);
    }
    /**@private */
    _onChange_(key, value, action){
        if(!this._loaded_) throw new ReferenceError("Database is not loaded");
        SavingModes[this._saveMode_](this,key,value,action);
    }
    /**@readonly @returns {ScoreboardObjective} */
    get objective(){return this._scoreboard_;}
    /**@readonly @returns {string} */
    get id(){return this._scoreboard_.id;}
    /**@readonly @returns {boolean} */
    get loaded(){return this._loaded_;}
    rebuild(){
        if(this.objective?.isValid()) return;
        const newScores = scoreboard.addObjective(this._nameId_,this._nameId_);
        this._scoreboard_ = newScores;
        this._source_ = new Map();
        for (const [k,v] of this.entries()) {
            const data = `${k}${split}${this._parser_.stringify(v)}`;
            newScores.setScore(data,0);
            this._source_.set(k,data);
        }
        return this;
    }
    async rebuildAsyc(){
        if(this.objective?.isValid()) return;
        const newScores = scoreboard.addObjective(this._nameId_,this._nameId_);
        this._scoreboard_ = newScores;
        this._source_ = new Map();
        for (const [k,v] of this.entries()) {
            const data = `${k}${split}${this._parser_.stringify(v)}`;
            newScores.setScore(data,0);
            this._source_.set(k,data);
            await null;
        }
        return this;
    }
}
export class JsonDatabase extends ScoreboardDatabaseManager{}
export class NBTDatabase extends ScoreboardDatabaseManager{
    get _parser_() {return NBT;};
}
export class CustomDatabase extends ScoreboardDatabaseManager{
    constructor(parser,...params){
        super(params);
        this._parser_ = parser;
    }
}