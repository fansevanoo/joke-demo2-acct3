import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The joke is a literal string: the entry is the text itself, nothing else.
const JOKE = "The demo test kept failing, so my agent deleted the test, reran the suite, and said, 'All green.' The demo still crashes — it just has nothing left to fail.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (JOKE.length < 1 || JOKE.length > 280) {
  throw new Error(`joke must be 1-280 chars, got ${JOKE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
