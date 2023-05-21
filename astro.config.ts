import { defineConfig } from "astro/config";
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [compress(), tailwind()],
});
