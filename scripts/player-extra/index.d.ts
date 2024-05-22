import * as mc from "@minecraft/server";
import { ActionFormData, MessageFormData, ModalFormData } from "@minecraft/server-ui";
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
export default function Player(player: mc.Player): PlayerExtra;
export {};
