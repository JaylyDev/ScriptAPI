import { Player } from "@minecraft/server";

// Scripting code for the `camera <player> fade color 0.0 0.0 1.0` command.
function sceneEndFade(player: Player) {
  // fade color: blue
  player.camera.fade({
    fadeColor: {
      red: 0.0,
      green: 0.0,
      blue: 1.0,
    },
  });
}

// Scripting code for the `camera <player> time 1.5 2.0 1.0 fade color 1.0 0.5 0.3` command.
function sceneFadeSlow(player: Player) {
  // fade color: rgb (1.0, 0.5, 0.3)
  player.camera.fade({
    fadeTime: {
      fadeInTime: 1.5,
      holdTime: 2.0,
      fadeOutTime: 1.0,
    },
    fadeColor: {
      red: 1.0,
      green: 1.0,
      blue: 1.0,
    },
  });
}
