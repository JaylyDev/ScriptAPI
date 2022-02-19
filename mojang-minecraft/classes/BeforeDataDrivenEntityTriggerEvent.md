# BeforeDataDrivenEntityTriggerEvent

Description:
- https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BeforeDataDrivenEntityTriggerEvent
- https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BeforeDataDrivenEntityTriggerEventSignal

## Code structure

```ts
export class BeforeDataDrivenEntityTriggerEvent {
  "cancel": boolean;
  readonly "entity": Entity;
  readonly "id": string;
  "modifiers": DefinitionModifier[];
}
```
```ts
export class BeforeDataDrivenEntityTriggerEventSignal {
  subscribe(
    callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void
  ): (arg: BeforeDataDrivenEntityTriggerEvent) => void;
  unsubscribe(callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void): void;
}
```

> Credit: [Microsoft docs/minecraft-creator](https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/beforedatadrivenentitytriggerevent);

## Code examples:

Subscribe to events without unsubscribing:

```js
import { world } from "mojang-minecraft";

world.events.BeforeDataDrivenEntityTriggerEvent.subscribe((data) => {});
```

Subscribe and unsubscribe events:

```js
import { world } from "mojang-minecraft";

let BeforeDataDrivenEntityTriggerEvent = world.events.BeforeDataDrivenEntityTriggerEvent.subscribe(() => {});
world.events.BeforeDataDrivenEntityTriggerEvent.unsubscribe(BeforeDataDrivenEntityTriggerEvent);
```
