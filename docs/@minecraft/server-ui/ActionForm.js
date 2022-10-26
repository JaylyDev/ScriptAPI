// import action form from 'mojang-minecraft-ui' module;
import { ActionFormData } from "mojang-minecraft-ui";

const ActionForm = new ActionFormData();

// This builder method sets the title for the modal dialog.
ActionForm.title("Action Form");

// Method that sets the body text for the modal form.
ActionForm.body("This is the body text for the modal form.");

// Adds a button to this form with an icon from a resource
ActionForm.button("button icon", "textures/blocks/bedrock");

// get player object from world object in 'mojang-minecraft' module
import { world } from "mojang-minecraft";
const player = [...world.getPlayers()][0];

ActionForm.show(player)
// This method returns a promise that resolves when the form has a response.
.then(function (formResponse) {
    // The form response is an object with the following properties:
    // isCanceled: boolean
    // selection: number

    const { isCanceled, selection } = formResponse;
    console.warn(`isCanceled: ${isCanceled}`);
    console.warn(`selection: ${selection}`);
})
// This method executes when an error in the promise function occurs.
.catch(function (error) {
    console.error(error);
});