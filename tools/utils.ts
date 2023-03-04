import * as path from "path";
import * as fs from "fs";

export const scriptsPath = path.resolve(process.cwd(), 'scripts'); // readdirSync(path.resolve(cwd, 'scripts')).map(name => name.replaceAll(path.win32.sep, path.posix.sep));
export const scripts = fs.readdirSync(scriptsPath).filter(file => fs.statSync(path.resolve(scriptsPath, file)).isDirectory());
export const mainFilenames = ["index.ts", "index.js"];
export const scriptFileExtensions = ['.js', '.ts'];
export const printFilePath = (filePath: string) => filePath.replace(process.cwd() + path.sep, '').replaceAll(path.win32.sep, path.posix.sep);
