# Error Creating Form

![image](https://media.discordapp.net/attachments/854033525546942464/1025750203191525466/Screenshot_20221001-194250.png)

This happens when a form does not have required data in a ModalFormData, ActionFormData or MessageFormData class.

To solve this, you need to have required setting included in your script.

### Modal Form Data

```ts
const ModalForm = new ModalFormData();

// Required
ModalForm.title(titleText: string);

// One of the following are needed: Dropdown / Slider / Textfield / toggle
ModalForm.dropdown(label: string, options: string[], defaultValueIndex?: number);

ModalForm.slider(label: string, minimumValue: number, maximumValue: number, valueStep: number, defaultValue?: number);

ModalForm.textField(label: string, placeholderText: string, defaultValue?: string);

ModalForm.toggle(label: string, defaultValue?: boolean);

// Show form to player
ModalForm.show(player: Player);
```

Example:

```js
new ModalFormData().title('ModalFormData')
                   .dropdown('Dropdown', ['Option 1', 'Option 2'])
                   .show(player)
```

### Message Form Data

```js
const form = new MessageFormData();

// required
form.title('Title');
form.body('Body');

// optional
form.button1('button1');
form.button2('button2');

// Show form to player
ModalForm.show(player);
```

### Action Form Data

```js
import { ActionFormData } from '@minecraft/server-ui';

const action = new ActionFormData();

// required
action.title('title');
action.body('body');

// require at least one button
action.button('button');

// show
action.show(player);
```
