// import action form from '@minecraft/server' module;
import { ActionFormData } from "@minecraft/server-ui";

const ActionForm = new ActionFormData();

// This builder method sets the title for the modal dialog.
ActionForm.title("Action Form");

// Method that sets the body text for the modal form.
ActionForm.body("This is the body text for the modal form.");

// Adds a button to this form with an icon from a resource
ActionForm.button("button icon", "textures/blocks/bedrock");

// get player object from world object in '@minecraft/server' module
import { world } from "@minecraft/server";
const player = [...world.getPlayers()][0];

ActionForm.show(player)
// This method returns a promise that resolves when the form has a response.
.then(function (formResponse) {
    // The form response is an object with the following properties:
    // canceled: boolean
    // selection: number

    const { canceled, selection } = formResponse;
    console.warn(`canceled: ${canceled}`);
    console.warn(`selection: ${selection}`);
})
// This method executes when an error in the promise function occurs.
.catch(function (error) {
    console.error(error);
});