import * as path from "path";
import * as fs from "fs";
// Basically a better way to say that those packages are so bad that no one uses it
// The list should not be modify by other people
import * as legacyPackages from "../legacyPackages.json";

export const scriptsPath = path.resolve(process.cwd(), 'scripts'); // readdirSync(path.resolve(cwd, 'scripts')).map(name => name.replaceAll(path.win32.sep, path.posix.sep));
export const scriptsAll = fs.readdirSync(scriptsPath).filter(file => fs.statSync(path.resolve(scriptsPath, file)).isDirectory());
export const scripts = scriptsAll.filter(script => !legacyPackages.packages.includes(script));

// export const editorExtensionsPath = path.resolve(process.cwd(), 'editorExtensions'); // readdirSync(path.resolve(cwd, 'scripts')).map(name => name.replaceAll(path.win32.sep, path.posix.sep));
// export const editorExtensions = fs.readdirSync(editorExtensionsPath).filter(file => fs.statSync(path.resolve(editorExtensionsPath, file)).isDirectory());

export const editorExtensionsPath = path.resolve(process.cwd(), 'editorExtensions');
export const editorExtensions: string[] = [];

export const mainFilenames = ["index.ts", "index.js"];
export const readmeFilenames = ["readme.md", "readme.txt", "readme"];
export const scriptFileExtensions = ['.js', '.ts'];
export const printFilePath = (filePath: string) => filePath.replace(process.cwd() + path.sep, '').replaceAll(path.win32.sep, path.posix.sep);
