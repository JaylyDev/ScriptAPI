import { RawMessage, Player } from "@minecraft/server";
import { MessageFormData, MessageFormResponse } from "@minecraft/server-ui";

export class MessageFormButton {
  text: string | RawMessage;
  constructor (text: string | RawMessage) {
    this.text = text;
  };
};

/**
 * Builds a simple player form with buttons that let the player
 * take action.
 */
export class MessageFormBuilder extends MessageFormData {
  /**
   * Title of the the modal dialog.
   */
  titleText?: string | RawMessage;
  bodyText?: string | RawMessage;
  buttons: MessageFormButton[] = [];
  body(bodyText: string | RawMessage): this {
    this.bodyText = bodyText;
    return this;
  }
  button1(text: string | RawMessage): this {
    this.buttons[0] = new MessageFormButton(text);
    return this;
  }
  button2(text: string | RawMessage): this {
    this.buttons[1] = new MessageFormButton(text);
    return this;
  }
  show(player: Player): Promise<MessageFormResponse> {
    const [ button1, button2 ] = this.buttons;
    if (!!this.titleText) super.title(this.titleText);
    if (!!this.bodyText) super.body(this.bodyText);
    if (!!button1) super.button1(button1.text);
    if (!!button2) super.button2(button2.text);
    
    return super.show(player);
  }
  title(titleText: string | RawMessage): this {
    this.titleText = titleText;
    return this;
  }
};
