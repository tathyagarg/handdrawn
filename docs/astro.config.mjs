// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Handdrawn Userstyles',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/tathyagarg/handdrawn' }],
      sidebar: [
        {
          label: 'Getting Started',
          items: [{ autogenerate: { directory: 'getting-started' } }],
        }
      ],
    }),
  ],
});
