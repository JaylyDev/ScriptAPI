# Offline Player

Represents a reference to a player identity and the data belonging to a player that is stored on the disk and can, thus, be retrieved without the player needing to be online.

## Summary

Using either `index.js` or `index.ts` file:

```js
import { OfflinePlayer } from "offline-player/index";

// Get data via player.id (Recommended)
const player = OfflinePlayer.get('-68719476735');
// Or get via player.name
const player = OfflinePlayer.get('JaylyPlays');
```

## Properties
- [level](#level)
- [name](#name)
- [totalXpNeededForNextLevel](#totalXpNeededForNextLevel)
- [xpEarnedAtCurrentLevel](#xpEarnedAtCurrentLevel)
- [gameMode](#gamemode)
- [lastPlayed](#lastplayed)

### **level**
`readonly level: number;`

The current overall level for the player, based on their experience. 

Type: *number*

### **name**
`readonly name: string;`

Name of the player.

Type: *string*

### **totalXpNeededForNextLevel**
`readonly totalXpNeededForNextLevel: number;`

The overall total set of experience needed to achieve the next level for a player.

Type: *number*

### **xpEarnedAtCurrentLevel**
`readonly xpEarnedAtCurrentLevel: number;`

The current set of experience achieved for the player.

Type: *number*

### **gameMode**
`readonly gameMode: GameMode;`

The current gamemode for the player.

Type: *GameMode*

### **lastPlayed**
`readonly lastPlayed: number;`

Gets the last date and time that this player was witnessed on this server. It will return Date of last log-in for this player in the amount of milliseconds since midnight, January 1, 1970 UTC.

Type: *number*

## Methods
- [get](#get)
- [getSpawnPoint](#getspawnpoint)
- [getSpawnPoint](#getspawnpoint)
- [getTotalXp](#gettotalxp)
- [isOp](#isop)
- [getPlayer](#getplayer)

### **get**
`
static get(id: string): OfflinePlayer;
`

Gets the player by the given ID, regardless if they are offline or online. This will return an object even if the player does not exist. To this method, all players will exist.

#### **Parameters**
- **id**: *string*
  
  the ID of the player to retrieve.
  
#### **Returns** *OfflinePlayer*

`
static get(name: string): OfflinePlayer;
`

Gets the player by the given name, regardless if they are offline or online. This will return an object even if the player does not exist. To this method, all players will exist.

#### **Deprecated**
Persistent storage of users should be by ID as names are no longer unique past a single session.

#### **Parameters**
- **name**: *string*
  
  the name of the player to retrieve.
  
#### **Returns** *OfflinePlayer*

### **getSpawnPoint**
`
getSpawnPoint(): DimensionLocation | undefined
`

Gets the current spawn point of the player.

#### **Returns** *DimensionLocation* | *undefined*

### **getTotalXp**
`
getTotalXp(): number
`

 Gets the total experience of the Player.

#### **Returns** *number*

### **isOp**
`
isOp(): boolean
`

Returns true if this player has operator-level permissions.

#### **Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **getPlayer**
`
getPlayer(): Player | undefined
`

If the player is online, this will return that player corresponds to.

#### **Returns** *Player | undefined*

## Schema

```ts
import { Dimension, DimensionLocation, GameMode, Player, Vector3 } from "@minecraft/server";
export class OfflinePlayer {
    private constructor();
    static get(id: `${number}`): OfflinePlayer;
    static get(name: string): OfflinePlayer;
    readonly dimension: Dimension;
    readonly id: string;
    readonly isSneaking: boolean;
    readonly location: Vector3;
    readonly typeId = "minecraft:player";
    readonly level: number;
    readonly name: string;
    readonly totalXpNeededForNextLevel: number;
    readonly xpEarnedAtCurrentLevel: number;
    readonly gameMode: GameMode;
    readonly lastPlayed: number;
    getSpawnPoint(): DimensionLocation | undefined;
    getTotalXp(): number;
    isOp(): boolean;
    getPlayer(): Player | undefined;
}
```

## License

This package is licensed under the MIT License.
