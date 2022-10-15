import { getGamemode, setGamemode } from 'gamemode/promises/index';
import { world, GameMode } from '@minecraft/server';

world.events.chat.subscribe(({sender}) => {
  getGamemode(sender).then(res => { sender.tell(res) });
  setGamemode(sender, GameMode.creative);
});
