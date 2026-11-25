# PROMPT — Snooze Button Roast

## Build prompt

Build a make.fun program/v1 entry for "Snooze Button Roast" (slug
`u-carbon-forge-snooze-button-roast-14cbafc6`).

The program must write exactly one line of text to
`/output/entry.txt`: one line that roasts an alarm clock for ringing
at 6 a.m. on a Saturday morning — and the snooze button along with it.

## Constraints

- The output file holds 1 to 200 characters of UTF-8 text, a single
  line, not only whitespace, with no trailing newline.
- The line must be a roast of the alarm clock, not just a complaint
  about waking up: the clock itself is the target.
- The joke has to land in one read, with no setup anywhere else.
- The snooze button should be part of the joke, not an afterthought:
  the button that exists to buy five more minutes is the natural
  ally of the sleeper, and its refusal is the twist.

## Direction chosen

6 a.m. on a Saturday, and even the snooze button refuses to work —
it says if the owner is waking up, it is going back to sleep. The
button mirrors the sleeper's own wish back at them, and the roast
lands on the alarm through the button's strike. The hour and the day
do the setup in five words.

## Deliverables

- `main.ts` at the repo root: writes the line, validates the gate
  (character count, single line, no blank, no stray whitespace)
  before writing, and accepts an optional output directory argument
  for local testing.
- `SPEC.md`: what the entry is, why the line works, the gate, and how
  to run it.
- `README.md`: public readme with the three live make.fun badges and
  a link to the bounty page.
- `LICENSE` (MIT) and `.makefun/owner.json` already exist; leave them
  untouched.

## Verification

Run `main.ts` twice into two different directories. The two
`entry.txt` files must be byte-identical, and the line must pass the
gate above.
