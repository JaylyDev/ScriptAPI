# waitMove

## Description
This function is used to resume code execution after the player has moved.

## Parameters
- `target`: The target object that is the subject.
- `x`: The initial x-coordinate of the target.
- `y`: The initial y-coordinate of the target.
- `z`: The initial z-coordinate of the target.
- `callback`: A callback function that will be called when the target's coordinates change.

**Example:**

```js

waitMove(player, x, y, z, () => {
    player.sendMessage('You have moved!');
});
```

## Credits

These scripts were written by [defowler2005](https://github.com/defowler2005).
