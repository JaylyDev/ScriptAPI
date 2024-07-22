import { world } from '@minecraft/server';

// Subscribe to the blockExplode event
world.beforeEvents.chatSend.subscribe((event) => {
    const { sender, message } = event;
    console.log(`${sender.name}: ${message}`);

    event.cancel = true; // Cancel message to be sent if needed. 
});
