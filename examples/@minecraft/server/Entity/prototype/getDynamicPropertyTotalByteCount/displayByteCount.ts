import { Player, system } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe((event) => {
  // Type /scriptevent dp:size to see this message
  if (event.id === 'dp:size' && event.sourceEntity instanceof Player) {
    // Returns the total size, in bytes, of all the dynamic properties that are currently stored for this entity.
    const byteCount = event.sourceEntity.getDynamicPropertyTotalByteCount();

    // Send the byte count to the player
    event.sourceEntity.sendMessage(`Dynamic Properties Byte Count: ${byteCount}`);
  };
})