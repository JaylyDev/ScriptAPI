import { execSync } from "child_process";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { parseHeader } from "./header-parser";
import { readmeFilenames, scripts, scriptsPath } from "./utils";

function pushCommitGit (packages: string[]) {
  // add auth token
  writeFileSync('./github-token', process.env.PR_TOKEN ?? '');

  // github commit push
  const title = `Add README to ${packages.length} packages`;
  const description = [
    `Add README file to the following packages:`,
    packages.join(', ')
  ];
  const commands = [
    "git --version",
    // 'git config user.email "github-actions@github.com"',
    // 'git config user.name "github-actions"',
    "git status",
    "git add scripts",
    `git commit -m ${JSON.stringify(title)} -m ${JSON.stringify(description.join('\n'))}`,
    "git push origin HEAD:" + process.env.REF,
  ];

  for (const cmd of commands) {
    console.log(cmd);
    console.log(execSync(cmd.replaceAll('\\n', '\n')).toString());
  }
};

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

  if (!existsSync(indexJs)) {
    console.error(script, "missing index.js");
    writeFileSync(path.resolve(scriptsPath, script, 'README.md'), readmeDefault.join('\n'));
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
    
    writeFileSync(path.resolve(scriptsPath, script, 'README.md'), readmeDefault.join('\n'));
  }
  else {
    console.error(script, "doesn't have header in index.js");
    writeFileSync(path.resolve(scriptsPath, script, 'README.md'), readmeDefault.join('\n'));
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
  if (scriptsChanged.length > 0) pushCommitGit(scriptsChanged);
  else console.log("All script packages have a README file.");
  
  return 0;
}
