import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entrant's own make.fun handle, sent as one word.
const handle = "quiet-panda-11";

if (/\s/.test(handle) || [...handle].length > 30) throw new Error("entry must be one handle of at most 30 characters");

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), handle);
