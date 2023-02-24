// https://discord.com/channels/523663022053392405/854033525546942464/988264700250845184
import { EntityHealthComponent, world } from "@minecraft/server";

world.events.entityHit.subscribe((evd) => {
    if (evd.entity.typeId !== 'minecraft:player') return;

    const ent = evd.hitEntity;
    if (!ent) return;

    /**
     * @type {EntityHealthComponent}
     */
    // @ts-ignore
    const h = ent.getComponent('health');
    if (!h) return;
    h.setCurrent(h.current - 100);
});