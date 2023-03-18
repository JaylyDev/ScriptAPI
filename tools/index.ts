import * as headerChecks from "./headerChecks";
import * as packageCheck from "./packageCheck";
import * as testScriptChecks from "./testScriptChecks";
import * as readme from "./packageReadme";

function log (...args: string[]) {
  console.log('');
  console.log(...args, '\n');
};

interface Task {
  message: string;
  execute: () => 0 | 1;
};

function runTasks (tasks: Task[]): number {
  const taskStatus: number[] = [];

  for (const task of tasks) {
    log(task.message + '...');
    const statusCode = task.execute();
    taskStatus.push(statusCode);
  };

  if (taskStatus.length <= 0) return 1;
  else if (taskStatus.filter(status => status !== 0).length > 0) return 1;
  else return 0;
};

const exitCode = runTasks([
  { message: "Checking script file headers", execute: headerChecks.execute },
  { message: "Checking script names", execute: packageCheck.execute },
  { message: "Looking for test files in packages", execute: testScriptChecks.execute },
  { message: "Adding README for packages", execute: readme.execute },
]);

process.exit(exitCode);