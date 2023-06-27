import { MessageFormData } from "@minecraft/server-ui";
export class MessageFormButton {
    constructor(text) {
        this.text = text;
    }
    ;
}
;
/**
 * Builds a simple player form with buttons that let the player
 * take action.
 */
export class MessageFormBuilder {
    constructor() {
        this.buttons = [];
    }
    body(bodyText) {
        this.bodyText = bodyText;
        return this;
    }
    button1(text) {
        this.buttons[0] = new MessageFormButton(text);
        return this;
    }
    button2(text) {
        this.buttons[1] = new MessageFormButton(text);
        return this;
    }
    show(player) {
        const [button1, button2] = this.buttons;
        const form = new MessageFormData();
        if (!!this.titleText)
            form.title(this.titleText);
        if (!!this.bodyText)
            form.body(this.bodyText);
        if (!!button1)
            form.button1(button1.text);
        if (!!button2)
            form.button2(button2.text);
        return form.show(player);
    }
    title(titleText) {
        this.titleText = titleText;
        return this;
    }
}
;
