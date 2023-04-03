import { readdirSync, readFileSync, statSync } from "fs";
import * as path from "path";
import { printFilePath, scripts, scriptsPath } from "./utils";

const testFilenames = ['tests', 'tests.js', 'tests.ts'];

export function execute (): 0 {
  const noTestScripts: string[] = [];

  for (const scriptName of scripts) {
    const scriptPath = path.resolve(scriptsPath, scriptName);
    const files = readdirSync(scriptPath);
    const testFiles = files.filter(x => testFilenames.includes(x));

    if (testFiles.length <= 0) noTestScripts.push(scriptPath);
    else {
      for (const file of testFiles) {
        const filepath = path.resolve(scriptPath, file)
        if (!path.extname(file) && !statSync(filepath).isDirectory()) {
          console.warn(`${printFilePath(filepath)} is not a directory. Do you mean 'tests.js' or 'tests.ts'?`);
        }
        else if (!!path.extname(file) && statSync(filepath).isDirectory()) {
          console.warn(`${printFilePath(filepath)} is not a file.`);
        }
        else {
          const content = readFileSync(filepath).toString();
          if (!/^[A-Za-z0-9]*/.test(content) || content.length <= 0) console.warn(`${printFilePath(filepath)} has no content.`);
        };
      }
    }
  };

  if (noTestScripts.length > 0)  console.warn(`There are ${noTestScripts.length} package(s) do not have any unit test scripts:\n${noTestScripts.map(script => printFilePath(script)).join(', ')} `);

  return 0;
}
