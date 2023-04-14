// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI

// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * The `@minecraft/server-ui` module contains types for
 * expressing simple dialog-based user experiences.
 *
 *   * {@link ActionFormData} contain a list of buttons with
 * captions and images that can be used for presenting a set of
 * options to a player.
 *   * {@link MessageFormData} are simple two-button message
 * experiences that are functional for Yes/No or OK/Cancel
 * questions.
 *   * {@link ModalFormData} allow for a more flexible
 * "questionnaire-style" list of controls that can be used to
 * take input.
 * @example createActionForm.js
 * ```typescript
 * const form = new ActionFormData()
 *   .title("Months")
 *   .body("Choose your favorite month!")
 *   .button("January")
 *   .button("February")
 *   .button("March")
 *   .button("April")
 *   .button("May");
 *
 * form.show(players[0]).then((response) => {
 *   if (response.selection === 3) {
 *     dimension.runCommand("say I like April too!");
 *   }
 * });
 *
 * ```
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-ui",
 *   "version": "0.1.0"
 * }
 * ```
 *
 */
import * as minecraftserver from '@minecraft/server';
export enum FormCancelationReason {
    userBusy = 'userBusy',
    userClosed = 'userClosed',
}
/**
 * Builds a simple player form with buttons that let the player
 * take action.
 */
export class ActionFormData {
    /**
     * @remarks
     * Method that sets the body text for the modal form.
     * @param bodyText
     */
    body(bodyText: string): ActionFormData;
    /**
     * @remarks
     * Adds a button to this form with an icon from a resource
     * pack.
     * @param text
     * @param iconPath
     */
    button(text: string, iconPath?: string): ActionFormData;
    /**
     * @remarks
     * Creates and shows this modal popup form. Returns
     * asynchronously when the player confirms or cancels the
     * dialog.
     * @param player
     * Player to show this dialog to.
     * @throws This function can throw errors.
     */
    show(player: minecraftserver.Player): Promise<ActionFormResponse>;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     * @param titleText
     */
    title(titleText: string): ActionFormData;
}
/**
 * Returns data about the player results from a modal action
 * form.
 */
export class ActionFormResponse extends FormResponse {
    protected constructor();
    /**
     * Contains additional details as to why a form was canceled.
     */
    readonly cancelationReason?: FormCancelationReason;
    /**
     * If true, the form was canceled by the player (e.g., they
     * selected the pop-up X close button).
     */
    readonly canceled: boolean;
    /**
     * Returns the index of the button that was pushed.
     */
    readonly selection?: number;
}
/**
 * Base type for a form response.
 */
export class FormResponse {
    protected constructor();
    /**
     * Contains additional details as to why a form was canceled.
     */
    readonly cancelationReason?: FormCancelationReason;
    /**
     * If true, the form was canceled by the player (e.g., they
     * selected the pop-up X close button).
     */
    readonly canceled: boolean;
}
/**
 * Builds a simple two-button modal dialog.
 */
export class MessageFormData {
    /**
     * @remarks
     * Method that sets the body text for the modal form.
     * @param bodyText
     */
    body(bodyText: string): MessageFormData;
    /**
     * @remarks
     * Method that sets the text for the first button of the
     * dialog.
     * @param text
     */
    button1(text: string): MessageFormData;
    /**
     * @remarks
     * This method sets the text for the second button on the
     * dialog.
     * @param text
     */
    button2(text: string): MessageFormData;
    /**
     * @remarks
     * Creates and shows this modal popup form. Returns
     * asynchronously when the player confirms or cancels the
     * dialog.
     * @param player
     * Player to show this dialog to.
     * @throws This function can throw errors.
     */
    show(player: minecraftserver.Player): Promise<MessageFormResponse>;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     * @param titleText
     */
    title(titleText: string): MessageFormData;
}
/**
 * Returns data about the player results from a modal message
 * form.
 */
export class MessageFormResponse extends FormResponse {
    protected constructor();
    /**
     * Contains additional details as to why a form was canceled.
     */
    readonly cancelationReason?: FormCancelationReason;
    /**
     * If true, the form was canceled by the player (e.g., they
     * selected the pop-up X close button).
     */
    readonly canceled: boolean;
    /**
     * Returns the index of the button that was pushed.
     */
    readonly selection?: number;
}
/**
 * Used to create a fully customizable pop-up form for a
 * player.
 */
export class ModalFormData {
    /**
     * @remarks
     * Adds a dropdown with choices to the form.
     * @param label
     * @param options
     * @param defaultValueIndex
     */
    dropdown(label: string, options: string[], defaultValueIndex?: number): ModalFormData;
    /**
     * @remarks
     * Creates and shows this modal popup form. Returns
     * asynchronously when the player confirms or cancels the
     * dialog.
     * @param player
     * Player to show this dialog to.
     * @throws This function can throw errors.
     */
    show(player: minecraftserver.Player): Promise<ModalFormResponse>;
    /**
     * @remarks
     * Adds a numeric slider to the form.
     * @param label
     * @param minimumValue
     * @param maximumValue
     * @param valueStep
     * @param defaultValue
     */
    slider(
        label: string,
        minimumValue: number,
        maximumValue: number,
        valueStep: number,
        defaultValue?: number,
    ): ModalFormData;
    /**
     * @remarks
     * Adds a textbox to the form.
     * @param label
     * @param placeholderText
     * @param defaultValue
     */
    textField(label: string, placeholderText: string, defaultValue?: string): ModalFormData;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     * @param titleText
     */
    title(titleText: string): ModalFormData;
    /**
     * @remarks
     * Adds a toggle checkbox button to the form.
     * @param label
     * @param defaultValue
     */
    toggle(label: string, defaultValue?: boolean): ModalFormData;
}
/**
 * Returns data about player responses to a modal form.
 */
export class ModalFormResponse extends FormResponse {
    protected constructor();
    /**
     * Contains additional details as to why a form was canceled.
     */
    readonly cancelationReason?: FormCancelationReason;
    /**
     * If true, the form was canceled by the player (e.g., they
     * selected the pop-up X close button).
     */
    readonly canceled: boolean;
    /**
     * An ordered set of values based on the order of controls
     * specified by ModalFormData.
     */
    readonly formValues?: any[];
}
