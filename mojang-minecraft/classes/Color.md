# Color

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/Color

-----
⚠ This page needs more infomation ⚠
-----
This page lacks code examples

----

## Code structure

```ts
export class Color {

  "alpha": number;

  "blue": number;

  "green": number;

  "red": number;

  constructor(red: number, green: number, blue: number, alpha: number);
}
```

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

```js
import { Color } from "mojang-minecraft";

new Color(0.1, 0.8, 0.63, 0.5);
```