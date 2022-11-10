import { world, system } from "@minecraft/server";
import { ModalFormData, ActionFormData, MessageFormData } from "@minecraft/server-ui";
import { forceShow } from "force-show";

world.events.beforeChat.subscribe(async (event) => {
  event.cancel = true;

  const modalForm = new ModalFormData();
  modalForm.title('Title');
  modalForm.dropdown('Dropdown', ['0','1']);
  
  const response = await forceShow(event.sender, modalForm);
  response['formValues']
});

world.events.beforeItemUse.subscribe(async (event) => {
  event.cancel = true;

  const form = new ActionFormData();
  form.button('button');
  form.button('button');
  form.button('button');
  
  const response = await forceShow(event.source, form);
});



system.run(() => {
  for (let player of world.getAllPlayers()) {
  event.cancel = true;

  const form = new MessageFormData();
  form.title('title');
  form.button1('button');
  form.button2('button');
  
  const response = await forceShow(player, form);
  };
});
