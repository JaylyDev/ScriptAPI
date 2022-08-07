# GameTest Database

this repository is filled with code examples for GameTest Framework API

## Portfolios

- ### [mojang-minecraft](./mojang-minecraft/)
  Basic methods of using `mojang-minecraft` module

- ### [mojang-minecraft-ui](./mojang-minecraft-ui/)
  Basic methods of using `mojang-minecraft-ui` module

- ### [mojang-minecraft-server-admin](./mojang-minecraft-server-admin/)
  A tutorial of loading secrets and variables from `mojang-minecraft-server-admin` module

- ### [mojang-net](./mojang-net/)
  Examples of using `mojang-net` module
  
- ### [scripts](./scripts/)
  Collections of open source code that allows you to do all kinds of crazy stuff
  
- ### [utilities](./utilities/)
  Projects that are not directly related to GameTest API, scripts inside that folder are mostly for running in a Node.js engine.

## Contributing

Please contribute to this repository if you can.

To create a new script package, create a folder structure based on the following:

```
GametestDB (root)
└───scripts
    └───new-package
          index.js
          index.ts (optional)
          LICENSE
          new-package-tests.js
          new-package-tests.ts (optional)
          README.md (optional)
```

In the example `new-package` is the package name, you must include
- a main file (e.g. `index.js` and `index.ts`)
- a `LICENSE` file
- a test file (e.g. `new-package-tests.js` and `new-package-tests.ts`). The test file must be based on package name and add with `-tests.js/ts`.

# GameTest API modules

GameTest Framework has the following modules as of Minecraft version 1.19.10

---

**World/Realm/Server modules**

| These modules works everywhere, except if the host is on console platform. |
| --- |

- mojang-minecraft

- mojang-gametest

- mojang-minecraft-ui
  
**Bedrock Dedicated Server modules**

| ⚠️These modules works on [Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock) and cannot be used on Minecraft clients. |
| --- |

- mojang-net

- mojang-minecraft-server-admin
