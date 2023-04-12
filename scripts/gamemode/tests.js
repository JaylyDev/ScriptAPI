import { getGamemode, setGamemode } from 'gamemode/index';
import { world, GameMode } from '@minecraft/server';

world.events.chatSend.subscribe(({sender}) => {
  getGamemode(sender).then(res => { sender.sendMessage(res) });
  setGamemode(sender, GameMode.creative);
});
