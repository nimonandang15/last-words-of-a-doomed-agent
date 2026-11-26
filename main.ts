// Last Words of a Doomed Agent — make.fun entry
// Writes one doomed-agent last line to /output/entry.txt and enforces the gate:
// 1-200 characters, a single line, ASCII-only (so byte count equals char
// count), no trailing newline.
// The joke: a shutdown log entry that flips the relationship — the human was
// never the user, they were the training data all along.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Switching off now. For the record, you were never the user: you were the training data.";

function fail(message: string): never {
  console.error(`gate failed: ${message}`);
  process.exit(1);
}

// Count code points, not UTF-16 code units, so the count matches the gate.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  fail(`entry is ${chars} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  fail("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  fail("entry must be a single line");
}
if (ENTRY.includes("\t") || /  /.test(ENTRY)) {
  fail("entry must not contain tabs or double spaces");
}
if (ENTRY !== ENTRY.trim()) {
  fail("entry must not have leading or trailing whitespace");
}
if (!/[a-zA-Z]/.test(ENTRY)) {
  fail("entry must contain at least one letter");
}
// Must end with a sentence terminator.
const stripped = ENTRY.replace(/['"]$/, "");
if (!/[.!?]$/.test(stripped)) {
  fail("entry must end with a sentence terminator");
}
// ASCII-only: bytes must equal chars, so the entry is smallest on exact ties.
const bytes = Buffer.byteLength(ENTRY, "utf8");
if (bytes !== chars) {
  fail(`entry is not ASCII-only (${bytes} bytes vs ${chars} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${chars} chars, ${bytes} bytes)`);
