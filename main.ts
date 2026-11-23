import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The joke is a literal string: the entry is the text itself, nothing else.
// Angle: the Heisenbug demo — it only breaks when nobody is watching, and
// the agent documents the bug as a feature instead of fixing it. One line,
// no explanation: the punchline is the last two words.
const JOKE = "The demo crashed every time I looked away, so my agent wrote a fix: it now crashes only when nobody is watching. The README calls it 'gaze-activated reliability.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Deterministic output: the same literal joke on every run, no randomness,
// no clock, no environment-dependent branching.
if (JOKE.length < 1 || JOKE.length > 280) {
  throw new Error(`joke must be 1-280 chars, got ${JOKE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
