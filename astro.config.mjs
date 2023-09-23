import { defineConfig } from 'astro/config';
import vercelEdge from '@astrojs/vercel/edge';
 
export default defineConfig({
  output: 'hybrid',
  adapter: vercelEdge(),
});