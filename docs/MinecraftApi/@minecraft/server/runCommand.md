# runCommand

Execute a command synchronously.
Returns the result if the command is executed successfully, otherwise throws the reason.

## Removed!

Method `runCommand` has been removed from Gametest/Script API.

Consider `runCommandAsync` as an alternative.

## Commands affected by the removal of runCommand?

`runCommandAsync` doesn't return much information.

There are many things we can do with `runCommand` but not anymore with `runCommandAsync`.

### /ability

You can't read player's abilites.

### /gamerule

Cannot read game rules' value.

### /list

Cannot get how many players can join the world (player join limit).

### /locate

1. Cannot get structure's location.
2. Cannot get biome's location.

### /time

Cannot get world's time (relative and daytime).

### /xp

Cannot get player's experience.

### /weather

Cannot get weather.
