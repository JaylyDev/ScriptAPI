import { Player } from "@minecraft/server";
import { MessageFormData, ActionFormData, ModalFormData } from "@minecraft/server-ui";
interface FormResponse {
  [key: string]: any;
}

declare class ProtoForm {
  constructor(options: {
    title: string;
    fields?: [string, any[]][];
    body?: string;
    btn1?: string;
    btn2?: string;
    btns?: [string, string | undefined][];
    response?: (result: FormResponse) => void;
  });

  form: MessageFormData | ActionFormData | ModalFormData | null;
  response: (result: FormResponse) => void;

  show(player: Player): Promise<void>;
}
