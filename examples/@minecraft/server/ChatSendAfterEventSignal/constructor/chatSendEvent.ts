import { world, ChatSendAfterEvent } from '@minecraft/server';

// Subscribe to the blockExplode event
world.afterEvents.chatSend.subscribe((event: ChatSendAfterEvent) => {
    const { sender, message } = event;
    console.log(`${sender.name}: ${message}`);
});
