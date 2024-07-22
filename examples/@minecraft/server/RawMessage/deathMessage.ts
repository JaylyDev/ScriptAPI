import { RawText, world } from "@minecraft/server";

world.afterEvents.entityDie.subscribe((event) => {
  const rawtext: RawText = {
    rawtext: [
      { text: "§a" },
      { translate: "death.attack.generic", with: [event.deadEntity.typeId] }
    ]
  };
  world.sendMessage(rawtext);
})