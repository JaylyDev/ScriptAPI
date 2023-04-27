# Editor Typings

Minecraft: Bedrock Editor API modules type definitions.

Those files are still in work in progress. Until v0.4 releases along with official type definitions, we'll be using these for type checking scripts that uses editor module.

## Usage

These files are used for validating types for the ScriptAPI repository. If you want to use it on your own, first copy the `lib` folder into your project, then in your TSConfig file, add path that refers the module to the type definition file.

Example tsconfig.json file:

```jsonc
{
  "compilerOptions": {
    "paths": {
      // registers server editor .d.ts file as a module
      "@minecraft/server-editor": [
        "lib/@minecraft/server-editor/index"
      ],
      // registers server editor bindings .d.ts file as a module, required as module is dependent with server-editor module.
      "@minecraft/server-editor-bindings": [
        "lib/@minecraft/server-editor-bindings/index"
      ]
    }
  }
}
```

Or copy and paste the `@minecraft/server-editor` and the `@minecraft/server-editor-bindings` folders in the `node_modules` folder:

```
project
└───node_modules
    └───@minecraft
        └───server-editor
        │       index.d.ts
        └───server-editor-bindings
                index.d.ts
```

To test if this works, you can go on VSCode and type some variable names to see if auto complete will detect variable from modules:

- `@minecraft/server-editor`

![server_editor](https://media.discordapp.net/attachments/867015810312962063/1089631037010739220/image.png)

- `@minecraft/server-editor-bindings`

![server_editor_bindings](https://media.discordapp.net/attachments/867015810312962063/1089631135623028798/image.png)

## Versions

Major to patch versions (`x.x.x`) represents Minecraft Editor API versions, revision version represents changes to type definitions in specific Minecraft editor version.

Latest version: `0.3.5.0` (Apr 27, 2023)

<details>
  <summary>Past versions</summary>

- `0.3.3.0` (Apr 15, 2023)
- `0.3.2.1` (Mar 26, 2023)
- `0.3.2.0` (Mar 24, 2023)
- `0.3.1.0` (Mar 13, 2023)
- `0.3.0.2` (Mar 12, 2023)
- `0.3.0.1` (Mar 12, 2023)
- `0.3.0.0` (Mar 11, 2023)
</details>
