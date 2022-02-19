# MessageFormData

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft-ui/MessageFormData

## Code structure

```ts
export class MessageFormData {
  /**
   * @param bodyText
   * The text below the title
   * @returns
   * The function displays when the dialog is shown to a player
   */
  body(bodyText: string): MessageFormData;

  /**
   * @param text
   * Text for first option
   * @returns
   * The function displays when the dialog is shown to a player
   */
  button1(text: string): MessageFormData;

  /**
   * @param text
   * Text for second option
   * @returns
   * The function displays when the dialog is shown to a player
   */
  button2(text: string): MessageFormData;

  constructor();

  /**
   * @param player
   * Shows the dialog to a specific player
   * @returns
   * Use MessageFormResponse class to display form values from MessageFormData class
   */
  show(player: mojangminecraft.Player): Promise<MessageFormResponse>;

  /**
   * @param titleText
   * Text that shows on the top of the dialog
   * @returns
   * The function displays when the dialog is shown to a player
   */
  title(titleText: string): MessageFormData;
}
```

```ts
export class FormResponse {
  readonly "isCanceled": boolean;
}
```

```ts
export class MessageFormResponse extends FormResponse {
  readonly "isCanceled": boolean;
  readonly "selection": number;
}
```

> MessageFormData is not compatible with following events:
>
> - world.events.tick.subscribe (cannot send variables)
> - world.events.beforeChat.subscribe (chat ui prevents UI pop up)

## Code examples:

### WavePlayz's examples

A script that has all UI resources in one:
https://github.com/WavePlayz/Gametest-API/blob/main/howto/dialog-ui.md

### MessageFormData.js

```js
import { world } from "mojang-minecraft";
import { MessageFormData } from "mojang-minecraft-ui";

world.events.beforeItemUse.subscribe((eventData) => {
  let { source } = eventData; // get player
  let MessageForm = new MessageFormData();

  // MessageForm settings
  MessageForm.title("Title");
  MessageForm.body("Body");
  MessageForm.button1("button1");
  MessageForm.button2("button2");

  // MessageForm display (Recommend put below MessageForm settings)
  MessageForm.show(source).then((MessageFormResponse) => {
    const { selection } = MessageFormResponse;

    source.runCommand(`say Selection: ${selection}`);
  });
});
```
