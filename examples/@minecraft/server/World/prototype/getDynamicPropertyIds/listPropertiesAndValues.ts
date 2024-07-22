import { world } from "@minecraft/server";

world.getDynamicPropertyIds().forEach(id => {
  const value = world.getDynamicProperty(id)!;
  world.sendMessage(`Dynamic property ${id} has value ${value}`);
});
world.sendMessage("There are " + world.getDynamicPropertyIds().length + " dynamic properties")