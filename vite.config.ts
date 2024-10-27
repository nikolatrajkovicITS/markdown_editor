import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import { resolve } from "path";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/"),
    },
  },

  plugins: [
    react(),
    sentryVitePlugin({
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
      project: process.env.VITE_SENTRY_PROJECT_SLUG,
      telemetry: false,
      org: "na-73g",
    }),
  ],

  optimizeDeps: {
    include: ["msw"],
  },

  build: {
    sourcemap: true,
  },
});