import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import { qrcode } from "vite-plugin-qrcode";

// Helper function to create aliases

export default defineConfig({
  plugins: [react(), tailwindcss(), qrcode()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },

  /* Production optimizations */
  build: {
    target: "es2022",
    minify: "esbuild",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
  },

  /* Development optimizations */
  preview: {
    port: 4173,
    strictPort: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    host: "0.0.0.0",
    open: true,
  },
});
