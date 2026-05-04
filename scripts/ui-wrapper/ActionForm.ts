import { RawMessage, Player } from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui";

export class ActionFormButton {
  text: string | RawMessage;
  iconPath: string | undefined;
  constructor (text: string | RawMessage, iconPath?: string) {
    this.text = text;
    this.iconPath = iconPath;
  };
};

export class ActionFormDivider {};
export class ActionFormHeader { constructor(public text: string | RawMessage) {} };
export class ActionFormLabel { constructor(public text: string | RawMessage) {} };

export type ActionFormContent = ActionFormButton | ActionFormDivider | ActionFormHeader | ActionFormLabel;

/**
 * Builds a simple player form with buttons that let the player
 * take action.
 */
export class ActionFormBuilder implements ActionFormData {
  /**
   * Title of the the modal dialog.
   */
  titleText?: string | RawMessage;
  /**
   * Body text of the the modal dialog.
   */
  bodyText?: string | RawMessage;
  /**
   * Contents of the the modal dialog.
   */
  content: ActionFormContent[] = [];

  body(bodyText: string | RawMessage): this {
    this.bodyText = bodyText;
    return this;
  }
  button(text: string | RawMessage, iconPath?: string | undefined): this {
    this.content.push(new ActionFormButton(text, iconPath));
    return this;
  }
  divider(): this {
    this.content.push(new ActionFormDivider());
    return this;
  }
  header(text: string | RawMessage): this {
    this.content.push(new ActionFormHeader(text));
    return this;
  }
  label(text: string | RawMessage): this {
    this.content.push(new ActionFormLabel(text));
    return this;
  }
  show(player: Player): Promise<ActionFormResponse> {
    const form = new ActionFormData();
    if (!!this.titleText) form.title(this.titleText);
    if (!!this.bodyText) form.body(this.bodyText);
    this.content.forEach(item => {
      if (item instanceof ActionFormButton) form.button(item.text, item.iconPath);
      else if (item instanceof ActionFormDivider) form.divider();
      else if (item instanceof ActionFormHeader) form.header(item.text);
      else if (item instanceof ActionFormLabel) form.label(item.text);
    });
    
    return form.show(player);
  }
  title(titleText: string | RawMessage): this {
    this.titleText = titleText;
    return this;
  }
};
