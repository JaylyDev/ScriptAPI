import { MinecraftEntityTypes, world } from "mojang-minecraft";
world.events.entityHit.subscribe(function ({ entity }) {
  entity.id === MinecraftEntityTypes.player.id &&
    (entity["clicks"] || (entity["clicks"] = []),
      entity["clicks"].push({ timestamp: new Date().getTime() }));
}),
  world.events.tick.subscribe(() => {
    const e = new Date().getTime();
    for (const i of world.getPlayers()) {
      i["clicks"] || (i["clicks"] = []);
      const t = i["clicks"].filter(({ timestamp: t }) => e - 1e3 < t);
      (i["clicks"] = t), i.onScreenDisplay.setActionBar(`CPS: ${t.length}`);
    }
  });
