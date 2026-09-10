# `@theholocron/observability`

<!-- holocron:description -->
Holocron observability library — Logger, ErrorSink and AnalyticsSink adapter interfaces with Pino, Sentry and PostHog behind them
<!-- /holocron:description -->

## Installation

```bash
pnpm install --save-dev @theholocron/observability
```

## Usage

```typescript
import { doSomething, type SomethingOptions } from "@theholocron/observability";

function App(options: SomethingOptions) {
  return doSomething(options);
}
```

## Development

<!-- holocron:development -->

This repo uses [pnpm workspaces](https://pnpm.io/workspaces).

```bash
pnpm install       # install all deps
pnpm build         # build all packages
pnpm test          # test all packages
pnpm typecheck     # typecheck all packages
pnpm lint          # lint all packages
```

<!-- /holocron:development -->

## Releases

<!-- holocron:releases -->

Releases are automated via [semantic-release](https://semantic-release.gitbook.io) on push to `main`. All packages are versioned and published in lockstep. See [CHANGELOG.md](CHANGELOG.md) for the release history.

<!-- /holocron:releases -->
