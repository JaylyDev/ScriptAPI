A function that spawns simulated player

# index.d.ts
```ts
import * as mojangMinecraft from "mojang-minecraft";
import { SimulatedPlayer } from "../simulated-player/SimulatedPlayer.js";
/**
 * Spawns a simulated player
 * @param target The player the simulated player is going to spawn at
 * @param callback Implementation of the simulated player
 */
export function SpawnSimulatedPlayer(target: mojangMinecraft.Player, callback: (player: SimulatedPlayer) => void): void
```

# Dependency

### [simulated-player](../simulated-player/)