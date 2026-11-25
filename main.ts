// Snooze Button Roast — make.fun program/v1 entry.
//
// This program writes one line to /output/entry.txt: a roast of an
// alarm clock for ringing at 6 a.m. on a Saturday — and of the snooze
// button that refuses to help. Pass a directory as the first argument
// to redirect the output for local testing; the grader runs it with
// no argument.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. The alarm rang at six on a Saturday, and the joke
// is that even the snooze button — the one part of the clock whose
// entire job is to buy five more minutes — has gone on strike. The
// button's reply mirrors the owner's own wish back at them: if you
// are waking up, I am going back to sleep. The roast lands on the
// alarm, but the button delivers it.
const ENTRY =
  "It is 6 a.m. on a Saturday, and even the snooze button is refusing to work. It says if you are waking up, it is going back to sleep.";

// The sealed gate accepts UTF-8 text of 1 to 200 characters.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

const charCount = [...ENTRY].length;
if (charCount < MIN_CHARS || charCount > MAX_CHARS) {
  throw new Error(
    `entry is ${charCount} characters, gate needs ${MIN_CHARS}-${MAX_CHARS}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

const destination = process.argv[2] ?? "/output";
mkdirSync(destination, { recursive: true });
writeFileSync(join(destination, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${charCount} characters to ${join(destination, "entry.txt")}`);
