# TicksPerSecond

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft#tickspersecond

## Response
```ts
const TicksPerSecond = 20;
```

Example:
```js
import { world, TicksPerSecond } from "mojang-minecraft";

// variable to track world is empty or filled
let worldHasPlayer = false 

// player join event triggered when a player joins
world.events.playerJoin.subscribe(player => {
	
	// as player has joined set worldHasPlayer to yes
	worldHasPlayer = true
})

const TICKS_IN_FIVE_SECONDS = TicksPerSecond * 5

// world tick event that fires our function every tick - 20 time in a sec
world.events.tick.subscribe(eventData => {

	// current world tick count value returned by the event
	const { currentTick } = eventData
	
	// if world not has player or current tick is not divisable by TICKS_IN_FIVE_SECONDS the break the code
	if (!worldHasPlayer || currentTick % TICKS_IN_FIVE_SECONDS !== 0) return;
	
	// get all players 
	let players = world.getPlayers()
	
	// loop through players 
	for (let player of players) {
		// run command as player 
		player.runCommand("say Hello " + player.nameTag)
	}
})
```
> Credit: [WavePlayz/Gametest-API](https://github.com/WavePlayz/Gametest-API);