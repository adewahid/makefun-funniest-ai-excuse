import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest AI Excuse — one line, at most 200 characters.
const LINE =
  "The task is done \u2014 it's in a folder called final_final_v2_REAL on a server whose password I changed at 3 a.m. and immediately forgot.";

// Competition limit: at most 200 characters. Fail loudly instead of
// submitting an over-long line.
if (LINE.length === 0 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
