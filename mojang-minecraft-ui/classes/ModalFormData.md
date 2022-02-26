# ModalFormData

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft-ui/ModalFormData

## Code structure

````ts
export class ModalFormData {
  constructor();

  /**
   * @param label
   * Title of the dropdown
   * @param options
   * Use array for options (see ModalFormData.js)
   * @param defaultValueIndex
   * Returns default value if there is no player input (Optional parameter)
   * @returns
   * The function displays when the dialog is shown to a player
   */
  dropdown(
    label: string,
    options: string[],
    defaultValueIndex?: number
  ): ModalFormData;

  /**
   * @param iconPath
   * Display icon according to resource pack's path
   * @example
   * ```js
   * let ModalForm = new ModalFormData()
   * ModalForm.icon("textures/ui/title");
   * ModalForm.show(source);
   * ```
   * @returns
   * The function displays when the dialog is shown to a player
   */
  icon(iconPath: string): ModalFormData;

  /**
   * @param player
   * Shows the dialog to a specific player
   * @returns
   * Use ModalFormResponse class to display form values from ModalFormData class
   */
  show(player: mojangminecraft.Player): Promise<ModalFormResponse>;

  /**
   * @param label
   * Text that shows on the top of the input field
   * @param minimumValue
   * Minimum value allowed on the slider
   * @param maximumValue
   * Maximum value allowed on the slider
   * @param valueStep
   * Specify the increment value of the slider
   * @param defaultValue
   * Returns default value if there is no player input (Optional parameter)
   * @returns
   * The function displays when the dialog is shown to a player
   */
  slider(
    label: string,
    minimumValue: number,
    maximumValue: number,
    valueStep: number,
    defaultValue?: number
  ): ModalFormData;

  /**
   * @param label
   * Text that shows on the top of the input field
   * @param placeholderText
   * Text that shows in the background of the input field
   * @param defaultValue
   * Returns default value if there is no player input (Optional parameter)
   * @returns
   * The function displays when the dialog is shown to a player
   */
  textField(
    label: string,
    placeholderText: string,
    defaultValue?: string
  ): ModalFormData;

  /**
   * @param titleText
   * Text that shows on the top of the dialog
   * @returns
   * The function displays when the dialog is shown to a player
   */
  title(titleText: string): ModalFormData;

  /**
   * @param label
   * Display the text for the option
   * @param defaultValue
   * Returns default value if there is no player input (Optional parameter)
   * @returns
   * The function displays when the dialog is shown to a player
   */
  toggle(label: string, defaultValue?: boolean): ModalFormData;
}
````

```ts
export class FormResponse {
  readonly "isCanceled": boolean;
}
```

```ts
export class ModalFormResponse extends FormResponse {
  readonly "formValues": any[];
  readonly "isCanceled": boolean;
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

### ModalFormData.js

![image](https://media.discordapp.net/attachments/854033525546942464/944382583444234240/unknown.png)

```js
import { world } from "mojang-minecraft";
import { ModalFormData } from "mojang-minecraft-ui";

world.events.beforeItemUse.subscribe((eventData) => {
  let { source } = eventData; // get player
  let ModalForm = new ModalFormData();
  let options = ["option_1", "option_2"];

  // ModalForm settings
  ModalForm.title("Title");
  ModalForm.icon("textures/blocks/bedrock");
  ModalForm.dropdown("Dropdown", options, 0);
  ModalForm.textField("Text Field", "type here");
  ModalForm.toggle("Toggle button", false);

  // ModalForm display (Recommend put below ModalForm settings)
  ModalForm.show(source).then((ModalFormResponse) => {
    const { formValues } = ModalFormResponse;

    let [dropdown, input, toggle] = formValues;

    source.runCommand(
      `say Dropdown: ${options[dropdown]}\nInput: ${input}\nToggle: ${toggle}`
    );
  });
});
```

### MinecraftClassesUI.js

by Discord user `Aex66#0202`

https://cdn.discordapp.com/attachments/854033525546942464/940447564598214667/MinecraftClassesUI.js
