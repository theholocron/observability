import { defineConfig } from "@theholocron/cli";
import { compose, nodeDocs, wikiCapability as wiki } from "@theholocron/holocron-config";

const preset = compose(nodeDocs(), wiki());
export default defineConfig({
	...preset,
	description: "Logging, error tracking, and analytics — one interface, swappable backends.",
	homepage: "https://docs.theholocron.dev/observability/",
	repo: {
		...preset.repo,
		name: "theholocron/observability",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["typescript", "observability", "logging", "telemetry", "sentry", "posthog", "pino", "theholocron"],
		properties: { ...preset.repo?.properties, runtime_environment: "universal" },
	},
	tasks: [
		...preset.tasks,
		{ name: "audit", required: true },
		{ name: "release", with: { "run-build": true } },
		"sync",
	],
	providers: {
		...preset.providers,
		secrets: "github",
		wiki: ["fern", { domain: "wiki.theholocron.dev", fernOrg: "holocron", icon: "fa-duotone fa-chart-line" }],
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
});
