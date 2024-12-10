# ScriptAPI Samples

This repository is filled with community driven script samples for Minecraft Bedrock Script API.

<hr/>

### 🔴 USE `stable` not `main` 🔴

**Check out the `stable` branch from here: https://github.com/JaylyDev/ScriptAPI/tree/stable**.
The `main` branch is used for script development for Minecraft Preview and may often be in a **broken** state.

<hr/>

## [Scripts](./scripts/)

Community driven scripts that use Script API to do all kinds of crazy stuff in Minecraft.

> [!IMPORTANT]
> Some scripts might use API modules that are only enabled in specific runtime environments, including:
>
> `@minecraft/server-net` and `@minecraft/server-admin`: Modules that can only be used in [Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock).
>
> `@minecraft/vanilla-data` and `@minecraft/math`: These are external Minecraft libraries published to NPM. They are not part of Minecraft's native modules.

There are two ways to use external Minecraft libraries in behavior pack scripts:

1. **Standalone file**

   Download standalone files available from [jaylydev.github.io](https://jaylydev.github.io/scriptapi-docs/meta/cdn-links.html) for quick, small-scale projects.

2. **Bundling**

   Installing it through npm, with advanced build configurations and bundling with esbuild:

    ```bash
    npm i @minecraft/math
    npm i @minecraft/vanilla-data
    ```

Guide on bundle Minecraft Scripts with the following bundlers:

- ESBuild (Recommended): [Bundle Minecraft Scripts with ESBuild](https://jaylydev.github.io/posts/bundle-minecraft-scripts-esbuild/)
- Webpack: [Bundle Minecraft Scripts with Webpack](https://jaylydev.github.io/posts/scripts-bundle-minecraft/)

## Documentation

Check out the following links for Script API documentation:

- [Official Script API Documentation](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/) - Microsoft's official documentation of high-level introduction of experimental Script API
- [Jayly's Script API References](https://jaylydev.github.io/scriptapi-docs/) - Jayly's Script API documentation with guides and easy to use and understand API references for programming beginners.
- [Bedrock Wiki](https://wiki.bedrock.dev/scripting/starting-scripts.html) - Learn the basics of the Script API on Bedrock Wiki.

## Contributing

Please contribute to this repository if you can. Check out [Contributing Guidelines](./CONTRIBUTING.md) for more infomation.

## License

This project is licensed under the MIT license.

Copyrights on the script files are each contributor listed at the beginning of each script file.
