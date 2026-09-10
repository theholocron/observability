import { defineConfig } from "@theholocron/cli";
import { node } from "@theholocron/holocron-config";

const { repo, workflows, providers } = node();
export default defineConfig({
	description: "Logging, error tracking, and analytics — one interface, swappable backends.",
	homepage: "https://docs.theholocron.dev/observability/",
	repo: {
		name: "theholocron/observability",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["typescript", "observability", "logging", "telemetry", "sentry", "posthog", "pino", "theholocron"],
		...repo,
		properties: { ...repo.properties, runtime_environment: "universal" },
	},
	workflows,
	providers,
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
});
