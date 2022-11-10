# Display another form after a form

First, create your first server ui form with ModalForm, ActionForm, or MessageForm.

```js
// pseudocode
new ModalFormData()
```

Show the form to the player with show function with a callback.

```js
// pseudocode
let player: Player;
new ModalFormData().show(player).then((response) => {
    // callback code
});
```

In the callback call another form, it can be any of the three forms.

```js
// pseudocode
let player: Player;
new ModalFormData().show(player).then((response) => {
  new ActionFormData().show(player);
});
```