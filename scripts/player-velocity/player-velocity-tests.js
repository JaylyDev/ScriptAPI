import { MinecraftItemTypes, Player, Vector, world } from "@minecraft/server";
import { setVelocity } from "./index.js";

world.events.beforeItemUse.subscribe((event) => {
  if (event.item.typeId !== MinecraftItemTypes.feather.id) return;
  if (!(event.source instanceof Player)) return;

  var velocity = Vector.multiply(event.source.viewDirection, new Vector(1.5, 2, 1.5));

  setVelocity(velocity, event.source);
  event.source.runCommandAsync("playsound armor.equip_leather @s");
});