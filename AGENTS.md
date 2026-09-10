# theholocron/observability — agent operating contract

`CLAUDE.md` is a symlink to this file, so Claude, Codex, and every other agent
read the same rules. Put durable, repo-wide agent guidance here.

@../github-private/AGENTS.md

## What this repo is

`@theholocron/observability` — logging, error tracking, and analytics behind one
stable set of interfaces, so application code never imports a vendor SDK
directly and the backend can be swapped in one file.

## Architecture

- Single published npm package, `tsdown` multi-entry, subpath exports:
  - **`/core`** — `Logger` / `ErrorSink` / `AnalyticsSink` interfaces, their
    `Noop*` implementations, redaction helpers. **Zero dependencies** — safe in
    a browser / edge / React Native bundle. Everything else builds on this.
  - **`/logger`** — `createLogger()` (Pino) and a zero-dep `ConsoleLogger`.
  - **`/errors`** — `SentrySink`, the only `@sentry/node` call site.
  - **`/analytics`** — `PostHogSink`, the only `posthog-node` call site.
- Vendor SDKs (`@sentry/node`, `posthog-node`, `pino`, `pino-pretty`,
  `@axiomhq/pino`) are **optional peer dependencies** — install only the ones
  for the subpaths you import.
- Adapters read no environment and ship no credentials — the caller resolves
  the DSN / key and passes it in.
- TypeScript source in `src/`, compiled to `dist/` via `tsdown`. Tested with vitest.

## Quality

- `pnpm build` — tsdown
- `pnpm test` — vitest
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm lint` — ESLint
