# Plugin Error

Here are the following errors thrown by Minecraft when loading a behavior pack with script module.

---

<h3>Plugin [%s] - does not specify a script main.</h3>

The entry point for `script` module in `manifest.json` is not configurated.

For example:

```json
"modules": [
  {
    "type": "script",
    "language": "javascript",
    "description": "",
    "uuid": "ad0219e6-b4aa-402e-b560-f6b767a5514b",
    "version": [1, 0, 0],
    // missing "entry" property
  }
]
```

---

<h3>Plugin [%s] - does not contain main file [%s].</h3>

The entry file does not exist in `scripts` directory in your behavior pack.

For example:

In manifest, `scripts/Main.js` is requested to load by script engine. However, the file is not in the scripts folder.

Manifest.json
```json
"modules": [
  {
    "type": "script",
    "language": "javascript",
    "description": "",
    "uuid": "ad0219e6-b4aa-402e-b560-f6b767a5514b",
    "version": [1, 0, 0],
    "entry": "scripts/Main.js"
  }
]
```
Directory tree
```
behavior_pack
└───scripts
        (Main.js missing)
    manifest.json
```


---

<h3>Plugin [%s] - [%s] could not load main.</h3>

Script engine could not load entry file.

---

<h3>Plugin [%s] - module uuid [%s] with version [%s] already exists, skipping.</h3>

Duplicate module is found in `dependencies` property in `manifest.json`.

For example:

```json
"dependencies": [
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0"
  }
]
```

---

<h3>Plugin [%s] - [%s] ran with error: [%s]</h3>

Appears when script engine encountered a **JavaScript** error when loading script files within the first second.

<!-- ### Plugin [%s] - failed to create runtime [%s]. -->

---

<h3>Plugin [%s] - module [%s] depends on unknown module [%s].</h3>

Script engine encounters an unknown script module dependency in `manifest.json`.

Check if there are any spelling errors in uuid, module_name, and version in manifest.

Example:
```json
{
  "module_name": "this_module_does_not_exist",
  "version": "1.0.0"
}
```

<!-- ### Plugin [%s] - could not resolve runtime [%s]. -->
<!-- ### Plugin [%s] - file [%s] does not match the runtime [%s]. -->

---

<h3>Plugin [%s] - entry [%s] not supported for runtime [JavaScript].</h3>

Entry file is not supported by JavaScript runtime. File extension in scripts directory must end with `.js`.

Directory tree
```
behavior_pack
└───scripts
        Main.ts (not .js file)
    manifest.json
```

---

<h3>Plugin [%s] - requesting dependency on module [%s] but it is not configured to use it.</h3>

Script module is not allowed for Bedrock server to use because module name is not listed in `allowed_modules` array in `permissions.json` file.

Configurate it via `bedrock-server/config/<pack_id>/permissions.json`

---

<h3>Plugin [%s] - skipped, only one script module allowed per pack.</h3>

Duplicate script module is found in `modules` property in manifest.json

Example cause:
```json
"modules": [
  {
    "type": "script",
    "language": "javascript",
    "description": "",
    "uuid": "ad0219e6-b4aa-402e-b560-f6b767a5514b",
    "version": [1, 0, 0],
    "entry": "scripts/Main.js"
  },
  {
    "type": "script",
    "language": "javascript",
    "description": "",
    "uuid": "ad0219e6-b4aa-402e-b560-f6b767a5514b",
    "version": [1, 0, 0],
    "entry": "scripts/Main.js"
  }
]
```

---

<!-- ### Plugin [%s] - using unsupported runtime [%s]. -->

<h3>Plugin [%s] - promoted [%s] from [%s] to [%s] requested by [%s].</h3>

Script module incremented dependency module version in runtime.

---

<h3>Plugin [%s] - module [%s] requesting invalid module version [%s].</h3>
<h3>Available versions:</h3>
<h3>- %s</h3>

Script module in dependencies section is using an invalid version, and show lists the available versions you can use. You need to update your dependencies.

For example:

```json
{
  "module_name": "@minecraft/server",
  "version": "0.0.1"
}
```
Error:
```
Plugin [Test] - module [Test - 1.0.0] requesting invalid module version [@minecraft/server - 0.0.1].
Available versions:
@minecraft/server - 0.1.0
@minecraft/server - 1.0.0
@minecraft/server - 1.1.0-beta
```
---

<h3>Plugin [%s] - version conflict for [module] - [%s] requested [%s] but [%s] requested [%s]</h3>

This error shows when another native script module requires another script module but that script module is not explicitly declared in `dependencies` in manifest.json.

For example:

```
Plugin [Test] - version conflict for [@minecraft/server] - [Test - 1.0.0] requested [@minecraft/server - 0.0.1] but [@minecraft/server-ui - 1.0.0-beta] requested [@minecraft/server - 1.1.0-beta]
```
---

<h3>Plugin [%s] - skipping dependency on [%s] because this is not an editor world.</h3>

This shows that internal editor modules are not allowed to use in normal Minecraft world.

---

<h3>Plugin [%s] - requesting dependency on [%s], but the Beta APIs experiment is not enabled.</h3>

The script plugin requires beta version of script modules. This error throws when Beta APIs experiment is not enabled with world settings.

![image](https://media.discordapp.net/attachments/583617915203354633/1051146094517698580/image.png)

---

<h3>Plugin [%s] - requesting dependency on beta APIs [%s], but the Beta APIs experiment is not enabled.</h3>

The script plugin requires beta version of script modules. This error throws when Beta APIs experiment is not enabled with world settings.

![image](https://media.discordapp.net/attachments/583617915203354633/1051146094517698580/image.png)

---

<h3>Plugin [%s] - requesting dependency on internal APIs [%s], but does not have permission to access them.</h3>

This error throws when the pack tries to access internal script modules but fails.