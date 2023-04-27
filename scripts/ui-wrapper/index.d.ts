import { Player, RawMessage } from '@minecraft/server';
import { ActionFormData, ActionFormResponse, MessageFormData, MessageFormResponse, ModalFormData, ModalFormResponse } from '@minecraft/server-ui';

export declare class ModalFormDropdown {
	label: string | RawMessage;
	options: (string | RawMessage)[];
	defaultValueIndex?: number | undefined;
	constructor(label: string | RawMessage, options: (string | RawMessage)[], defaultValueIndex: number | undefined);
}
export declare class ModalFormSlider {
	label: string | RawMessage;
	minimumValue: number;
	maximumValue: number;
	valueStep: number;
	defaultValue?: number | undefined;
	constructor(label: string | RawMessage, minimumValue: number, maximumValue: number, valueStep: number, defaultValue: number | undefined);
}
export declare class ModalFormTextField {
	label: string | RawMessage;
	placeholderText: string | RawMessage;
	defaultValue: string | undefined;
	constructor(label: string | RawMessage, placeholderText: string | RawMessage, defaultValue?: string | undefined);
}
export declare class ModalFormToggle {
	label: string | RawMessage;
	defaultValue?: boolean | undefined;
	constructor(label: string | RawMessage, defaultValue?: boolean | undefined);
}
export type ModalFormContent = ModalFormDropdown | ModalFormSlider | ModalFormTextField | ModalFormToggle;
export declare class ModalFormBuilder extends ModalFormData {
	titleText: string | RawMessage | undefined;
	content: ModalFormContent[];
	dropdown(label: string | RawMessage, options: (string | RawMessage)[], defaultValueIndex?: number | undefined): this;
	show(player: Player): Promise<ModalFormResponse>;
	slider(label: string | RawMessage, minimumValue: number, maximumValue: number, valueStep?: number, defaultValue?: number | undefined): this;
	textField(label: string | RawMessage, placeholderText: string | RawMessage, defaultValue?: string | undefined): this;
	title(titleText: string | RawMessage): this;
	toggle(label: string | RawMessage, defaultValue?: boolean | undefined): this;
}
export declare class MessageFormButton {
	text: string | RawMessage;
	constructor(text: string | RawMessage);
}
export declare class MessageFormBuilder extends MessageFormData {
	titleText?: string | RawMessage;
	bodyText?: string | RawMessage;
	buttons: MessageFormButton[];
	body(bodyText: string | RawMessage): this;
	button1(text: string | RawMessage): this;
	button2(text: string | RawMessage): this;
	show(player: Player): Promise<MessageFormResponse>;
	title(titleText: string | RawMessage): this;
}
export declare class ActionFormButton {
	text: string | RawMessage;
	iconPath: string | undefined;
	constructor(text: string | RawMessage, iconPath?: string);
}
export declare class ActionFormBuilder extends ActionFormData {
	titleText?: string | RawMessage;
	bodyText?: string | RawMessage;
	buttons: ActionFormButton[];
	body(bodyText: string | RawMessage): this;
	button(text: string | RawMessage, iconPath?: string | undefined): this;
	show(player: Player): Promise<ActionFormResponse>;
	title(titleText: string | RawMessage): this;
}