// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
import { forceShow } from "force-show/index";


/**
 * @typedef ActionFormDataButton
 * @property {string} text
 * @property {string} [iconPath]
 */
/**
 * @typedef formData
 * @property {string} bodyText
 * @property {string} titleText
 * @property {ActionFormDataButton[]} buttons
 */
/**
 * Format action form data buttons, if number of buttons excceeds it redirects to another form.
 * @param {number} pageLimit limit the number of buttons can exist in 1 form
 * @param {formData} formData Action form data in JSON form
 * @param {Player} showPlayer Show player with generated form by the function
 * @returns {Promise<number>}
 */
function FormatActionFormButtons (formData, pageLimit, showPlayer) {
  /**
   * @type {ActionFormData[]}
   */
  const actionForms = [];
  /**
   * @type {number[]}
   */
  const buttonsInForms = [];
  const { buttons, bodyText, titleText } = formData;
  const numberOfForms = intDivide(buttons.length, pageLimit) - 1;

  if (pageLimit > 1) {
    for (let pageIndex = 0; pageIndex <= numberOfForms; pageIndex++) {
      const form = new ActionFormData();
      let numberOfButtons = 0;
      form.body(bodyText);
      form.title(titleText);

      for (let index = 0; index < pageLimit; index++) {
        const button = buttons[index];
        if (!button) continue;

        if (typeof button.iconPath !== 'undefined') form.button(button.text, button.iconPath);
        else form.button(button.text);
        numberOfButtons++;
      }
      
      if (pageIndex !== 0) form.button('Previous', 'textures/blocks/wool_colored_silver');
      if (pageIndex !== numberOfForms) form.button('Next', 'textures/blocks/wool_colored_lime');

      actionForms.push(form);
      buttonsInForms.push(numberOfButtons);
    }
  }
  else {
    const form = new ActionFormData();
    form.body(bodyText);
    form.title(titleText);

    actionForms.push(form);
    buttonsInForms.push(0);
  };

  return ShowPlayerActionForm(actionForms, showPlayer, 0, buttonsInForms);
};

/**
 * @param {ActionFormData[]} formDatas 
 * @param {Player} player 
 * @param {number} formIndex
 * @param {number[]} buttonsInForms
 * @returns {Promise<number>}
 */
async function ShowPlayerActionForm (formDatas, player, formIndex, buttonsInForms) {
  const response = await forceShow(player, formDatas[formIndex]);
  const lastButtonIndex = buttonsInForms[formIndex];
  const isFirstForm = formIndex === 0;
  const isLastForm = formIndex === buttonsInForms.length - 1;
  if (response.canceled) return;

  if (response.selection === lastButtonIndex && (isFirstForm || (!isFirstForm && !isLastForm))) {
    return await ShowPlayerActionForm(formDatas, player, formIndex + 1, buttonsInForms);
  }
  else if (response.selection === lastButtonIndex && isLastForm) {
    return await ShowPlayerActionForm(formDatas, player, formIndex - 1, buttonsInForms);
  }
  else if (response.selection === (lastButtonIndex - 1) && !isFirstForm && !isLastForm) {
    return await ShowPlayerActionForm(formDatas, player, formIndex - 1, buttonsInForms);
  }
  else {
    let { selection } = response;

    for (let index = 0; index <= (formIndex - 1); index++) {
      selection += buttonsInForms[index];
    };

    return selection;
  };
};

/**
 * @param {number} a
 * @param {number} b
 */
function intDivide (a, b) {
  const result = a / b;
  return Math.floor(result) + (result % 1 !== 0 ? 1 : 0);
};

export default FormatActionFormButtons;