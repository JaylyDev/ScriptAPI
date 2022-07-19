import { MinecraftItemTypes, Player, Vector, world } from "mojang-minecraft";
import { setVelocity } from "./index.js";

world.events.beforeItemUse.subscribe((event) => {
  if (event.item.id !== MinecraftItemTypes.feather.id) return;
  if (!(event.source instanceof Player)) return;

  var velocity = Vector.multiply(event.source.viewVector, new Vector(1.5, 2, 1.5));

  setVelocity(velocity, event.source);
  event.source.runCommand("playsound armor.equip_leather @s");
});