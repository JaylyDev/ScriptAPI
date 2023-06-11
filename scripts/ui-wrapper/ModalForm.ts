import { RawMessage, Player } from "@minecraft/server";
import { ModalFormData, ModalFormResponse } from "@minecraft/server-ui";

export class ModalFormDropdown {
  label: string | RawMessage;
  options: (string | RawMessage)[];
  defaultValueIndex?: number | undefined;
  constructor (label: string | RawMessage, options: (string | RawMessage)[], defaultValueIndex: number | undefined) {
    this.label = label;
    this.options = options;
    this.defaultValueIndex = defaultValueIndex;
  };
};

export class ModalFormSlider {
  label: string | RawMessage;
  minimumValue: number;
  maximumValue: number;
  valueStep: number;
  defaultValue?: number | undefined;
  constructor (label: string | RawMessage, minimumValue: number, maximumValue: number, valueStep: number, defaultValue: number | undefined) {
    this.label = label;
    this.minimumValue = minimumValue;
    this.maximumValue = maximumValue;
    this.valueStep = valueStep;
    this.defaultValue = defaultValue;
  };
};

export class ModalFormTextField {
  label: string | RawMessage;
  placeholderText: string | RawMessage;
  defaultValue: string | undefined;
  constructor (label: string | RawMessage, placeholderText: string | RawMessage, defaultValue?: string | undefined) {
    this.label = label;
    this.placeholderText = placeholderText;
    this.defaultValue = defaultValue;
  };
};

export class ModalFormToggle {
  label: string | RawMessage;
  defaultValue?: boolean | undefined;
  constructor (label: string | RawMessage, defaultValue?: boolean | undefined) {
    this.label = label;
    this.defaultValue = defaultValue;
  };
};

export type ModalFormContent = ModalFormDropdown | ModalFormSlider | ModalFormTextField | ModalFormToggle;

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
  dropdown(label: string | RawMessage, options: (string | RawMessage)[], defaultValueIndex?: number | undefined): this {
    this.content.push(new ModalFormDropdown(label, options, defaultValueIndex));
    return this;
  }
  show(player: Player): Promise<ModalFormResponse> {
    const form = new ModalFormData();
    
    if (!!this.titleText) form.title(this.titleText);
    for (const item of this.content) {
      if (item instanceof ModalFormDropdown)        form.dropdown(item.label, item.options, item.defaultValueIndex);
      else if (item instanceof ModalFormSlider)     form.slider(item.label, item.minimumValue, item.maximumValue, item.valueStep, item.defaultValue);
      else if (item instanceof ModalFormTextField)  form.textField(item.label, item.placeholderText, item.defaultValue);
      else if (item instanceof ModalFormToggle)     form.toggle(item.label, item.defaultValue);
    };
    
    return form.show(player);
  }
  slider(label: string | RawMessage, minimumValue: number, maximumValue: number, valueStep: number = 1, defaultValue?: number | undefined): this {
    this.content.push(new ModalFormSlider(label, minimumValue, maximumValue, valueStep, defaultValue));
    return this;
  }
  textField(label: string | RawMessage, placeholderText: string | RawMessage, defaultValue?: string | undefined): this {
    this.content.push(new ModalFormTextField(label, placeholderText, defaultValue));
    return this;
  }
  title(titleText: string | RawMessage): this {
    this.titleText = titleText;
    return this;
  }
  toggle(label: string | RawMessage, defaultValue?: boolean | undefined): this {
    this.content.push(new ModalFormToggle(label, defaultValue));
    return this;
  }
};
