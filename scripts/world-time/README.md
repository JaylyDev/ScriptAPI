# world-time

## Description

There are two functions in this script:

- function `GetWorldTime`

## returns

The hours and minutes of the world time.

## example

`getworldtime.js`

```js
import { world } from "@minecraft/server";

const { hours, minutes } = GetWorldTime();
world.sendMessage(`The time is ${hours}:${minutes}`);
```

- function `getTimeOfDay`
  Gets the name of the time of day

## returns

'Sunrise', 'Day', 'Noon', 'Sunset', 'Night', or 'Midnight'

## Credits

These scripts were written by Jayly#1397 on Jayly Discord, Usernam#2058 on Jayly Discord
