# ScriptAPI Samples

This repository is filled with community driven script samples for Minecraft Bedrock Script API.

## Script Samples
  
- ### [scripts](./scripts/)
  Community driven scripts that use Script API to do all kinds of crazy stuff in Minecraft.
  > ⚠️ Some scripts might use `@minecraft/server-net` and `@minecraft/server-admin` module, which the modules are only available in [Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock) and cannot be used on Minecraft clients.
  
- ### [@minecraft/server](./docs/MinecraftApi/@minecraft/server/)
  Basic usage of manipulating Script API features within `@minecraft/server` module
  
- ### [@minecraft/server-gametest](./docs/MinecraftApi/@minecraft/server-gametest/)
  Basic usage of creating GameTests or spawning a simulated player using `@minecraft/server-gametest` module

- ### [@minecraft/server-ui](./docs/MinecraftApi/@minecraft/server-ui/)
  Basic usage of manipulating server forms available in `@minecraft/server-ui` module

- ### [@minecraft/server-admin](./docs/MinecraftApi/@minecraft/server-admin/)
  Basic usage of loading secrets and variables from `@minecraft/server-admin` module

- ### [@minecraft/server-net](./docs/MinecraftApi/@minecraft/server-net/)
  Basic usage of executing HTTP-based requests using `@minecraft/server-net` module
  
## Contributing

Please contribute to this repository if you can.

To create a new script package, create a folder structure based on the following:

```
JaylyDev/ScriptAPI (root)
└───scripts
    └───my-package
          index.js
          index.ts (optional)
          LICENSE (optional)
          tests.js
          tests.ts (optional)
          README.md (optional)
```

In the example `new-package` is the package name, you must include
- a main file (e.g. `index.js` or `index.ts`)
- a test file (e.g. `tests.js` or `tests.ts`).

### Script modules version

When submitting new package, the package must not import new Script API modules and old Script API modules in the same script file. This repository still has old modules like `mojang-minecraft` for compatibility.

We recommend upload scripts that uses the latest version of Script API modules. For more infomation please visit [here](./CONTRIBUTING.md).

### Acknowledgements

When you submit a new package and you want to publicly declare your work, you are allowed to insert credits under the following files:

- `LICENSE` file with the license and your name
- Adding your name to the end of the line, like `// Author: JaylyDev <https://github.com/JaylyDev>`.
- Add your name in `README.md` file in the package

## Script status

This repository uses TypeScript compiler to test script files by validing with declaration files of Script API modules, making sure they are up-to-date when using in the latest Minecraft versions.

<img src="https://user-images.githubusercontent.com/65847850/192581677-8d36e2ac-456a-46fd-8713-e87508be085a.png" align="left" width="500"></a>

Most of the time the checks succeed, which means scripts inside should not have any syntax errors when using in stable version of Minecraft.

If the check failed, it's worth creating a bug report if a fix is not implemented, or a pull request if you may find a solution to a fix to the problem.
