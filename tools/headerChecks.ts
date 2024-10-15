import { renderParseError, validate } from "./header-parser";
import * as path from "path";
import * as fs from "fs";
import { scripts, scriptsPath, editorExtensions, editorExtensionsPath, scriptFileExtensions, mainFilenames, printFilePath } from "./utils";

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
      const content = fs.readFileSync(fullpath, 'utf8');
      const parseError = validate(content);
      const tsSourceFilename = 'index.ts';
      const isEmittedFile = path.extname(fullpath) === '.js' && fs.existsSync(path.resolve(scriptPath, tsSourceFilename));
      
      if (!!parseError && !isEmittedFile) {
        errorMessages.push(`${printFilePath(fullpath)} ${renderParseError(parseError)}`);
        hasError = true;
      }
      else if (!!parseError && isEmittedFile) {
        errorMessages.push(`${printFilePath(fullpath)} ${renderParseError(parseError)}. Adding header from index.ts to ${file}`);
        const fullTspath = path.resolve(scriptPath, tsSourceFilename);
        const tsFile = fs.readFileSync(fullTspath, 'utf8');

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

function checkEditorExtensions () {
  const errorMessages: string[] = [];
  let packagesHaveError = 0;

  for (const editorExtension of editorExtensions) {
    const editorExtensionPath = path.resolve(editorExtensionsPath, editorExtension);
    const editorExtensionFiles = fs.readdirSync(editorExtensionPath).filter(name => scriptFileExtensions.includes(path.extname(name)));
    const mainFiles = editorExtensionFiles.filter(x => mainFilenames.includes(x));
    let hasError = false;

    if (mainFiles.length < 1) {
      errorMessages.push(`${printFilePath(editorExtensionPath)} does not have one of the following files: ${mainFilenames.join(', ')}`);
      hasError = true;
      packagesHaveError++;
      continue;
    };

    for (const file of mainFiles) {
      const fullpath = path.resolve(editorExtensionPath, file);
      const content = fs.readFileSync(fullpath, 'utf8');
      const parseError = validate(content);
      const tsSourceFilename = 'index.ts';
      const isEmittedFile = path.extname(fullpath) === '.js' && fs.existsSync(path.resolve(editorExtensionPath, tsSourceFilename));
      
      if (!!parseError && !isEmittedFile) {
        errorMessages.push(`${printFilePath(fullpath)} ${renderParseError(parseError)}`);
        hasError = true;
      }
      else if (!!parseError && isEmittedFile) {
        errorMessages.push(`${printFilePath(fullpath)} ${renderParseError(parseError)}. Adding header from index.ts to ${file}`);
        const fullTspath = path.resolve(editorExtensionPath, tsSourceFilename);
        const tsFile = fs.readFileSync(fullTspath, 'utf8');

        const lines = tsFile.split(/\n|\r\n/);
        const jsEmittedFileLines = content.split(/\n|\r\n/);
        const startOfHeader = lines.findIndex((value) => /\/\/ editorExtension example for editorExtensionAPI/.test(value));
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
  // const results2 = checkEditorExtensions();  
  const statusCode = results.packagesHaveError > 0 ? 1 : 0;

  printMessages(results.errorMessages, results.packagesHaveError);
  // printMessages(results2.errorMessages, results2.packagesHaveError);
  console.log('Exit task with code', statusCode);
  
  return statusCode;
};
