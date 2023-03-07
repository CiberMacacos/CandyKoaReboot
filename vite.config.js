import path from "path";
const isGitHubPages = false;
const folderName = path.basename(process.cwd()) + "/";
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";
console.log("Deberiamos estar en una rama");
if(process.env.NODE_ENV === "development") {
  console.log("Estamos en modo desarrollador");
} else {
  console.log("Estamos en modo " + process.env.NODE_ENV);
}

export default {
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./",
    target: "esnext"
  }
};
