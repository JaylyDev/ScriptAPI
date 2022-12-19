# Script Module Dependencies

This documents all scripting API modules dependencies, including manifest dependencies details and npm installation details.

<h3>Index:</h3>

- **Latest release**: [**Release 1.19.50**](#release-11950)
- **Latest preview**: [**Preview 1.19.60.23**](#preview-1196023)
- [_Preview 1.19.60.23_](#preview-1196023)
- [_Release 1.19.50_](#release-11950)
- [_Preview 1.19.60.22_](#preview-1196022)
- [_Preview 1.19.60.20_](#preview-1196020)
- [_Preview 1.19.50.25_](#preview-1195025)
- [_Preview 1.19.50.24_](#preview-1195024)
- [_Preview 1.19.50.22_](#preview-1195022)
- [_Preview 1.19.50.21_](#preview-1195021)
- [_Preview 1.19.50.20_](#preview-1195020)
- [_Release 1.19.40_](#release-11940)
- [_Beta 1.19.40.23_](#beta-1194023)
- [_Release 1.19.30 or below_](#release-11930-or-below)

---

## Preview 1.19.60.24

### Beta API modules

- **@minecraft/server**

  <!-- Minecraft: **1.1.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.1.0-beta"
  }
  ```

  npm: [**1.1.0-beta.1.19.60-preview.24**](https://www.npmjs.com/package/@minecraft/server/v/1.1.0-beta.1.19.60-preview.24)

  ```
  npm i @minecraft/server@1.1.0-beta.1.19.60-preview.24 --save-exact
  ```

- **@minecraft/server-ui**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-ui",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.1.0-beta"
  }
  ```

  npm: [**1.0.0-beta.1.19.60-preview.24**](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0-beta.1.19.60-preview.24)

  ```
  npm i @minecraft/server-ui@1.0.0-beta.1.19.60-preview.24 --save-exact
  ```

- **@minecraft/server-admin**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-admin",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.1.19.60-preview.24**](https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.1.19.60-preview.24)

  ```
  npm i @minecraft/server-admin@1.0.0-beta.1.19.60-preview.24 --save-exact
  ```

- **@minecraft/server-gametest**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-gametest",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.1.19.60-preview.24**](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.1.19.60-preview.24)

  ```
  npm i @minecraft/server-gametest@1.0.0-beta.1.19.60-preview.24 --save-exact
  ```

- **@minecraft/server-net**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-net",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.1.19.60-preview.24**](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.1.19.60-preview.24)

  ```
  npm i @minecraft/server-ne@1.0.0-beta.1.19.60-preview.24 --save-exact
  ```

### Stable API modules

- **@minecraft/server**

  > ⚠️Warning: This script module is not compatible with Beta API script modules

  <!-- Minecraft: **1.0.0** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0"
  }
  ```

  npm: [**1.0.0**](https://www.npmjs.com/package/@minecraft/server/v/1.0.0)

  ```
  npm i @minecraft/server@1.0.0 --save-exact
  ```

- **mojang-minecraft**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.6**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft@0.1.6 --save-exact
  ```

- **mojang-minecraft-ui**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft-ui",
    "version": "0.1.0"
  },
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.0**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft-ui@0.1.0
  ```

---

## Preview 1.19.60.23

<details>

### Beta API modules

- **@minecraft/server**

  <!-- Minecraft: **1.1.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.1.0-beta"
  }
  ```

  npm: [**1.1.0-beta.1.19.60-preview.23**](https://www.npmjs.com/package/@minecraft/server/v/1.1.0-beta.1.19.60-preview.23)

  ```
  npm i @minecraft/server@1.1.0-beta.1.19.60-preview.23 --save-exact
  ```

- **@minecraft/server-ui**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-ui",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.1.0-beta"
  }
  ```

  npm: [**1.0.0-beta.1.19.60-preview.23**](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0-beta.1.19.60-preview.23)

  ```
  npm i @minecraft/server-ui@1.0.0-beta.1.19.60-preview.23 --save-exact
  ```

- **@minecraft/server-admin**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-admin",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.1.19.60-preview.23**](https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.1.19.60-preview.23)

  ```
  npm i @minecraft/server-admin@1.0.0-beta.1.19.60-preview.23 --save-exact
  ```

- **@minecraft/server-gametest**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-gametest",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.1.19.60-preview.23**](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.1.19.60-preview.23)

  ```
  npm i @minecraft/server-gametest@1.0.0-beta.1.19.60-preview.23 --save-exact
  ```

- **@minecraft/server-net**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-net",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.1.19.60-preview.23**](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.1.19.60-preview.23)

  ```
  npm i @minecraft/server-ne@1.0.0-beta.1.19.60-preview.23 --save-exact
  ```

### Stable API modules

- **@minecraft/server**

  > ⚠️Warning: This script module is not compatible with Beta API script modules

  <!-- Minecraft: **1.0.0** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0"
  }
  ```

  npm: [**1.0.0**](https://www.npmjs.com/package/@minecraft/server/v/1.0.0)

  ```
  npm i @minecraft/server@1.0.0 --save-exact
  ```

- **mojang-minecraft**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.6**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft@0.1.6 --save-exact
  ```

- **mojang-minecraft-ui**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft-ui",
    "version": "0.1.0"
  },
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.0**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft-ui@0.1.0
  ```

</details>

---


## Release 1.19.50

### Beta API modules

- **@minecraft/server**

  <!-- Minecraft: **1.1.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.1.0-beta"
  }
  ```

  npm: [**1.1.0-beta.release.1.19.50**](https://www.npmjs.com/package/@minecraft/server/v/1.1.0-beta.release.1.19.50)

  ```
  npm i @minecraft/server@1.1.0-beta.release.1.19.50 --save-exact
  ```

- **@minecraft/server-ui**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-ui",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.1.0-beta"
  }
  ```

  npm: [**1.0.0-beta.release.1.19.50**](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0-beta.release.1.19.50)

  ```
  npm i @minecraft/server-ui@1.0.0-beta.release.1.19.50 --save-exact
  ```

- **@minecraft/server-admin**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-admin",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.release.1.19.50**](https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.release.1.19.50)

  ```
  npm i @minecraft/server-admin@1.0.0-beta.release.1.19.50 --save-exact
  ```

- **@minecraft/server-gametest**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-gametest",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.release.1.19.50**](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.release.1.19.50)

  ```
  npm i @minecraft/server-gametest@1.0.0-beta.release.1.19.50 --save-exact
  ```

- **@minecraft/server-net**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-net",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.release.1.19.50**](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.release.1.19.50)

  ```
  npm i @minecraft/server-ne@1.0.0-beta.release.1.19.50 --save-exact
  ```

### Stable API modules

- **@minecraft/server**

  > ⚠️Warning: This script module is not compatible with Beta API script modules

  <!-- Minecraft: **1.0.0** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0"
  }
  ```

  npm: [**1.0.0**](https://www.npmjs.com/package/@minecraft/server/v/1.0.0)

  ```
  npm i @minecraft/server@1.0.0 --save-exact
  ```

- **mojang-minecraft**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.6**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft@0.1.6 --save-exact
  ```

- **mojang-minecraft-ui**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft-ui",
    "version": "0.1.0"
  },
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.0**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft-ui@0.1.0
  ```

---

## Preview 1.19.60.22

<details>

### Beta API modules

- **@minecraft/server**

  <!-- Minecraft: **1.1.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.1.0-beta"
  }
  ```

  npm: [**1.1.0-beta.preview.1.19.60.22**](https://www.npmjs.com/package/@minecraft/server/v/1.1.0-beta.preview.1.19.60.22)

  ```
  npm i @minecraft/server@1.1.0-beta.preview.1.19.60.22 --save-exact
  ```

- **@minecraft/server-ui**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-ui",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.1.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.60.22**](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0-beta.preview.1.19.60.22)

  ```
  npm i @minecraft/server-ui@1.0.0-beta.preview.1.19.60.22 --save-exact
  ```

- **@minecraft/server-admin**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-admin",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.60.22**](https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.preview.1.19.60.22)

  ```
  npm i @minecraft/server-admin@1.0.0-beta.preview.1.19.60.22 --save-exact
  ```

- **@minecraft/server-gametest**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-gametest",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.60.22**](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.preview.1.19.60.22)

  ```
  npm i @minecraft/server-gametest@1.0.0-beta.preview.1.19.60.22 --save-exact
  ```

- **@minecraft/server-net**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-net",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.60.22**](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.preview.1.19.60.22)

  ```
  npm i @minecraft/server-ne@1.0.0-beta.preview.1.19.60.22 --save-exact
  ```

### Stable API modules

- **@minecraft/server**

  > ⚠️Warning: This script module is not compatible with Beta API script modules

  <!-- Minecraft: **1.0.0** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0"
  }
  ```

  npm: [**1.0.0**](https://www.npmjs.com/package/@minecraft/server/v/1.0.0)

  ```
  npm i @minecraft/server@1.0.0 --save-exact
  ```

- **mojang-minecraft**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.6**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft@0.1.6 --save-exact
  ```

- **mojang-minecraft-ui**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft-ui",
    "version": "0.1.0"
  },
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.0**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft-ui@0.1.0
  ```

---

</details>

## Preview 1.19.60.20

<details>

### Beta API modules

- **@minecraft/server**

  <!-- Minecraft: **1.1.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.1.0-beta"
  }
  ```

  npm: [**1.1.0-beta.preview.1.19.60.20**](https://www.npmjs.com/package/@minecraft/server/v/1.1.0-beta.preview.1.19.60.20)

  ```
  npm i @minecraft/server@1.1.0-beta.preview.1.19.60.20 --save-exact
  ```

- **@minecraft/server-ui**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-ui",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.60.20**](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0-beta.preview.1.19.60.20)

  ```
  npm i @minecraft/server-ui@1.0.0-beta.preview.1.19.60.20 --save-exact
  ```

- **@minecraft/server-admin**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-admin",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.60.20**](https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.preview.1.19.60.20)

  ```
  npm i @minecraft/server-admin@1.0.0-beta.preview.1.19.60.20 --save-exact
  ```

- **@minecraft/server-gametest**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-gametest",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.60.20**](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.preview.1.19.60.20)

  ```
  npm i @minecraft/server-gametest@1.0.0-beta.preview.1.19.60.20 --save-exact
  ```

- **@minecraft/server-net**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-net",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.60.20**](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.preview.1.19.60.20)

  ```
  npm i @minecraft/server-ne@1.0.0-beta.preview.1.19.60.20 --save-exact
  ```

### Stable API modules

- **@minecraft/server**

  > ⚠️Warning: This script module is not compatible with Beta API script modules

  <!-- Minecraft: **1.0.0** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0"
  }
  ```

  npm: [**1.0.0**](https://www.npmjs.com/package/@minecraft/server/v/1.0.0)

  ```
  npm i @minecraft/server@1.0.0 --save-exact
  ```

- **mojang-minecraft**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.6**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft@0.1.6 --save-exact
  ```

- **mojang-minecraft-ui**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft-ui",
    "version": "0.1.0"
  },
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.0**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft-ui@0.1.0
  ```

---

</details>

## Preview 1.19.50.25

<details>

### Beta API modules

- **@minecraft/server**

  <!-- Minecraft: **1.1.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.1.0-beta"
  }
  ```

  npm: [**1.1.0-beta.preview.1.19.50.25**](https://www.npmjs.com/package/@minecraft/server/v/1.1.0-beta.preview.1.19.50.25)

  ```
  npm i @minecraft/server@1.1.0-beta.preview.1.19.50.25 --save-exact
  ```

- **@minecraft/server-ui**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-ui",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.25**](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0-beta.preview.1.19.50.25)

  ```
  npm i @minecraft/server-ui@1.0.0-beta.preview.1.19.50.25 --save-exact
  ```

- **@minecraft/server-admin**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-admin",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.25**](https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.preview.1.19.50.25)

  ```
  npm i @minecraft/server-admin@1.0.0-beta.preview.1.19.50.25 --save-exact
  ```

- **@minecraft/server-gametest**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-gametest",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.25**](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.preview.1.19.50.25)

  ```
  npm i @minecraft/server-gametest@1.0.0-beta.preview.1.19.50.25 --save-exact
  ```

- **@minecraft/server-net**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-net",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.25**](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.preview.1.19.50.25)

  ```
  npm i @minecraft/server-net@1.0.0-beta.preview.1.19.50.25 --save-exact
  ```

### Stable API modules

- **@minecraft/server**

  > ⚠️Warning: This script module is not compatible with Beta API script modules

  <!-- Minecraft: **1.0.0** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0"
  }
  ```

  npm: [**1.0.0**](https://www.npmjs.com/package/@minecraft/server/v/1.0.0)

  ```
  npm i @minecraft/server@1.0.0 --save-exact
  ```

- **mojang-minecraft**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.6**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft@0.1.6 --save-exact
  ```

- **mojang-minecraft-ui**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft-ui",
    "version": "0.1.0"
  },
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.0**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft-ui@0.1.0
  ```

---

</details>

## Preview 1.19.50.24

<details>

### Beta API modules

- **@minecraft/server**

  <!-- Minecraft: **1.1.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.1.0-beta"
  }
  ```

  npm: [**1.1.0-beta.preview.1.19.50.24**](https://www.npmjs.com/package/@minecraft/server/v/1.1.0-beta.preview.1.19.50.24)

  ```
  npm i @minecraft/server@1.1.0-beta.preview.1.19.50.24 --save-exact
  ```

- **@minecraft/server-ui**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-ui",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.24**](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0-beta.preview.1.19.50.24)

  ```
  npm i @minecraft/server-ui@1.0.0-beta.preview.1.19.50.24 --save-exact
  ```

- **@minecraft/server-admin**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-admin",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.24**](https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.preview.1.19.50.24)

  ```
  npm i @minecraft/server-admin@1.0.0-beta.preview.1.19.50.24 --save-exact
  ```

- **@minecraft/server-gametest**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-gametest",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.24**](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.preview.1.19.50.24)

  ```
  npm i @minecraft/server-gametest@1.0.0-beta.preview.1.19.50.24 --save-exact
  ```

- **@minecraft/server-net**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-net",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.24**](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.preview.1.19.50.24)

  ```
  npm i @minecraft/server-net@1.0.0-beta.preview.1.19.50.24 --save-exact
  ```

### Stable API modules

- **@minecraft/server**

  > ⚠️Warning: This script module is not compatible with Beta API script modules

  <!-- Minecraft: **1.0.0** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0"
  }
  ```

  npm: [**1.0.0**](https://www.npmjs.com/package/@minecraft/server/v/1.0.0)

  ```
  npm i @minecraft/server@1.0.0 --save-exact
  ```

- **mojang-minecraft**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.6**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft@0.1.6 --save-exact
  ```

- **mojang-minecraft-ui**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft-ui",
    "version": "0.1.0"
  },
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.0**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft-ui@0.1.0
  ```

---

</details>

## Preview 1.19.50.22

<details>

### Beta API modules

- **@minecraft/server**

  <!-- Minecraft: **1.1.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.1.0-beta"
  }
  ```

  npm: [**1.1.0-beta.preview.1.19.50.22**](https://www.npmjs.com/package/@minecraft/server/v/1.1.0-beta.preview.1.19.50.22)

  ```
  npm i @minecraft/server@1.1.0-beta.preview.1.19.50.22 --save-exact
  ```

- **@minecraft/server-ui**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-ui",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.22**](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0-beta.preview.1.19.50.22)

  ```
  npm i @minecraft/server-ui@1.0.0-beta.preview.1.19.50.22 --save-exact
  ```

- **@minecraft/server-admin**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-admin",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.22**](https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.preview.1.19.50.22)

  ```
  npm i @minecraft/server-admin@1.0.0-beta.preview.1.19.50.22 --save-exact
  ```

- **@minecraft/server-gametest**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-gametest",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.22**](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.preview.1.19.50.22)

  ```
  npm i @minecraft/server-gametest@1.0.0-beta.preview.1.19.50.22 --save-exact
  ```

- **@minecraft/server-net**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-net",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.22**](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.preview.1.19.50.22)

  ```
  npm i @minecraft/server-net@1.0.0-beta.preview.1.19.50.22 --save-exact
  ```

### Stable API modules

- **@minecraft/server**

  > ⚠️Warning: This script module is not compatible with Beta API script modules

  <!-- Minecraft: **1.0.0** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0"
  }
  ```

  npm: [**1.0.0**](https://www.npmjs.com/package/@minecraft/server/v/1.0.0)

  ```
  npm i @minecraft/server@1.0.0 --save-exact
  ```

- **mojang-minecraft**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.6**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft@0.1.6 --save-exact
  ```

- **mojang-minecraft-ui**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft-ui",
    "version": "0.1.0"
  },
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.0**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft-ui@0.1.0
  ```

---

</details>

## Preview 1.19.50.21

<details>

### Beta API modules

- **@minecraft/server**

  <!-- Minecraft: **1.1.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.1.0-beta"
  }
  ```

  npm: [**1.1.0-beta.preview.1.19.50.21**](https://www.npmjs.com/package/@minecraft/server/v/1.1.0-beta.preview.1.19.50.21)

  ```
  npm i @minecraft/server@1.1.0-beta.preview.1.19.50.21 --save-exact
  ```

- **@minecraft/server-ui**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-ui",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.21**](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0-beta.preview.1.19.50.21)

  ```
  npm i @minecraft/server-ui@1.0.0-beta.preview.1.19.50.21 --save-exact
  ```

- **@minecraft/server-admin**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-admin",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.21**](https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.preview.1.19.50.21)

  ```
  npm i @minecraft/server-admin@1.0.0-beta.preview.1.19.50.21 --save-exact
  ```

- **@minecraft/server-gametest**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-gametest",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.21**](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.preview.1.19.50.21)

  ```
  npm i @minecraft/server-gametest@1.0.0-beta.preview.1.19.50.21 --save-exact
  ```

- **@minecraft/server-net**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-net",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.21**](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.preview.1.19.50.21)

  ```
  npm i @minecraft/server-net@1.0.0-beta.preview.1.19.50.21 --save-exact
  ```

### Stable API modules

- **@minecraft/server**

  > ⚠️Warning: This script module is not compatible with Beta API script modules

  <!-- Minecraft: **1.0.0** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0"
  }
  ```

  npm: [**1.0.0**](https://www.npmjs.com/package/@minecraft/server/v/1.0.0)

  ```
  npm i @minecraft/server@1.0.0 --save-exact
  ```

- **mojang-minecraft**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.6**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft@0.1.6 --save-exact
  ```

- **mojang-minecraft-ui**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft-ui",
    "version": "0.1.0"
  },
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.0**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft-ui@0.1.0
  ```

---

</details>

## Preview 1.19.50.20

<details>

### Beta API modules

- **@minecraft/server**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.20**](https://www.npmjs.com/package/@minecraft/server/v/1.0.0-beta.preview.1.19.50.20)

  ```
  npm i @minecraft/server@1.0.0-beta.preview.1.19.50.20 --save-exact
  ```

- **@minecraft/server-ui**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-ui",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.20**](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0-beta.preview.1.19.50.20)

  ```
  npm i @minecraft/server-ui@1.0.0-beta.preview.1.19.50.20 --save-exact
  ```

- **@minecraft/server-admin**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-admin",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.20**](https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.preview.1.19.50.20)

  ```
  npm i @minecraft/server-admin@1.0.0-beta.preview.1.19.50.20 --save-exact
  ```

- **@minecraft/server-gametest**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-gametest",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.20**](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.preview.1.19.50.20)

  ```
  npm i @minecraft/server-gametest@1.0.0-beta.preview.1.19.50.20 --save-exact
  ```

- **@minecraft/server-net**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-net",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.preview.1.19.50.20**](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.preview.1.19.50.20)

  ```
  npm i @minecraft/server-net@1.0.0-beta.preview.1.19.50.20 --save-exact
  ```

### Stable API modules

- **mojang-minecraft**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.6**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft@0.1.6 --save-exact
  ```

- **mojang-minecraft-ui**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft-ui",
    "version": "0.1.0"
  },
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.0**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft-ui@0.1.0
  ```

---

</details>

## Release 1.19.40

<details>

### Beta API modules

- **@minecraft/server**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.release.1.19.40**](https://www.npmjs.com/package/@minecraft/server/v/1.0.0-beta.release.1.19.40)

  ```
  npm i @minecraft/server@1.0.0-beta.release.1.19.40 --save-exact
  ```

- **@minecraft/server-ui**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-ui",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.release.1.19.40**](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0-beta.release.1.19.40)

  ```
  npm i @minecraft/server-ui@1.0.0-beta.release.1.19.40 --save-exact
  ```

- **@minecraft/server-admin**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-admin",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.release.1.19.40**](https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.release.1.19.40)

  ```
  npm i @minecraft/server-admin@1.0.0-beta.release.1.19.40 --save-exact
  ```

- **@minecraft/server-gametest**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-gametest",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.release.1.19.40**](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.release.1.19.40)

  ```
  npm i @minecraft/server-gametest@1.0.0-beta.release.1.19.40 --save-exact
  ```

- **@minecraft/server-net**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-net",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.release.1.19.40**](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.release.1.19.40)

  ```
  npm i @minecraft/server@1.0.0-beta.release.1.19.40 --save-exact
  ```

### Stable API modules

- **mojang-minecraft**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.6**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft@0.1.6 --save-exact
  ```

- **mojang-minecraft-ui**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft-ui",
    "version": "0.1.0"
  },
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.0**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft-ui@0.1.0
  ```

---

</details>

## Beta 1.19.40.23

<!-- <>These npm versions are really confusing -->

<details>

### Beta API modules

- **@minecraft/server**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.11940b24**](https://www.npmjs.com/package/@minecraft/server/v/1.0.0-beta.11940b24)

  ```
  npm i @minecraft/server@1.0.0-beta.11940b24 --save-exact
  ```

- **@minecraft/server-ui**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-ui",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.11940b24**](https://www.npmjs.com/package/@minecraft/server-ui/v/1.0.0-beta.11940b24)

  ```
  npm i @minecraft/server-ui@1.0.0-beta.11940b24 --save-exact
  ```

- **@minecraft/server-admin**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-admin",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.11940b24**](https://www.npmjs.com/package/@minecraft/server-admin/v/1.0.0-beta.11940b24)

  ```
  npm i @minecraft/server-admin@1.0.0-beta.11940b24 --save-exact
  ```

- **@minecraft/server-gametest**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-gametest",
    "version": "1.0.0-beta"
  },
  {
    "module_name": "@minecraft/server",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.11940b24**](https://www.npmjs.com/package/@minecraft/server-gametest/v/1.0.0-beta.11940b24)

  ```
  npm i @minecraft/server-gametest@1.0.0-beta.11940b24 --save-exact
  ```

- **@minecraft/server-net**

  <!-- Minecraft: **1.0.0-beta** -->

  Dependencies:

  ```json
  {
    "module_name": "@minecraft/server-net",
    "version": "1.0.0-beta"
  }
  ```

  npm: [**1.0.0-beta.11940b24**](https://www.npmjs.com/package/@minecraft/server-net/v/1.0.0-beta.11940b24)

  ```
  npm i @minecraft/server-net@1.0.0-beta.11940b24 --save-exact
  ```

### Stable API modules

- **mojang-minecraft**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.6**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft@0.1.6 --save-exact
  ```

- **mojang-minecraft-ui**

  > ⚠️Warning: This module is not compatible with script modules version 0.1.0 or above

  <!-- Minecraft: **0.1.0** -->

  Dependencies:

  ```json
  {
    "module_name": "mojang-minecraft-ui",
    "version": "0.1.0"
  },
  {
    "module_name": "mojang-minecraft",
    "version": "0.1.0"
  }
  ```

  npm: [**0.1.0**](https://www.npmjs.com/package/@types/mojang-minecraft-ui/v/0.1.0)

  ```
  npm i @types/mojang-minecraft-ui@0.1.0
  ```

---

</details>

## Release 1.19.30 or below

<details>

**Manifest details**:

```json
"dependencies": [
    {
        "description": "mojang-gametest",
        "uuid": "6f4b6893-1bb6-42fd-b458-7fa3d0c89616",
        "version": [0, 1, 0]
    },
    {
        "description": "mojang-minecraft",
        "uuid": "b26a4d4c-afdf-4690-88f8-931846312678",
        "version": [0, 1, 0]
    },
    {
        "description": "mojang-minecraft-ui",
        "uuid": "2bd50a27-ab5f-4f40-a596-3641627c635e",
        "version": [0, 1, 0]
    },
    {
        "description": "mojang-net",
        "uuid": "777b1798-13a6-401c-9cba-0cf17e31a81b",
        "version": [0, 1, 0]
    },
    {
        "description": "mojang-minecraft-server-admin",
        "uuid": "53d7f2bf-bf9c-49c4-ad1f-7c803d947920",
        "version": [0, 1, 0]
    }
]
```

**Reference**:

- [`mojang-minecraft`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-minecraft)
- [`mojang-gametest`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-gametest)
- [`mojang-minecraft-ui`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-minecraft-ui)
- [`mojang-minecraft-server-admin`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-minecraft-server-admin)
- [`mojang-net`](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/mojang-net)

**Installation**:

```sh-session
npm install --save @types/mojang-minecraft
npm install --save @types/mojang-gametest
npm install --save @types/mojang-minecraft-ui
npm install --save @types/mojang-minecraft-server-admin
npm install --save @types/mojang-net
```
