// Script example for ScriptAPI
// Author: JaylyDev <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import { Player, world, MinecraftEntityTypes } from "@minecraft/server";

world.afterEvents.entitySpawn.subscribe(({ entity }) => {
  // Since you cannot retrive projectile infomation from projectileHit event, we have to
  // subscribe to entitySpawn event to compare with the projectile information fired by projectileHit event.
  if (entity.typeId !== MinecraftEntityTypes.arrow.id) return;

  const callback = world.afterEvents.projectileHit.subscribe((arg) => {
    const { source, projectile } = arg;
    const hitInfo = arg.getEntityHit();
  
    if (hitInfo?.entity instanceof Player && source instanceof Player && projectile === entity) {
      /**
        * @type {import("@minecraft/server").PlayerSoundOptions}
        */
      const soundOption = {
        volume: 0.4,
        pitch: 0.5,
      }
      
      source.playSound("random.orb", soundOption);
      world.afterEvents.projectileHit.unsubscribe(callback);
    };
  });
});

