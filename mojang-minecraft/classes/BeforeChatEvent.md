# BeforeChatEvent

Description:
- BeforeChatEvent: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BeforeChatEvent
- BeforeChatEventSignal: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/BeforeChatEventSignal

## Value

<pre><code class="lang-ts">class <span class="hljs-keyword">BeforeChatEvent </span>{
  <span class="hljs-string">"cancel"</span>: <span class="hljs-keyword">boolean;
</span>  <span class="hljs-string">"message"</span>: string<span class="hljs-comment">;</span>
  <span class="hljs-string">"sender"</span>: <a href="https://github.com/jaylydev/gametest-example/tree/main/mojang-minecraft/classes/Player.md" class="hljs-type">Player</a><span class="hljs-comment">;</span>
  <span class="hljs-string">"sendToTargets"</span>: <span class="hljs-keyword">boolean;
</span>  <span class="hljs-string">"targets"</span>: <a href="https://github.com/jaylydev/gametest-example/tree/main/mojang-minecraft/classes/Player.md" class="hljs-type">Player[]</a><span class="hljs-comment">;</span>
}
</code></pre>

<pre><code class="lang-ts"><span class="hljs-type"><span class="hljs-keyword">class</span> <span class="hljs-title">BeforeChatEventSignal</span> </span>{
  subscribe(callback: <span class="hljs-function">(<span class="hljs-params">arg: <a href="#" class="hljs-type">BeforeChatEvent</a></span>) =&gt;</span> <span class="hljs-keyword">void</span>): <span class="hljs-function">(<span class="hljs-params">arg: <a href="#" class="hljs-type">BeforeChatEvent</a></span>) =&gt;</span> <span class="hljs-keyword">void</span>;
  unsubscribe(callback: <span class="hljs-function">(<span class="hljs-params">arg: <a href="#" class="hljs-type">BeforeChatEvent</a></span>) =&gt;</span> <span class="hljs-keyword">void</span>): <span class="hljs-keyword">void</span>;
}
</code></pre>


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
