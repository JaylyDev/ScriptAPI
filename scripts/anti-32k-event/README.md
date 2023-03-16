# anti-32k-event

## Description
Emits `incompatibleEnchantment` event when the script checks a players inventory every tick then it tests positive that they have any banned items.

Usage:

```js
import { incompatibleEnchantment } from "./index";

incompatibleEnchantment.subscribe(event => {
  event.enchantment
  event.exceedMaxLevel
  event.incompatibleEnchantmentType
  event.item
  event.source
})
```

## Credits
These scripts were written by [JaylyMC](https://github.com/JaylyDev)
