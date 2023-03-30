# Page Form

split buttons to different forms

![video](./example.gif)

Dependencies:

- [`force-show`](../force-show/index.js)

Example:

```js
import { Player, world } from "@minecraft/server";
import FormatActionFormButtons from "page-form";

world.events.itemUse.subscribe(({ source }) => {
  if (source instanceof Player)
    FormatActionFormButtons(
      {
        titleText: "title",
        bodyText: "body",
        buttons: [
          { text: "text" },
          { text: "text" },
          { text: "text" },
          { text: "text" },
          { text: "text" },
        ],
      },
      3,
      source
    ).then(console.warn);
});
```
