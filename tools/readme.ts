import { readdirSync, writeFileSync } from "fs";
import { exec } from "node:child_process";
import path from "path";
import { readmeFilenames, scripts, scriptsPath } from "./utils";

function pushCommitGit (packages: string[]) {
  const title = `Add README to ${packages.length} packages`;
  const description = [
    `Add README file to the following packages:`,
    ...packages.map(v => '- ' + v)
  ];
  const commands = [
    "git add scripts",
    `git commit -m ${JSON.stringify(title)} -m ${description.join('\\\\n')}`,
    "git push origin main",
  ];

  for (const cmd of commands) {
    console.log(cmd);
    exec(cmd, console.log);
  }
};

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
    const readmeDefault = '# ' + script;
    writeFileSync(path.resolve(scriptsPath, script, 'README.md'), readmeDefault);
    scriptsChanged.push(script);
  }

  // attempt to commit
  pushCommitGit(scriptsChanged);
  
  return 0;
}
