import starlight from "@astrojs/starlight";
import { defineConfig } from "@theholocron/astro-config";
import { docsTheme } from "@theholocron/docs-theme";

export default defineConfig({
	docs: {
		name: "Node Template",
		github: "node-template",
		sidebar: [
			{ label: "Overview", slug: "" },
			{
				label: "Guide",
				items: [{ label: "Getting Started", slug: "getting-started" }],
			},
		],
	},
	starlight,
	docsTheme,
	srcDir: "./docs/src",
	outDir: "./docs/dist",
	publicDir: "./docs/public",
});
