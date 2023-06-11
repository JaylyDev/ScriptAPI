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
   * Buttons of the the modal dialog.
   */
  buttons: ActionFormButton[] = [];
  body(bodyText: string | RawMessage): this {
    this.bodyText = bodyText;
    return this;
  }
  button(text: string | RawMessage, iconPath?: string | undefined): this {
    this.buttons.push(new ActionFormButton(text, iconPath));
    return this;
  }
  show(player: Player): Promise<ActionFormResponse> {
    const form = new ActionFormData();
    if (!!this.titleText) form.title(this.titleText);
    if (!!this.bodyText) form.body(this.bodyText);
    this.buttons.forEach(item => form.button(item.text, item.iconPath));
    
    return form.show(player);
  }
  title(titleText: string | RawMessage): this {
    this.titleText = titleText;
    return this;
  }
};
