# ActionFormData

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft-ui/ActionFormData

## Code structure

```ts
export class ActionFormData {
  /**
   * @param bodyText
   * The text below the title
   * @returns
   * The function displays when the dialog is shown to a player
   */
  body(bodyText: string): ActionFormData;

  /**
   * @param text
   * Text for button
   * @param iconPath
   * Display icon according to resource pack's path
   * @example
   * ```js
   * let ActionForm = new ActionFormData()
   * ActionForm.icon("textures/ui/title");
   * ActionForm.show(players[0]);
   * ```
   * @returns
   * The function displays when the dialog is shown to a player
   */
  button(text: string, iconPath?: string): ActionFormData;

  constructor();

  /**
   * @param player 
   * Shows the dialog to a specific player
   * @returns
   * Use ActionFormResponse class to display form values from ActionFormData class
   */
  show(player: mojangminecraft.Player): Promise<ActionFormResponse>;

  /**
   * @param titleText
   * Text that shows on the top of the dialog
   * @returns
   * The function displays when the dialog is shown to a player
   */
  title(titleText: string): ActionFormData;
}
```

```ts
export class FormResponse {
  readonly "isCanceled": boolean;
}
```

```ts
export class ActionFormResponse extends FormResponse {
  readonly "isCanceled": boolean;
  readonly "selection": number;
}
```

## Code examples:

### WavePlayz's examples

A script that has all UI resources in one:
https://github.com/WavePlayz/Gametest-API/blob/main/howto/dialog-ui.md

### ActionFormData.js

```js
import { world } from "mojang-minecraft";
import { ActionFormData } from "mojang-minecraft-ui";

World.events.beforeItemUse.subscribe((eventData) => {
  let { source } = eventData; // get player
  let ActionForm = new ActionFormData();

  // ActionForm settings
  ActionForm.title("Title");
  ActionForm.body("Body");
  ActionForm.button("button", "textures/blocks/bedrock");

  // ActionForm display (Recommend put below ActionForm settings)
  ActionForm.show(source).then((ActionFormResponse) => {
    const { selection } = ActionFormResponse;

    source.runCommand(`say Selection: ${selection}`);
  });
});
```