# BeforeChatEvent

Description:
- BeforeChatEvent: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BeforeChatEvent
- BeforeChatEventSignal: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BeforeChatEventSignal

## Code structure

```ts
class BeforeChatEvent {
  "cancel": boolean;
  "message": string;
  "sender": Player;
  "sendToTargets": boolean;
  "targets": Player[];
}
```

```ts
class BeforeChatEventSignal {
  subscribe(callback: (arg: BeforeChatEvent) => void): (arg: BeforeChatEvent) => void;
  unsubscribe(callback: (arg: BeforeChatEvent) => void): void;
}
```


> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

Subscribe to events without unsubscribing:

```js
import { world } from "mojang-minecraft";

world.events.beforeChat.subscribe((data) => {
  data.cancel = false;
  data.message = "edit original message";
  data.sender.name = "Player name";
  data.sender.nameTag = "Player nametag";
  data.sendToTargets = true;
  data.targets = [];
});
```

Subscribe and unsubscribe events:

```js
import { world } from "mojang-minecraft";

let beforeChat = world.events.beforeChat.subscribe(() => {});
world.events.beforeChat.unsubscribe(beforeChat);
```
