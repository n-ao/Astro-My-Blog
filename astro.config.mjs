import astroRemark from '@astrojs/markdown-remark';
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig(
	/** @type {import('astro').AstroUserConfig} */
	{
		markdown: {
			render: [astroRemark, {
				remarkPlugins: [],
				rehypePlugins: ['rehype-slug', ['rehype-autolink-headings', {
					behavior: 'wrap'
				}]],
				shikiConfig: {
					theme: 'poimandres',
					langs: [],
					wrap: false
				}
			}]
		},
		site: 'https://n-ao.github.io/Astro-My-Blog',
		base: '/Astro-My-Blog',
		integrations: [sitemap()]
	});
