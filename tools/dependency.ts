import axios from "axios";
import * as fs from 'fs';
import type * as npm from "@npm/types";
import packageJson from "../package.json";
import { execSync } from "child_process";

// packument stuff
const REGISTRY = 'https://registry.npmjs.org/';
const ignoredKeys = [ 'created', 'modified' ];

// script api modules
const MinecraftChannel: "stable" | "preview" = "preview";
// sapi version format. Undefined means stable (ie. 1.0.0)
const preReleaseChannel: undefined | "rc" | "internal" | "beta" = "beta";

export async function getVersion(module: string): Promise<string> {
  const response = await axios.get(REGISTRY + module);
  const packument = response.data as npm.Packument;
  const { time } = packument;
  
  for (const key of ignoredKeys) {
    delete time[key];
  };

  const sorted = Object.keys(time).sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(time[a]).getTime() - new Date(time[b]).getTime();
  }).reverse();

  const latestPreview = sorted.find((v) => {
    if (module.startsWith("@minecraft/server")) return v.includes(MinecraftChannel) && v.includes('-' + preReleaseChannel);
    else if (module.startsWith("@minecraft/vanilla")) return v.includes('-' + MinecraftChannel);
    else return v;
  });

  if (!latestPreview) throw "Cannot fetch latest preview version of " + module;

  console.log(`Latest preview version for ${module}: ${latestPreview}`);

  return latestPreview;
};

async function main() {
  // we have specified that packages in dependencies section must only have script api modules only,
  // for other node modules, please save them as development.
  for (const moduleName in packageJson.dependencies) {
    const latestPreview = await getVersion(moduleName);
    packageJson.dependencies[moduleName as (keyof typeof import("../package.json")["dependencies"])] = latestPreview;
  }
  for (const moduleName in packageJson.overrides) {
    const latestPreview = await getVersion(moduleName);
    packageJson.overrides[moduleName as (keyof typeof import("../package.json")["overrides"])] = latestPreview;
  }

  fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));

  // for actual node modules, update them to the latest version
  for (const moduleName in packageJson.devDependencies) {
    const cmd = `npm install ${moduleName}@latest --save-dev`;

    console.log(
      "\n" + "======================================================",
      "\n" + cmd,
      "\n" + execSync(cmd).toString(),
    );
  }
};

main().catch(console.error);