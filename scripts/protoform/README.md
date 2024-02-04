# ProtoForm

**ProtoForm** simplifies the creation and management of Minecraft forms and responses. With a single class, it provides an efficient and easy way to generate various forms. This can save you time compared to the original approach, as minimal code is required. The form type is determined based on the keys/properties provided in the object, resulting in clean and concise code with reduced storage needs.

## Features

- **Modal Forms:** Easily create modal forms with different types of fields such as text, slider, dropdown, and toggle.

- **Message Forms:** Construct message forms with customizable buttons, allowing for user interaction.

- **Action Forms:** Create action forms with multiple buttons, each with its own text and optional texture.

## Installation

This could be easily installed through **NPM**

## Usage

### Import ProtoForm

```js
import { ProtoForm } from "./index.js";
```
### ModalForm

- **fields** key determines that it's a **ModalForm**

```js
const modalForm = new ProtoForm({
  title: "Example Modal Form",
  fields: [
    ["text", "Label", "Placeholder", "Default"],
    ["slider","Label",2/* Min */,10/* Max */,2/*Step*/,6/*Default*/],
    ["dropdown","Label",["Option 1","Option 2", "Option 3"]/* Options */,1 /*Default*/],
    ["toggle","Label",true /*default*/]
  ],
  response: (data) => {
    // Handle form submission
    console.warn("Modal Form submitted:" + data.formValues.join(" "));
  }
});
```
### MessageForm

- **btn1** and **btn2** determines that it's a **MessageForm**

```js
const messageForm = new ProtoForm({
  title: "Example Message Form",
  body: "This is a message form example.",
  btn1: "OK",
  btn2: "Cancel",
  response: (data) => {
    // Handle form submission
    console.warn("Message Form submitted: " + data.selection);
  }
});
```
### ActionForm

- **btns** key determine that it's an **ActionForm**

```js
const actionForm = new ProtoForm({
  title: "Example Action Form",
  body: "Example Action Form Body",
  btns: [
    ["Button 1", "path/to/btn1_texture"],
    ["Button 2", "path/to/btn2_texture"],
    "Button 3",
    ["Button 4"],
    // Add more buttons as needed
  ],
  response: (data) => {
    // Handle form submission
    console.warn("Action Form submitted:" + data.selection);
  }
});
```

### Showing Forms To Player

```js
// Assuming 'player' is an instance of '@minecraft/server' Player
modalForm.show(player);
messageForm.show(player);
actionForm.show(player);
```

### Case Errors

- When **fields** and **btn1** or **btn2** keys are used togethor, it throws error.
  
- When **fields** and **btns** keys are used togethor, it throws error.
  
- When **btns** and **btn1** or **btn2** keys are used togethor, it throws error.

- When **title** is missing, it throws error.

- When **body** is missing with **btns** or **btn1** and **btn2**, it throws error. =>  When **body** is missing in **MessageForm** or **ActionForm**, it throws error.


## Author
These Scripts Are Written By **GamerFile**
