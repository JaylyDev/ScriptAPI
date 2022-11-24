# runCommandAsync

Runs a particular command asynchronously from the context of the broader dimension.  Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.

Normally we recommend avoiding using this function however the following command features are not implemented in scripting API (as of 1.19.50).

- `/kick`
- `/gamemode`
- `/gamerule`
- `/weather`
- `/ability`
- `/setblock ... destroy`
- `/xp`
- `/tickingarea`
- `/replaceitem` partial
- `/clear` partial
- `@s[hasitem=]` partial
- `/function` partial
- `/loot` partial
- `/scoreboard` partial
- `/locate`
- `/damage` partial
