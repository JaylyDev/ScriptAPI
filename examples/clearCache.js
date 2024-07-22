const fs = require('fs/promises');
const path = require('path');

function cleanEmptyFoldersRecursively(folder) {
  var fs = require('fs');
  var path = require('path');

  var isDir = fs.statSync(folder).isDirectory();
  if (!isDir) {
    return;
  }
  var files = fs.readdirSync(folder);
  if (files.length > 0) {
    files.forEach(function(file) {
      var fullPath = path.join(folder, file);
      cleanEmptyFoldersRecursively(fullPath);
    });

    // re-evaluate files; after deleting subfolder
    // we may have parent folder empty now
    files = fs.readdirSync(folder);
  }

  if (files.length == 0) {
    console.log("removing: ", folder);
    fs.rmdirSync(folder);
    return;
  }
}

async function main() {
  const dir = await fs.readdir('./', { recursive: true });
  for (const filepath of dir) {
    if (path.basename(filepath) === 'reserved.json') {
      const file = await fs.readFile(filepath, 'utf8');
      if (file.length <= 28) {
        fs.rm(filepath);
      }
    }
  }
};

main().then(() => {cleanEmptyFoldersRecursively('./@minecraft')})
