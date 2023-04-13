import { RawMessage, Player } from "@minecraft/server";
import { ModalFormData, ModalFormResponse } from "@minecraft/server-ui";

class ModalFormDropdown {
  label: string | RawMessage;
  options: (string | RawMessage)[];
  defaultValueIndex?: number | undefined;
  constructor (label: string | RawMessage, options: (string | RawMessage)[], defaultValueIndex: number | undefined) {
    this.label = label;
    this.options = options;
    this.defaultValueIndex = defaultValueIndex;
  };
};

class ModalFormSlider {
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

class ModalFormTextField {
  label: string | RawMessage;
  placeholderText: string | RawMessage;
  defaultValue: string | undefined;
  constructor (label: string | RawMessage, placeholderText: string | RawMessage, defaultValue?: string | undefined) {
    this.label = label;
    this.placeholderText = placeholderText;
    this.defaultValue = defaultValue;
  };
};

class ModalFormToggle {
  label: string | RawMessage;
  defaultValue?: boolean | undefined;
  constructor (label: string | RawMessage, defaultValue?: boolean | undefined) {
    this.label = label;
    this.defaultValue = defaultValue;
  };
};

type ModalFormContent = ModalFormDropdown | ModalFormSlider | ModalFormTextField | ModalFormToggle;

/**
 * Used to create a fully customizable pop-up form for a
 * player.
 */
class ModalFormBuilder extends ModalFormData {
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
    if (!!this.titleText) super.title(this.titleText);
    for (const item of this.content) {
      if (item instanceof ModalFormDropdown)        super.dropdown(item.label, item.options, item.defaultValueIndex);
      else if (item instanceof ModalFormSlider)     super.slider(item.label, item.minimumValue, item.maximumValue, item.valueStep, item.defaultValue);
      else if (item instanceof ModalFormTextField)  super.textField(item.label, item.placeholderText, item.defaultValue);
      else if (item instanceof ModalFormToggle)     super.toggle(item.label, item.defaultValue);
    };
    
    return super.show(player);
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

export { ModalFormBuilder };