# theholocron/observability — agent operating contract

`CLAUDE.md` is a symlink to this file, so Claude, Codex, and every other agent
read the same rules. Put durable, repo-wide agent guidance here.

@../github-private/AGENTS.md

## What this repo is

Holocron observability library — Logger, ErrorSink and AnalyticsSink adapter interfaces with Pino, Sentry and PostHog behind them

## Architecture

- Single published npm package (`@theholocron/observability`).
- TypeScript source in `src/`, compiled to `dist/` via `tsdown`.
- Tested with vitest.

## Quality

- `pnpm build` — tsdown
- `pnpm test` — vitest
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm lint` — ESLint
