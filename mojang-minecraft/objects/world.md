# world

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft#world

`world` is basically World class, but the module exports World class as world since Minecraft 1.18.10

## Value:

<pre><code class="lang-ts"><span class="hljs-keyword">const</span> world: <a href="https://github.com/jaylydev/gametest-example/tree/main/mojang-minecraft/classes/World.md">World</a>;
</code></pre>

## Code example:

v1.18.10 and above

```js
import { world } from "mojang-minecraft";

world.getDimension("overworld");
```

v1.18.10 and below

```js
import { World } from "mojang-minecraft";

World.getDimension("overworld");
```
