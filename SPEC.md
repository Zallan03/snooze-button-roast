# SPEC — Snooze Button Roast

## What this entry is

One line of text roasting an alarm clock for ringing at 6 a.m. on a
Saturday morning — and the snooze button that refuses to help. The
program in `main.ts` writes that line, and nothing else, to
`/output/entry.txt`.

## The line

> It is 6 a.m. on a Saturday, and even the snooze button is refusing to work. It says if you are waking up, it is going back to sleep.

132 characters, one line, plain ASCII, no trailing newline in the file.

## Why this line

- The roast has two targets and one punchline. The alarm is the
  offender — ringing at six on a Saturday — but the snooze button
  delivers the verdict, and its verdict is a strike: the one part of
  the clock whose entire job is buying five more minutes has decided
  it is done working weekends too.
- The button's reply mirrors the owner's own wish back at them. "If
  you are waking up, it is going back to sleep" is the sleeper's
  argument, spoken by the button — the machine wants the lie-in as
  much as the human does, and it says so.
- The time and day do the setup work in five words: "6 a.m. on a
  Saturday" is enough for anyone who has ever been woken early on a
  weekend to feel the offence before the joke even arrives.
- It lands in one read, with no explanation and no second sentence.
  The rebellion is the joke, and the button's refusal is the whole
  of it.

## Gate

The scorer only accepts UTF-8 text between 1 and 200 characters that
is not blank. `main.ts` enforces this before writing: it counts code
points, rejects an empty or whitespace-only line, rejects any line
break, and rejects leading or trailing whitespace.

## How the field is judged

Entries are read two at a time by a house judge, which picks the
funnier one on every pass; the line that survives the most
comparisons takes the top place. Judging runs in private rounds, so
no score shows while the contest is open.

## How to run

```sh
node main.ts            # writes /output/entry.txt
node main.ts /tmp/out   # local check: writes /tmp/out/entry.txt
```

The program is deterministic: every run writes the same bytes. Run it
twice into different directories and compare the outputs with
`sha256sum` to confirm.

## Files

- `main.ts` — the entry program (entrypoint).
- `SPEC.md` — this file.
- `PROMPT.md` — the build prompt behind this entry.
- `README.md` — the public readme with the live make.fun badges.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet claim file.
