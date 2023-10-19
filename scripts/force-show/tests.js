// Script example for ScriptAPI
// Author: Jayly#1397 <Jayly Discord>
// Project: https://github.com/JaylyDev/ScriptAPI
import { world, system, Player } from "@minecraft/server";
import { ModalFormData, ActionFormData, MessageFormData } from "@minecraft/server-ui";
import { forceShow } from "force-show/index";

world.beforeEvents.chatSend.subscribe(async (event) => {
  event.cancel = true;

  const modalForm = new ModalFormData();
  modalForm.title('Title');
  modalForm.dropdown('Dropdown', ['0','1']);
  
  const response = await forceShow(event.initiator, modalForm);
  
  // response should be ModalFormResponse
  for (const value of response.formValues) {
    console.log(value);
  }
});

world.beforeEvents.itemUse.subscribe(async (event) => {
  if (!(event.source instanceof Player)) return;
  event.cancel = true;

  const form = new ActionFormData();
  form.button('button');
  form.button('button');
  form.button('button');
  
  const response = await forceShow(event.source, form);
  
  // response should be ActionFormResponse
  world.sendMessage(String(response.selection));
});



system.run(async function () {
  for (let player of world.getAllPlayers()) {

    const form = new MessageFormData();
    form.title('title');
    form.button1('button');
    form.button2('button');

    const response = await forceShow(player, form);
    
    // response should be MessageFormResponse
    world.sendMessage(String(response.selection));
  };
});

// test timeout feature
system.afterEvents.scriptEventReceive.subscribe((event) => {
  const { initiator, message } = event;

  if (!(initiator instanceof Player)) return;

  forceShow(initiator, new MessageFormData().title('Title').body(message), 10).then((res) => {
    console.log('Success');
  });
});