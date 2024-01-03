# ProtoForm

**ProtoForm** is a versatile library for creating and managing various types of forms in your Minecraft server plugins. It simplifies the process of generating modal, message, and action forms, providing a clean and structured way to handle user input.

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

```js
const modalForm = new ProtoForm({
  title: "Example Modal Form",
  fields: [
    ["text", ["Label", "Placeholder", "Default"]],
    ["slider",["Label",2/* Min */,10/* Max */,2/*Step*/,6/*Default*/]],
    ["dropdown",["Label",["Option 1","Option 2", "Option 3"]/* Options */,1 /*Default*/]],
    ["toggle",["Label",true /*default*/]]
  ],
  response: (data) => {
    // Handle form submission
    console.warn("Modal Form submitted:" + data.formValues.join(" "));
  }
});
```
### MessageForm

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

```js
const actionForm = new ProtoForm({
  title: "Example Action Form",
  btns: [
    ["Button 1", "path/to/btn1_texture"],
    ["Button 2", "path/to/btn2_texture"],
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
## Author
These Scripts Are Written By **GamerFile**
