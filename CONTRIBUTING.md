# Contributing

Contributing infomation. This info changes because Script API is currently in active development, and breaking changes are frequent.

## Creating a new script sample

- Create a new directory for your script sample in the [**scripts**](./scripts/) directory. The directory name is your sample name and should be is unique and infomative.

- Create a folder structure based on the following:

| File                     | Purpose                            |
| ------------------------ | ---------------------------------- |
| `index.js` or `index.ts` | This is main file for the package. |
| `README.md`              | Infomation for the package.        |

In the main file, you must input basic credentials for the scripts with the right format. For example, here are the first few lines of script example:

```js
// Script example for ScriptAPI
// Author: Alice <https://github.com/alice>
//         Bob <https://github.com/bob>
//         Steve <https://steve.com/>
// Project: https://github.com/JaylyDev/ScriptAPI
```

In order for the pull request to be merged, the scripts must pass TypeScript Compiling process for all JavaScript/TypeScript files.

![image](https://github.com/JaylyDev/ScriptAPI/assets/121162959/a0db5db6-864a-4f56-a8f5-01fc5c12167e)

> Above image shows all checks have passed and the pull request should be able to be merged.

If the check did not pass, go to the 'details' section and see what section of the check went wrong, and attempt to fix the issue by pushing another commit to your branch.

## Create an editor extension sample

An editor extension sample should only be used in Minecraft Editor, otherwise the sample should be hosted in 'scripts' folder.

Currently, we do not provide support uploading and maintaince for editor extension samples in this repository. Please check out [Mojang's Bedrock Editor Samples](https://github.com/Mojang/minecraft-editor-extension-samples/) instead.

## Don't edit docs folder

Documentation are no longer being updated as mentioned in README.

Please do not submit any pull requests that changes any content to the docs directory. Instead, please visit [Bedrock Wiki](https://wiki.bedrock.dev/scripting/starting-scripts) and perhaps contribute scripting documentation in Bedrock Wiki GitHub repository: https://github.com/Bedrock-OSS/bedrock-wiki/tree/wiki/docs/scripting
