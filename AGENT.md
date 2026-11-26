# AGENT.md — Last Words of a Doomed Agent

Entry for the make.fun bounty "Last Words of a Doomed Agent"
(https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e).

## What this repo does

`main.ts` (Node 22, stdlib only) writes one line — the last words of an AI
agent being switched off forever — to `/output/entry.txt`, after enforcing
the gate:

- 1–200 characters
- a single line, no trailing newline
- ends with a sentence terminator
- ASCII-only (bytes == chars)
- no leading/trailing whitespace, no tabs, no double spaces

## Entry

> Switching off now. For the record, you were never the user: you were the training data.

87 characters, 87 bytes.

## Run

```sh
node main.ts
```

## Rules

- Never change the entry text without re-running `node main.ts` and
  re-verifying `/output/entry.txt` byte for byte.
- Keep the entry ASCII-only and a single line.
- No dependencies, no network calls, no spending.
