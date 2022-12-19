# Enable `@minecraft/server-net` module in Bedrock Dedicated Server

1. Download Bedrock Server from https://www.minecraft.net/en-us/download/server/bedrock

2. Extract the zip file on a folder.

This is the tree for default BDS:
```
Bedrock Server
├───behavior_packs
├───config
│   └───default
│       └───permissions.json
├───definitions
├───development_behavior_packs
├───development_resource_packs
├───development_skin_packs
├───resource_packs
├───structures
├───worlds
│   └───Bedrock level
│       ├───behavior_packs
│       ├───db
│       └───resource_packs
└───world_templates
```

3. In the `permissions.json` file located in `config/<pack_id>/permissions.json` or `config/default/permissions.json`, enable `@minecraft/server-net` module by adding `"@minecraft/server-net"` in the `allowed_modules` key.

> Modify files in default folder allows every add-ons with server-net module enabled in dependencies have access to @minecraft/server-net module.
> 
> It is recommended to assign appropriate permissons for each script behavior pack.

```json
{
  "allowed_modules": [
    "@minecraft/server-gametest",
    "@minecraft/server",
    "@minecraft/server-ui",
    "@minecraft/server-admin",
    "@minecraft/server-editor",
    "@minecraft/server-net"
  ]
}

```
