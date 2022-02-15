# BeforeItemDefinitionTriggeredEvent

Description:

- BeforeItemDefinitionTriggeredEvent: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BeforeItemDefinitionTriggeredEvent
- BeforeItemDefinitionEventSignal: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BeforeItemDefinitionEventSignal

## Response

```ts
class BeforeItemDefinitionEventSignal {
  subscribe(
    callback: (arg: BeforeItemDefinitionTriggeredEvent) => void
  ): (arg: BeforeItemDefinitionTriggeredEvent) => void;

  unsubscribe(
    callback: (arg: BeforeItemDefinitionTriggeredEvent) => void
  ): void;
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

Subscribe to events without unsubscribing:

```js
import { world } from "mojang-minecraft";

world.events.beforeItemDefinitionEvent.subscribe((data) => {
  data.cancel = false;

  console.log(data.eventName);

  data.item.amount = 64;
  data.item.data = 0;
  
  console.log(data.source);
});
```

Subscribe and unsubscribe events:

```js
import { world } from "mojang-minecraft";

let beforeItemDefinitionEvent = world.events.beforeItemDefinitionEvent.subscribe(() => {});
world.events.beforeItemDefinitionEvent.unsubscribe(beforeItemDefinitionEvent);
```
