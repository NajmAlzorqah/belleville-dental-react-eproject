import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-eproject/", // Specify the base path for GitHub Pages deployment
  plugins: [react()],
  define: {
    "process.env": {},
  },
  build: {
    outDir: "dist", // Specify the output directory for production build
    assetsDir: "", // Ensure assets are correctly referenced relative to root
    sourcemap: false, // Disable sourcemaps for production (optional, for smaller bundle size)
  },
});
