import { world } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";
import { forceShow } from "force-show";

world.events.beforeChat.subscribe(async (event) => {
  event.cancel = true;

  const modalForm = new ModalFormData();
  modalForm.title('Title');
  modalForm.dropdown('Dropdown', ['0','1']);
  
  const response = await forceShow(event.sender, modalForm);
  response['formValues']
});