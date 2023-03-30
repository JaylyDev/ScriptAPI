import { Player } from "@minecraft/server";

/**
 * Check if player is host
 * @param {Player} player 
 */
export default function isHost (player) {
  return player.id === '-4294967295';
}