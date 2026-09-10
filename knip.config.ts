import type { KnipConfig } from "knip";

const config: KnipConfig = {
	workspaces: {
		".": {
			// subpath entries (src/core.ts, /logger.ts, /errors.ts, /analytics.ts,
			// /index.ts) are discovered from the package.json `exports` map;
			// commitlint.config.ts / vitest.config.ts by Knip plugins
			entry: ["holocron.config.ts", "src/**/*.test.ts"],
			project: ["src/**/*.ts", "*.config.ts"],
			// astro.config.ts is the docs build config, not an Astro workspace — disable plugin
			astro: false,
		},
		docs: {
			// astro.config.ts lives at the repo root, not here — set entry explicitly
			entry: ["src/content.config.ts"],
		},
	},
	ignoreDependencies: [
		// commitlint "extends" uses string shorthand — Knip sees the bare scoped
		// org "@theholocron" rather than "@theholocron/commitlint-config"
		"@theholocron/commitlint-config",
		"@theholocron",
		// passed as --config arg to lint-staged binary in .husky/pre-commit
		"@theholocron/lint-staged-config",
		// loaded at runtime by the holocron plugin system — not a static import
		"@theholocron/holocron-plugin-github",
		// skills referenced as strings in holocron.config.ts — no static import for Knip to trace
		"@theholocron/skills",
		// binary tools — invoked via CLI or hooks, not module imports
		"sort-package-json",
		// Pino transport targets referenced as strings in transports.ts
		// (`target: "@axiomhq/pino"` / `"pino-pretty"`), never statically imported
		"@axiomhq/pino",
		"pino-pretty",
	],
	ignoreExportsUsedInFile: true,
};

export default config;
