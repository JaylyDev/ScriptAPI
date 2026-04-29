import { RawMessage, Player } from "@minecraft/server";
import { ModalFormData, ModalFormResponse, ModalFormDataDropdownOptions, ModalFormDataSliderOptions, ModalFormDataTextFieldOptions, ModalFormDataToggleOptions } from "@minecraft/server-ui";

export class ModalFormDivider {};
export class ModalFormHeader { constructor(public text: string | RawMessage) {} };
export class ModalFormLabel { constructor(public text: string | RawMessage) {} };

export class ModalFormDropdown {
  label: string | RawMessage;
  options: (string | RawMessage)[];
  dropdownOptions?: ModalFormDataDropdownOptions;
  constructor (label: string | RawMessage, options: (string | RawMessage)[], dropdownOptions?: ModalFormDataDropdownOptions) {
    this.label = label;
    this.options = options;
    this.dropdownOptions = dropdownOptions;
  };
};

export class ModalFormSlider {
  label: string | RawMessage;
  minimumValue: number;
  maximumValue: number;
  sliderOptions?: ModalFormDataSliderOptions;
  constructor (label: string | RawMessage, minimumValue: number, maximumValue: number, sliderOptions?: ModalFormDataSliderOptions) {
    this.label = label;
    this.minimumValue = minimumValue;
    this.maximumValue = maximumValue;
    this.sliderOptions = sliderOptions;
  };
};

export class ModalFormTextField {
  label: string | RawMessage;
  placeholderText: string | RawMessage;
  textFieldOptions?: ModalFormDataTextFieldOptions;
  constructor (label: string | RawMessage, placeholderText: string | RawMessage, textFieldOptions?: ModalFormDataTextFieldOptions) {
    this.label = label;
    this.placeholderText = placeholderText;
    this.textFieldOptions = textFieldOptions;
  };
};

export class ModalFormToggle {
  label: string | RawMessage;
  toggleOptions?: ModalFormDataToggleOptions;
  constructor (label: string | RawMessage, toggleOptions?: ModalFormDataToggleOptions) {
    this.label = label;
    this.toggleOptions = toggleOptions;
  };
};

export type ModalFormContent = ModalFormDropdown | ModalFormSlider | ModalFormTextField | ModalFormToggle | ModalFormDivider | ModalFormHeader | ModalFormLabel;

/**
 * Used to create a fully customizable pop-up form for a
 * player.
 */
export class ModalFormBuilder implements ModalFormData {
  /**
   * Title of the pop-up form.
   */
  titleText: string | RawMessage | undefined;
  /**
   * Content of the pop-up form.
   */
  content: ModalFormContent[] = [];
  submitButtonText: RawMessage | string | undefined;
  submitButton(submitButtonText: RawMessage | string): this {
    this.submitButtonText = submitButtonText;
    return this;
  };
  divider(): this {
    this.content.push(new ModalFormDivider());
    return this;
  }
  header(text: string | RawMessage): this {
    this.content.push(new ModalFormHeader(text));
    return this;
  }
  label(text: string | RawMessage): this {
    this.content.push(new ModalFormLabel(text));
    return this;
  }
  dropdown(label: string | RawMessage, options: (string | RawMessage)[], dropdownOptions?: ModalFormDataDropdownOptions): this {
    this.content.push(new ModalFormDropdown(label, options, dropdownOptions));
    return this;
  }
  show(player: Player): Promise<ModalFormResponse> {
    const form = new ModalFormData();
    
    if (!!this.titleText) form.title(this.titleText);
    for (const item of this.content) {
      if (item instanceof ModalFormDropdown)        form.dropdown(item.label, item.options, item.dropdownOptions);
      else if (item instanceof ModalFormSlider)     form.slider(item.label, item.minimumValue, item.maximumValue, item.sliderOptions);
      else if (item instanceof ModalFormTextField)  form.textField(item.label, item.placeholderText, item.textFieldOptions);
      else if (item instanceof ModalFormToggle)     form.toggle(item.label, item.toggleOptions);
      else if (item instanceof ModalFormDivider)    form.divider();
      else if (item instanceof ModalFormHeader)     form.header(item.text);
      else if (item instanceof ModalFormLabel)      form.label(item.text);
    };

    if (!!this.submitButtonText) form.submitButton(this.submitButtonText);
    
    return form.show(player);
  }
  slider(label: string | RawMessage, minimumValue: number, maximumValue: number, sliderOptions?: ModalFormDataSliderOptions): this {
    this.content.push(new ModalFormSlider(label, minimumValue, maximumValue, sliderOptions));
    return this;
  }
  textField(label: string | RawMessage, placeholderText: string | RawMessage, textFieldOptions?: ModalFormDataTextFieldOptions): this {
    this.content.push(new ModalFormTextField(label, placeholderText, textFieldOptions));
    return this;
  }
  title(titleText: string | RawMessage): this {
    this.titleText = titleText;
    return this;
  }
  toggle(label: string | RawMessage, toggleOptions?: ModalFormDataToggleOptions): this {
    this.content.push(new ModalFormToggle(label, toggleOptions));
    return this;
  }
};
