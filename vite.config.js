import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/react-eproject/",
  plugins: [react()],
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      // Map your assets folder for easier imports
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "", // Ensure assets are correctly referenced relative to root
    sourcemap: false,
  },
});
