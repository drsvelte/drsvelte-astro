import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import alpinejs from "@astrojs/alpinejs";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs(), partytown(), sitemap(), robotsTxt(), sentry(), spotlightjs()],
  output: "server",
  adapter: vercel()
});
