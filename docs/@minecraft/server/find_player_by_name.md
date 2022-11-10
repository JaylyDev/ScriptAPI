# Find player by name

1. Get all players
```js
const AllPlayers = [...world.getPlayers()];
```

2. Find player using the find function
```js
const InputName = "JaylyPlays";

AllPlayers.find((player) => player.name === InputName);
```

Full script:
```js
const InputName = "JaylyPlays";

const AllPlayers = [...world.getPlayers()];
AllPlayers.find((player) => player.name === InputName);
```