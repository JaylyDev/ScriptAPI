// Script example for ScriptAPI
// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import * as mc from "@minecraft/server";
import { getGamemode } from "get-gamemode/index";
import { ActionFormData, MessageFormData, ModalFormData} from "@minecraft/server-ui";

type FormResult = <formType extends ModalFormData | MessageFormData | ActionFormData, formResponse extends Awaited<ReturnType<formType["show"]>>>(form: formType, callback: (response: formResponse) => void) => void;
interface PlayerExtra extends mc.Player {
  /**
   * Get player GameMode
   */
  getGameMode(): mc.GameMode;
  /**
   * Kick the player from the server
   */
  kick(reason: string): void;
  /**
   * Get player score from an objective
   */
  getScore(objectiveId: string): number;
  /**
   * Show UI forms
   */
  showForm: FormResult;
}

export default function Player(player: mc.Player): PlayerExtra {
  return Object.assign(
    {
      getGameMode() {
        return getGamemode(player);
      },
      kick(reason: string) {
        player.runCommand(`kick "${player.name}" ${reason}`);
      },
      getScore(objectiveId: string) {
        return mc.world.scoreboard
          .getObjective(objectiveId)
          .getScore(player.scoreboardIdentity);
      },
      showForm(form: ModalFormData | MessageFormData | ActionFormData, callback: (response: any) => void) {
        form.show(player).then(callback);
      },
    },
    player
  );
}
