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
      const tsSourceFilename = 'index.ts';
      const isEmittedFile = path.extname(fullpath) === '.js' && fs.existsSync(path.resolve(scriptPath, tsSourceFilename));
      
      if (!!parseError && !isEmittedFile) {
        errorMessages.push(`${printFilePath(fullpath)} ${renderParseError(parseError)}`);
        hasError = true;
      }
      else if (!!parseError && isEmittedFile) {
        errorMessages.push(`${printFilePath(fullpath)} ${renderParseError(parseError)}. Adding header fro ${file} from index.ts`);
        const fullTspath = path.resolve(scriptPath, tsSourceFilename);
        const tsFile = fs.readFileSync(fullTspath).toString();

        const lines = tsFile.split(/\n|\r\n/);
        const jsEmittedFileLines = content.split(/\n|\r\n/);
        const startOfHeader = lines.findIndex((value) => /\/\/ Script example for ScriptAPI/.test(value));
        const endOfHeader = lines.findIndex((value) => /\r?\n\/\/ Project: https:\/\/[^\r\n]+/.test('\n' + value));
        const header = lines.slice(startOfHeader, endOfHeader - startOfHeader + 1);
        jsEmittedFileLines.splice(0, 0, ...header);

        fs.writeFileSync(fullpath, jsEmittedFileLines.join('\n'));
        hasError = false;
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
