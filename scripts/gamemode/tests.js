import { getGamemode, setGamemode } from '../gamemode/index.js';
import { world, GameMode } from '@minecraft/server';

world.afterEvents.chatSend.subscribe(({sender}) => {
  const res = getGamemode(sender);
  if (res) sender.sendMessage(res);
  setGamemode(sender, GameMode.Creative);
});
