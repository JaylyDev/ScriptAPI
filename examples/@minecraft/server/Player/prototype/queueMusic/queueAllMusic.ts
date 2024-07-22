import { Player } from "@minecraft/server";

// Surely someone enjoy minecraft ambient music
const allMusic = [
  "music.overworld.bamboo_jungle",
  "music.overworld.bamboo_jungle",
  "music.game.basalt_deltas",
  "music.game_and_wild_equal_chance",
  "music.game_and_wild_equal_chance",
  "music.game_and_wild_favor_game",
  "music.overworld.cherry_grove",
  "music.game.creative",
  "music.game.credits",
  "music.game.crimson_forest",
  "music.overworld.deep_dark",
  "music.overworld.desert",
  "music.overworld.desert",
  "music.overworld.desert",
  "music.overworld.dripstone_caves",
  "music.game.end",
  "music.game.endboss",
  "music.overworld.flower_forest",
  "music.game_and_wild_equal_chance",
  "music.game.frozen_peaks",
  "music.game",
  "music.overworld.grove",
  "music.game.nether_wastes",
  "music.overworld.jagged_peaks",
  "music.overworld.jungle",
  "music.overworld.jungle_edge",
  "music.overworld.jungle",
  "music.overworld.jungle",
  "music.game_and_wild_equal_chance",
  "music.overworld.lush_caves",
  "music.game.swamp_music",
  "music.game.meadow",
  "music.game_and_wild_favor_game",
  "music.menu",
  "music.overworld.mesa",
  "music.overworld.mesa",
  "music.overworld.mesa",
  "music.game.nether",
  "music.game_and_wild_favor_game",
  "music.game_and_wild_favor_game",
  "music.game_and_wild_equal_chance",
  "music.game_and_wild_equal_chance",
  "music.overworld.snowy_slopes",
  "music.game.soulsand_valley",
  "music.overworld.stony_peaks",
  "music.game.swamp_music",
  "music.game.swamp_music",
  "music.game.water"
]

function queueAllMusic(player:Player) {
  for (const musicTrackId of allMusic) {
    player.queueMusic(musicTrackId, { fade: 1.0 });
  }
}