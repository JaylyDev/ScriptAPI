import { execSync } from "child_process";
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
    "git --version",
    'git config user.email "41898282+github-actions[bot]@users.noreply.github.com"',
    'git config user.name "github-actions[bot]"',
    "git status",
    "git add scripts",
    `git commit -m ${JSON.stringify(title)} -m ${JSON.stringify(description.join('\n'))}`,
    "git push",
  ];

  for (const cmd of commands) {
    console.log(cmd);
    console.log(execSync(cmd.replaceAll('\\n', '\n')).toString());
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
