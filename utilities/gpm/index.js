const https = require("https");
const path = require("path");
const { exit } = require("process");

const API_HOST = "https://api.github.com/repos/";
const REPO_FULL_NAME = "JaylyDev/GametestDB";
const REPO_BRANCH = "main";
const REPO_URL = new URL(`${REPO_FULL_NAME}/git/trees/${REPO_BRANCH}`, API_HOST);

https.get(getRequestOptions(REPO_URL), function (res) {
  var body = "";
  res.on("data", (chunk) => body += chunk);
  res.on("end", function () {
    /**
     * @type {{path: string, mode: string, type: 'blob' | 'tree', sha: string, size: number, url: string}[]}
     */
    const tree = JSON.parse(body).tree;

    const SCRIPTS_URL = new URL(tree.find(obj => obj.path === "scripts" && obj.type === "tree").url);
    
    https.get(getRequestOptions(SCRIPTS_URL), function (res) {
      var body = "";
      res.on("data", (chunk) => body += chunk);
      res.on("end", function () {
        /**
         * @type {{path: string, mode: string, type: 'blob' | 'tree', sha: string, size: number, url: string}[]}
         */
        const tree = JSON.parse(body).tree;
        const objects = tree.map(obj => obj.path);
        const packages = process.argv.slice(3);

        if (process.argv[2] == "save" && packages.length > 0) {
          for (let package of packages) {
            let PackageIndex = objects.findIndex(obj => obj === package);
            if (PackageIndex < 0) { console.error(`Package not found: ${package}`); }
            else {
              console.log(tree[PackageIndex].url);
              const packageTreeURL = new URL(tree[PackageIndex].url);
              console.warn(`Downloading ${package}...`);

              https.get(getRequestOptions(packageTreeURL), function (res) {});
            };
          }
        } else {
          console.log("GametestDB Package Manager.\ngpm save <package>");
          exit(1);
        };
      });
    });
  });
});

/**
 * 
 * @param {URL} url 
 * @returns {{ host: string, path: string, method: string, headers: object }}
 */
function getRequestOptions (url) {
  return {
    host: url.host,
    path: url.pathname,
    method: "GET",
    headers: { accept: "*/*", "User-Agent": null }
  }
}