# wait-move

## Description

When a wait-move is set, it will run code once the player has moved.

**Parameters:**

- `player` (type: Player or entity): The player or entity for which the function will be executed on.

- `x` (type: number): The X-coordinate of the destination of the player's current location.

- `y` (type: number): The Y-coordinate of the destination of the player's current location.

- `z` (type: number): The Z-coordinate of the destination of the player's current location.

- `callback` (type: function): The callback function to be executed once the player has moved.

**Example:**

```js

waitMove(player, x, y, z, () => {
    player.sendMessage('You have moved!');
});

```

## Credits

These scripts were written by [defowler2005](https://github.com/defowler2005).
