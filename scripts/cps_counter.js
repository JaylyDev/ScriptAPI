import { MinecraftEntityTypes as e, world as t } from "mojang-minecraft";
t.events.entityHit.subscribe(function ({ entity: t }) {
  t.id === e.player.id &&
    (t.clicks || (t.clicks = []),
    t.clicks.push({ timestamp: new Date().getTime() }));
}),
  t.events.tick.subscribe(() => {
    const e = new Date().getTime();
    for (const i of t.getPlayers()) {
      i.clicks || (i.clicks = []);
      const t = i.clicks.filter(({ timestamp: t }) => e - 1e3 < t);
      (i.clicks = t), i.onScreenDisplay.setActionBar(`CPS: ${t.length}`);
    }
  });
