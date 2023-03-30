import { Player, world } from "@minecraft/server";
import FormatActionFormButtons from "page-form/index";

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
