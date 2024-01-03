import {
    world,Player
} from "@minecraft/server";
import { ProtoForm } from "index.js";
const actionform = new ProtoForm({
    title: "Test ActionForm",
    body: "Body...",
    btns: [["Hey","Texture Path"],["Btn2","Path2"]],
    response: ({selection:s}) => {
        console.warn("selected no" + s)
    }
})
world.afterEvents.entityHitBlock.subscribe(({damagingEntity: player}) => {
    if (player instanceof Player) {
        actionform.show(player)
    }
})
