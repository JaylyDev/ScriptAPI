# UI Forms Wrapper

Wrapper for UI forms to expose content of form data from `ModalFormData`.

To migrate from native `ModalFormData`:
- import `ModalFormBuilder` from index.js
- Rename all `ModalFormData` to `ModalFormBuilder`

To access Modal form content:
- `ModalFormBuilder.titleText`: Title text of the modal form
- `ModalFormBuilder.content`: Content of the modal form
