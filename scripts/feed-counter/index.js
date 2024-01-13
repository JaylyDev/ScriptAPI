import * as mc from "@minecraft/server";

const obj = "feed";

if (!mc.world.scoreboard.getObjective(obj)) {
mc.world.scoreboard.addObjective(obj, obj);
  }

mc.world.afterEvents.itemStartUse.subscribe(({source, itemStack: item}) => {
  mc.system.run(() => {
    if (!(source instanceof mc.Player)) return;

    const stop = mc.world.afterEvents.itemStopUse.subscribe(() => {
      mc.world.afterEvents.itemCompleteUse.unsubscribe(comp);
      mc.world.afterEvents.itemStopUse.unsubscribe(stop);
      return;
    });

    const comp = mc.world.afterEvent.itemCompleteUse.subscribe(() => {
      const add = (ply, score) => mc.world.getObjective(obj).addScore(ply, score);

      add(source, 1);

      mc.world.afterEvents.itemCompleteUse.unsubscribe(comp);
      mc.world.afterEvents.itemStopUse.unsubscribe(stop);
    });
  });
});
