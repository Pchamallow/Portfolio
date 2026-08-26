// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import { template } from "./src/settings";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	experimental:
	{
		fonts: [
			{
				provider: fontProviders.fontsource(),
				name: "Petit Formal Script",
				cssVariable: "--font-monsieur-la-doulaise",
			},
			{
				provider: fontProviders.fontsource(),
				name: "Playfair Display",
				cssVariable: "--font-playfair-display",
			},
			{
				provider: fontProviders.fontsource(),
				name: "Manrope",
				cssVariable: "--font-manrope",
			},
		],
	},
	integrations: [react(), tailwind(), sitemap()],
	site: template.website_url,
	base: template.base,
});
