// Script example for ScriptAPI
// Author: Andrew2005#8409 <Bedrock Add-Ons>
// Project: https://github.com/JaylyDev/ScriptAPI
import { hasLore } from './index';
import { world } from '@minecraft/server';

world.events.beforeItemUse.subscribe(({item}) => {
  if (hasLore(item)) world.sendMessage("Item has lore!");
});