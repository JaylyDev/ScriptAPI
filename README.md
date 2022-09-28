# ScriptAPI Samples

This repository is filled with community driven script samples for Minecraft Bedrock Script API.

## Script Samples
  
- ### [scripts](./scripts/)
  Community driven scripts that use Script API to do all kinds of crazy stuff in Minecraft.
  > ⚠️ Some scripts might use `mojang-net` and `mojang-minecraft-server-admin` module, which the modules are only available in [Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock) and cannot be used on Minecraft clients.
  
- ### [mojang-minecraft](./mojang-minecraft/)
  Basic usage of manipulating Script API features within `mojang-minecraft` module
  
- ### [mojang-gametest](./mojang-gametest/)
  Basic usage of creating GameTests or spawning a simulated player using `mojang-gametest` module

- ### [mojang-minecraft-ui](./mojang-minecraft-ui/)
  Basic usage of manipulating server forms available in `mojang-minecraft-ui` module

- ### [mojang-minecraft-server-admin](./mojang-minecraft-server-admin/)
  Basic usage of loading secrets and variables from `mojang-minecraft-server-admin` module

- ### [mojang-net](./mojang-net/)
  Basic usage of executing HTTP-based requests using `mojang-net` module
  
- ### [utilities](./utilities/)
  Projects that are not directly related to Script API, scripts inside that folder are mostly for running in a Node.js engine.

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
          my-package-tests.js
          my-package-tests.ts (optional)
          README.md (optional)
```

In the example `new-package` is the package name, you must include
- a main file (e.g. `index.js` and `index.ts`)
- a test file (e.g. `my-package-tests.js` and `my-package-tests.ts`). The test file must be based on package name and add with `-tests.js/ts`.

## Script status

This repository uses TypeScript compiler to test script files by validing with declaration files of Script API modules, making sure they are up-to-date when using in the latest Minecraft versions.

<img src="https://user-images.githubusercontent.com/65847850/192581677-8d36e2ac-456a-46fd-8713-e87508be085a.png" align="left" width="400"></a>

Most of the time the checks succeed, which means scripts inside should not have any syntax errors when using in stable version of Minecraft.

If the check failed, it's worth creating a bug report if a fix is not implemented, or a pull request if you may find a solution to a fix to the problem.
