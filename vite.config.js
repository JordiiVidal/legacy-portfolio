import { defineConfig } from "vite";

export default defineConfig({
  base: "/my-portfolio/",
  build: {
    outDir: '../dist'
  },
  server: {
    port: 5017
  }
});