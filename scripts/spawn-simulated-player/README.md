A function that spawns simulated player

# index.d.ts

```ts
import * as server from "@minecraft/server";
import { SimulatedPlayer } from "../simulated-player/SimulatedPlayer.js";
/**
 * Spawns a simulated player
 * @param target The player the simulated player is going to spawn at
 * @param callback Implementation of the simulated player
 */
export function SpawnSimulatedPlayer(
  target: server.Player,
  callback: (player: SimulatedPlayer) => void
): void;
```
