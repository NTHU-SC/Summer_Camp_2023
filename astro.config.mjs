import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://scc.nthu.site',
  base: '/hpc_summer_camp',
});