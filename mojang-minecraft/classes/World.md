# World

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/World

## Value

<pre><code class="lang-ts"><span class="hljs-type"><span class="hljs-keyword">class</span> <span class="hljs-title">World</span> {</span>
  <span class="hljs-type">readonly</span> <span class="hljs-string">"events"</span>: <a href="https://github.com/jaylydev/gametest-example/tree/main/mojang-minecraft/classes/Events.md">Events</a>;
  <span class="hljs-class">getDimension</span>(<span class="hljs-string">dimensionName:</span> <span class="hljs-string">"overworld"</span> | <span class="hljs-string">"nether"</span> | <span class="hljs-string">"the end"</span>): <a href="https://github.com/jaylydev/gametest-example/tree/main/mojang-minecraft/classes/Dimension.md" class="hljs-type">Dimension</a>;
  <span class="hljs-class">getPlayers</span>(options?: <a href="https://github.com/jaylydev/gametest-example/tree/main/mojang-minecraft/classes/EntityQueryOptions.md" class="hljs-type">EntityQueryOptions</a>): <a href="https://github.com/jaylydev/gametest-example/tree/main/mojang-minecraft/classes/EntityIterator.md" class="hljs-type">EntityIterator</a>;
}
</code></pre>

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts)

## Code examples:

### Events

Subscribe to events without unsubscribing:

```js
import { world } from "mojang-minecraft";

world.events.tick.subscribe(() => {});
```

> Check out [**Events**](https://github.com/jaylydev/gametest-example/tree/main/mojang-minecraft/classes/Events.md) class for more infomation

### getDimension

Version 1.18.10 or above

```js
import { world } from "mojang-minecraft";

world.getDimension().runCommand("say hello");
```

> Check out [**Dimension**](https://github.com/jaylydev/gametest-example/tree/main/mojang-minecraft/classes/Dimension.md) class for more infomation
