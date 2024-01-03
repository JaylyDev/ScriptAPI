// Script example for ScriptAPI
// Author: GamerFile <https://github.com/GamerFile>
// Project: https://github.com/JaylyDev/ScriptAPI
import { ActionFormData, ModalFormData, MessageFormData} from "@minecraft/server-ui";

/**
 * Represents a form object.
 */
export class ProtoForm {
  /**
   * Initializes a new instance of the ProtoForm class.
   * @param {Object} options The options for the form.
   * @param {string} options.title The title of the form.
   * @param {Object[]} options.fields An array of objects representing form elements for the modal form.
   * @param {string} options.body The body text of the form.
   * @param {string} options.btn1 The text of the first button for the message form.
   * @param {string} options.btn2 The text of the second button for the message form.
   * @param {string[]} options.btns An array of button texts for the action form.
   * @param {Function} options.response The function to execute when the form is submitted.
   */
  constructor({
    title,
    fields,
    body,
    btn1,
    btn2,
    btns,
    response
  }) {
    /**
     * The form object.
     * @type {any}
     */
    this.form = null;

    /**
     * The function to execute when the form is submitted.
     * @type {Function}
     */
    this.response = response ? response : () => {};

    if (!title) {
      throw new Error("Form Can't Be Created Without Title");
    }

    if (btn1 || btn2) {
      if (fields || btns) {
        throw new Error("Cannot assign 'fields' or 'btns' to type Message");
      }

      this.form = new MessageFormData();
      if (this.form instanceof MessageFormData) {
        if (!btn1 || !btn2 || !body) {
          throw new Error("One Or Two Of The Essential Properties Of MessageFormData Is Missing. Maybe it's btn1 Or btn2 Or body. Form Can't Be Created In Such A Condition.");
        }
        this.form.title(title);
        this.form.body(body);
        this.form?.button1(btn1);
        this.form?.button2(btn2);
      }
    } else if (btns) {
      if (fields || btn1 || btn2) {
        throw new Error("Cannot assign 'fields' or 'btn1' or 'btn2' to type Action");
      }

      this.form = new ActionFormData();
      if (this.form instanceof ActionFormData) {
        if (!body) throw new Error("Body is essential in ActionFormData.");
        this.form.title(title);
        this.form.body(body);
        btns.forEach(([text, texture]) => {
          this.form?.button(
            text,
            texture ?? undefined
          );
        });
      }
    } else if (fields) {
      if (btns || btn1 || btn2) {
        throw new Error("Cannot Use btns or btn1 or btn2 property in type Modal");
      }
      this.form = new ModalFormData();
      if (this.form instanceof ModalFormData) {
        this.form.title(title);

        fields.forEach(([type, details]) => {
          switch (type) {
            case "text":
              this.form?.textField(
                details[0], // label
                details[1] || "", // placeholder
                details[2] || "" // default
              );
              break;
            case "slider":
              this.form?.slider(
                details[0], // label
                details[1], // min
                details[2], // max
                details[3] || 1, // step
                details[4] || details[1] // default
              );
              break;
            case "dropdown":
              this.form?.dropdown(
                details[0], // label
                details[1], // options
                details[2] || 0 // default
              );
              break;
            case "toggle":
              this.form?.toggle(
                details[0], // label
                details[1] || false // default
              );
              break;
            default:
              throw new Error(`Invalid form element type: ${type}`);
          }
        });
      }
    }
  }

  /**
   * Shows the form to the player and returns a Promise that resolves when the form is submitted.
   * @param {import("@minecraft/server").Player} player The player to show the form to.
   * @returns {Promise} A Promise that resolves when the form is submitted.
   */
  show(player) {
    return this.form?.show(player).then((response) => this.response(response));
  }
}

