import { Player } from "@minecraft/server";

// Scripting code for `playsound 
function playCreatorMusicBoxRecord(player: Player) {
  player.playSound('record.creator_music_box', { location: player.location });
}