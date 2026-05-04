import { ModalFormData } from "@minecraft/server-ui";
export class ModalFormDivider {
}
;
export class ModalFormHeader {
    text;
    constructor(text) {
        this.text = text;
    }
}
;
export class ModalFormLabel {
    text;
    constructor(text) {
        this.text = text;
    }
}
;
export class ModalFormDropdown {
    label;
    options;
    dropdownOptions;
    constructor(label, options, dropdownOptions) {
        this.label = label;
        this.options = options;
        this.dropdownOptions = dropdownOptions;
    }
    ;
}
;
export class ModalFormSlider {
    label;
    minimumValue;
    maximumValue;
    sliderOptions;
    constructor(label, minimumValue, maximumValue, sliderOptions) {
        this.label = label;
        this.minimumValue = minimumValue;
        this.maximumValue = maximumValue;
        this.sliderOptions = sliderOptions;
    }
    ;
}
;
export class ModalFormTextField {
    label;
    placeholderText;
    textFieldOptions;
    constructor(label, placeholderText, textFieldOptions) {
        this.label = label;
        this.placeholderText = placeholderText;
        this.textFieldOptions = textFieldOptions;
    }
    ;
}
;
export class ModalFormToggle {
    label;
    toggleOptions;
    constructor(label, toggleOptions) {
        this.label = label;
        this.toggleOptions = toggleOptions;
    }
    ;
}
;
/**
 * Used to create a fully customizable pop-up form for a
 * player.
 */
export class ModalFormBuilder {
    /**
     * Title of the pop-up form.
     */
    titleText;
    /**
     * Content of the pop-up form.
     */
    content = [];
    submitButtonText;
    submitButton(submitButtonText) {
        this.submitButtonText = submitButtonText;
        return this;
    }
    ;
    divider() {
        this.content.push(new ModalFormDivider());
        return this;
    }
    header(text) {
        this.content.push(new ModalFormHeader(text));
        return this;
    }
    label(text) {
        this.content.push(new ModalFormLabel(text));
        return this;
    }
    dropdown(label, options, dropdownOptions) {
        this.content.push(new ModalFormDropdown(label, options, dropdownOptions));
        return this;
    }
    show(player) {
        const form = new ModalFormData();
        if (!!this.titleText)
            form.title(this.titleText);
        for (const item of this.content) {
            if (item instanceof ModalFormDropdown)
                form.dropdown(item.label, item.options, item.dropdownOptions);
            else if (item instanceof ModalFormSlider)
                form.slider(item.label, item.minimumValue, item.maximumValue, item.sliderOptions);
            else if (item instanceof ModalFormTextField)
                form.textField(item.label, item.placeholderText, item.textFieldOptions);
            else if (item instanceof ModalFormToggle)
                form.toggle(item.label, item.toggleOptions);
            else if (item instanceof ModalFormDivider)
                form.divider();
            else if (item instanceof ModalFormHeader)
                form.header(item.text);
            else if (item instanceof ModalFormLabel)
                form.label(item.text);
        }
        ;
        if (!!this.submitButtonText)
            form.submitButton(this.submitButtonText);
        return form.show(player);
    }
    slider(label, minimumValue, maximumValue, sliderOptions) {
        this.content.push(new ModalFormSlider(label, minimumValue, maximumValue, sliderOptions));
        return this;
    }
    textField(label, placeholderText, textFieldOptions) {
        this.content.push(new ModalFormTextField(label, placeholderText, textFieldOptions));
        return this;
    }
    title(titleText) {
        this.titleText = titleText;
        return this;
    }
    toggle(label, toggleOptions) {
        this.content.push(new ModalFormToggle(label, toggleOptions));
        return this;
    }
}
;
