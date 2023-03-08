# Contributing

Contributing infomation. This info changes because Script API is currently in active development, and breaking changes are frequent.

## Scripts

When submitting a new package. The scripts are assumed that they can be used with the latest beta module of script modules in latest version of Minecraft Preview, the following is a reference of a manifest dependencies and NPM packages for meeting the criteria of submitting or updating a script sample:

**manifest.json**

```json
"dependencies": [
    {
        "module_name": "@minecraft/server",
        "version": "1.2.0-beta"
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
