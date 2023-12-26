# Offline Player v0.2.0

Represents a reference to a player identity and the data belonging to a player that is stored on the disk and can, thus, be retrieved without the player needing to be online.

```js
import { OfflinePlayer } from "offline-player/index.js";

// Get data via player.id (Recommended)
const player = OfflinePlayer.get('-68719476735');
// Or get via player.name
const player = OfflinePlayer.get('JaylyPlays');
```

## Summary

Using either `index.js` with `index.d.ts` file, or `index.ts` file if you're working with TypeScript.

### Basic Player Data

Following data are saved into dynamic properties:

- `dimension: Dimension;`
- `id: string;`
- `isSneaking: boolean;`
- `location: Vector3;`
- `typeId = "minecraft:player";`
- `level: number;`
- `name: string;`
- `totalXpNeededForNextLevel: number;`
- `xpEarnedAtCurrentLevel: number;`
- `gameMode: GameMode;`
- `lastPlayed: number;`
- `scoreboardIdentity?: ScoreboardOfflineIdentity;`
- `getSpawnPoint(): DimensionLocation | undefined;`
- `getTotalXp(): number;`
- `isOp(): boolean;`
- `getPlayer(): Player | undefined;` Gets the player object if the player is online.

### Getting Player Scores from Scoreboard

If `offlinePlayer.scoreboardIdentity` exists, it means player's scoreboard data can be accessed offline.

Example: 
```ts
offlinePlayer.scoreboardIdentity.getScore('objective');
```

## License

This package is licensed under the MIT License.
