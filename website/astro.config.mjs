// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://wsxrdv.github.io/',
	base: '/testastroforanotherrepository',
	integrations: [
		starlight({
			title: 'Test of Astro',
			social: {
				github: 'https://github.com/wsxrdv/testastroforanotherrepository',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/capture' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
