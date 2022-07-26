import { Player, SoundOptions, world } from "mojang-minecraft";

world.events.projectileHit.subscribe((arg) => {
  if (arg.entityHit?.entity instanceof Player && arg.source instanceof Player) {
    let soundOption = new SoundOptions();
    soundOption.volume = 0.4;
    soundOption.pitch = 0.5;

    arg.source.playSound("random.orb", soundOption);
  };
});