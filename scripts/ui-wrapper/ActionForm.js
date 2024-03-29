import { ActionFormData } from "@minecraft/server-ui";
export class ActionFormButton {
    constructor(text, iconPath) {
        this.text = text;
        this.iconPath = iconPath;
    }
    ;
}
;
/**
 * Builds a simple player form with buttons that let the player
 * take action.
 */
export class ActionFormBuilder {
    constructor() {
        /**
         * Buttons of the the modal dialog.
         */
        this.buttons = [];
    }
    body(bodyText) {
        this.bodyText = bodyText;
        return this;
    }
    button(text, iconPath) {
        this.buttons.push(new ActionFormButton(text, iconPath));
        return this;
    }
    show(player) {
        const form = new ActionFormData();
        if (!!this.titleText)
            form.title(this.titleText);
        if (!!this.bodyText)
            form.body(this.bodyText);
        this.buttons.forEach(item => form.button(item.text, item.iconPath));
        return form.show(player);
    }
    title(titleText) {
        this.titleText = titleText;
        return this;
    }
}
;
