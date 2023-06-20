# Minecraft Editor APIs

Unofficial Minecraft: Bedrock Editor API modules type definitions.

The type definition files are still work in progress. Until v0.4 releases along with official type definitions, this module will be used for type checking scripts that uses editor APIs in the [ScriptAPI](https://github.com/JaylyDev/ScriptAPI) GitHub repository.

## Usage

Install `@jayly/minecraft-editor` package in NPM, this installs type definition for all editor API modules.

```
npm install @jayly/minecraft-editor
```

Then you must include the following in TSConfig. This allows the editor API modules to be included without importing `@jayly/minecraft-editor` package.

```json
{
  "compilerOptions": {
    "types": ["minecraft-editor"],
    "typeRoots": ["./node_modules/@jayly"],
  },
}
```

To test if this works, you can go on VSCode and type some variable names to see if auto complete will detect variable from modules:

- `@minecraft/server-editor`

![server_editor](https://media.discordapp.net/attachments/867015810312962063/1089631037010739220/image.png)

- `@minecraft/server-editor-bindings`

![server_editor_bindings](https://media.discordapp.net/attachments/867015810312962063/1089631135623028798/image.png)

## Versioning

Major to patch versions (`x.x.x`) represents Minecraft Editor API versions, revision version represents changes to type definitions in specific Minecraft editor version.
