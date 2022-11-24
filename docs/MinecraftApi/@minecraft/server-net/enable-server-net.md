# Enable mojang-net module in Bedrock Dedicated Server

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
> Modify files in default folder allows every GameTest add-ons have access to mojang-net module.
> 
> It is recommended to assign appropriate permissons for each GameTest behavior pack.

In the `permissions.json` file, enable mojang-net module by adding `"mojang-net"` in the `allowed_modules` key:

```json
{
  "allowed_modules": [
    "@minecraft/server-gametest",
    "@minecraft/server",
    "@minecraft/server-ui",
    "@minecraft/server-admin",
    "@minecraft/server-net"
  ]
}
```