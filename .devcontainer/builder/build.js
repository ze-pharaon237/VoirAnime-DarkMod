// @ts-check
import esbuild from "esbuild";
import path from "path";

// --- Arguments CLI ---
// Usage: node build.js input.css output.css
const [,, inputFile, outputFile] = process.argv;

if (!inputFile || !outputFile) {
  console.error("Usage: node build.js <input.css> <output.css>");
  process.exit(1);
}

// Résolution des chemins relatifs/absolus
const entry = path.resolve(inputFile);
const outfile = path.resolve(outputFile);

// --- Build CSS ---
esbuild.build({
  entryPoints: [entry],
  outfile,
  bundle: true,
  minify: true,
  loader: { ".css": "css" },
  logLevel: "info"
}).catch(() => process.exit(1));
