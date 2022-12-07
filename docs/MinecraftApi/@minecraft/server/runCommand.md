# Impact of Removing .runCommand

Method `runCommand` has been removed from Gametest/Script API.
The replacement `runCommandAsync` doesn't return much information.

What have been affected?

## /ability

You can't read player's abilites.

## /gamerule

Cannot read game rules' value.

## /list

Cannot get how many players can join the world (player join limit).

## /locate

1. Cannot get structure's location.
2. Cannot get biome's location.

## /time

Cannot get world's time (relative and daytime).

## /xp

Cannot get player's experience.

## /weather

Cannot get weather.
