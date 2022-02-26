# ItemStack

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/ItemStack

## Code structure

```ts
/**
 * Defines a collection of items.
 */
export class ItemStack {
  
  "amount": number;
  
  "data": number;
  
  readonly "id": string;
  
  "nameTag": string;
  
  constructor(itemType: ItemType, amount?: number, data?: number);
  
  getComponent(componentId: string): any;
  
  getComponents(): any[];
  
  getLore(): string[];
  
  hasComponent(componentId: string): boolean;
  
  setLore(loreList: string[]): void;
  
  triggerEvent(eventName: string): void;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

```js
import { world, ItemStack, Items } from 'mojang-minecraft';

const item = new ItemStack(Items.get('custom:item'));
item.setLore(['Example Lore Line', 'Example Lore Line 2']);
item.nameTag = "Custom Item name tag";
item.amount = 64; // number above 65 will "break" Minecraft, maximum is 128
item.data = 0; // data value

let player = [...world.getPlayers()][0];
player.getComponent('inventory').container.addItem(item);
```

### EnchantedBook.js
```js
import { world, ItemStack, MinecraftItemTypes } from "mojang-minecraft";

world.events.beforeChat.subscribe((data) => {
  let playerName = data.sender.name ?? data.sender.nameTag;
  let hasPermission = false;
  let prefix = "!";

  if (data.message == `${prefix}book`) {
    data.cancel = true;

    let item = new ItemStack(MinecraftItemTypes.enchantedBook, 1);
    item.nameTag = "§r§denchanted book";
    item.setLore(["§r§5This is lore of enchanted book"]);
    data.sender.getComponent("minecraft:inventory").container.addItem(item);
    data.sender.runCommand(`say has been given a ${item.nameTag}`)
  }
});