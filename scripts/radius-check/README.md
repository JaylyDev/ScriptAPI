# radius-check

## Description
# radiusCheck

This is a simple function that checks if a player is located within a specific radius of a block in a Minecraft game. The function takes in five parameters: `player`, `x`, `y`, `z`, and `radius`.

## Parameters

- `player` (required): The player object to check. This should be an instance of the `Player` class from the `@minecraft/server` package.
- `x` (required): The X coordinate of the block to check.
- `y` (required): The Y coordinate of the block to check.
- `z` (required): The Z coordinate of the block to check.
- `radius` (required): The radius to check. This should be a number representing the maximum distance (in blocks) that the player can be from the block and still be considered within the radius.

## Return value

The function returns a boolean value. If the player is located within the specified radius of the block, the function returns `true`. If the player is located outside of the specified radius, the function returns `false`.

## Example usage

```js
import { Player, world } from "@minecraft/server";
import { radiusCheck } from "./index.js";

// get a player object
const player = world.getAllPlayers()[0];

// Check if the player is within a radius of 10 blocks from the block at coordinates (0, 0, 0)
const isWithinRadius = radiusCheck(player, 0, 0, 0, 10);

if (isWithinRadius) {
    console.warn("The player is within the radius!");
} else {
    console.warn("The player is outside the radius.");
}
```

In this example, we import the `Player` class from the `@minecraft/server` package and the `radiusCheck` function from the `./index.js` file. We then get Player object from `world.getAllPlayers()[0]` and pass it along with the block coordinates and the desired radius to the `radiusCheck` function. The function returns a boolean value indicating whether or not the player is within the specified radius of the block. We then use this value to log a message to the content log.


## Credits
These scripts were written by THE BOSS9345#0193 on Bedrock Add-Ons
