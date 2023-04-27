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
export class MessageFormBuilder extends MessageFormData {
    constructor() {
        super(...arguments);
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
        if (!!this.titleText)
            super.title(this.titleText);
        if (!!this.bodyText)
            super.body(this.bodyText);
        if (!!button1)
            super.button1(button1.text);
        if (!!button2)
            super.button2(button2.text);
        return super.show(player);
    }
    title(titleText) {
        this.titleText = titleText;
        return this;
    }
}
;
