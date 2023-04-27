# UI Forms Wrapper

Wrapper for UI forms to expose content of form data.

## ModalFormData

To migrate from native `ModalFormData`:
- import `ModalFormBuilder` from index.js
- Rename all `ModalFormData` to `ModalFormBuilder`

To access Modal form content:
- `ModalFormBuilder.titleText`: Title text of the modal form
- `ModalFormBuilder.content`: Content of the modal form

## MessageFormData

To migrate from native `MessageFormData`:
- import `MessageFormBuilder` from index.js
- Rename all `MessageFormData` to `MessageFormBuilder`

To access message form content:
- `MessageFormBuilder.titleText`: Title text of the message form
- `MessageFormBuilder.bodyText`: Body text of the message form
- `MessageFormBuilder.buttons`: `button1` and `button2` text of the message form (`[button1, button2]`)

## ActionFormData

To migrate from native `ActionFormData`:
- import `ActionFormBuilder` from index.js
- Rename all `ActionFormData` to `ActionFormBuilder`

To access Modal form content:
- `ActionFormBuilder.titleText`: Title text of the modal form
- `ActionFormBuilder.bodyText`: Body text of the modal form
- `ActionFormBuilder.buttons`: Buttons of the modal form
