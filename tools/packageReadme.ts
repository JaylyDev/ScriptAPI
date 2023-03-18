import { execSync } from "child_process";
import { existsSync, mkdir, mkdirSync, readdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { parseHeader } from "./header-parser";
import { readmeFilenames, scripts, scriptsPath } from "./utils";

function isValidHttpUrl(string: string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function makeReadme (script: string) {
  const indexJs = path.resolve(scriptsPath, script, 'index.js');
  const tempDir = path.resolve(process.cwd(), 'node_modules/.cache');
  const readmePath = path.resolve(tempDir, script, 'README.md');
  const readmeDefault = [
    '# ' + script,
    '',
    '## Description',
    '',
    '',
    '## Credits',
    '',
    ''
  ];

  try {
    mkdirSync(path.resolve(tempDir, script), { recursive: true });    
  } catch (error) {
    console.error(error);
  }

  if (!existsSync(indexJs)) {
    console.error(script, "missing index.js");
    writeFileSync(readmePath, readmeDefault.join('\n'));
    return;
  };
  
  /**
   * header
   */
  const header = parseHeader(readFileSync(indexJs).toString());
  if ('contributors' in header) {
    const credits = "These scripts were written by " + header.contributors.map((v) => {
      if (isValidHttpUrl(v.url)) return `[${v.name}](${v.url})`;
      else return `${v.name} on ${v.url}`;
    }).join(', ');

    const creditsSubheadingIndex = readmeDefault.findIndex((v) => v.startsWith('## Credits'));
    readmeDefault[creditsSubheadingIndex + 1] = credits;
    
    writeFileSync(readmePath, readmeDefault.join('\n'));
  }
  else {
    console.error(script, "doesn't have header in index.js");
    writeFileSync(readmePath, readmeDefault.join('\n'));
  }
}

export function execute (): 0 | 1 {
  const scriptsChanged: string[] = [];
  
  for (const script of scripts) {
    const files = readdirSync(path.resolve(scriptsPath, script));
    
    // check if readme is in directory
    let hasReadme = false;
    for (const readmeFile of readmeFilenames) {
      if (files.map(v => v.toLowerCase()).includes(readmeFile)) hasReadme = true;
    };

    if (hasReadme) continue;
    console.log(`Script '${script}' does not have README. Adding one automatically.`);
    makeReadme(script);
    scriptsChanged.push(script);
  }

  // attempt to commit
  if (scriptsChanged.length > 0) console.warn(`Add README to ${scriptsChanged.length} packages, please check artifacts for generated files.`);
  else console.log("All script packages have a README file.");
  
  return 0;
}
