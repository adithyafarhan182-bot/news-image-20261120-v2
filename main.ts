// THE DAILY WORLD — news-image-20261120 v2
// Entry program: copies the front-page image to the grader's output
// directory. Runs with no network, in Node 22, standard library only.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));

// The grader runs this program twice; both runs must write the same
// bytes. Copying one fixed file guarantees that.
console.log("entry.png written to", join(outDir, "entry.png"));
