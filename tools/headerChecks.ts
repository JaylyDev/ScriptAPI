import { renderParseError, validate } from "./header-parser";
import * as path from "path";
import * as fs from "fs";
import { scripts, scriptsPath, scriptFileExtensions, mainFilenames, printFilePath } from "./utils";

function checkScripts () {
  const errorMessages: string[] = [];
  let packagesHaveError = 0;

  for (const script of scripts) {
    const scriptPath = path.resolve(scriptsPath, script);
    const scriptFiles = fs.readdirSync(scriptPath).filter(name => scriptFileExtensions.includes(path.extname(name)));
    const mainFiles = scriptFiles.filter(x => mainFilenames.includes(x));
    let hasError = false;

    if (mainFiles.length < 1) {
      errorMessages.push(`${printFilePath(scriptPath)} does not have one of the following files: ${mainFilenames.join(', ')}`);
      hasError = true;
      packagesHaveError++;
      continue;
    };

    for (const file of mainFiles) {
      const fullpath = path.resolve(scriptPath, file);
      const content = fs.readFileSync(fullpath).toString();
      const parseError = validate(content);
      
      if (!!parseError) {
        errorMessages.push(`${printFilePath(fullpath)} ${renderParseError(parseError)}`);
        hasError = true;
      };
    };
    hasError ? packagesHaveError++ : null;
  };

  return { errorMessages, packagesHaveError };
};

function printMessages (messages: string[], packagesHaveError: number) {
  console.log(`Found ${messages.length} errors in ${packagesHaveError} scripts.`);

  for (const message of messages) {
    console.error(message);
  }
};

// main entry
export function execute () {
  const results = checkScripts();
  printMessages(results.errorMessages, results.packagesHaveError);
  
  const statusCode = results.errorMessages.length > 0 ? 1 : 0;
  return statusCode;
};
