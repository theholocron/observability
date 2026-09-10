import { defineConfig } from "@theholocron/cli";
import { compose, nodeDocs, wikiCapability as wiki } from "@theholocron/holocron-config";

const { repo, workflows, providers, org, domain, docs } = compose(nodeDocs(), wiki());
export default defineConfig({
	description:
		"A modern NodeJS template with pre-configured tools, best practices, and CI/CD setup for rapid project development.",
	homepage: "https://docs.theholocron.dev/node-template/",
	org,
	domain,
	docs,
	repo: {
		name: "theholocron/node-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["nodejs", "template", "typescript", "library"],
		...repo,
		requiredChecks: [...repo.requiredChecks, "audit / Audit the bundle size"],
		properties: {
			...repo.properties,
			uses_external_packages: false,
		},
	},
	workflows: [
		...workflows,
		{ name: "audit", with: { "run-knip": true } },
		{ name: "release", with: { "run-build": true } },
		"sync",
		{ name: "deploy", with: { type: "docs", name: "node-template" }, paths: ["docs/**"] },
	],
	providers: {
		...providers,
		secrets: "github",
		wiki: ["fern", { domain: "wiki.theholocron.dev", fernOrg: "holocron", icon: "fa-duotone fa-copy" }],
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
});
