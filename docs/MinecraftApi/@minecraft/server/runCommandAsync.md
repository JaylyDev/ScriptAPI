# runCommandAsync

Runs a particular command asynchronously from the context of the broader dimension.
Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.

Returns a `Promise<CommandResult>` . Throws an error **synchronously** if the queue is full.

## Commands you have to use

Normally we recommend avoiding using commands,
however, the following command features are not implemented in scripting API (as of 1.19.50).

### @s

1. Can't get entity by unique id.

### @s[hasitem=]

1. Can't access ender chest.
2. Can't access equipments.

### /replaceitem

1. Can't access ender chest.
2. Can't access equipments.

### /clear

1. Can't access ender chest.
2. Can't access equipments.

### /tickingarea

1. Can't access ticking areas.

### /kick

1. Can't kick player.

### /setblock

1. `/setblock ... destroy`

### /fill

1. `/fill` is fast.

### /ability

1. You can't set abilities for each player.
2. You can't read player's abilites.

### /damage

1. There's no way to give damage to players & entities.
2. Opening GUI with custom command will not possible (unless there's another way) because it's need damage for close the chat UI.

### /execute

1. New execute can be useful to run command with lot of if/unless condition for simplicity or maybe performance.
2. Cannot run `/loot` command with /execute.

### /function

1. Cannot run mcfunctions.

### /gamerule

1. Cannot set any game rules.
2. Cannot read game rules' value.

### /give

1. Cannot give item with these following NBT Data:
    1. `minecraft:can_place_on`
    2. `minecraft:can_destroy`
    3. `minecraft:item_lock`
    4. `minecraft:keep_in_inventory`

### /gamemode

1. Cannot set player's gamemode.

### /locate

1. Cannot get structure's location.
2. Cannot get biome's location.

### /loot

1. Even though the loot is broken from the start, but it's useful for drop or set the item to players/world.

### /scoreboard

1. Cannot add/set/remove/operation/reset players/entities' scores.

### /time

1. Cannot set world's time.
2. Cannot get world's time (relative and daytime).

### /xp

1. Cannot set player's experience.
2. Cannot get player's experience.

### Other Commands

Following commands useful for mapmaking cannot be replaced with JS code:

1. `/camerashake`
2. `/fog`
3. `/stopsound`
4. `/weather`
5. `/setspawnpoint` `/clearspawnpoint`
6. `/clone`
