# Contributing

Contributing infomation. This info changes because Script API is currently in active development, and breaking changes are frequent. 

## Scripts

When submitting a new package. You must use modules with the following dependencies:

**manifest.json**
```json
"dependencies": [
    {
        "module_name": "@minecraft/server",
        "version": "1.1.0-beta"
    },
    {
        "module_name": "@minecraft/server-ui",
        "version": "1.0.0-beta"
    },
    {
        "module_name": "@minecraft/server-gametest",
        "version": "1.0.0-beta"
    },
    {
        "module_name": "@minecraft/server-admin",
        "version": "1.0.0-beta"
    },
    {
        "module_name": "@minecraft/server-net",
        "version": "1.0.0-beta"
    }
]
```

**NPM packages:**

- [`@minecraft/server@beta`](https://www.npmjs.com/package/@minecraft/server/v/beta)
- [`@minecraft/server-ui@beta`](https://www.npmjs.com/package/@minecraft/server-ui/v/beta)
- [`@minecraft/server-net@beta`](https://www.npmjs.com/package/@minecraft/server-net/v/beta)
- [`@minecraft/server-gametest@beta`](https://www.npmjs.com/package/@minecraft/server-gametest/v/beta)
- [`@minecraft/server-admin@beta`](https://www.npmjs.com/package/@minecraft/server-admin/v/beta)

---

or if you want to use alpha version of API modules, you are only allowed to use these modules:

```json
"dependencies": [
    {
        "module_name": "mojang-minecraft",
        "version": "0.1.0"
    },
    {
        "module_name": "mojang-minecraft-ui",
        "version": "0.1.0"
    }
]
```