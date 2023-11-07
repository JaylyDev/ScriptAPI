# buttonFormData

## Description

A class for easier form creation!

**Constructor:**

- `constructor(player)`:
  - Initializes a new instance of `buttonFormData`.
  - Parameters:
    - `player` (type: `Player`) - The player object.

**Properties:**

- `form` (type: `ActionFormData`) - The form data object used internally.
- `player` (type: `Player`) - The player object associated with the form.

**Methods:**

- `create(info, callback)`:
  - Creates a form with specified information and executes a callback when the form is submitted.
  - Parameters:
    - `info` (type: `object`) - Information for the form.
      - `title` (type: `string`) - The title of the form.
      - `body` (type: `Array<[string]>`) - The body text of the form.
      - `button` (type: `Array<[string, string]>`) - The buttons to add to the form, each represented by a name and an icon.
    - `callback` (type: `Function`) - The callback function to execute when the form is submitted.
  - Returns:
    - An object representing the created form data.

## Example Usage

```javascript
const main = new buttonFormData(player);
main.create(
  {
    title: 'Title',
    body: [
      ['Body0'],
      ['Body1']
    ],
    button: [
      ['Button 0']
    ]
  },
  (result) => {
    console.warn(`Results: ${result.selection}`);
  }
);
```

## Credits

These scripts were written by [defowler2005](https://github.com/defowler2005).
