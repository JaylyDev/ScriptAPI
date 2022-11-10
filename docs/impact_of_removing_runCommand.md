# Impact of Removing .runCommand

What will happen if `.runCommand` removed from Gametest/Script API?

# Abilities

1. You can't set abilities for each players
2. You can't read player's abilites

# Damage

1. There's no way to give damage to players & entities
2. Opening GUI with custom command will not possible (unless there's another way) because it's need damage for close the chat ui

# Execute

1. Execute can be useful to run command with lot of if/unless condition for simplicity or maybe performance
2. Cannot run `/loot` command

# Function

1. Cannot run function command

# Gamerule

1. Cannot set any game rules
2. Cannot read game rules’ value

# Give

1. Cannot give item with these following NBT Data
    1. `minecraft:can_place_on`
    2. `minecraft:can_destroy`
    3. `minecraft:item_lock`
    4. `minecraft:keep_in_inventory`

# List

1. Cannot get how many players can join the world (Player Join Limit)

# Gamemode

1. Cannot set player's gamemode
2. Cannot run command with new execute. This is much better rather than detect using script API for simplicity and maybe performance
3. Cannot run `/loot` command

# Locate

1. Cannot get structure’s location
2. Cannot get biome’s location

# Loot

1. Even though the loot is broken from the start, but it's useful for drop or set the item to players/world

# Scoreboard

1. Cannot add/set/remove/operation/reset players/entities’ score

# Time

1. Cannot set world’s time
2. Cannot get world’s time (relative and daytime)

# XP

1. Cannot set/get player’s experience

# Another Commands

Following useful command are cannot to run for mapmaking:

1. Camerashake
2. Event
3. Fog
4. Music
5. Playsound & Stopsound
6. Weather
7. Cannot get how many players can join the world (Player Join Limit)