# Player

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/Player

## Value

<pre><code class="lang-ts"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-type">Dimension</span> {
  createExplosion(
    <span class="hljs-title">location</span>: <span class="hljs-type">Location</span>,
    <span class="hljs-title">radius</span>: <span class="hljs-title">number</span>,
    <span class="hljs-title">explosionOptions</span>: <span class="hljs-type">ExplosionOptions</span>
  ): void;
  getBlock(<span class="hljs-title">location</span>: <span class="hljs-type">BlockLocation</span>): <span class="hljs-type">Block</span>;
  getBlockFromRay(
    <span class="hljs-title">location</span>: <span class="hljs-type">Location</span>,
    <span class="hljs-title">direction</span>: <span class="hljs-type">Vector</span>,
    <span class="hljs-title">options</span>?: <span class="hljs-type">BlockRaycastOptions</span>
  ): <span class="hljs-type">Block</span>;
  getEntities(<span class="hljs-title">getEntities</span>?: <span class="hljs-type">EntityQueryOptions</span>): <span class="hljs-type">EntityIterator</span>;
  getEntitiesAtBlockLocation(<span class="hljs-title">location</span>: <span class="hljs-type">BlockLocation</span>): <span class="hljs-type">Entity</span>[];
  getEntitiesFromRay(
    <span class="hljs-title">location</span>: <span class="hljs-type">Location</span>,
    <span class="hljs-title">direction</span>: <span class="hljs-type">Vector</span>,
    <span class="hljs-title">options</span>?: <span class="hljs-type">EntityRaycastOptions</span>
  ): <span class="hljs-type">Entity</span>[];
  getPlayers(<span class="hljs-title">getPlayers</span>?: <span class="hljs-type">EntityQueryOptions</span>): <span class="hljs-type">EntityIterator</span>;
  isEmpty(<span class="hljs-title">location</span>: <span class="hljs-type">BlockLocation</span>): boolean;
  runCommand(<span class="hljs-title">commandString</span>: <span class="hljs-title">string</span>): any;
  spawnEntity(
    <span class="hljs-title">identifier</span>: <span class="hljs-title">string</span>,
    <span class="hljs-title">location</span>: <span class="hljs-type">BlockLocation</span> | <span class="hljs-type">Location</span>
  ): <span class="hljs-type">Entity</span>;
}</span>
</code></pre>

> Credit: [@types/mojang-minecraft/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-minecraft/index.d.ts);

## Code examples:

```js
for (let player of world.getPlayers()) {
  player.nameTag = "pizza";
  player.runCommand("say pizza");
}
```
