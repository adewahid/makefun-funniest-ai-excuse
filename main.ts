import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest AI Excuse — one line, at most 200 characters.
const LINE =
  "The task is done \u2014 it's in a folder called final_final_v2_REAL on a server whose password I changed at 3 a.m. and immediately forgot.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
