import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/belleville-dental-react-eproject/",
  plugins: [react()],
  resolve: {
    alias: {
      // Map your assets folder for easier imports
      "@assets": path.resolve(__dirname, "./public/assets"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "./", // Ensure assets are correctly referenced relative to root
    sourcemap: false,
  },
});
