# set-score

## Description

A wrapped function that set/add/remove entity score and fetch scoreboard objective display.

- `entity: Entity` Entity's scoreboard to change
- `objectiveId: string` Objective to apply the score to.
- `score: number` Score value
- `action: ScoreboardAction` Decides whether to add, remove, or set score to entity (default = set)
- `fetch: boolean` Fetch scoreboard objective display (default = true)

## Usage

Add score:

```js
import { setScore, ScoreboardAction } from "./index";
setScore (entity, "objectiveId", 10, ScoreboardAction.add);
```

Remove score:

```js
import { setScore, ScoreboardAction } from "./index";
setScore (entity, "objectiveId", 10, ScoreboardAction.remove);
```

Set score:

```js
import { setScore, ScoreboardAction } from "./index";
setScore (entity, "objectiveId", 10);
```

This function fetches scoreboard objective display by default, to disable this set 5th parameter to `false`:

```js
import { setScore, ScoreboardAction } from "./index";
setScore (entity, "objectiveId", 10, ScoreboardAction.set, false);
```

## Credits

These scripts were written by [Jayly](https://github.com/JaylyDev).
