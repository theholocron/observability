# theholocron/node-template — agent operating contract

`CLAUDE.md` is a symlink to this file, so Claude, Codex, and every other agent
read the same rules. Put durable, repo-wide agent guidance here.

@../github-private/AGENTS.md

## What this repo is

<description>

## Architecture

- Single published npm package (`@theholocron/node-template`).
- TypeScript source in `src/`, compiled to `dist/` via `tsdown`.
- Tested with vitest.

## Quality

- `pnpm build` — tsdown
- `pnpm test` — vitest
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm lint` — ESLint
