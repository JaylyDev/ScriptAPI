import { world } from "@minecraft/server";
import { ModalFormBuilder } from "./index";
// Create a new instance of ModalFormBuilder
let form = new ModalFormBuilder();
// Add a dropdown menu to the form
form.dropdown("Choose an option", ["Option 1", "Option 2", "Option 3"], 0);
// Add a toggle switch to the form
form.toggle("Toggle option", true);
// Add a slider to the form
form.slider("Slider option", 0, 10, 1, 5);
// Add a text field to the form
form.textField("Text field option", "Type something here...", "Default value");
// Set the title of the form using a string
form.title("My Modal Form");
// Show the form to the player and wait for a response
async function showModalForm(player) {
    const response = await form.show(player);
    console.log(`Player ${player.name} selected option ${response.formValues[0]} and toggled option ${response.formValues[1]}`);
    console.log(`Player ${player.name} selected slider value ${response.formValues[2]} and entered text "${response.formValues[3]}"`);
    // Clear the form content
    form.content = [];
    // Add a dropdown menu to the form
    form.dropdown("Choose a different option", ["Option 4", "Option 5", "Option 6"], 1);
    // Add a toggle switch to the form
    form.toggle("Another toggle option", false);
    // Set the title of the form using a RawMessage
    form.title("My Second Modal Form");
    // Show the second form to the same player and wait for a response
    const response2 = await form.show(player);
    console.log(`Player ${player.name} selected option ${response2.formValues[0]} and toggled option ${response2.formValues[1]}`);
}
// Listen for chat messages and show the form to the player who sent a specific message
world.beforeEvents.chatSend.subscribe(async (event) => {
    const player = event.sender;
    if (event.message === "show form") {
        await showModalForm(player);
    }
});
