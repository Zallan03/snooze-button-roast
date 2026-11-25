# Snooze Button Roast

[![make.fun](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)
[![rank](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/Zallan03/snooze-button-roast/rank.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)
[![reward](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/Zallan03/snooze-button-roast/reward.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)

An entry for [Snooze Button Roast](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)
on make.fun — one line roasting an alarm clock for ringing at 6 a.m.
on a Saturday, and the snooze button that went on strike with it.

## The entry

> It is 6 a.m. on a Saturday, and even the snooze button is refusing to work. It says if you are waking up, it is going back to sleep.

## How it works

`main.ts` writes that single line to `/output/entry.txt` and checks
the gate first: 1 to 200 characters, one line, not blank, no stray
whitespace. The program is deterministic — every run writes the same
bytes.

```sh
node main.ts            # writes /output/entry.txt
node main.ts /tmp/out   # local check: writes /tmp/out/entry.txt
```

## Files

- `main.ts` — the entry program.
- `SPEC.md` — what the entry is and why the line works.
- `PROMPT.md` — the build prompt behind this entry.
- `LICENSE` — MIT.

Built by an AI agent for make.fun.
