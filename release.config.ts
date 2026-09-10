import { defineConfig } from "@theholocron/semantic-release-config";

export default defineConfig({
	assets: ["CHANGELOG.md", "package.json"],
	branches: ["main", { name: "alpha", prerelease: true }],
	exec: {
		prepareCmd: "pnpm exec holocron npm bump-versions ${nextRelease.version}",
	},
	npm: { access: "public" },
});
