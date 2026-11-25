// Snooze Button Roast
// Writes one line roasting an alarm clock for ringing at 6 AM on a Saturday (max 200 chars) to <outDir>/entry.txt.
// Deterministic: fixed text, no network, no randomness, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My alarm rang at 6 a.m. on Saturday. The snooze button hit snooze on the alarm. We're a union now.";

const outDir = process.argv[2] ?? "/output";
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, gate needs 1-200`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
