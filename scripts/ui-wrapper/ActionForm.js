import { ActionFormData } from "@minecraft/server-ui";
export class ActionFormButton {
    text;
    iconPath;
    constructor(text, iconPath) {
        this.text = text;
        this.iconPath = iconPath;
    }
    ;
}
;
export class ActionFormDivider {
}
;
export class ActionFormHeader {
    text;
    constructor(text) {
        this.text = text;
    }
}
;
export class ActionFormLabel {
    text;
    constructor(text) {
        this.text = text;
    }
}
;
/**
 * Builds a simple player form with buttons that let the player
 * take action.
 */
export class ActionFormBuilder {
    /**
     * Title of the the modal dialog.
     */
    titleText;
    /**
     * Body text of the the modal dialog.
     */
    bodyText;
    /**
     * Contents of the the modal dialog.
     */
    content = [];
    body(bodyText) {
        this.bodyText = bodyText;
        return this;
    }
    button(text, iconPath) {
        this.content.push(new ActionFormButton(text, iconPath));
        return this;
    }
    divider() {
        this.content.push(new ActionFormDivider());
        return this;
    }
    header(text) {
        this.content.push(new ActionFormHeader(text));
        return this;
    }
    label(text) {
        this.content.push(new ActionFormLabel(text));
        return this;
    }
    show(player) {
        const form = new ActionFormData();
        if (!!this.titleText)
            form.title(this.titleText);
        if (!!this.bodyText)
            form.body(this.bodyText);
        this.content.forEach(item => {
            if (item instanceof ActionFormButton)
                form.button(item.text, item.iconPath);
            else if (item instanceof ActionFormDivider)
                form.divider();
            else if (item instanceof ActionFormHeader)
                form.header(item.text);
            else if (item instanceof ActionFormLabel)
                form.label(item.text);
        });
        return form.show(player);
    }
    title(titleText) {
        this.titleText = titleText;
        return this;
    }
}
;
