import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import * as uuid from "uuid";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const name = "createWorldScreen.experimentalGameTest";
const description = "createWorldScreen.experimentalGameTestDescription";
/** @type {"script" | "javascript"} */
const target = "script";
const scriptEntry = "scripts/index.js";
const MinimumEngineVersion = [1, 19, 0];
const pack_version = [1, 0, 0];

const manifest = {
  format_version: 2,
  header: {
    name: name,
    description: description,
    min_engine_version: MinimumEngineVersion,
    uuid: uuid.v4(),
    version: pack_version,
  },
  dependencies: [
    {
      description: "mojang-gametest",
      uuid: "6f4b6893-1bb6-42fd-b458-7fa3d0c89616",
      version: [0, 1, 0],
    },
    {
      description: "mojang-minecraft",
      uuid: "b26a4d4c-afdf-4690-88f8-931846312678",
      version: [0, 1, 0],
    },
    {
      description: "mojang-minecraft-ui",
      uuid: "2bd50a27-ab5f-4f40-a596-3641627c635e",
      version: [0, 1, 0],
    },
    {
      description: "mojang-net",
      uuid: "777b1798-13a6-401c-9cba-0cf17e31a81b",
      version: [0, 1, 0],
    },
    {
      description: "mojang-minecraft-server-admin",
      uuid: "53d7f2bf-bf9c-49c4-ad1f-7c803d947920",
      version: [0, 1, 0],
    },
  ],
  modules: [
    {
      description: description,
      type: target,
      language: "javascript",
      entry: scriptEntry,
      version: pack_version,
      uuid: uuid.v4(),
    },
  ],
  metadata: {
    license: "MIT",
    url: "https://github.com/JaylyDev/GametestDB",
  },
};

fs.writeFileSync(path.join(__dirname, "manifest.json"), JSON.stringify(manifest));