// Script example for ScriptAPI
// Author: JaylyDev <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player, world, MinecraftEntityTypes } from "@minecraft/server";

world.afterEvents.projectileHit.subscribe((arg) => {
  if (arg.getEntityHit()?.entity instanceof Player
      && arg.source instanceof Player
      && arg.projectile.typeId === MinecraftEntityTypes.arrow.id
  ) {
    /**
      * @type {import("@minecraft/server").PlayerSoundOptions}
      */
    const soundOption = {
        volume: 0.4,
        pitch: 0.5,
    }
    
    arg.source.playSound("random.orb", soundOption);
  };
});
