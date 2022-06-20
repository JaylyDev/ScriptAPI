// import message form from 'mojang-minecraft-ui' module;
import { MessageFormData } from "mojang-minecraft-ui";

const MessageForm = new MessageFormData();

// Method that sets the body text for the modal form.
MessageForm.body("This is the body text for the modal form.");

/**
 * @remarks
 * Method that sets the text for the first button of the
 * dialog.
 * @param text
 */
MessageForm.button1("button 1");

/**
 * @remarks
 * This method sets the text for the second button on the
 * dialog.
 * @param text
 */
MessageForm.button2("button 2");

/**
 * @remarks
 * This builder method sets the title for the modal dialog.
 * @param titleText
 */
MessageForm.title("Message Form");

// get player object from world object in 'mojang-minecraft' module
import { world } from "mojang-minecraft";
const player = [...world.getPlayers()][0];

MessageForm.show(player)
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