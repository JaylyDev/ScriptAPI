import { Player, system } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe((event) => {
  // Type /scriptevent bp:entries to see this message
  if (event.id === 'bp:entries' && event.sourceEntity instanceof Player) {
    event.sourceEntity.sendMessage("Here's your dynamic properties entries:");

    // Display all dynamic properties
    for (const id of event.sourceEntity.getDynamicPropertyIds()) {
      event.sourceEntity.sendMessage(`- ${id}: ${event.sourceEntity.getDynamicProperty(id)}`);
    }
  };
})