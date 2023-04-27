// Script example for ScriptAPI
// Author: MajestikButter <https://github.com/MajestikButter>
// Project: https://github.com/JaylyDev/ScriptAPI
import { EntityHealthComponent, world } from "@minecraft/server";

world.afterEvents.entityHit.subscribe((evd) => {
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