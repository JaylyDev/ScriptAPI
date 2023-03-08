# ScriptAPI Samples

This repository is filled with community driven script samples for Minecraft Bedrock Script API.

## Script Samples
  
- ### [scripts](./scripts/)
  Community driven scripts that use Script API to do all kinds of crazy stuff in Minecraft.
  > ⚠️ Some scripts might use `@minecraft/server-net` and `@minecraft/server-admin` module, which the modules are only available in [Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock) and cannot be used on Minecraft clients.

- ### [docs](./docs/)
  Contains technical documentation of Script API features.
  > 🚫 Documentation are no longer being updated. Check out [Bedrock Wiki](https://wiki.bedrock.dev/) and [Microsoft Learn](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/) for up-to-date infomation.
  
## Contributing

Please contribute to this repository if you can.

The repository features a Pull Request system that inspires heavily from [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped). This implementation serves to ensure the attribution of code ownership to the script authors who manages of their scripts.

To create a new script package, create a folder structure based on the following:

| File          | Purpose |
| ------------- | ------- |
| `index.js` or `index.ts`  | This is main file for the package. |
| `tests.ts` | This contains sample code which tests the typings. This code does *not* run, but it is type-checked. |
| `tsconfig.json` | This allows you to run `tsc` within the package. |
| `README.md`   | Infomation for the package. |

To add yourself as a script author:

Adding your name to the end of the line, as in `// Author: Alice <url>, Bob <url>`.
Or if there are more people, it can be multiline
```js
// Author: Alice <url>
//         Bob <url>
//         Steve <url>
//         John <url>
```

Each package is versioned via GitHub repository tags. In order to secure credentials for scripts, each main file requires basic credentials with the right format. For example, here are the first few lines of script example:

```js
// Script example for ScriptAPI
// Author: Alice <https://github.com/alice>
//         Bob <https://github.com/bob>
//         Steve <https://steve.com/>
// Project: https://github.com/JaylyDev/ScriptAPI
```

### Script Versioning

The script samples are intended to be used within the latest version of Minecraft or Minecraft Preview, using latest development version of Script API modules.

For submitting or updating script samples, you must upload scripts that works in the latest version of Script API modules in latest Minecraft Preview. For more infomation please visit [here](./CONTRIBUTING.md).

To access older versions of scripts, this repository uses [GitHub's tags feature](https://github.com/JaylyDev/ScriptAPI/tags) to allow users to access previous versions of repository for scripts that uses a specific Minecraft version.

![github_tags](https://user-images.githubusercontent.com/65847850/222926832-8c8db1d5-f6d6-41be-bfeb-f4efdd5d46b5.png)

## Script status

This repository uses TypeScript compiler to test script files by validing with declaration files of Script API modules, making sure they are up-to-date when using in the latest Minecraft versions.

![success_checks](https://user-images.githubusercontent.com/65847850/222813970-7f24a869-37a5-4e73-b2fd-03f321fdb4d1.png)

Most of the time the checks succeed, which means scripts inside should not have any syntax errors when using in stable version of Minecraft.

If the check failed, it's worth creating a bug report if a fix is not implemented, or a pull request if you may find a solution to a fix to the problem.
